import Window from '../window'
import styles from './index.module.css'

const Feed = ({ feed }) => {
  return (
    <>
      <Window title='Feed' icon='rss'>
        {feed.length === 0 && (
          <>
            <p>
              No momento não é possível carregar o feed, vai atualizando a
              página aí até funcionar, valeu obrigado, de nada!
            </p>
          </>
        )}
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
