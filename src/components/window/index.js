import { useState } from 'react'

const Window = ({ children, ...pageProps }) => {
  const { icon = '', title, onMaximize, onClose } = pageProps
  const [windowState, setWindowState] = useState('opened')

  const minimizeWindow = () => {
    setWindowState((current) => (current = 'minimized'))
  }

  const maximizeWindow = () => {
    setWindowState((current) => (current = 'opened'))
  }

  const closeWindow = () => {
    onClose()
    setWindowState((current) => (current = 'closed'))
  }

  return (
    <>
      {windowState !== 'closed' ? (
        <div className={`window ${windowState}`}>
          <div className='title-bar'>
            <div className='title-bar-text'>
              <i className={`fa fa-${icon}`}></i> {title}
            </div>
            <div className='title-bar-controls'>
              {windowState == 'opened' ? (
                <button
                  type='button'
                  aria-label='Minimize'
                  onClick={minimizeWindow}
                ></button>
              ) : null}
              {windowState == 'minimized' ? (
                <button
                  type='button'
                  aria-label='Maximize'
                  onClick={maximizeWindow}
                ></button>
              ) : null}
              {onClose ? (
                <button
                  type='button'
                  aria-label='Close'
                  onClick={closeWindow}
                ></button>
              ) : null}
            </div>
          </div>
          {windowState == 'opened' ? (
            <div className='window-body'>{children}</div>
          ) : null}
        </div>
      ) : null}
    </>
  )
}

export default Window
