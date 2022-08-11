import { MapPinLine } from 'phosphor-react'
import { CheckoutContainer, ClientForm, ClientGroup } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <ClientGroup>
        <h1>Complete seu pedido</h1>
        <ClientForm>
          <div>
            <h2>
              <MapPinLine size={22} color="#c47f17" /> Endereço de Entrega
            </h2>
            <span>Informe o endereço onde deseja receber o seu pedido</span>
          </div>
          <form>
            <input type="text" id="cep" placeholder="CEP" />

            <input type="text" id="street" placeholder="Rua" />

            <input type="text" id="number" placeholder="Número" />

            <input type="text" id="complement" placeholder="Complemento" />

            <input type="text" id="district" placeholder="Bairro" />

            <input type="text" id="city" placeholder="Cidade" />

            <input type="text" id="state" placeholder="UF" />
          </form>
        </ClientForm>
      </ClientGroup>
    </CheckoutContainer>
  )
}
