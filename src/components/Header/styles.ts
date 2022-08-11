import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header<{ scroll: boolean }>`
  position: fixed;
  width: 100vw;
  z-index: 2;
  transition: 0.5s;

  ${(props) => props.scroll && scrollStyle};

  nav {
    display: flex;
    align-items: center;
    padding: 2rem 1rem;
    display: flex;
    max-width: 70rem;
    margin: 0 auto;
    justify-content: space-between;
  }
`
const scrollStyle = css`
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`

export const GroupCart = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const Locale = styled.span`
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

export const Cart = styled.span`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  border-radius: 6px;
  padding: 0.5rem;
`
