import { DeliveryAddress } from './components/DeliveryAddress'
import { PaymentMethod } from './components/PaymentMethod'
import { CheckoutContainer, ClientGroup } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <ClientGroup>
        <h1>Complete seu pedido</h1>
        <form>
          <DeliveryAddress />
          <PaymentMethod />
        </form>
      </ClientGroup>
    </CheckoutContainer>
  )
}
