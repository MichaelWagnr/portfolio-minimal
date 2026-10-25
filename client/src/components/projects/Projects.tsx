import { useState } from 'react'
import ProjectData from './ProjectData'
import ProjectDetails from './ProjectDetails'
import ProjectTab from './ProjectTab'

function Projects() {
	const [selected, setSelected] = useState(ProjectData[0].name)
	const project = ProjectData.find((project) => project.name === selected)!

	return (
		<section
			id="projects"
			className="min-h-fit w-full bg-linear-to-b/srgb from-primary-bg-700 to-primary-bg-400">
			<div className="p-5 max-w-page mx-auto flex flex-col gap-2.5">
				<h2 className="text-primary-fg-300 text-center mb-7.5">Projects</h2>
				<div className="grid grid-cols-3 gap-2.5 max-tablet:flex max-tablet:overflow-x-auto max-tablet:snap-x max-tablet:p-0.5">
					{ProjectData.map((project) => (
						<ProjectTab
							key={project.name}
							project={project}
							checked={project.name === selected}
							onSelect={() => setSelected(project.name)}
						/>
					))}
				</div>
				<div className="border border-accent-900 rounded-[5px] overflow-hidden">
					<ProjectDetails project={project} />
				</div>
			</div>
		</section>
	)
}

export default Projects
