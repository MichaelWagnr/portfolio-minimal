import styled from 'styled-components'
import { Project } from './ProjectData'
import Icons from './../tech/Icons'
import ProjectHeader from './ProjectHeader'

type Props = {
	project: Project
}

function ProjectDetails({ project }: Props) {
	const projectIcons = Icons.filter((icon) =>
		project.data.technologies.includes(icon.text)
	)

	return (
		<Container>
			<ProjectHeader name={project.name} icons={projectIcons} />
			<MainImg src={project.data.mainImgSrc} alt={project.data.mainImgAlt} />
		</Container>
	)
}

const Container = styled.div`
	border: 1px solid var(--accent-900);
	border-radius: 5px;
	overflow-x: hidden;
	min-height: fit-content;
`

const MainImg = styled.img`
	border-radius: 5px;
	width: 98%;
	margin: 1% 1%;
`

export default ProjectDetails
