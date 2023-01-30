import styled from 'styled-components'

function Header() {
	return (
		<Container>
			<PageLinks>
				<Link href="#about">About</Link>
				<Link href="#projects">Projects</Link>
				<Link href="#contact">Contact</Link>
			</PageLinks>
		</Container>
	)
}

const Container = styled.header`
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	/* justify-content: center; */
	padding-right: 20px;
	max-width: 1200px;
	margin: auto;
`

const PageLinks = styled.div`
	display: flex;
	min-width: 250px;
	gap: 30px;
`

const Link = styled.a`
	color: inherit;
	/* color: var(--primary-fg-300); */
	font-size: var(--h5);
	text-decoration: none;

	&:hover {
		/* color: var(--accent-500); */
		color: var(--accent-900);
	}
`

export default Header
