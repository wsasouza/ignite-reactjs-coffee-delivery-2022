import { useContextSelector } from 'use-context-selector'
import { ProductsContext } from '../contexts/ProductsContext'

export function useCart() {
  const cartItems = useContextSelector(ProductsContext, (context) => {
    return context.cart
  })

  const quantityItemsCart = cartItems.reduce(
    (sum, cartItem) => sum + cartItem.amount,
    0,
  )

  return { quantityItemsCart }
}
