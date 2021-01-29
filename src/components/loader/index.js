import styles from './index.module.css'

const Loader = () => {
  return (
    <>
      <div className={styles.loader}>
        <div className='window'>
          <div className='title-bar'>
            <div className='title-bar-text'>Please Wait</div>
          </div>
          <div className='window-body'>
            <p>Loading the page fakely...</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Loader
