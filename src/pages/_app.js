import Head from 'next/head'
import TagManager from 'react-gtm-module'
import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    // TagManager
    const tagManagerArgs = {
      gtmId: 'GTM-5XCHHG7',
    }
    TagManager.initialize(tagManagerArgs)
    hotjar.initialize(2411738, 6)
  })

  return (
    <>
      <Head>
        <title>Felipe 0liveira [dev]</title>

        {/* Meta Tags */}
        <meta charSet='utf-8' />
        <meta name='theme-color' content='#1f1f22' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, user-scalable=no'
        />
        <meta property='og:title' content='Felipe 0liveira [dev]' />
        <meta
          property='og:image'
          content='https://felipe0liveira.dev/images/me.jpg'
        />
        <meta property='og:image:type' content='image/jpg' />
        <meta property='og:image:width' content='1000' />
        <meta property='og:image:height' content='1000' />

        <meta
          name='description'
          content='Uma experiência um tanto quanto diferenciada para conhecer um desenvolvedor Fullstack.'
        />
        <meta
          name='keywords'
          content='desenvolvimento, web, mobile, full stack, front end, back end, frontend, backend, angular, javascript, typescript, clojure, kafka, datomic'
        />
        <meta name='robots' content='index, follow' />

        {/* Favicon */}
        <link
          rel='shortcut icon'
          href='https://picsum.photos/128'
          type='image/jpg'
        />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default App
