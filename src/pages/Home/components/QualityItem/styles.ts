import styled from 'styled-components'

export const QualityItemContainer = styled.div`
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${(props) => props.theme['base-text']};

  @media (max-width: 800px) {
    margin-bottom: 0.5rem;
  }
`

export const Circle = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  background: ${(props) => props.color};
  padding: 8px;
  border-radius: 50%;
  color: ${(props) => props.theme.white};
`
