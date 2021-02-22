import './_mobile.scss'

const Card = ({ children, ...pageProps }) => {
  const { title, url, center } = pageProps

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
        {title && <h2 className='title'>{title}</h2>}
        {children}
      </div>
    </>
  )
}

export default Card
