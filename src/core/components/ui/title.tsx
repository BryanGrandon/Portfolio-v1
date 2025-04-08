import { JSX } from 'react'

type Title = { text: string; className?: string }

const Title = ({ text, className = '' }: Title): JSX.Element => {
  return <h2 className={`title ${className}`}>{text}</h2>
}

export default Title
