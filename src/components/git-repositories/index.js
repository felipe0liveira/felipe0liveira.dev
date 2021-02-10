import Window from '../window'
import styles from './index.module.css'

const openRepository = ({ url }) => {
  window.open(url, '_blank')
}

const GitRepositories = ({ repos }) => {
  return (
    <>
      <Window title='Repositórios' icon='github' cssClass='limited-height'>
        {repos.map((repo) => (
          <button
            type='button'
            className={styles.repo}
            onClick={() => openRepository(repo)}
            key={repo.id}
          >
            <p>{repo.name}</p>
            <small>{repo.description}</small>
          </button>
        ))}
      </Window>
    </>
  )
}

export default GitRepositories
