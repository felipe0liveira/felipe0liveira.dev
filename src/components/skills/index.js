import Window from '../window'

const Skills = () => {
  return (
    <>
      <Window title='Skills & Tecnologias' icon='code'>
        <p>
          Tenho uma régua altíssima de <strong>qualidade</strong>,
          principalmente se tratando de estruturação de código, organização de
          projetos, design patterns, etc.
        </p>

        <p>
          Me destaco tanto na comunicação assertiva com as pessoas, prezando
          objetividade e clareza, quanto por minha rápida e eficiente curva de
          aprendizado, entregando máxima performance dentro da expectativa de
          prazo.
        </p>

        <p>Algumas coisinhas que me brilham os olhos...</p>

        <ul className='tree-view'>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>Flutter</li>
          <li>
            <details>
              <summary>Frontend Frameworks</summary>
              <ul>
                <li>React</li>
                <li>Next.js</li>
                <li>Angular</li>
                <li>SPA</li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Stylesheet</summary>
              <ul>
                <li>CSS</li>
                <li>SASS</li>
                <li>LESS</li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Node.js</summary>
              <ul>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Rest API</li>
              </ul>
            </details>
          </li>
        </ul>
      </Window>
    </>
  )
}

export default Skills
