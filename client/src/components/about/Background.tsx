import styled from 'styled-components'

function Story() {
	return (
		<Container>
			<Heading>
				<h2>Background</h2>
				<h3>
					<span className="a">
						How I got into programming - <Summary>TL</Summary>
						<Tech>DR</Tech>
					</span>
				</h3>
			</Heading>
			<p>
				In my mid 20s, I worked as a Manager for a company that had two Python
				Developers. I greatly admired their work and would often look curiously
				at their computer monitors filled with colourfully highlighted text.
				Inspired,{' '}
				<Summary>
					I began learning <Tech>SQL</Tech> with the goal of helping write
					database queries for my coworkers, later turning my interests towards
					<Tech> Python</Tech>.
				</Summary>
			</p>
			<p>
				Relocating to Montréal, my focus shifted from coding to learning French
				and in my spare time playing piano. The challenge of thinking in another
				language, and translating dots on a page into musical performance gave
				me the practice in abstract thought and humility necessary to attempt
				programming again.
			</p>
			<p>
				<Summary>
					I learned <Tech>HTML</Tech>, <Tech>CSS</Tech>, <Tech>Git</Tech>,{' '}
					<Tech>JavaScript</Tech> and <Tech>React</Tech> through a combination
					of textbooks, online courses and other resources.
				</Summary>{' '}
				To my surprise, what I had previously researched of Python (loops, logic
				and functions) complimented my studies, and I was able to make progress
				in a short amount of time.{' '}
			</p>
			<p>
				<Summary>
					Later enrolled at Concordia University, I extended my understanding of
					React, <Tech>Node</Tech>, <Tech>MongoDB</Tech> and{' '}
					<Tech>TypeScript</Tech>, culminating in the ability to program complex
					applications
				</Summary>{' '}
				I could not have imagined myself building when I first started. To date,
				I continue to learn new technologies and develop.
			</p>
		</Container>
	)
}

const Container = styled.div`
	h2 {
		color: var(--primary-fg-300);
		text-align: center;
	}

	flex: 1;

	p {
		margin-bottom: 10px;
		text-indent: 20px;
	}
`

const Heading = styled.div`
	text-align: center;
	margin-bottom: 40px;

	h2 {
		color: var(--primary-fg-300);
	}

	h3 {
		margin-top: -30px;
	}

	span {
		font-size: var(--p);
		font-weight: lighter;
		&.a {
			color: var(--accent-900);
		}
	}
`

const Tech = styled.span`
	color: var(--accent-100);
`

const Summary = styled.span`
	color: var(--accent-300);
`

export default Story
