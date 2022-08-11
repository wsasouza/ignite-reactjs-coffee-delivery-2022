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

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-title']};
  }
`
export const ClientForm = styled.div`
  margin-top: 1rem;
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

  form {
    display: grid;
    grid-template-columns: 12.5rem auto 3.75rem;
    gap: 0.75rem;

    #cep {
      grid-column: 1;
    }

    #street {
      grid-column: 1/-1;
    }

    #complement {
      grid-column: 2/-1;
    }
  }

  @media (max-width: 800px) {
    form {
      grid-template-columns: 1fr;

      #cep {
        grid-column: 1;
      }

      #street {
        grid-column: 1;
      }

      #complement {
        grid-column: 1;
      }
    }
  }
`
