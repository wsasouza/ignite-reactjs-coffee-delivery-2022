import { ReactNode } from 'react'
import { Circle, DeliveryItemContainer } from './styles'

export interface DeliveryItemProps {
  icon: ReactNode
  color: string
  text1: string
  text2: string
  variant?: boolean
}

export function DeliveryItem({
  icon,
  color,
  text1,
  text2,
  variant,
}: DeliveryItemProps) {
  const text1A = text1.slice(0, 10)
  const text1B = text1.slice(10)

  return (
    <DeliveryItemContainer>
      <Circle color={color}>{icon}</Circle>
      {variant ? (
        <div>
          <p>
            {text1A}
            <strong>{text1B}</strong>
          </p>
          <p>{text2}</p>
        </div>
      ) : (
        <div>
          <p>{text1}</p>
          <p>
            <strong>{text2}</strong>
          </p>
        </div>
      )}
    </DeliveryItemContainer>
  )
}
