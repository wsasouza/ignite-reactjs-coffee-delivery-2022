import styled from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`
export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    margin-top: 1rem;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const QualityItemWrapper = styled.div`
  margin-top: 4.125rem;
  display: flex;
  align-items: flex-start;
  gap: 40px;
`
export const BannerImage = styled.div`
  padding: 5.75rem 0;
`

export const CoffeeContainer = styled.div`
  display: flex;
  align-items: center;
`
