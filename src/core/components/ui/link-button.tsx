import { JSX } from 'react'

type Link_Button = {
  href: string
  ariaLabel: string
  text?: string
  jsx?: JSX.Element
  className?: string
}

const LinkButton = ({ href, ariaLabel, text = '', jsx, className = '' }: Link_Button) => {
  return (
    <a className={`link-button ${className}`} href={href} target='__blank' aria-label={ariaLabel}>
      {jsx}
      {text}
    </a>
  )
}

export default LinkButton
