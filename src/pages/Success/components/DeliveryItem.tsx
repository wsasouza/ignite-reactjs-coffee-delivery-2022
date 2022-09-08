import { ReactNode } from 'react'
import { Circle, DeliveryItemContainer } from './styles'

export interface DeliveryItemProps {
  icon: ReactNode
  color: string
  text1: string
  text2: string
}

export function DeliveryItem({ icon, color, text1, text2 }: DeliveryItemProps) {
  return (
    <DeliveryItemContainer>
      <Circle color={color}>{icon}</Circle>
      <div>
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </DeliveryItemContainer>
  )
}
