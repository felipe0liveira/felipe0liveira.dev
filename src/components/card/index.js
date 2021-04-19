import './styles.scss'

const Card = ({ children, ...pageProps }) => {
  const { title, url, center, image } = pageProps

  const goTo = (url) => {
    if (url) {
      window.open(url, '_blank')
    }
  }

  return (
    <>
      <div
        className={`card ${center && 'center'} ${url && 'clickable'}`}
        onClick={() => goTo(url)}
      >
        {image && <img className='headerImage' src={image} alt={title} />}
        {title && <h2 className='title'>{title}</h2>}

        {children}
      </div>
    </>
  )
}

export default Card
