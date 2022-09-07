import { Cart } from './components/Cart'
import { DeliveryClient } from './components/DeliveryClient'
// import { PaymentMethod } from './components/PaymentMethod'
import { CartGroup, CheckoutContainer, ClientGroup } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <ClientGroup>
        <h1>Complete seu pedido</h1>
        <DeliveryClient />
        {/* <PaymentMethod /> */}
      </ClientGroup>
      <CartGroup>
        <h1>Cafés selecionados</h1>
        <Cart />
      </CartGroup>
    </CheckoutContainer>
  )
}
