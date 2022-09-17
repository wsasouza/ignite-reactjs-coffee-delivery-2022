/* eslint-disable array-callback-return */
import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { toast } from 'react-toastify'

import { api } from '../lib/axios'

interface Product {
  id: number
  image: string
  tags: string[]
  title: string
  subtitle: string
  price: number
  amount: number
}

interface DeliveryClient {
  cep: string
  street: string
  number: string
  complement?: string
  district: string
  city: string
  state: string
  paymentMethod: string
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
  confirmedCheckoutOrder: (data: DeliveryClient) => void
}

interface ProductProviderProps {
  children: ReactNode
}

export const ProductsContext = createContext({} as ProductContextType)

const COFFEE_CART_ITEMS = '@CoffeeDelivery:cart'

export function ProductsProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem(COFFEE_CART_ITEMS)

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

  useEffect(() => {
    localStorage.setItem(COFFEE_CART_ITEMS, JSON.stringify(cart))
  }, [cart])

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
        toast.warning('Infelizmente esse item está esgotado no momento')
        return
      }

      if (productExists) {
        productExists.amount = amountCart
        toast.info('Atualizado a quantidade deste item no carrinho')
      } else {
        const product = await api.get(`/products/${productId}`)

        const newProduct = {
          ...product.data,
          amount: amountCart,
        }

        updatedCart.push(newProduct)
        toast.success(`Item ${product.data.title} adicionado ao carrinho`)
      }

      setCart(updatedCart)
    } catch (err) {
      toast.error('Erro ao adicionar o produto no carrinho')
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
        toast.info('Produto removido do carrinho com sucesso')
      } else {
        throw Error()
      }
    } catch (err) {
      toast.error('Erro ao remover o produto do carrinho')
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
      const stockAmount: number = stock.data.amount

      if (amount > stockAmount) {
        toast.warning('Quantidade máxima disponível no momento')
        return
      }

      const updatedCart = [...cart]
      const productExists = updatedCart.find(
        (product) => product.id === productId,
      )

      if (productExists) {
        productExists.amount = amount
        setCart(updatedCart)
      } else {
        throw Error()
      }
    } catch (err) {
      toast.error('Erro ao atualizar produto no carrinho')
      console.log(err)
    }
  }

  const confirmedCheckoutOrder = async (data: DeliveryClient) => {
    try {
      const {
        cep,
        street,
        number,
        complement,
        district,
        city,
        state,
        paymentMethod,
      } = data

      const cartItems = cart

      await api.post('orders', {
        cep,
        street,
        number,
        complement,
        district,
        city,
        state,
        paymentMethod,
        cartItems,
        createdAt: new Date(),
      })

      setCart([])
      toast.success('Pedido realizado com sucesso')
    } catch (err) {
      toast.error('Falha ao processar o pedido')
      console.log(err)
    }
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        cart,
        addProduct,
        removeProduct,
        updateProductAmount,
        confirmedCheckoutOrder,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
