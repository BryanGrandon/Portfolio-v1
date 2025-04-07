import { JSX } from 'react'

type Technology_Img = {
  src: string
  alt: string
  className?: string
}

const TechnologyImg = ({ src, alt, className = '' }: Technology_Img): JSX.Element => {
  return <img src={src} alt={alt} className={`technology ${className}`} />
}

export default TechnologyImg
