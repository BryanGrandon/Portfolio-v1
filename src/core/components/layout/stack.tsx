import { JSX } from 'react'
import { AllIconsStack } from '../ui/icons'
import Title from '../ui/title'

const Stack = (): JSX.Element => {
  return (
    <article className='default-width'>
      <Title text='Stack' />
      <article className='list-stack'>
        <AllIconsStack className='list-stack__icons' />
      </article>
    </article>
  )
}

export default Stack
