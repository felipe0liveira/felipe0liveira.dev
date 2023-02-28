import Head from 'next/head'
import '98.css/dist/98.css'
import '../global.scss'
import { MetaTags } from '../components/Seo'

export default function MyApp({ Component, pageProps }) {
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
