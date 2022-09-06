import styled from 'styled-components'

export const CartItemContainer = styled.div`
  display: flex;
  background: ${(props) => props.theme['base-card']};
  padding: 0.5rem 0.25rem;
  gap: 3.125rem;
`

export const Price = styled.span`
  color: ${(props) => props.theme['base-text']};
  font-weight: bold;
`

export const ProductItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`

export const ProductItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > span {
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const ProductItemAction = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > button {
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-text']};
    border: 0;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    text-transform: uppercase;
    height: 2rem;
    font-size: 0.75rem;
    padding: 6.5px 8px;
    border-radius: 6px;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme.purple};
    }

    &:hover {
      background: ${(props) => props.theme['base-hover']};
      color: ${(props) => props.theme['base-subtitle']};
      transition: 0.5s;

      svg {
        color: ${(props) => props.theme['purple-dark']};
      }
    }
  }
`

export const QuantityItemAction = styled.div`
  display: flex;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    width: 1.5rem;
    height: 2rem;
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme.purple};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  button:first-child {
    border-radius: 6px 0 0 6px;
    z-index: 1;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme['base-button']};
    width: 1.5rem;
    height: 2rem;
    color: ${(props) => props.theme['base-title']};
  }

  button:last-child {
    border-radius: 0 6px 6px 0;
  }
`
