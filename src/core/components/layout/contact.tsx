import { JSX } from 'react'
import Title from '../ui/title'
import data from '../../services/data.json' assert { type: 'json' }
import { IEmail } from '../ui/icons'

const Contact = (): JSX.Element => {
  const { gmail } = data.staff
  const handlerClickCopyGmail = () => {
    navigator.clipboard.writeText(gmail)
    const $div = document.createElement('div')
    $div.innerText = 'Email copied to clipboard!'
    $div.className = 'contact__info-gmail--alert'
    document.body.appendChild($div)

    setTimeout(() => {
      document.body.removeChild(document.body.lastChild!)
    }, 2000)
  }
  return (
    <article className='default-width'>
      <Title text='Contact' />
      <article className='contact'>
        <p className='contact__text'>If you want to get in touch, feel free to reach out!</p>
        <section className='contact__info'>
          <p className='contact__info-gmail' onClick={handlerClickCopyGmail}>
            {gmail}
          </p>
          <a href={`mailto:bgrandon.corea@gmail.com`} className='contact__info-link'>
            <IEmail />
          </a>
        </section>
      </article>
    </article>
  )
}

export default Contact
