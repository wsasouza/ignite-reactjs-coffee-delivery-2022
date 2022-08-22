import styled from 'styled-components'

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

export const PaymentMethodAction = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 0.75rem;

  input {
    opacity: 1;
    position: absolute;
    pointer-events: none;
  }

  label {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    gap: 0.75rem;
    padding: 1rem;
    font-size: 0.75rem;
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-text']};
    border-radius: 6px;
    min-width: 11.125rem;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme['base-hover']};
      color: ${(props) => props.theme['base-subtitle']};
    }

    input:checked + label {
      background: ${(props) => props.theme['purple-dark']};
    }
  }
`
