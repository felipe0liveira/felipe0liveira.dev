import './styles.scss'

const Carousel = ({ children, ...pageProps }) => {
  const { title } = pageProps

  return (
    <>
      <div className='container'>
        {title && <h2 className='title'>{title}</h2>}
        <div className='carousel'>{children}</div>
      </div>
    </>
  )
}

export default Carousel
