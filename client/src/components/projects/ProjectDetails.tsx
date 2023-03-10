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
			{project.data.mainImgAlt && (
				<MainImg
					src={project.data.mainImgSrc}
					alt={project.data.mainImgAlt}
					width="98%"
				/>
			)}

			<ContentGrid>
				<div>
					<Heading>Description</Heading>
					<p>{project.data.description}</p>
				</div>

				<div>
					<Heading>Links</Heading>
					<LinkContainer>
						<Link target="_blank" href={project.data.githubUrl}>
							Github
						</Link>
						<Link target="_blank" href={project.data.deploymentUrl}>
							View
						</Link>
						{project.data.videoUrl && (
							<Link target="_blank" href={project.data.videoUrl}>
								Video
							</Link>
						)}
					</LinkContainer>
				</div>

				<div>
					<Heading>Story</Heading>
					{project.data.story.map((paragraph, index) => (
						<p key={index}>{paragraph}</p>
					))}
				</div>
				<div>
					<Heading>
						What I learned <span>+ Takeaways</span>
					</Heading>
					<ul className="lessons">
						{project.data.lessons.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
					<ul className="takeaways">
						{project.data.takeaways.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
			</ContentGrid>
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

const ContentGrid = styled.div`
	display: grid;
	row-gap: 20px;
	column-gap: 40px;
	grid-template-columns: 3fr 2fr;
	grid-template-rows: 1fr max-content;
	padding: 20px 50px 50px;

	p {
		text-indent: 20px;
	}

	.lessons {
		color: var(--accent-900);
	}

	.takeaways {
		color: var(--primary-fg-300);
	}

	li {
		list-style: disc;
	}

	/* @media (max-width: 495px) { */
	@media (max-width: 732px) {
		display: flex;
		flex-direction: column;
		padding: 20px;
	}
`

const Heading = styled.h5`
	margin-bottom: 20px;
	color: var(--accent-900);

	span {
		color: var(--primary-fg-300);
	}
`

const LinkContainer = styled.div`
	display: flex;
	gap: 20px;
	flex-wrap: wrap;
`

const Link = styled.a`
	border: 1px solid var(--accent-1000);
	color: var(--accent-1000);
	text-decoration: none;
	border-radius: 5px;
	padding: 2px 10px;
	width: 70px;
	text-align: center;
	transition: all 0.4s;
	box-shadow: rgba(240, 46, 170, 0.4) 0px 2.5px, rgba(240, 46, 170, 0.3) 0px 5px;
	transform: scale(1.02);

	&:hover {
		transform: scale(1) translateY(2.5px);
		box-shadow: rgba(240, 46, 170, 0.3) 0px 5px 12px,
			rgba(240, 46, 170, 0.4) 0px 2.5px;
	}
`

export default ProjectDetails
