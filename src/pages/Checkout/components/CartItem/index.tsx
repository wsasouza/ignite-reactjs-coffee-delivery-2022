import { Minus, Plus, Trash } from 'phosphor-react'

import {
  CartItemContainer,
  Price,
  ProductItemAction,
  ProductItemContainer,
  ProductItemWrapper,
  QuantityItemAction,
} from './styles'

interface UpdateProduct {
  id: number
  amount: number
}

interface CartItemProps {
  id: number
  image: string
  title: string
  price: string
  amount: number
  increment: (product: UpdateProduct) => void
  decrement: (product: UpdateProduct) => void
  remove: (id: number) => void
}

export function CartItem(data: CartItemProps) {
  const product = {
    id: data.id,
    amount: data.amount,
  }

  return (
    <CartItemContainer>
      <ProductItemContainer>
        <img
          src={data.image}
          alt={`Imagem do café ${data.title}`}
          width={64}
          height={64}
        />
        <ProductItemWrapper>
          <span>{data.title}</span>
          <ProductItemAction>
            <QuantityItemAction>
              <button
                type="button"
                onClick={() => data.decrement(product)}
                disabled={data.amount <= 1}
              >
                <Minus size={14} />
              </button>
              <span>{data.amount}</span>
              <button type="button" onClick={() => data.increment(product)}>
                <Plus size={14} />
              </button>
            </QuantityItemAction>
            <button type="button" onClick={() => data.remove(data.id)}>
              <Trash size={16} />
              Remover
            </button>
          </ProductItemAction>
        </ProductItemWrapper>
      </ProductItemContainer>
      <Price>{data.price}</Price>
    </CartItemContainer>
  )
}
