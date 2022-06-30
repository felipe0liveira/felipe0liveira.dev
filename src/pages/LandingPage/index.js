import { AboutMeSection } from '../../sections/AboutMe'
import { EmploymentHistory } from '../../sections/EmploymentHistory'
import { WelcomeSection } from '../../sections/Welcome'
import './styles.scss'

export const LandingPage = () => (
	<div className='landing-page'>
		<WelcomeSection />
		<AboutMeSection />
		<EmploymentHistory />
	</div>
)
