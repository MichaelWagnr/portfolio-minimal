import styled from 'styled-components'

function Header() {
	return (
		<Container>
			<PageLinks>
				<Link href="#about">About</Link>
				<Link href="#projects">Projects</Link>
				<Link href="#contact">
					<span>Contact</span>
				</Link>
			</PageLinks>
		</Container>
	)
}

const Container = styled.header`
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding-right: 20px;
	max-width: 1200px;
	margin: auto;

	@media (max-width: 500px) {
		justify-content: center;
		padding-right: 0px;
	}
`

const PageLinks = styled.div`
	display: flex;
	min-width: 250px;
	gap: 30px;
`

const Link = styled.a`
	color: inherit;
	font-size: var(--h5);
	text-decoration: none;

	&:hover,
	span:hover {
		color: var(--accent-1000);
	}

	span {
		color: var(--accent-900);
	}
`

export default Header
