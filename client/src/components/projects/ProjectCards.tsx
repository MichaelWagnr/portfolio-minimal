import styled from 'styled-components'
import Icons from '../tech/Icons'
import { Project } from './ProjectData'
import ProjectHeader from './ProjectHeader'

type Props = {
	project: Project
}

function ProjectCards({ project }: Props) {
	const projectIcons = Icons.filter((icon) =>
		project.data.technologies.includes(icon.text)
	)

	return (
		<Container>
			<ProjectHeader name={project.name} icons={projectIcons} />
		</Container>
	)
}

const Container = styled.div`
	border: 1px solid var(--accent-900);
	border-radius: 5px;
	overflow: hidden;
`

export default ProjectCards
