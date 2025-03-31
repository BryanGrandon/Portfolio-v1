import { JSX } from 'react'
import Header from './components/layout/header'
import MainContent from './components/layout/main-content'

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <MainContent />
    </>
  )
}

export default App
