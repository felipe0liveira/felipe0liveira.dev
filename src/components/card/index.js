import { useState } from 'react'
import './styles.scss'

const Card = ({ children, ...pageProps }) => {
  const { title, url, center, image } = pageProps
  const [imageVisibility, setImageVisibility] = useState(true)

  const goTo = (url) => {
    if (url) {
      window.open(url, '_blank')
    }
  }

  const imgSrcErrorHandler = (error) => {
    setImageVisibility(false)
  }

  return (
    <>
      <div
        className={`card ${center && 'center'} ${url && 'clickable'}`}
        onClick={() => goTo(url)}
      >
        {image && imageVisibility && (
          <img
            className='headerImage'
            src={image}
            alt={title}
            onError={imgSrcErrorHandler}
          />
        )}
        {title && <h2 className='title'>{title}</h2>}

        {children}
      </div>
    </>
  )
}

export default Card
