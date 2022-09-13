import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'

import { api } from '../lib/axios'

export interface Product {
  id: number
  image: string
  tags: string[]
  title: string
  subtitle: string
  price: number
  amount: number
}

interface AddOrUpdateProductAmount {
  productId: number
  amount: number
}
interface ProductContextType {
  products: Product[]
  cart: Product[]
  addProduct: ({ productId, amount }: AddOrUpdateProductAmount) => Promise<void>
  removeProduct: (productId: number) => void
  updateProductAmount: ({ productId, amount }: AddOrUpdateProductAmount) => void
}

interface ProductProviderProps {
  children: ReactNode
}

export const ProductsContext = createContext({} as ProductContextType)

export function ProductsProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem('@CoffeeDelivery:cart')

    if (storagedCart) {
      return JSON.parse(storagedCart)
    }

    return []
  })

  const fetchProducts = useCallback(async () => {
    const response = await api.get('products')

    setProducts(response.data)
  }, [])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  console.log(cart)

  const addProduct = async ({
    productId,
    amount,
  }: AddOrUpdateProductAmount) => {
    try {
      const updatedCart = [...cart]
      const productExists = updatedCart.find(
        (product) => product.id === productId,
      )

      const stock = await api.get(`/stock/${productId}`)

      const stockAmount = stock.data.amount
      const currentAmount = productExists ? productExists.amount : 0
      const amountCart = currentAmount + amount

      if (amountCart > stockAmount) {
        alert('Não temos disponibilidade desse item no momento.')
        return
      }

      if (productExists) {
        productExists.amount = amountCart
      } else {
        const product = await api.get(`/products/${productId}`)

        const newProduct = {
          ...product.data,
          amount: amountCart,
        }

        updatedCart.push(newProduct)
      }

      setCart(updatedCart)
      localStorage.setItem('@CoffeeDelivery:cart', JSON.stringify(updatedCart))
    } catch (err) {
      alert('Erro ao adicionar produto no carrinho')
      console.log(err)
    }
  }

  const removeProduct = (productId: number) => {
    try {
      const updatedCart = [...cart]
      const productIndex = updatedCart.findIndex(
        (product) => product.id === productId,
      )

      if (productIndex >= 0) {
        updatedCart.splice(productIndex, 1)
        setCart(updatedCart)
        localStorage.setItem(
          '@CoffeeDelivery:cart',
          JSON.stringify(updatedCart),
        )
      } else {
        throw Error()
      }
    } catch (err) {
      alert('Erro ao remover o produto do carrinho')
      console.log(err)
    }
  }

  const updateProductAmount = async ({
    productId,
    amount,
  }: AddOrUpdateProductAmount) => {
    try {
      if (amount <= 0) {
        return
      }

      const stock = await api.get(`/stock/${productId}`)
      const stockAmount = stock.data.amount

      if (amount > stockAmount) {
        alert('Quantidade máxima atingida!')
        return
      }

      const updatedCart = [...cart]
      const productExists = updatedCart.find(
        (product) => product.id === productId,
      )

      if (productExists) {
        productExists.amount = amount
        setCart(updatedCart)
        localStorage.setItem(
          '@CoffeeDelivery:cart',
          JSON.stringify(updatedCart),
        )
      } else {
        throw Error()
      }
    } catch (err) {
      alert('Erro ao atualizar produto no carrinho')
      console.log(err)
    }
  }

  return (
    <ProductsContext.Provider
      value={{ products, cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
