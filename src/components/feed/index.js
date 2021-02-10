import Window from '../window'
import styles from './index.module.css'

const Feed = ({ feed }) => {
  return (
    <>
      <Window title='Feed' icon='rss'>
        {feed.map((post) => (
          <a href={post.link} target='_blank' key={post.id}>
            <button type='button' className={styles.post}>
              {post.title}
            </button>
          </a>
        ))}
      </Window>
    </>
  )
}

export default Feed
