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
				From an early age I had an interest in computers and technology. My
				father took me to a science exhibit at the University of Saskatchewan,
				where we won an internet router in a raffle contest - becoming one of
				the only families on the block to be online. It was quite a few years
				after that experience that I was first introduced to writing code and
				programming:
			</p>
			<p>
				<Summary>In my early 20s, </Summary>I worked as a Manager for a company
				that had two Python Developers. Their monitors were always a colorful
				splay of highlighted text and I greatly admired their work.{' '}
				<Summary>I began learning </Summary>
				<Tech>SQL</Tech> with the aim of writing database queries for my peers
				and beginning to code.
			</p>
			<p>
				<Summary>
					I made a bit of progress and turned my interest towards{' '}
				</Summary>
				<Tech>Python</Tech> which proved to be a pretty big leap. I put aside
				coding, and moved to Montréal where I focused my efforts on learning
				French and playing piano. The challenge of thinking in another language,
				and translating dots on a page into musical performance gave me the
				practice in abstract thinking and confidence boost necessary to attempt
				programming again.
			</p>
			<p>
				<Summary>After having a false start, I decided to start with </Summary>
				something less intimidating: <Tech>HTML</Tech>
				<Summary> and</Summary> <Tech>CSS</Tech>. The momentum was starting to
				pick up.
			</p>
			<p>
				<Summary>The </Summary>logical <Summary>next step was</Summary> to try
				<Summary> learning </Summary>
				<Tech>JavaScript</Tech>. I was discovering a new technology, but with
				the benefit of having previously studied loops, if/else clauses and
				functions in Python. A surprise bonus!
			</p>
			<p></p>
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
