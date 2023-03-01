const Index = () => (
	<div className='container'>
		<section title='About me'>
			<h1>Heey Folks,</h1>
			<span>my name is Felipe Oliveira</span>
			<p>How is it going?</p>

			<p>
				I want to start talking that I wrote my first line of code when I was 8
				years old. That means a lot to me because this made me experience a lot
				of differente technolgies during my whole life.
			</p>

			<img
				src='/images/me.jpeg'
				alt='A black and white filtered photo of myself'
			/>

			<p>
				I really love challenges and I think they are the best way to improve my
				professional skills. It's part of my job to spread my knowledge around
				the team, I'm so comfortable to teach everybody about things I know.
				<br />
				In my career I learned how to work in different environments, from under
				pressure to that more flexible.
			</p>

			<p>
				I'm very open to suggestions like starting new things or solutions.
				Learning a new technology, programming language or a product really
				makes me more passionate about the job. I really love documentations, I
				like to write from the technical ones to the product and context docs.
				I'm very sociable and I like to talk in public.
				<br />
				All my communication skills are advanced because I always like to
				express myself. My career wishes are always connected to learning about
				companies products and contributing with technology.
			</p>
		</section>

		<hr />

		<section title='Employment History'>
			<h2>Employment History</h2>
			<span>
				Where I have been worked these {new Date().getFullYear() - 2016} years
			</span>
			<p>
				You can find a lot of information about my comercial experience on my{' '}
				<a href='https://www.linkedin.com/in/felipe0liveira/' target='_blank'>
					LinkedIn page
				</a>
				.
			</p>
			<img
				src='https://media.giphy.com/media/VInv4mtfvQj8k/giphy.gif'
				alt='A man spining'
			/>
			<p>Please fill free to send me a message there.</p>
		</section>

		<hr />

		<section title='Skills'>
			<h2>Skills</h2>
			<span>What I have been working with</span>

			<p>
				Looking to my whole experience and my choices you can definetly assume
				that I'm Frontend guy and that's true.
			</p>

			<img
				src='https://media.giphy.com/media/NmerZ36iBkmKk/giphy.gif'
				alt='Pinkman magic'
			/>

			<p>
				Talking a little bit about my passion, Javascript. Yeah I really confess
				that if the choice is mine, everything will work in JS since the
				Database, passing through the Backend until the Frontend.
				<br />I certain believe that my favorite stack now a days is MEXN, an
				acronym for: MongoDB, Express, any Frontend framework and Node.
			</p>

			<p>
				At the beginning I was passionate with Angular but some after some years
				I decided to choose the Frontend framework based on a tool, depending on
				the project complexity.
			</p>
		</section>

		<hr />

		<section title='Social'>
			<h2>Social media</h2>
			<span>Where you can find me</span>
			<p>
				If you want to check what I'm posting around the internet, you can find
				me at:
			</p>

			<img
				src='https://media.giphy.com/media/pynZagVcYxVUk/giphy.gif'
				alt='Please, check my content and follow me'
			/>

			<p>
				Employment history and articles on
				<br />
				<a href='https://www.linkedin.com/in/felipe0liveira/' target='_blank'>
					LinkedIn
				</a>
			</p>
			<p>
				Repositories on
				<br />
				<a href='https://github.com/felipe0liveira' target='_blank'>
					Github
				</a>
			</p>
			<p>
				Technical things and articles on
				<br />
				<a href='https://dev.to/felipe0liveira' target='_blank'>
					Dev.to
				</a>
			</p>
		</section>
	</div>
)

export default Index
