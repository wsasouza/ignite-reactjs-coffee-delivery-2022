import { ClientForm } from './components/ClientForm'
import { PaymentMethod } from './components/PaymentMethod'
import { CheckoutContainer, ClientGroup } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <ClientGroup>
        <h1>Complete seu pedido</h1>
        <ClientForm />
        <PaymentMethod />
      </ClientGroup>
    </CheckoutContainer>
  )
}
