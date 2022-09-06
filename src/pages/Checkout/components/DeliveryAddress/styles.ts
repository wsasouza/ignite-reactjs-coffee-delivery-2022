import styled from 'styled-components'

export const AddressContainer = styled.div`
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

  @media (max-width: 580px) {
    padding: 1.5rem;

    span {
      display: flex;
      align-items: center;
    }
  }
`
export const AddressData = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 35% 11% 38% 11%;
  grid-template-rows: repeat(4, auto);
  grid-template-areas:
    'cep search empty empty'
    'street street street street'
    'number complement complement complement'
    'district city city state';
  gap: 0.75rem;
  margin-top: 2rem;

  .cep {
    grid-area: cep;
  }

  .search {
    grid-area: search;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme.purple};
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme['purple-light']};
    }

    &:focus {
      box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
    }
  }

  .street {
    grid-area: street;
  }

  .number {
    grid-area: number;
  }

  .complement {
    grid-area: complement;
  }

  .district {
    grid-area: district;
  }

  .city {
    grid-area: city;
  }

  .state {
    grid-area: state;
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

  @media (max-width: 600px) {
    grid-template-columns: 35% 11% 25% 18%;
    grid-template-rows: repeat(5, auto);
    grid-template-areas:
      'cep cep cep search'
      'street street street street'
      'number complement complement complement'
      'district district district district'
      'city city city state';
  }
`
