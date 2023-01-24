import styled from 'styled-components'

function Header() {
	return (
		<Container>
			<PageLinks>
				<Link href="#">About</Link>
				<Link href="#">Projects</Link>
				<Link href="#">Contact</Link>
			</PageLinks>
		</Container>
	)
}

const Container = styled.header`
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
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

	&:hover {
		color: var(--accent-900);
	}
`

export default Header
