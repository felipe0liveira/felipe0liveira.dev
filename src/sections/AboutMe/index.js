import { Card } from '../../components/Card'
import { employmentTime } from '../../utils/quickCalcs'
import './styles.scss'

export const AboutMeSection = () => (
	<section className='about-me'>
		<header>
			<h3>About Me</h3>
			<h4>about me, who am I, etc</h4>
		</header>

		<main>
			<Card>
				<img className='avatar' src='images/me.jpg' alt='black and white me' />
			</Card>

			<Card>
				<p>
					I need to start talking that I am self-taught and I really discovered
					that when I wrote my first line of code when I was 8 years old.
				</p>
			</Card>

			<Card>
				<p>
					I really love challenges and I think they are the best way to improve
					my professional skills.
					<br />
					It's part of my job to spread my knowledge around the team, I'm so
					comfortable to teach everybody about things I know.
					<br />
					In my {employmentTime} year career I learned how to work in different
					environments, from under pressure to that more flexible.
				</p>
			</Card>

			<Card>
				<p>
					I'm very open to suggestions like starting new things or solutions.
					Learning a new technology, programming language or a product really
					makes me more passionate about the job. I really love documentations,
					I like to write from the technical ones to the product and context
					docs. I'm very sociable and I like to talk in public.
					<br />
					All my communication skills are advanced because I always like to
					express myself. My career wishes are always connected to learning
					about companies products and contributing with technology.
				</p>
			</Card>
		</main>
	</section>
)
