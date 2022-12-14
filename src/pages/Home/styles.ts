import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 70rem;
  margin: 0 auto;
`

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin: 7rem 1rem 1rem 1rem;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    gap: 0;
  }
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

  @media (max-width: 800px) {
    h1 {
      font-size: 2.5rem;
      line-height: 1.1;
    }
  }
`

export const QualityItemWrapper = styled.div`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: repeat(2, 295px);

  @media (max-width: 800px) {
    margin-top: 2.5rem;
    grid-template-columns: 1fr;
  }
`
export const BannerImage = styled.div`
  padding: 5.75rem 0;

  @media (max-width: 800px) {
    padding: 2rem 1rem;

    img {
      width: 100%;
      object-fit: cover;
    }
  }
`

export const CoffeeContainer = styled.div`
  margin: 2rem 1rem;
  display: grid;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 3rem;
  }
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    justify-self: center;
  }
`
