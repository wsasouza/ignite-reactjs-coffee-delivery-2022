import styled from 'styled-components'

export const CartContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['base-card']};
  padding: 2rem 2.5rem 2.5rem 2.5rem;
  border-radius: 6px 44px 6px 6px;

  & > button {
    margin-top: 1.5rem;
    border-radius: 6px;
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    text-transform: uppercase;
    font-weight: bold;
    height: 2.875rem;

    &:hover {
      background: ${(props) => props.theme['yellow-dark']};
      transition: 0.5s;
    }
  }

  @media (max-width: 600px) {
    padding: 2rem 1rem;
    border-radius: 6px 44px 6px 44px;

    & > button {
      margin-right: 1rem;
      margin-left: 1rem;
    }
  }

  @media (max-width: 440px) {
    padding: 2rem 0.25rem 3rem 0.25rem;
  }
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ResumeCart = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  justify-content: space-between;

  .label {
    font-size: 0.875rem;
  }

  .deliveryTax,
  .price {
    display: flex;
    justify-content: flex-end;
  }

  .total {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
  }

  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`
