import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { PaymentMethodContainer, PaymentMethodAction } from './styles'

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
      <PaymentMethodAction>
        <input type="radio" name="credit" value="credito" id="credit" />
        <label htmlFor="credit">
          <CreditCard size={16} color="#8047f8" />
          Cartão de Crédito
        </label>

        <input type="radio" name="debit" value="debito" id="debit" />
        <label htmlFor="debit">
          <Bank size={16} color="#8047f8" />
          Cartão de Débito
        </label>

        <input type="radio" name="money" value="dinheiro" id="money" />
        <label htmlFor="money">
          <Money size={16} color="#8047f8" />
          Dinheiro
        </label>
      </PaymentMethodAction>
    </PaymentMethodContainer>
  )
}
