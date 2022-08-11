import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { Tag } from '../Tag'
import { PriceActionWrapper, ProductCardContainer, TagWrapper } from './styles'

interface ProductCardProps {
  image: string
  tags: string[]
  title: string
  subtitle: string
  price: number
}

export function ProductCard(product: ProductCardProps) {
  const priceFormatted = product.price
    .toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
    .trim()
    .replace('R$', '')

  return (
    <ProductCardContainer>
      <img src={product.image} alt={product.title} />
      <TagWrapper>
        {product.tags.map((tag) => {
          return <Tag key={tag} tag={tag} />
        })}
      </TagWrapper>
      <h3>{product.title}</h3>
      <p>{product.subtitle}</p>
      <PriceActionWrapper>
        <span>R$</span>
        <span>{priceFormatted}</span>
        <button>
          <Minus size={14} />
        </button>
        <span>1</span>
        <button>
          <Plus size={14} />
        </button>
        <button>
          <ShoppingCartSimple size={22} weight="fill" />
        </button>
      </PriceActionWrapper>
    </ProductCardContainer>
  )
}
