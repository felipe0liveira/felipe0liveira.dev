import { LandingWrapper } from '../components/LandingWrapper'
import {
	SectionContainer,
	SectionParagraph,
	SectionTitle,
} from '../components/Section'

const LandingPage = () => {
	return (
		<LandingWrapper>
			<SectionContainer>
				<SectionTitle>About me</SectionTitle>
				<SectionParagraph>
					Normally start talking that I am self-taught and I really discovered
					that when I wrote my first line of code when I was 8 years old.
				</SectionParagraph>
				<SectionParagraph>
					I really love challenges and I think they are the best way to improve
					my professional skills. It's part of my job to spread my knowledge
					around the team, I'm so comfortable to teach everybody about things I
					know. In my career I learned how to work in different environments,
					from under pressure to that more flexible.
				</SectionParagraph>
				<SectionParagraph>
					I'm very open to suggestions like starting new things or solutions.
					Learning a new technology, programming language or a product really
					makes me more passionate about the job. I really love documentations,
					I like to write from the technical ones to the product and context
					docs. I'm very sociable and I like to talk in public. All my
					communication skills are advanced because I always like to express
					myself. My career wishes are always connected to learning about
					companies products and contributing with technology.
				</SectionParagraph>
			</SectionContainer>
		</LandingWrapper>
	)
}

export default LandingPage
