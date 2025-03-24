import data from '../../services/data.json' assert { type: 'json' }

const Main = () => {
  return (
    <main className='main'>
      <article id='projects'>
        <h2>Projects</h2>
        <article className='projects'>
          {data.projects.map((e) => (
            <a key={e.id} href={e.url} target='__black' className='project-card'>
              <img className='project-card__img' src={e.img} alt='s' />
              <section className='project-card__info'>
                <h3 className='project-card__title'>{e.title}</h3>
                <p className='project-card__description'>{e.description}</p>
              </section>
            </a>
          ))}
        </article>
      </article>

      <article id='about'>
        <h2>About</h2>
      </article>

      <article id='contact'>
        <h2>Contact</h2>
      </article>
    </main>
  )
}

export default Main
