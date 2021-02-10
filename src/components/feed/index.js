import Window from '../window'
import styles from './index.module.css'

const openPost = ({ url }) => {
  window.open(url, '_blank')
}

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
          <button
            type='button'
            className={styles.post}
            onClick={() => openPost(post)}
            key={post.id}
          >
            {post.title}
          </button>
        ))}
      </Window>
    </>
  )
}

export default Feed
