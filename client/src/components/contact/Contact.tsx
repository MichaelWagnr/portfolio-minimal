import styled from 'styled-components'

function Contact() {
	return (
		<Background id="contact">
			<Container>
				<Heading>
					<h2>Contact</h2>
					{/* <h3>
						<span className="a">Currently available</span>
					</h3> */}
				</Heading>
			</Container>
		</Background>
	)
}

const Background = styled.section`
	/* margin-top: -110px; */
	//! delete later
	height: 100vh;

	min-height: fit-content;
	width: 100vw;
	background: var(--primary-bg-600);
	background: linear-gradient(var(--primary-bg-700), var(--primary-bg-700));
	border-top: 1px solid var(--primary-fg-300);
	/* clip-path: polygon(0px 110px, 100% 0px, 100% 100%, 0% 100%); */
`

const Container = styled.div`
	padding-top: 20px;
	max-width: 1200px;
	margin: auto;
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
			color: var(--accent-400);
		}
	}
`

export default Contact
