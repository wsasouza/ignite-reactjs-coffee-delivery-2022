import { IconContext } from 'phosphor-react'
import {
  BannerImage,
  BannerText,
  CoffeeContainer,
  IntroContainer,
  QualityItemWrapper,
} from './styles'
import { qualities } from '../../services/data'

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
            <IconContext.Provider
              value={{
                size: 16,
                weight: 'fill',
              }}
            >
              {qualities.map((quality, index) => {
                return (
                  <QualityItem
                    key={index}
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
      </CoffeeContainer>
    </>
  )
}
