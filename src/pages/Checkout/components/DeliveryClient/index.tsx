import { useEffect, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import axios from 'axios'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MagnifyingGlass,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { maskCEP } from '../../../../utils/masks'

import {
  AddressContainer,
  AddressData,
  DeliveryClientContainer,
  Input,
  PaymentMethodButton,
  PaymentMethodContainer,
  PaymentMethodType,
} from './styles'

interface FetchAddress {
  street?: string
  complement?: string
  district?: string
  city?: string
  state?: string
}

export function DeliveryClient() {
  const [fetchAddress, setFetchAddress] = useState<FetchAddress>({})

  const { control, register, watch, setValue } = useFormContext()

  const cep = watch('cep')

  useEffect(() => {
    setValue('cep', maskCEP(cep))
  }, [cep, setValue])

  useEffect(() => {
    setValue('street', fetchAddress.street || '')
    setValue('complement', fetchAddress.complement || '')
    setValue('district', fetchAddress.district || '')
    setValue('city', fetchAddress.city || '')
    setValue('state', fetchAddress.state || '')
  }, [fetchAddress, setValue])

  async function handleSearchCep(cep: string) {
    if (cep.length === 9) {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`)

      setFetchAddress({
        street: response.data.logradouro,
        complement: response.data.complemento,
        district: response.data.bairro,
        city: response.data.localidade,
        state: response.data.uf,
      })
    }
  }

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
          <Input
            type="text"
            placeholder="CEP"
            className="cep"
            {...register('cep', { required: true })}
          />

          <button
            className="search"
            onClick={() => handleSearchCep(cep)}
            disabled={!cep}
          >
            <MagnifyingGlass size={20} />
          </button>

          <Input
            type="text"
            placeholder="Rua"
            className="street"
            {...register('street', { required: true })}
          />

          <Input
            type="text"
            placeholder="Número"
            className="number"
            {...register('number', { required: true })}
          />

          <Input
            type="text"
            placeholder="Complemento"
            className="complement"
            {...register('complement')}
          />

          <Input
            type="text"
            placeholder="Bairro"
            className="district"
            {...register('district', { required: true })}
          />

          <Input
            type="text"
            placeholder="Cidade"
            className="city"
            {...register('city', { required: true })}
          />

          <Input
            type="text"
            placeholder="UF"
            className="state"
            {...register('state', { required: true })}
          />
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

        <Controller
          control={control}
          name="paymentMethod"
          render={({ field }) => {
            return (
              <PaymentMethodType
                onValueChange={field.onChange}
                value={field.value}
              >
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
            )
          }}
        />
      </PaymentMethodContainer>
    </DeliveryClientContainer>
  )
}
