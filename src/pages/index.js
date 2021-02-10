import { useEffect, useState } from 'react'
import styles from './index.module.css'

// Services
import FeedService from '../services/feed.service'
import GithubService from '../services/github.service'

// Components
import Loader from '../components/loader'
import Feed from '../components/feed'
import Donate from '../components/donate'
import Avatar from '../components/avatar'
import AboutMe from '../components/about-me'
import Skills from '../components/skills'
import Curiosities from '../components/curiosities'
import Social from '../components/social'
import GitRepositories from '../components/git-repositories'

const Index = ({ feed, repositories }) => {
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

          <div className={styles.sideContainer}>
            <Feed feed={feed} />
            <GitRepositories repos={repositories} />
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
  const feed = await FeedService.getFeed()
  const repositories = await GithubService.getRepositories()
  return { feed, repositories }
}

export default Index
