import { useContextSelector } from 'use-context-selector'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import { ProductsContext } from '../../../../contexts/ProductsContext'
import { priceFormatter } from '../../../../utils/formatter'
import { useCart } from '../../../../hooks/useCart'
import { CartItem } from '../CartItem'

import { CartContainer, ItemsContainer, ResumeCart } from './styles'
import { useNavigate } from 'react-router-dom'
import React from 'react'

interface UpdateProduct {
  id: number
  amount: number
}

const DELIVERY_TAX = 10
const DELIVERY_TAX_FREE = 50

export function Cart() {
  const [parent] = useAutoAnimate()

  const { quantityItemsCart } = useCart()
  const navigate = useNavigate()

  if (!quantityItemsCart) {
    navigate('/')
  }

  const cartItems = useContextSelector(ProductsContext, (context) => {
    return context.cart
  })

  const updateProduct = useContextSelector(ProductsContext, (context) => {
    return context.updateProductAmount
  })

  const removeProduct = useContextSelector(ProductsContext, (context) => {
    return context.removeProduct
  })

  const cartFormatted = cartItems.map((product) => ({
    ...product,
    unitPrice: priceFormatter.format(product.price),
    subTotalPerItem: priceFormatter.format(product.price * product.amount),
  }))

  const totalItems = cartItems.reduce((sumTotalItems, product) => {
    return sumTotalItems + product.price * product.amount
  }, 0)

  function deliveryTax() {
    if (totalItems >= DELIVERY_TAX_FREE)
      return { tax: 0, taxFormatted: 'Grátis' }

    return {
      tax: DELIVERY_TAX,
      taxFormatted: priceFormatter.format(DELIVERY_TAX),
    }
  }

  const handleProductIncrement = (product: UpdateProduct) => {
    updateProduct({
      productId: product.id,
      amount: product.amount + 1,
    })
  }

  const handleProductDecrement = (product: UpdateProduct) => {
    updateProduct({
      productId: product.id,
      amount: product.amount - 1,
    })
  }

  const handleRemoveProduct = (productId: number) => {
    removeProduct(productId)
  }

  return (
    <CartContainer>
      <ItemsContainer ref={parent as React.RefObject<HTMLDivElement>}>
        {cartFormatted.map((item) => {
          return (
            <CartItem
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.subTotalPerItem}
              amount={item.amount}
              increment={handleProductIncrement}
              decrement={handleProductDecrement}
              remove={handleRemoveProduct}
            />
          )
        })}
      </ItemsContainer>
      <ResumeCart>
        <span className="label">Total de itens</span>
        <span className="price">{priceFormatter.format(totalItems)}</span>
        <span className="label">Entrega</span>
        <span className="deliveryTax">{deliveryTax().taxFormatted}</span>
        <span className="total">Total</span>
        <span className="price total">
          {priceFormatter.format(totalItems + deliveryTax().tax)}
        </span>
      </ResumeCart>
      <button type="submit">Confirmar Pedido</button>
    </CartContainer>
  )
}
