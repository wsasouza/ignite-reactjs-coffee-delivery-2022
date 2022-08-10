import { TagContainer } from './styles'

interface TagProps {
  tag: string
}

export function Tag({ tag }: TagProps) {
  return (
    <TagContainer>
      <span>{tag}</span>
    </TagContainer>
  )
}
