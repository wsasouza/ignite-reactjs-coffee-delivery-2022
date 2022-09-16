import { useLocation } from 'react-router-dom'
import { CurrencyDollar, IconContext, MapPin, Timer } from 'phosphor-react'

import { DeliveryItem } from './components/DeliveryItem'
import deliveryImg from '../../assets/img/Illustration.svg'

import { DataDelivery, DataRequest, SuccessContainer } from './styles'

type DeliverySuccess = {
  street: string
  number: string
  district: string
  city: string
  state: string
  paymentMethod: string
}
interface DeliveryLocale {
  state: DeliverySuccess
}

const payment = [
  { value: 'credit', name: 'Cartão de Crédito' },
  { value: 'debit', name: 'Cartão de Débito' },
  { value: 'money', name: 'Dinheiro' },
]

export function Success() {
  const { state } = useLocation() as DeliveryLocale

  const paymentMethodFormatted = payment.find(
    (type) => type.value === state.paymentMethod,
  )

  return (
    <SuccessContainer>
      <DataDelivery>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <DataRequest>
          <IconContext.Provider
            value={{
              size: 16,
              weight: 'fill',
            }}
          >
            <DeliveryItem
              color="#8047f8"
              icon={<MapPin />}
              text1={`Entrega em ${state.street}, ${state.number}`}
              text2={`${state.district} - ${state.city}, ${state.state}`}
              variant={true}
            />
            <DeliveryItem
              color="#dbac2c"
              icon={<Timer />}
              text1="Previsão de entrega"
              text2="20 min - 30 min"
            />
            <DeliveryItem
              color="#c47f17"
              icon={<CurrencyDollar />}
              text1="Pagamento na entrega"
              text2={`${paymentMethodFormatted?.name}`}
            />
          </IconContext.Provider>
        </DataRequest>
      </DataDelivery>
      <img src={deliveryImg} alt="" />
    </SuccessContainer>
  )
}
