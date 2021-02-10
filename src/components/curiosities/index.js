import Window from '../window'

const Curiosities = () => {
  return (
    <>
      <Window title='Curiosidades' icon='cubes' closable={true}>
        <p>
          <strong>Uma linguagem</strong>
          <br />
          Sem dúvidas é o Javascript, para os mais íntimos, js.
        </p>
        <p>
          <strong>Um segredo</strong>
          <br />
          Eu confesso! Da meia noite às seis eu faço bots de Web Scrapping...
        </p>
        <p>
          <strong>Uma paixão</strong>
          <br />
          Sou cantor, tocadô de vioão e fotógrafo nas horas vagas.
        </p>
      </Window>
    </>
  )
}

export default Curiosities
