import Head from 'next/head'
import { LandingPage } from '../templates/Landing'

const Index = () => (
	<>
		<Head>
			<title>felipe0liveira.dev</title>
			<link rel='shortcut icon' href='favicon.png' type='image/png' />
		</Head>

		<LandingPage />
	</>
)

export default Index
