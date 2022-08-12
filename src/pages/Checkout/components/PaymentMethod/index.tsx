import { CurrencyDollar } from 'phosphor-react'
import { PaymentMethodContainer } from './styles'

export function PaymentMethod() {
  return (
    <PaymentMethodContainer>
      <h2>
        <CurrencyDollar size={22} color="#8047f8" />
        Pagamento
      </h2>
      <span>
        O pagamento é feito na entrega. Escolha a forma que deseja pagar
      </span>
    </PaymentMethodContainer>
  )
}
