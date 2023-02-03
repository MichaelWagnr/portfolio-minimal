import { useRef, useState } from 'react'
import styled from 'styled-components'
import ProjectCards from './ProjectCards'
import ProjectDetails from './ProjectDetails'
import ProjectData from './ProjectData'

function Projects() {
	const projectRef = useRef<HTMLDivElement>(null!)

	const [currentlyViewed, setCurrentlyViewed] = useState(
		ProjectData.filter((project) => project.name === 'Patch Diver')[0]
	)

	const unselectedProjects = ProjectData.filter(
		(project) => project.name !== currentlyViewed.name
	)

	const scrollToProject = (): void => {
		projectRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	}

	return (
		<Background id="projects">
			<Container>
				<h2>Projects</h2>
				<ProjectContainer ref={projectRef}>
					<ProjectDetails project={currentlyViewed} />
				</ProjectContainer>
				<h4>click to view</h4>
				<CardContainer>
					{unselectedProjects.map((project) => (
						<ProjectCards
							key={project.name}
							project={project}
							handleClick={setCurrentlyViewed}
							scrollToProject={scrollToProject}
						/>
					))}
				</CardContainer>
			</Container>
		</Background>
	)
}

const Background = styled.section`
	min-height: fit-content;
	padding-bottom: 20px;
	width: 100vw;
	background: var(--primary-bg-600);
	background: linear-gradient(var(--primary-bg-700), var(--primary-bg-400));
`

const Container = styled.div`
	padding: 20px;
	max-width: 1200px;
	margin: auto;

	display: flex;
	flex-direction: column;

	h2,
	h4 {
		color: var(--primary-fg-300);
		text-align: center;
		margin-bottom: 40px;
	}

	h4 {
		margin: 20px;
	}
`

const ProjectContainer = styled.div`
	padding-top: 5px;
`

const CardContainer = styled.div`
	display: flex;
	overflow-x: scroll;
	gap: 10px;
	padding: 10px;
`

export default Projects
