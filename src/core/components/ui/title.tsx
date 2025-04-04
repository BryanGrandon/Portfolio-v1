import { JSX } from 'react'

type Title = { text: string }

const Title = ({ text }: Title): JSX.Element => {
  return <h2 className='title'>{text}</h2>
}

export default Title
