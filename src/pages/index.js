import { useEffect, useState } from 'react'
import xml2json from 'xml2js'
import Loader from '../components/loader'
import Feed from '../components/feed'
import Donate from '../components/donate'
import styles from './index.module.css'
import Avatar from '../components/avatar'
import AboutMe from '../components/about-me'
import Skills from '../components/skills'
import Curiosities from '../components/curiosities'
import Social from '../components/social'

const Index = ({ feed }) => {
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
            <Avatar />
            <AboutMe />
            <Skills />
            <Curiosities />
            <Social />
            <Donate />
          </div>

          {/* Feed */}
          {feed.length > 0 && <Feed feed={feed} />}

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
  let postsDevTo = rss['rss']['channel'][0]['item']

  postsDevTo = postsDevTo.map((item, index) => ({
    id: index,
    title: item.title[0],
    author: item.author[0],
    pubDate: item.pubDate[0],
    link: item.link[0],
    description: item.description[0],
    category: item.category,
  }))

  return { feed: postsDevTo }
}

export default Index
