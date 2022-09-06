// import { useForm } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup'
// import * as yup from 'yup'
import { MagnifyingGlass, MapPinLine } from 'phosphor-react'
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
        <input type="text" placeholder="CEP" className="cep" />

        <button className="search">
          <MagnifyingGlass size={20} />
        </button>

        <input type="text" className="street" placeholder="Rua" />

        <input type="text" className="number" placeholder="Número" />

        <input type="text" className="complement" placeholder="Complemento" />

        <input type="text" className="district" placeholder="Bairro" />

        <input type="text" className="city" placeholder="Cidade" />

        <input type="text" className="state" placeholder="UF" />
      </AddressData>
    </AddressContainer>
  )
}
