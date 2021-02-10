import { useState } from 'react'

const Window = ({ children, ...pageProps }) => {
  const { icon = '', title, closable, cssClass } = pageProps
  const [windowState, setWindowState] = useState('opened')

  const minimizeWindow = () => {
    setWindowState((current) => (current = 'minimized'))
  }

  const maximizeWindow = () => {
    setWindowState((current) => (current = 'opened'))
  }

  const closeWindow = () => {
    if (confirm(`Deseja realmente fechar a janela '${title}'?`)) {
      setWindowState((current) => (current = 'closed'))
    }
  }

  return (
    <>
      {windowState !== 'closed' ? (
        <div className={`window ${windowState} ${cssClass}`}>
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
              {closable ? (
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
