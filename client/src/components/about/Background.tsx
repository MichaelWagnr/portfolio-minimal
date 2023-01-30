import styled from 'styled-components'

function Story() {
	return (
		<Container>
			<Heading>
				<h2>Background</h2>
				<h3>
					<span className="a">How I got into programming </span>
				</h3>
			</Heading>
			<p>
				When I was a child, my father took us to a science exhibit at the
				University of Saskatchewan, where we won an internet router in a raffle
				contest - becoming one of the first families on the block to be online.
			</p>
			<p>
				I spent a great portion of my formative years either glued to a computer
				or practicing guitar. The later of which led me to move from the
				Vancouver area to Edmonton Alberta after high school.
			</p>
			<p>
				I later worked as a Manager for a company that had two Python
				developers. Their monitors were always a colorful splay of highlighted
				text. I greatly admired their work and started learning <Tech>SQL</Tech>{' '}
				with the aim of writing database queries for my peers in order to get
				involved in coding.
			</p>
			<p>
				I made a bit of progress and turned my interest towards{' '}
				<Tech>Python</Tech> which proved to be a pretty big leap. I put aside
				coding, moved to Montréal and focused my efforts on learning French and
				how to play the piano. The challenge of thinking in another language,
				and translating dots on a page into musical performance gave me the
				practice in abstract thinking necessary to attempt programming again.
			</p>
			<p>
				After having a false start, I decided to begin with something less
				intimidating - <Tech>HTML</Tech> and <Tech>CSS</Tech>.
			</p>
			<p>
				After that I started converting projects to <Tech>TypeScript</Tech>{' '}
				which proved to be a fun challenge
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
	color: var(--accent-300);
`

export default Story
