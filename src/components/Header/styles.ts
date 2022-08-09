import styled from 'styled-components'

export const HeaderContainer = styled.header`
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
  }
`
export const GroupCart = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const Locale = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.875rem;
  height: 2.3rem;
  padding: 0.5rem;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme.purple};
  border: none;
  border-radius: 6px;
`

export const Cart = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  border-radius: 6px;
  padding: 0.5rem;
`
