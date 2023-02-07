import styled from 'styled-components'
import Form from './Form'

function Contact() {
	return (
		<Background id="contact">
			<Container>
				<ContactCard>
					<Heading>
						<h2>Contact</h2>
					</Heading>
					<p>
						Interested in working together? Let me know if there is anything I
						can do for you!{' '}
						<span>
							I am currently available for Montréal-based or remote Developer
							positions.
						</span>{' '}
						Or feel free to reach out if you have any questions; would like to
						meet for coffee or talk shop.
					</p>

					<Form />

					{/* <LinkContainer>
						<Link
							href="https://www.linkedin.com/in/michael-wagner-9339881a0/"
							target="_blank">
							LinkedIn
						</Link>
						<Link href="mailto:michaelwagner780@gmail.com">Email</Link>
					</LinkContainer> */}
				</ContactCard>
			</Container>
		</Background>
	)
}

const Background = styled.section`
	height: 100vh;
	min-height: fit-content;
	width: 100vw;
	background: var(--primary-bg-600);
	background: linear-gradient(var(--primary-bg-700), var(--primary-bg-700));
	border-top: 1px solid var(--primary-fg-300);
`

const Container = styled.div`
	height: 100vh;
	min-height: fit-content;
	display: grid;
	place-content: center;
	max-width: 1200px;
	margin: auto;
`

const ContactCard = styled.div`
	border: 1px solid var(--accent-900);
	border-radius: 5px;
	max-width: 520px;
	padding: 10px 20px 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;

	span {
		color: var(--accent-1000);
	}

	@media (max-width: 560px) {
		border: none;
		padding: 0px 20px 10px;
	}
`

const Heading = styled.div`
	h2 {
		color: var(--accent-900);
	}
`

const LinkContainer = styled.div`
	width: fit-content;
	margin-top: 20px;
`

const Link = styled.a`
	color: var(--accent-900);
	border: 1px solid var(--accent-900);
	display: inline-block;
	width: 100px;
	border-radius: 5px;
	margin: 0px 10px;
	padding: 5px 20px;
	text-decoration: none;
	transition: all 0.4s;

	&:hover {
		color: var(--accent-700);
		border: 1px solid var(--accent-700);
		/* transform: scale(1.02); */
		box-shadow: rgba(42, 195, 222, 0.3) 0px 5px 25px inset,
			rgba(42, 195, 222, 0.3) 0px 0px 20px;
	}
`

export default Contact
