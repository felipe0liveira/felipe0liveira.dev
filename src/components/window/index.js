const Window = ({ children, ...pageProps }) => {
  const { icon, title } = pageProps

  return (
    <div className='window'>
      <div className='title-bar'>
        <div className='title-bar-text'>
          <i className={`fa fa-${icon}`}></i> {title}
        </div>
        <div className='title-bar-controls'>
          <button aria-label='Minimize'></button>
          <button aria-label='Maximize'></button>
          <button aria-label='Close'></button>
        </div>
      </div>
      <div className='window-body'>{children}</div>
    </div>
  )
}

export default Window
