import { useEffect, useState } from 'react'
import xml2json from 'xml2js'
import Window from '../components/window'
import Loader from '../components/loader'
import styles from './index.module.css'

const Index = ({ posts }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    hideLoader()
  }, [])

  const hideLoader = () => {
    setTimeout(() => {
      setLoading((current) => (current = false))
    }, 2500)
  }

  const deletePage = () =>
    alert("Cê me jura memo que você clicou? :'(\nTa brincante ein!?")

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.page}>
          <div className={styles.container}>
            {/* Avatar */}
            <Window title='felipe0liveira.dev' icon='id-card-o'>
              <div className={styles.avatar}></div>
              <p>
                Seja absurdamente bem vindo à essa página que eu costumo chamar
                de meu sitezão, agora nessa v2, em Next.js{' '}
                <i className='fa fa-smile-o'></i>
              </p>
              <p>
                Clica em tudo, acha uns bugs tops e o mais importante, vai lá no{' '}
                <a
                  href='https://github.com/felipe0liveira/felipe0liveira.dev'
                  target='_blank'
                >
                  Github
                </a>{' '}
                e corrige tudo, bjs <i className='fa fa-heart-o'></i>
              </p>
            </Window>

            {/* Sobre mim */}
            <Window title='Sobre mim' icon='user'>
              <p>
                Me chamo <strong>Felipe 0liveira</strong>, sou apaixonado por
                tecnologia de modo geral. Minha introdução no mundo da
                programação começou quando percebi meu brilho nos olhos em{' '}
                <strong>apoiar grandes ideias</strong>, com o objetivo facilitar
                a vida das pessoas e das empresas.
              </p>
              <p>
                Meu <strong>principal objetivo</strong> é prover soluções à
                nível do cliente, analisar suas necessidades e dores, me
                envolver na ideia e traçar o melhor{' '}
                <strong>plano de ação</strong> para a execução do
                desenvolvimento para superar positivamente as expectativas.
              </p>
            </Window>

            {/* Skills & Tecnologias */}
            <Window title='Skills & Tecnologias' icon='code'>
              <p>
                Tenho uma régua altíssima de <strong>qualidade</strong>,
                principalmente se tratando de estruturação de código,
                organização de projetos, design patterns, etc.
              </p>

              <p>
                Me destaco tanto na comunicação assertiva com as pessoas,
                prezando objetividade e clareza, quanto por minha rápida e
                eficiente curva de aprendizado, entregando máxima performance
                dentro da expectativa de prazo.
              </p>

              <p>Algumas coisinhas que me brilham os olhos...</p>

              <ul className='tree-view'>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>Flutter</li>
                <li>
                  <details>
                    <summary>Frontend Frameworks</summary>
                    <ul>
                      <li>React</li>
                      <li>Next.js</li>
                      <li>Angular</li>
                      <li>SPA</li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>Stylesheet</summary>
                    <ul>
                      <li>CSS</li>
                      <li>SASS</li>
                      <li>LESS</li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>Node.js</summary>
                    <ul>
                      <li>Express</li>
                      <li>MongoDB</li>
                      <li>Rest API</li>
                    </ul>
                  </details>
                </li>
              </ul>
            </Window>

            {/* Curiosidades */}
            <Window title='Curiosidades' icon='cubes' closable={true}>
              <p>
                <strong>Uma linguagem</strong>
                <br />
                Sem dúvidas é o Javascript, para os mais íntimos, js.
              </p>
              <p>
                <strong>Um segredo</strong>
                <br />
                Eu confesso! Da meia noite às seis eu faço bots de Web
                Scrapping...
              </p>
              <p>
                <strong>Uma paixão</strong>
                <br />
                Sou cantor, tocadô de vioão e fotógrafo nas horas vagas.
              </p>
            </Window>

            {/* Social */}
            <Window title='Social' icon='code-fork'>
              <p>Garanto que é possível me encontrar em diversos lugares.</p>
              <ul className='tree-view'>
                <li>
                  <a href='https://dev.to/felipe0liveira' target='_blank'>
                    Dev.to
                  </a>{' '}
                  para ver posts sobre desenvolvimento e tecnologia
                </li>
                <li>
                  <a href='https://codepen.io/felipe0liveira' target='_blank'>
                    Codepen
                  </a>{' '}
                  para ver snippets de código.
                </li>
                <li>
                  <a
                    href='https://linkedin.com/in/felipe0liveira'
                    target='_blank'
                  >
                    Linkedin
                  </a>{' '}
                  para ver meu perfil profissional.
                </li>
                <li>
                  <a href='https://github.com/felipe0liveira' target='_blank'>
                    Github
                  </a>{' '}
                  para resolver os bugs do meu site.
                </li>
                <li>
                  <a href='https://twitter.com/felpd3v' target='_blank'>
                    Twitter
                  </a>{' '}
                  para dar rt em coisas sem sentido.
                </li>
              </ul>
            </Window>

            {/* Donate */}
            <Window title='Donate' icon='thumbs-o-up' closable={true}>
              <p>
                Qualquer donate, independente de valor, é extremamente válido e
                muito bem recebido <i className='fa fa-heart'></i>
              </p>

              <p>
                Para fazer um <strong>donate</strong>, atualmente é possível
                somente utilizando o PIX, via QRCode
              </p>

              <div className={styles.QRCode}>
                <img
                  src='/images/qr_donate.jpg'
                  alt='QR Code donate for felipe0liveira.dev'
                />
                <hr />

                <p>
                  <small>Chave</small>
                  <br />
                  <small>
                    <i>78b5b317-1d82-4b3f-82cb-e04d1b3b7329</i>
                  </small>
                </p>
              </div>
            </Window>
          </div>

          {/* Feed */}
          <div className={styles.rss}>
            <Window title='Feed' icon='rss'>
              {posts.map((post) => (
                <a href={post.link} target='_blank' key={post.id}>
                  <button type='button' className={styles.post}>
                    {post.title}
                  </button>
                </a>
              ))}
            </Window>
          </div>

          {/* Easter Egg */}
          <section>
            <hr className='mobile' />
            <button type='button' onClick={deletePage}>
              dev purposes: delete page
            </button>
          </section>
        </div>
      )}
    </>
  )
}

Index.getInitialProps = async () => {
  const response = await fetch('https://dev.to/feed/felipe0liveira.dev')
  const xml = await response.text()
  const rss = await xml2json.parseStringPromise(xml)
  let posts = rss['rss']['channel'][0]['item']

  posts = posts.map((item, index) => ({
    id: index,
    title: item.title[0],
    author: item.author[0],
    pubDate: item.pubDate[0],
    link: item.link[0],
    description: item.description[0],
    category: item.category,
  }))

  return { posts }
}

export default Index
