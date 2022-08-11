import banner from '../../assets/img/banner.png'
import { IconContext } from 'phosphor-react'
import { QualityItem } from './components/QualityItem'
import { ProductCard } from './components/ProductCard'
import { qualities, products } from '../../services/data'
import {
  BannerImage,
  BannerText,
  CoffeeContainer,
  IntroContainer,
  HomeContainer,
  ProductsContainer,
  QualityItemWrapper,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <BannerText>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <QualityItemWrapper>
            <IconContext.Provider
              value={{
                size: 16,
                weight: 'fill',
              }}
            >
              {qualities.map((quality) => {
                return (
                  <QualityItem
                    key={quality.id}
                    icon={<quality.icon />}
                    color={quality.color}
                    text={quality.text}
                  />
                )
              })}
            </IconContext.Provider>
          </QualityItemWrapper>
        </BannerText>
        <BannerImage>
          <img src={banner} alt="banner" />
        </BannerImage>
      </IntroContainer>
      <CoffeeContainer>
        <h2>Nossos cafés</h2>
        <ProductsContainer>
          {products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                image={product.image}
                tags={product.tags}
                title={product.title}
                subtitle={product.subtitle}
                price={product.price}
              />
            )
          })}
        </ProductsContainer>
      </CoffeeContainer>
    </HomeContainer>
  )
}
