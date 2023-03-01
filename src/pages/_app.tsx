import Head from 'next/head'
import { MetaTags } from '../components/Seo'
import '../global.scss'

const App = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title>felipe0liveira.dev</title>
				<link rel='shortcut icon' href='favicon.png' type='image/png' />
				<MetaTags />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default App
