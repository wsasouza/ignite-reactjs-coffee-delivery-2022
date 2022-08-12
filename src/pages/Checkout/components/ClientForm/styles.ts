import styled from 'styled-components'

export const ClientFormContainer = styled.div`
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
    margin-top: 2rem;

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

  input {
    height: 2.625rem;
    padding: 0.75rem;
    font-size: 0.875rem;
    border: none;
    border-radius: 4px;
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
  }

  input::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  @media (max-width: 800px) {
    form {
      #cep {
        grid-column: 1;
      }

      #street {
        grid-column: 1/-1;
      }

      #complement {
        grid-column-end: span 2;
      }

      #district {
        grid-column: 1/-1;
      }

      #city {
        grid-column: 1/3;
      }
    }
  }

  @media (max-width: 580px) {
    padding: 1.5rem;

    span {
      display: flex;
      align-items: center;
    }

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

      #district {
        grid-column: 1;
      }

      #city {
        grid-column: 1;
      }
    }
  }
`
