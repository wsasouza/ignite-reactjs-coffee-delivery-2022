// import { useForm } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/zod'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MagnifyingGlass,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  AddressContainer,
  AddressData,
  DeliveryClientContainer,
  PaymentMethodButton,
  PaymentMethodContainer,
  PaymentMethodType,
} from './styles'

export function DeliveryClient() {
  return (
    <DeliveryClientContainer>
      <AddressContainer>
        <div>
          <h2>
            <MapPinLine size={22} color="#c47f17" /> Endereço de Entrega
          </h2>
          <span>Informe o endereço onde deseja receber o seu pedido</span>
        </div>
        <AddressData>
          <input type="text" placeholder="CEP" className="cep" />

          <button className="search">
            <MagnifyingGlass size={20} />
          </button>

          <input type="text" placeholder="Rua" className="street" />

          <input type="text" placeholder="Número" className="number" />

          <input type="text" placeholder="Complemento" className="complement" />

          <input type="text" placeholder="Bairro" className="district" />

          <input type="text" placeholder="Cidade" className="city" />

          <input type="text" placeholder="UF" className="state" />
        </AddressData>
      </AddressContainer>
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
    </DeliveryClientContainer>
  )
}
