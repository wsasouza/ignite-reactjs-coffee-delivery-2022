import { MapPinLine } from 'phosphor-react'
import { AddressContainer, AddressData } from './styles'

export function DeliveryAddress() {
  return (
    <AddressContainer>
      <div>
        <h2>
          <MapPinLine size={22} color="#c47f17" /> Endereço de Entrega
        </h2>
        <span>Informe o endereço onde deseja receber o seu pedido</span>
      </div>
      <AddressData>
        <input type="text" id="cep" placeholder="CEP" />

        <input type="text" id="street" placeholder="Rua" />

        <input type="text" id="number" placeholder="Número" />

        <input type="text" id="complement" placeholder="Complemento" />

        <input type="text" id="district" placeholder="Bairro" />

        <input type="text" id="city" placeholder="Cidade" />

        <input type="text" id="state" placeholder="UF" />
      </AddressData>
    </AddressContainer>
  )
}
