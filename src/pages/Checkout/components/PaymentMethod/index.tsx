import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  PaymentMethodButton,
  PaymentMethodContainer,
  PaymentMethodType,
} from './styles'

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
      <PaymentMethodType>
        <PaymentMethodButton value="credit">
          <CreditCard size={16} color="#8047f8" />
          Cartão de Crédito
        </PaymentMethodButton>

        <PaymentMethodButton value="debit">
          <Bank size={16} color="#8047f8" />
          Cartão de Débito
        </PaymentMethodButton>

        <PaymentMethodButton value="money">
          <Money size={16} color="#8047f8" />
          Dinheiro
        </PaymentMethodButton>
      </PaymentMethodType>
    </PaymentMethodContainer>
  )
}
