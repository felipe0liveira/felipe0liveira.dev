import Window from '../window'
import styles from './index.module.css'

const Avatar = () => {
  return (
    <>
      <Window title='felipe0liveira.dev' icon='id-card-o'>
        <div className={styles.avatar}></div>
        <p>
          Seja absurdamente bem vindo à essa página que eu costumo chamar de meu
          sitezão, agora nessa v2, em Next.js <i className='fa fa-smile-o'></i>
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
    </>
  )
}

export default Avatar
