import { Project } from './ProjectData'
import ProjectIcons from './ProjectIcons'

type Props = {
	project: Project
	checked: boolean
	onSelect: () => void
}

function ProjectTab({ project, checked, onSelect }: Props) {
	return (
		<label
			className={`relative flex flex-col gap-1 px-3.5 py-2.5 rounded-[5px] max-tablet:min-w-60 max-tablet:snap-start border bg-primary-bg-700 cursor-pointer transition-all duration-300 has-focus-visible:outline-2 has-focus-visible:outline-accent-700 ${
				checked
					? 'border-accent-900'
					: 'border-primary-bg-200 opacity-60 hover:opacity-100 hover:border-accent-800'
			}`}>
			{/* a real radio input gives arrow-key switching and screen reader support for free */}
			<input
				type="radio"
				name="project"
				className="sr-only"
				checked={checked}
				onChange={onSelect}
			/>
			<div className="flex items-center justify-between gap-2.5">
				<h3 className="text-p text-accent-900">{project.name}</h3>
				<div className="opacity-60">
					<ProjectIcons technologies={project.data.technologies} size="12px" />
				</div>
			</div>
			<p className="text-[0.8rem] leading-snug text-primary-fg-200 line-clamp-2">
				{project.data.summary}
			</p>
		</label>
	)
}

export default ProjectTab
