import { Tag } from '../Tag'
import { ProductCardContainer, TagWrapper } from './styles'

interface ProductCardProps {
  image: string
  tags: string[]
  title: string
  subtitle: string
  price: number
}

export function ProductCard(product: ProductCardProps) {
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
      <span>R${product.price}</span>
    </ProductCardContainer>
  )
}
