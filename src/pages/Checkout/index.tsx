import { useForm, FormProvider } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { Cart } from './components/Cart'
import { DeliveryClient } from './components/DeliveryClient'
import { CartGroup, CheckoutContainer, ClientGroup } from './styles'
import { useContextSelector } from 'use-context-selector'
import { ProductsContext } from '../../contexts/ProductsContext'

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

export function Checkout() {
  const methods = useForm<DeliveryClientFormInputs>({
    resolver: zodResolver(deliveryClientFormSchema),
  })

  const checkout = useContextSelector(ProductsContext, (context) => {
    return context.confirmedCheckoutOrder
  })

  const handleCreateNewOrder = async (data: DeliveryClientFormInputs) => {
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

    checkout()

    methods.reset()
  }

  return (
    <FormProvider {...methods}>
      <CheckoutContainer onSubmit={methods.handleSubmit(handleCreateNewOrder)}>
        <ClientGroup>
          <h1>Complete seu pedido</h1>
          <DeliveryClient />
        </ClientGroup>
        <CartGroup>
          <h1>Cafés selecionados</h1>
          <Cart />
        </CartGroup>
      </CheckoutContainer>
    </FormProvider>
  )
}
