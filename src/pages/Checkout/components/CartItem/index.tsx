import { Minus, Plus, Trash } from 'phosphor-react'
import { priceFormatter } from '../../../../utils/formatter'
import {
  CartItemContainer,
  Price,
  ProductItemAction,
  ProductItemContainer,
  ProductItemWrapper,
  QuantityItemAction,
} from './styles'

interface CartItemProps {
  image: string
  title: string
  price: number
}

export function CartItem(data: CartItemProps) {
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
              <button>
                <Minus size={14} />
              </button>
              <span>99</span>
              <button>
                <Plus size={14} />
              </button>
            </QuantityItemAction>
            <button>
              <Trash size={16} />
              Remover
            </button>
          </ProductItemAction>
        </ProductItemWrapper>
      </ProductItemContainer>
      <Price>{priceFormatter.format(data.price)}</Price>
    </CartItemContainer>
  )
}
