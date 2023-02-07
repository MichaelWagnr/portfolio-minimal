import styled from 'styled-components'
import Story from './Background'
import Studies from './Studies'

function About() {
	return (
		<Background id="about">
			<Container>
				<Story />
				<Studies />
			</Container>
		</Background>
	)
}

const Background = styled.section`
	min-height: fit-content;
	width: 100vw;
	background: var(--primary-bg-700);
	border-top: 1px solid var(--primary-fg-300);
`

const Container = styled.div`
	padding: 20px;
	max-width: 1200px;
	margin: auto;

	display: flex;
	gap: 20px;

	h2 {
		color: var(--primary-fg-300);
		text-align: center;
	}

	/* @media (max-width: 495px) { */
	@media (max-width: 732px) {
		flex-direction: column;
	}
`

export default About
