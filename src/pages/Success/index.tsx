import { CurrencyDollar, IconContext, MapPin, Timer } from 'phosphor-react'
import { DeliveryItem } from './components/DeliveryItem'
import deliveryImg from '../../assets/img/Illustration.svg'
import { DataDelivery, DataRequest, SuccessContainer } from './styles'

export function Success() {
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
              text1={`Entrega em ${'Rua Dr. Francisco Maníglia'}, ${2265}`}
              text2={`${'Jardim Petraglia'} - ${'Franca'}, ${'SP'}`}
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
              text2="Cartão de Crédito"
            />
          </IconContext.Provider>
        </DataRequest>
      </DataDelivery>
      <img src={deliveryImg} alt="" />
    </SuccessContainer>
  )
}
