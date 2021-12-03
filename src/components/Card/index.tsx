import Image from 'next/image'
import { ReactElement } from 'react'
import { ProductCard } from './style'

interface CardProps {
  image: any
  title: string
  subtitle: string
  actions?: ReactElement
}

const Card = ({ image, title, subtitle, actions }: CardProps) => {
  return (
    <ProductCard>
      <Image src={image} alt='Produto' width={300} height={200} />
      <div className='product-details'>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      {actions ? <div className='button-container'>{actions}</div> : null}
    </ProductCard>
  )
}

export default Card
