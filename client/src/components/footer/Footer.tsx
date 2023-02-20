import styled from 'styled-components'

function Footer() {
	return (
		<Background>
			<Container>
				<p>Built with React + TypeScript</p>
				<PageLinks>
					<Link
						href="https://github.com/MichaelWagnr"
						target="_blank"
						className="github">
						GitHub
					</Link>
					<Link
						href="https://www.linkedin.com/in/mwagner514"
						target="_blank"
						className="linkedin">
						LinkedIn
					</Link>
				</PageLinks>
			</Container>
		</Background>
	)
}

const Background = styled.footer`
	background: var(--primary-bg-500);
	border-top: 1px solid var(--accent-900);
`

const Container = styled.div`
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 20px;
	gap: 20px;
	max-width: 1200px;
	margin: auto;

	p {
		flex: 1;
		font-size: var(--h6);
	}
`

const PageLinks = styled.div`
	display: flex;
	min-width: fit-content;
	gap: 20px;

	@media (max-width: 732px) {
		justify-content: flex-end;
	}
`

const Link = styled.a`
	font-size: var(--p);
	text-decoration: none;

	&.github {
		color: var(--accent-1000);
	}

	&.linkedin {
		color: var(--accent-700);
	}

	&:hover {
		color: var(--primary-fg-100);
	}
`

export default Footer
