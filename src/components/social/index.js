import Window from '../window'

const Social = () => {
  return (
    <>
      <Window title='Social' icon='code-fork'>
        <p>Garanto que é possível me encontrar em diversos lugares.</p>
        <ul className='tree-view'>
          <li>
            <a href='https://dev.to/felipe0liveira' target='_blank'>
              Dev.to
            </a>{' '}
            para ver posts sobre desenvolvimento e tecnologia
          </li>
          <li>
            <a href='https://codepen.io/felipe0liveira' target='_blank'>
              Codepen
            </a>{' '}
            para ver snippets de código.
          </li>
          <li>
            <a href='https://linkedin.com/in/felipe0liveira' target='_blank'>
              Linkedin
            </a>{' '}
            para ver meu perfil profissional.
          </li>
          <li>
            <a href='https://github.com/felipe0liveira' target='_blank'>
              Github
            </a>{' '}
            para resolver os bugs do meu site.
          </li>
          <li>
            <a href='https://twitter.com/felpd3v' target='_blank'>
              Twitter
            </a>{' '}
            para dar rt em coisas sem sentido.
          </li>
        </ul>
      </Window>
    </>
  )
}

export default Social
