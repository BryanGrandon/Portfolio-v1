import { JSX } from 'react'

type Main_Content_theme = {
  id?: string
  title: string
  children: JSX.Element
  class_A?: string
}
const MainContentTheme = ({ title, children, id = '', class_A = '' }: Main_Content_theme) => {
  const link = id ? id : title?.toLowerCase()

  return (
    <article id={link} className='theme'>
      <h2 className='theme__title'>{title}</h2>
      <article className={class_A}>{children}</article>
    </article>
  )
}

export default MainContentTheme
