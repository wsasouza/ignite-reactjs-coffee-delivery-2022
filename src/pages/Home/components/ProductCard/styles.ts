import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 16rem;
  height: 19.375rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  transition: 0.5s;

  img {
    margin-top: -1.25rem;
  }

  h3 {
    margin-top: 1rem;
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    text-align: center;
    line-height: 1.3;
    padding: 0 1.25rem;
    color: ${(props) => props.theme['base-label']};
  }

  &:hover {
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  }
`
export const TagWrapper = styled.div`
  margin-top: 0.75rem;
  display: flex;
  gap: 4px;
`
export const PriceActionWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;

  span {
    color: ${(props) => props.theme['base-text']};
  }

  span:first-child {
    font-size: 0.875rem;
  }

  span:nth-child(2) {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    margin-right: 1.5rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    width: 1.5rem;
    height: 2.375rem;
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme.purple};
    cursor: pointer;

    &:not(:disabled):hover {
      color: ${(props) => props.theme['purple-dark']};
      background: ${(props) => props.theme['base-hover']};
    }
  }

  button:nth-child(3) {
    border-radius: 6px 0 0 6px;
    z-index: 1;

    &:disabled {
      cursor: not-allowed;
    }
  }

  span:nth-child(4) {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme['base-button']};
    width: 1.5rem;
    height: 2.375rem;
    color: ${(props) => props.theme['base-title']};
  }

  button:nth-child(5) {
    border-radius: 0 6px 6px 0;
    margin-right: 8px;
  }

  button:nth-child(6) {
    width: 2.375rem;
    border-radius: 6px;
    color: ${(props) => props.theme['base-card']};
    background: ${(props) => props.theme['purple-dark']};
    transition-duration: 0.3s;

    &:hover {
      color: ${(props) => props.theme['base-card']};
      background: ${(props) => props.theme.purple};
    }
  }
`
