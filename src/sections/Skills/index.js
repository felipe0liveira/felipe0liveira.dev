import { Card } from '../../components/Card'
import './styles.scss'

export const SkillsSection = () => (
	<section className='skills'>
		<header>
			<h3>Skills</h3>
			<h4>what is my super power</h4>
		</header>

		<main>
			<Card>
				<img
					src='https://media.giphy.com/media/NmerZ36iBkmKk/giphy.gif'
					alt='Magic trick'
				/>
			</Card>
			<Card>
				<p>
					Looking to my whole experience and my choices you can definetly assume
					that I'm Frontend guy and that's true.
				</p>
			</Card>

			<Card>
				<p>
					Talking a little bit about my passion, Javascript. Yeah I really
					confess that if the choice is mine, everything will work in JS since
					the Database, passing through the Backend until the Frontend.
					<br />I certain believe that my favorite stack now a days is MEXN, an
					acronym for: MongoDB, Express, any Frontend framework and Node.
				</p>
			</Card>

			<Card>
				<p>
					At the beginning I was passionate with Angular but some after some
					years I decided to choose the Frontend framework based on a tool,
					depending on the project complexity.
				</p>
			</Card>
		</main>
	</section>
)
