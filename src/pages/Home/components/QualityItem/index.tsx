import { ReactNode } from 'react'
import { Circle, QualityItemContainer } from './styles'

export interface QualityItemProps {
  icon: ReactNode
  color: string
  text: string
}

export function QualityItem({ icon, color, text }: QualityItemProps) {
  return (
    <QualityItemContainer>
      <Circle color={color}>{icon}</Circle>
      <span>{text}</span>
    </QualityItemContainer>
  )
}
