import Window from '../window'
import styles from './index.module.css'

const openRepository = ({ url }) => {
  window.open(url, '_blank')
}

const GitRepositories = ({ repos }) => {
  return (
    <>
      <Window
        title='Repositórios'
        icon='github'
        cssClass={repos.length > 0 && 'limited-height'}
        closable={true}
      >
        {repos.length === 0 && (
          <>
            <p>
              No momento não é possível carregar a lista de repositórios do
              Github, vai atualizando a página aí até funcionar, valeu obrigado,
              de nada!
            </p>
          </>
        )}
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
