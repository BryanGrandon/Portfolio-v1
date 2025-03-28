import { JSX } from 'react'
import Title from '../ui/title'

type Main_theme = {
  id?: string
  title: string
  children: JSX.Element
  class_A?: string
}
const MainTheme = ({ title, children, id = '', class_A }: Main_theme) => {
  const link = id ? id : title?.toLowerCase()

  return (
    <article id={link}>
      <Title text={title} />
      <article className={class_A}>{children}</article>
    </article>
  )
}

export default MainTheme
