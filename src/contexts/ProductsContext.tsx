import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'

import { api } from '../lib/axios'

interface Product {
  id: string
  image: string
  tags: string[]
  title: string
  subtitle: string
  price: number
}

interface ProductContextType {
  products: Product[]
}

interface ProductProviderProps {
  children: ReactNode
}

export const ProductsContext = createContext({} as ProductContextType)

export function ProductsProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<Product[]>([])

  const fetchProducts = useCallback(async () => {
    const response = await api.get('products')

    setProducts(response.data)
  }, [])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )
}
