import { Cart } from './components/Cart'
import { DeliveryAddress } from './components/DeliveryAddress'
import { PaymentMethod } from './components/PaymentMethod'
import { CartGroup, CheckoutContainer, ClientGroup } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <form>
        <ClientGroup>
          <h1>Complete seu pedido</h1>
          <DeliveryAddress />
          <PaymentMethod />
        </ClientGroup>
        <CartGroup>
          <h1>Cafés selecionados</h1>
          <Cart />
        </CartGroup>
      </form>
    </CheckoutContainer>
  )
}
