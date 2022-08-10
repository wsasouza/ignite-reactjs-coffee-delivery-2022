import styled from 'styled-components'

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 100px;
  background: ${(props) => props.theme['yellow-light']};

  span {
    font-size: 0.625rem;
    text-transform: uppercase;
    color: ${(props) => props.theme['yellow-dark']};
  }
`
