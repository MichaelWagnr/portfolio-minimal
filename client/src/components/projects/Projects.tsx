import styled from 'styled-components'

function Projects() {
	return (
		<Background id="projects">
			<Container>
				<h2>Projects</h2>
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
	background: linear-gradient(var(--primary-bg-700), var(--primary-bg-400));
	/* border-top: 1px solid var(--primary-fg-300); */
	/* clip-path: polygon(0px 110px, 100% 0px, 100% 100%, 0% 100%); */
`

const Container = styled.div`
	padding-top: 20px;
	max-width: 1200px;
	margin: auto;

	h2 {
		color: var(--primary-fg-300);
		text-align: center;
	}
`

export default Projects
