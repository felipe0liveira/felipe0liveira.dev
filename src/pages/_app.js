import Head from 'next/head'

// CSS Libs
import '98.css'
import 'font-awesome/css/font-awesome.css'
import './global.css'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Felipe 0liveira (Win98)</title>

        {/* Meta Tags */}
        <meta charSet='utf-8' />
        <meta name='theme-color' content='#c0c0c0' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, user-scalable=no'
        />
        <meta property='og:title' content='Felipe 0liveira (Win98)' />
        <meta
          property='og:image'
          content='https://felipe0liveira.dev/images/social-media.png'
        />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='1000' />
        <meta property='og:image:height' content='1000' />

        <meta
          name='description'
          content='Uma experiência um tanto quanto diferenciada para conhecer um desenvolvedor Fullstack.'
        />
        <meta
          name='keywords'
          content='desenvolvimento, web, mobile, full stack, front end, back end, frontend, backend, angular, javascript, typescript, windows98, site windows, site 98'
        />
        <meta name='robots' content='index, follow' />

        {/* Favicon */}
        <link rel='shortcut icon' href='/images/favicon.png' type='image/png' />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default App
