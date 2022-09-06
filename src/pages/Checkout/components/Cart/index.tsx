import { CartItem } from '../CartItem'
import { CartContainer, ItemsContainer, ResumeCart } from './styles'

export function Cart() {
  return (
    <CartContainer>
      <ItemsContainer>
        <CartItem
          image="https://i.ibb.co/tbJj98t/coffee01.png"
          title="Expresso Tradicional"
          price={4.9}
        />
        <hr />
        <CartItem
          image="https://i.ibb.co/RHSJqtN/coffee05.png"
          title="Café com Leite"
          price={5.9}
        />
      </ItemsContainer>
      <ResumeCart>
        <span className="label">Total de itens</span>
        <span className="price">R$ 29,70</span>
        <span className="label">Entrega</span>
        <span className="price">R$ 5,00</span>
        <span className="total">Total</span>
        <span className="price total">R$ 34,70</span>
      </ResumeCart>
      <button>Confirmar Pedido</button>
    </CartContainer>
  )
}
