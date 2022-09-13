import { useState } from 'react'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { Tag } from '../Tag'
import { PriceActionWrapper, ProductCardContainer, TagWrapper } from './styles'
import { ProductsContext } from '../../../../contexts/ProductsContext'
import { useContextSelector } from 'use-context-selector'

interface ProductCardProps {
  id: number
  image: string
  tags: string[]
  title: string
  subtitle: string
  price: number
}

export function ProductCard(product: ProductCardProps) {
  const [quantity, setQuantity] = useState(1)
  const quantityMin = quantity === 1

  const addToCart = useContextSelector(ProductsContext, (context) => {
    return context.addProduct
  })

  function handleAddToCart(product: ProductCardProps) {
    addToCart({
      productId: product.id,
      amount: quantity,
    })
    setQuantity(1)
  }

  function handleQuantityIncrement() {
    let currentQuantity = quantity

    if (currentQuantity < 99) {
      currentQuantity += 1
      setQuantity(currentQuantity)
    }
  }

  function handleQuantityDecrement() {
    let currentQuantity = quantity

    if (currentQuantity > 1) {
      currentQuantity -= 1
      setQuantity(currentQuantity)
    }
  }

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
        <button disabled={quantityMin} onClick={handleQuantityDecrement}>
          <Minus size={14} />
        </button>
        <span>{quantity}</span>
        <button onClick={handleQuantityIncrement}>
          <Plus size={14} />
        </button>
        <button onClick={() => handleAddToCart(product)}>
          <ShoppingCartSimple size={22} weight="fill" />
        </button>
      </PriceActionWrapper>
    </ProductCardContainer>
  )
}
