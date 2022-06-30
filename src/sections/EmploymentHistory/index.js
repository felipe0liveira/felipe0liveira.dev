import { Card } from '../../components/Card'
import { employmentTime } from '../../utils/quickCalcs'
import './styles.scss'

export const EmploymentHistory = () => (
	<section className='employment-history'>
		<header>
			<h3>Employment History</h3>
			<h4>where I've been worked this {employmentTime} years</h4>
		</header>

		<main>
			<Card>
				<h5>Nubank</h5>
				<small>
					Software Engineer (Frontend/Backend)
					<br />
					From May 2021 to May 2022 (12 months)
					<br />
					São Paulo, Brazil
				</small>

				<hr />

				<h5>PagBank PagSeguro</h5>
				<small>
					Software Engineer (Frontend)
					<br />
					From April 2020 to April 2021 (13 months)
					<br />
					São Paulo, Brazil
				</small>

				<hr />

				<h5>Tokio Marine Insurance Group</h5>
				<small>
					Frontend Developer
					<br />
					From July 2018 to April 2020 (23 months)
					<br />
					São Paulo, Brazil
				</small>

				<hr />

				<h5>Internet Sistemas</h5>
				<small>
					Frontend Developer
					<br />
					From June 2017 to June 2018 (13 months)
					<br />
					São Paulo, Brazil
				</small>

				<hr />

				<h5>NFe Sistemas</h5>
				<small>
					Full Stack Developer
					<br />
					From June 2016 to June 2017
					<br />
					São Paulo, Brazil
				</small>
			</Card>
		</main>
	</section>
)
