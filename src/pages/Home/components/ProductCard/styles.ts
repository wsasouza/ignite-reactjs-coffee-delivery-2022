import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 16rem;
  height: 19.375rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

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
`
export const TagWrapper = styled.div`
  margin-top: 0.75rem;
  display: flex;
  gap: 4px;
`
