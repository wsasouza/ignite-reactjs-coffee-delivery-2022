import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  margin: 7rem auto 2rem auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 40rem 28rem;
  gap: 2rem;
  max-width: 70rem;
  justify-content: center;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-title']};
  }
`

export const ClientGroup = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const CartGroup = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
