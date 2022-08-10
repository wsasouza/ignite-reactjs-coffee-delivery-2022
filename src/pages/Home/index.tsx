import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import {
  BannerImage,
  BannerText,
  CoffeeContainer,
  IntroContainer,
  QualityItemWrapper,
} from './styles'

import banner from '../../assets/img/banner.png'
import { QualityItem } from './components/QualityItem'

export function Home() {
  return (
    <>
      <IntroContainer>
        <BannerText>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <QualityItemWrapper>
            <div>
              <QualityItem
                icon={<ShoppingCart size={16} weight="fill" />}
                color="#c47f17"
                text="Compra simples e segura"
              />
              <QualityItem
                icon={<Timer size={16} weight="fill" />}
                color="#dbac2c"
                text="Entrega rápida e rastreada"
              />
            </div>
            <div>
              <QualityItem
                icon={<Package size={16} weight="fill" />}
                color="#574f4d"
                text="Embalagem mantém o café intacto"
              />
              <QualityItem
                icon={<Coffee size={16} weight="fill" />}
                color="#8047f8"
                text="O café chega fresquinho até você"
              />
            </div>
          </QualityItemWrapper>
        </BannerText>
        <BannerImage>
          <img src={banner} alt="banner" />
        </BannerImage>
      </IntroContainer>
      <CoffeeContainer>
        <h1>Coffee List</h1>
      </CoffeeContainer>
    </>
  )
}
