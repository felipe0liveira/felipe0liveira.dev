import { useEffect, useState } from 'react'
import Avatar from '../components/avatar'
import Card from '../components/card'
import Carousel from '../components/carousel'

import FeedService from '../services/feed.service'
import GithubService from '../services/github.service'

import './_mobile.scss'

const Index = ({ feed, repositories }) => {
  const [clipboardStatus, setClipboardStatus] = useState(false)

  useEffect(() => {
    setClipboardStatus(navigator.clipboard && true)
  }, [])

  const copyToClipboard = async (data) => {
    await navigator.clipboard.writeText(data)
  }

  return (
    <>
      <div className='page'>
        <header>
          <Avatar />
          <h1 className='title'>Felipe 0liveira</h1>
          <span>Software Engineer</span>
        </header>

        <main>
          <Card>
            <p>
              Seja absurdamente bem vindo à essa página que eu costumo chamar de
              meu sitezão, agora nessa v3, com um novo visual.
            </p>
            <br />
            <p>
              Clica em tudo, acha uns bugs tops e o mais importante, vai lá no{' '}
              <a
                href='https://github.com/felipe0liveira/felipe0liveira.dev'
                target='_blank'
              >
                Github
              </a>{' '}
              e corrige tudo, bjs.
            </p>
          </Card>

          <Card
            title='Sobre mim'
            image='https://media.giphy.com/media/3oriNKgISzB8diFeFy/giphy.gif'
          >
            <p>
              Me chamo Felipe 0liveira, sou apaixonado por tecnologia de modo
              geral. Minha introdução no mundo da programação começou quando
              percebi meu brilho nos olhos em apoiar grandes ideias, com o
              objetivo facilitar a vida das pessoas e das empresas.
            </p>
            <br />
            <p>
              Meu principal objetivo é prover soluções à nível do cliente,
              analisar suas necessidades e dores, me envolver na ideia e traçar
              o melhor plano de ação para a execução do desenvolvimento para
              superar positivamente as expectativas.
            </p>
          </Card>

          <Carousel title='Repositórios no Github'>
            {repositories.map((repo) => (
              <Card url={repo.url} center={true} key={repo.id}>
                <p>
                  {repo.name}
                  <br />
                  <small>{repo.description}</small>
                </p>
              </Card>
            ))}
          </Carousel>

          <Card
            title='Skills'
            image='https://media.giphy.com/media/rvjIGIOI9lhsc/giphy.gif'
          >
            <p>
              Tenho uma régua altíssima de qualidade, principalmente se tratando
              de estruturação de código, organização de projetos, design
              patterns, etc.
            </p>
            <br />
            <p>
              Me destaco tanto na comunicação assertiva com as pessoas, prezando
              objetividade e clareza, quanto por minha rápida e eficiente curva
              de aprendizado, entregando máxima performance dentro da
              expectativa de prazo.
            </p>
          </Card>

          <Carousel title='Curiosidades'>
            <Card title='Uma linguagem'>
              <p>Sem dúvidas é o Javascript, para os mais íntimos, js</p>
            </Card>
            <Card title='Um segredo'>
              <p>
                Eu confesso! Da meia noite às seis eu faço bots de Web Scrapping
              </p>
            </Card>
            <Card title='Uma paixão'>
              <p>Sou cantor, tocadô de vioão e fotógrafo nas horas vagas</p>
            </Card>
          </Carousel>

          <Card title='Social'>
            <ul>
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
          </Card>

          <Carousel title='Publicações no DEV.TO'>
            {feed.map((post) => (
              <Card url={post.url} center={true} key={post.id}>
                <p>
                  {post.title}
                  <br />
                  <small>{post.category.join(', ')}</small>
                </p>
              </Card>
            ))}
          </Carousel>

          <Card title='Donate'>
            <p>
              Qualquer donate, independente de valor, é extremamente válido e
              muito bem recebido
              <br />
              Para fazer um donate, atualmente é possível somente utilizando o
              PIX, via QRCode
            </p>

            <div className='qr-code'>
              <img src='/images/qr_donate.jpg' alt='QR Code Pix Donate' />
            </div>

            <p className='pix-key'>
              CHAVE PIX
              <br />
              {clipboardStatus ? (
                <a
                  onClick={() =>
                    copyToClipboard('78b5b317-1d82-4b3f-82cb-e04d1b3b7329')
                  }
                >
                  78b5b317-1d82-4b3f-82cb-e04d1b3b7329
                  <br />
                  COPIAR
                </a>
              ) : (
                '78b5b317-1d82-4b3f-82cb-e04d1b3b7329'
              )}
            </p>
          </Card>
        </main>
      </div>
    </>
  )
}

Index.getInitialProps = async () => {
  const feed = await FeedService.getFeed()
  const repositories = await GithubService.getRepositories()
  return { feed, repositories }
}

export default Index
