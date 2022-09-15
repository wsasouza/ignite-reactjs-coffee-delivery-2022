import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const DeliveryClientContainer = styled.div`
  display: flex;
  max-width: 40rem;
  flex-direction: column;
  gap: 0.75rem;
`

export const AddressContainer = styled.div`
  margin-top: 1rem;
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  display: flex;
  flex-direction: column;

  h2 {
    display: flex;
    font-size: 1rem;
    align-items: center;
    gap: 0.5rem;
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

  @media (max-width: 580px) {
    padding: 1.5rem;
    border-radius: 6px 36px 6px 6px;

    span {
      display: flex;
      align-items: center;
    }
  }

  @media (max-width: 495px) {
    padding: 1.5rem 0.75rem;
  }
`
export const AddressData = styled.div`
  display: grid;
  grid-template-columns: 200px auto 60px;
  grid-template-rows: auto;
  gap: 0.75rem;
  margin-top: 2rem;

  .cep {
    grid-column: 1/2;
    grid-row: 1;
  }

  .search {
    grid-column: 2/3;
    grid-row: 1;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme.purple};
    cursor: pointer;

    &:not(:disabled):hover {
      background: ${(props) => props.theme['base-hover']};
      transition: 0.5s;
    }

    &:focus {
      box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  .street {
    grid-column: 1/-1;
    grid-row: 2;
  }

  .number {
    grid-column: 1/2;
    grid-row: 3;
  }

  .complement {
    grid-column: 2/-1;
    grid-row: 3;
  }

  .district {
    grid-column: 1/2;
    grid-row: 4;
  }

  .city {
    grid-column: 2/3;
    grid-row: 4;
  }

  .state {
    grid-column: 3;
    grid-row: 4;
  }

  @media (max-width: 580px) {
    .district {
      grid-column: 1/-1;
      grid-row: 4;
    }

    .city {
      grid-column: 1/3;
      grid-row: 5;
    }

    .state {
      grid-column: 3;
      grid-row: 5;
    }
  }

  @media (max-width: 495px) {
    grid-template-columns: auto auto 45px;

    .number {
      grid-column: 1/-1;
      grid-row: 3;
    }

    .complement {
      grid-column: 1/-1;
      grid-row: 4;
    }

    .district {
      grid-column: 1/-1;
      grid-row: 5;
    }

    .city {
      grid-column: 1/3;
      grid-row: 6;
    }

    .state {
      grid-column: 3;
      grid-row: 6;
    }
  }
`

export const Input = styled.input`
  height: 2.625rem;
  padding: 0.75rem;
  font-size: 0.875rem;
  border: none;
  border-radius: 4px;
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
  }
`

export const PaymentMethodContainer = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 6px 6px 36px;

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

  @media (max-width: 495px) {
    padding: 1.5rem 0.75rem;
  }
`

export const PaymentMethodType = styled(RadioGroup.Root)`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
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
    border: 1px solid ${(props) => props.theme.purple};
  }

  &:focus {
    box-shadow: 0 0 0 1px ${(props) => props.theme.purple};
  }

  @media (max-width: 495px) {
    width: 100%;
  }
`
