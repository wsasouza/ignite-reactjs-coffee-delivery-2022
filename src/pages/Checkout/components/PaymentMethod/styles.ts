import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const PaymentMethodContainer = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  max-width: 40rem;

  h2 {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    margin-left: 1.875rem;
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};
  }
`

export const PaymentMethodType = styled(RadioGroup.Root)`
  margin-top: 2rem;
  display: flex;
  gap: 0.75rem;
`

export const PaymentMethodButton = styled(RadioGroup.Item)`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  gap: 0.75rem;
  padding: 1rem;
  font-size: 0.75rem;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  border-radius: 6px;
  border: 0;
  min-width: 11.125rem;
  transition: 0.5s;
  cursor: pointer;

  &[data-state='unchecked']:hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
  }

  &[data-state='checked'] {
    background: ${(props) => props.theme['purple-light']};
    border: 2px solid ${(props) => props.theme.purple};
  }
`
