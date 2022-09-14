import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
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
import axios from 'axios'
import { maskCEP } from '../../../../utils/masks'
import { useEffect, useState } from 'react'

interface FetchAddress {
  street?: string
  complement?: string
  district?: string
  city?: string
  state?: string
}

const deliveryClientFormSchema = z.object({
  cep: z.string().min(9),
  street: z.string().min(3),
  number: z.string().min(1),
  complement: z.string(),
  district: z.string().min(1),
  city: z.string().min(3),
  state: z.string().min(2),
  paymentMethod: z.enum(['credit', 'debit', 'money']),
})

type DeliveryClientFormInputs = z.infer<typeof deliveryClientFormSchema>

export function DeliveryClient() {
  const [fetchAddress, setFetchAddress] = useState<FetchAddress>({})

  const {
    control,
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm<DeliveryClientFormInputs>({
    resolver: zodResolver(deliveryClientFormSchema),
  })

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
      console.log(response)

      setFetchAddress({
        street: response.data.logradouro,
        complement: response.data.complemento,
        district: response.data.bairro,
        city: response.data.localidade,
        state: response.data.uf,
      })
    }
  }

  async function handleCreateNewOrder(data: DeliveryClientFormInputs) {
    const {
      cep,
      street,
      number,
      complement,
      district,
      city,
      state,
      paymentMethod,
    } = data
    console.log({
      cep,
      street,
      number,
      complement,
      district,
      city,
      state,
      paymentMethod,
    })

    reset()
  }

  return (
    <DeliveryClientContainer onSubmit={handleSubmit(handleCreateNewOrder)}>
      <AddressContainer>
        <div>
          <h2>
            <MapPinLine size={22} color="#c47f17" /> Endereço de Entrega
          </h2>
          <span>Informe o endereço onde deseja receber o seu pedido</span>
        </div>
        <AddressData>
          <input
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

          <input
            type="text"
            placeholder="Rua"
            className="street"
            {...register('street', { required: true })}
          />

          <input
            type="text"
            placeholder="Número"
            className="number"
            {...register('number', { required: true })}
          />

          <input
            type="text"
            placeholder="Complemento"
            className="complement"
            {...register('complement')}
          />

          <input
            type="text"
            placeholder="Bairro"
            className="district"
            {...register('district', { required: true })}
          />

          <input
            type="text"
            placeholder="Cidade"
            className="city"
            {...register('city', { required: true })}
          />

          <input
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
