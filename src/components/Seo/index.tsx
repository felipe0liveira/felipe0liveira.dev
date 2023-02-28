export const MetaTags = () => {
	const pageTitle = 'felipe0liveira'
	const pageDescription =
		'A FullStack Software Engineer website based on windows98 design.'
	const pageRobots = 'index, follow'
	const pageType = 'website'
	const pageThumbnail = 'https://www.felipe0liveira.dev/images/me.JPEG'
	const pageLocale = 'en_US'
	const pageThumbnailSize = 'summary_large_image'

	return (
		<>
			{/* Essentials */}
			<meta name='description' content={pageDescription} />
			<meta name='robots' content={pageRobots} />

			{/* Open Graph */}
			<meta property='og:title' content={pageTitle} />
			<meta property='og:description' content={pageDescription} />
			<meta property='og:type' content={pageType} />
			<meta property='og:image' content={pageThumbnail} />
			<meta property='og:locale' content={pageLocale} />

			{/* Twitter */}
			<meta name='twitter:title' content={pageTitle} />
			<meta name='twitter:description' content={pageDescription} />
			<meta name='twitter:image' content={pageThumbnail} />
			<meta name='twitter:card' content={pageThumbnailSize} />
			<meta name='twitter:image:alt' content={pageDescription} />
		</>
	)
}
