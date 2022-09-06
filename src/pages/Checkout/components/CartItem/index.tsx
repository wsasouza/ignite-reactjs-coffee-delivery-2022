import { Minus, Plus, Trash } from 'phosphor-react'
import {
  CartItemContainer,
  Price,
  ProductItemAction,
  ProductItemContainer,
  ProductItemWrapper,
  QuantityItemAction,
} from './styles'

export function CartItem() {
  return (
    <CartItemContainer>
      <ProductItemContainer>
        <img
          src="https://i.ibb.co/tbJj98t/coffee01.png"
          alt="coffee01"
          width={64}
          height={64}
        />
        <ProductItemWrapper>
          <span>Expresso Tradicional</span>
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
      <Price>R$ 9,90</Price>
    </CartItemContainer>
  )
}
