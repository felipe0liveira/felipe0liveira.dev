import { Window, WindowState } from '../../components/Window'

export const LandingPage = () => (
	<main>
		<section title='About me'>
			<Window title='A little bit about myself'>
				<>
					<p>
						Heey, my name is Felipe Oliveira.
						<br />
						How is it going folks?
					</p>

					<img className='p-space' src='/images/me.JPEG' alt='Pinkman magic' />

					<p className='p-space'>
						Normally start talking that I am self-taught and I really discovered
						that when I wrote my first line of code when I was 8 years old.
					</p>

					<p className='p-space'>
						I really love challenges and I think they are the best way to
						improve my professional skills. It's part of my job to spread my
						knowledge around the team, I'm so comfortable to teach everybody
						about things I know.
						<br />
						In my career I learned how to work in different environments, from
						under pressure to that more flexible.
					</p>

					<p className='p-space'>
						I'm very open to suggestions like starting new things or solutions.
						Learning a new technology, programming language or a product really
						makes me more passionate about the job. I really love
						documentations, I like to write from the technical ones to the
						product and context docs. I'm very sociable and I like to talk in
						public.
						<br />
						All my communication skills are advanced because I always like to
						express myself. My career wishes are always connected to learning
						about companies products and contributing with technology.
					</p>
				</>
			</Window>
		</section>

		<section title='Employment History' className='up-space'>
			<Window title='Where I have been worked these 6 years'>
				<>
					<img
						src='https://media.giphy.com/media/VInv4mtfvQj8k/giphy.gif'
						alt='A man spining'
					/>
					<ul className='tree-view'>
						<li>
							<details>
								<summary>Lend Tech</summary>
								<ul>
									<li>Software Engineer (Frontend/Backend)</li>
									<li>From Aug 2022 until this moment</li>
									<li>São Paulo, Brazil</li>
								</ul>
							</details>
						</li>
						<li>
							<details>
								<summary>Nubank</summary>
								<ul>
									<li>Software Engineer (Frontend/Backend)</li>
									<li>From May 2021 to May 2022 (13 months)</li>
									<li>São Paulo, Brazil</li>
								</ul>
							</details>
						</li>
						<li>
							<details>
								<summary>PagBank (PagSeguro)</summary>
								<ul>
									<li>Software Engineer (Frontend)</li>
									<li>From May 2021 to May 2022 (13 months)</li>
									<li>São Paulo, Brazil</li>
								</ul>
							</details>
						</li>
						<li>
							<details>
								<summary>Tokio Marine Insurance Group</summary>
								<ul>
									<li>Frontend Developer</li>
									<li>From July 2018 to April 2020 (23 months)</li>
									<li>São Paulo, Brazil</li>
								</ul>
							</details>
						</li>
						<li>
							<details>
								<summary>Internet Sistemas</summary>
								<ul>
									<li>Frontend Developer</li>
									<li>From June 2017 to June 2018 (13 months)</li>
									<li>São Paulo, Brazil</li>
								</ul>
							</details>
						</li>
						<li>
							<details>
								<summary>NFe Sistemas</summary>
								<ul>
									<li>Full Stack Developer</li>
									<li>From June 2016 to June 2017 (13 months)</li>
									<li>São Paulo, Brazil</li>
								</ul>
							</details>
						</li>
					</ul>
				</>
			</Window>
		</section>

		<section title='Skills' className='up-space'>
			<Window title='My best skills' initialWindowState={WindowState.MINIMIZED}>
				<>
					<img
						src='https://media.giphy.com/media/NmerZ36iBkmKk/giphy.gif'
						alt='Pinkman magic'
					/>
					<p>
						Looking to my whole experience and my choices you can definetly
						assume that I'm Frontend guy and that's true.
					</p>

					<p className='p-space'>
						Talking a little bit about my passion, Javascript. Yeah I really
						confess that if the choice is mine, everything will work in JS since
						the Database, passing through the Backend until the Frontend.
						<br />I certain believe that my favorite stack now a days is MEXN,
						an acronym for: MongoDB, Express, any Frontend framework and Node.
					</p>

					<p className='p-space'>
						At the beginning I was passionate with Angular but some after some
						years I decided to choose the Frontend framework based on a tool,
						depending on the project complexity.
					</p>
				</>
			</Window>
		</section>

		<section title='Social' className='up-space'>
			<Window title='Where you can find me'>
				<>
					<p>If you want to follow my social media, you can find me at:</p>
					<div className='status-bar p-space'>
						<p className='status-bar-field'>
							Employment history on
							<br />
							<a
								href='https://www.linkedin.com/in/felipe0liveira/'
								target='_blank'
							>
								LinkedIn
							</a>
						</p>
						<p className='status-bar-field'>
							Repositories on
							<br />
							<a href='https://github.com/felipe0liveira' target='_blank'>
								Github
							</a>
						</p>
						<p className='status-bar-field'>
							Posts and articles on
							<br />
							<a href='https://dev.to/felipe0liveira' target='_blank'>
								Dev.to
							</a>
						</p>
					</div>
				</>
			</Window>
		</section>
	</main>
)
