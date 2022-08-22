import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  height: 200vh;
  width: 100%;
  margin-top: 7rem;
  padding: 0 1rem;
`

export const ClientGroup = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-title']};
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`
