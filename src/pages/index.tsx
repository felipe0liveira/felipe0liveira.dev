import { Header } from '../components/Header'
import { Container } from '../components/Container'
import { Row } from '../components/Row'
import { InfoCard } from '../components/InfoCard'
import { useEffect, useState } from 'react'
import { Scrollable } from '../components/Scrollable'

interface HomeProps {
	social: {
		github: {
			reposAmmount?: number
			followers?: number
			repos?: any[]
		}
		devTo: {
			posts?: number
			reactions?: number
		}
	}
}

const Home = ({ social }: HomeProps) => {
	return (
		<>
			<Header>
				<h1>felipe0liveira [dev]</h1>
				<h2>A FullStack Software Engineer</h2>
			</Header>

			<Container>
				<Row>
					<InfoCard backgroundUrl='/images/me.jpeg'>
						<h3>About me</h3>
						<p>How is it going?</p>

						<p>
							I really love challenges and I think they are the best way to
							improve my professional skills. It's part of my job to spread my
							knowledge around the team, I'm so comfortable to teach everybody
							about things I know.
							<br />
							In my career I learned how to work in different environments, from
							under pressure to that more flexible.
						</p>

						<p>
							I'm very open to suggestions like starting new things or
							solutions. Learning a new technology, programming language or a
							product really makes me more passionate about the job. I really
							love documentations, I like to write from the technical ones to
							the product and context docs. I'm very sociable and I like to talk
							in public.
							<br />
							All my communication skills are advanced because I always like to
							express myself. My career wishes are always connected to learning
							about companies products and contributing with technology.
						</p>
					</InfoCard>

					<InfoCard backgroundUrl='https://media.giphy.com/media/VInv4mtfvQj8k/giphy.gif'>
						<h3>Employment History</h3>
						<p>
							Where I have been worked these {new Date().getFullYear() - 2016}{' '}
							years
						</p>

						<ul>
							<li>Tokio Marine (Insurance Group)</li>
							<li>PagBank PagSeguro (Fintech)</li>
							<li>Nubank (Fintech)</li>
							<li>Lend Technologies (Fintech)</li>
						</ul>

						<p>
							You can find a lot of information about my comercial experience on
							my{' '}
							<a
								href='https://www.linkedin.com/in/felipe0liveira/'
								target='_blank'
							>
								LinkedIn page
							</a>
							.
						</p>

						<p>Please fill free to send me a message there.</p>
					</InfoCard>

					<InfoCard backgroundUrl='https://media.giphy.com/media/NmerZ36iBkmKk/giphy.gif'>
						<h3>Skills</h3>
						<p>Which technologies I have worked with</p>

						<p>
							Looking to my whole experience and my choices you can definetly
							assume that I'm Frontend guy and that's true.
						</p>

						<p>
							Talking a little bit about my passion, Javascript. Yeah I really
							confess that if the choice is mine, everything will work in JS
							since the Database, passing through the Backend until the
							Frontend.
							<br />I certain believe that my favorite stack now a days is MEXN,
							an acronym for: MongoDB, Express, any Frontend framework and Node.
						</p>

						<p>
							At the beginning I was passionate with Angular but some after some
							years I decided to choose the Frontend framework based on a tool,
							depending on the project complexity.
						</p>
					</InfoCard>
				</Row>

				<Row>
					<InfoCard>
						<h3>Github Public Repositories</h3>
						<span>{social.github.reposAmmount || 'n/a'}</span>
					</InfoCard>

					<InfoCard>
						<h3>Github Followers</h3>
						<span>{social.github.followers || 'n/a'}</span>
					</InfoCard>

					<InfoCard>
						<h3>Dev.to posts</h3>
						<span>{social.devTo.posts || 'n/a'}</span>
					</InfoCard>

					<InfoCard>
						<h3>Dev.to Reactions</h3>
						<span>{social.devTo.reactions || 'n/a'}</span>
					</InfoCard>
				</Row>

				<Row>
					<InfoCard backgroundUrl='https://media.giphy.com/media/KEYbcgR8oKQzwpwvLU/giphy-downsized-large.gif'>
						<h3>Favorite Stack</h3>
						<p>What I love to work with</p>

						<p>
							Considering all my comercial experience, if I can tell you my
							favorite stack is MERN.
						</p>

						<p>But Why?</p>

						<p>
							I think React is one of the most popular frameworks in the
							frontend world so basically this brings a lot of power to create
							new features, maintain application and solve bugs. This is because
							probably the community already had the same pain that you have.
						</p>

						<p>
							So using Mongo and Node along side with React also brings a lot of
							efficiency for the squad, basically when all the team uses the
							same programming language for all the stack is more common to have
							people contributing in all parts of the application. From the
							backend to the frontend.
						</p>
					</InfoCard>

					<InfoCard backgroundUrl='https://media.giphy.com/media/78nXADhnE4BQfG4gup/giphy-downsized-large.gif'>
						<h3>Github</h3>
						<p>Please contribute with my repositories</p>

						{social.github.repos && (
							<Scrollable height={200}>
								<ul>
									{social.github.repos.map((repo) => (
										<li
											key={repo.id}
											onClick={() => window.open(repo.html_url)}
										>
											{repo.name}
										</li>
									))}
								</ul>
							</Scrollable>
						)}
					</InfoCard>

					<InfoCard backgroundUrl='https://media.giphy.com/media/DAtJCG1t3im1G/giphy.gif'>
						<h3>Calm down</h3>
						<p>That's not a reeeally end</p>

						<p>
							I would love if you contribute with this website, the repository
							is fully open-source and I'll be waiting for a pull request from
							you.
						</p>

						<p>
							Of course I love to help the community and my reacent creation was
							a minimal-next-app, that is basically a react/next boilerplate to
							start new applications with the Javascript and Typescript version.
						</p>

						<p>
							Please feel free to meet all my{' '}
							<a
								href='https://github.com/felipe0liveira?tab=repositories'
								target='_blank'
							>
								Github Repositories.
							</a>
						</p>
					</InfoCard>
				</Row>
			</Container>
		</>
	)
}

Home.getInitialProps = async (ctx) => {
	const githubUserPomiseResponse = fetch(
		'https://api.github.com/users/felipe0liveira'
	)

	const githubReposPromiseResponse = fetch(
		'https://api.github.com/users/felipe0liveira/repos'
	)

	const devToPomiseResponse = fetch(
		'https://dev.to/api/articles?username=felipe0liveira'
	)

	const [githubUserResponse, githubReposResponse, devToResponse] =
		await Promise.all([
			githubUserPomiseResponse,
			githubReposPromiseResponse,
			devToPomiseResponse,
		])

	const [githubUserData, githubReposData, devToData] = await Promise.all([
		githubUserResponse.json(),
		githubReposResponse.json(),
		devToResponse.json(),
	])

	return {
		social: {
			github: {
				reposAmmount: githubUserData?.public_repos,
				followers: githubUserData?.followers,
				repos: githubReposData as [],
			},
			devTo: {
				posts: (devToData as []).length,
				reactions: (devToData as []).reduce((a, b) => {
					return a + b['public_reactions_count']
				}, 0) as number,
			},
		},
	}
}

export default Home
