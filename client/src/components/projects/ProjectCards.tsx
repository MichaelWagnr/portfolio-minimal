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
			<Description>
				<Heading>Description</Heading>
				<p>{project.data.description}</p>
			</Description>
		</Container>
	)
}

const Container = styled.div`
	border: 1px solid var(--accent-900);
	border-radius: 5px;
	overflow: hidden;
	width: 300px;
	height: 300px;
	transition: all 0.4s;

	&:hover {
		cursor: pointer;
		transform: scale(1.015) translateY(-2px);
		box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 30px;
	}
`

const Description = styled.div`
	width: fit-content;
	padding: 20px;
`

const Heading = styled.h5`
	/* font-weight: lighter; */
	font-size: var(--p);
	margin-bottom: 10px;
	color: var(--accent-900);
`

export default ProjectCards
