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
	/* margin-top: -110px; */
	height: 100vh;
	width: 100vw;
	background: var(--primary-bg-700);
	border-top: 1px solid var(--primary-fg-300);
	/* clip-path: polygon(0px 110px, 100% 0px, 100% 100%, 0% 100%); */
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
`

export default About
