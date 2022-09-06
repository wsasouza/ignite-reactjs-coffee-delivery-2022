import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  width: 100%;
  margin-top: 7rem;
  padding: 0 1rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-title']};
  }

  form {
    display: grid;
    grid-template-columns: 1fr auto;
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
