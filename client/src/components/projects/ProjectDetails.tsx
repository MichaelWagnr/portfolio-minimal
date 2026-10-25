import { Project } from './ProjectData'
import ProjectIcons from './ProjectIcons'

type Props = {
	project: Project
}

const link =
	'border border-accent-1000 text-accent-1000 rounded-[5px] py-0.5 px-2.5 w-[70px] text-center transition-all duration-400 scale-[1.02] shadow-[0_2.5px_rgba(240,46,170,0.4),0_5px_rgba(240,46,170,0.3)] hover:scale-100 hover:translate-y-[2.5px] hover:shadow-[0_5px_12px_rgba(240,46,170,0.3),0_2.5px_rgba(240,46,170,0.4)]'

const heading = 'mb-5 text-accent-900'

function ProjectDetails({ project }: Props) {
	const { githubUrl, deploymentUrl, videoUrl, lessons, takeaways } =
		project.data

	const links = [
		['Github', githubUrl],
		['View', deploymentUrl],
		['Video', videoUrl],
	].filter(([, url]) => url)
	const hasLessons = !!(lessons?.length || takeaways?.length)

	// left column: Description + Story, right column: Links + Lessons (either may be missing)
	return (
		<div>
			<div className="py-5 bg-primary-bg-700 border-b border-accent-900 grid justify-items-center gap-1 text-accent-900 text-center">
				<h3 className="text-[2rem] leading-tight">{project.name}</h3>
				<p className="text-[0.8rem] italic text-primary-fg-300">Technologies used:</p>
				<ProjectIcons technologies={project.data.technologies} size="30px" />
			</div>
			{project.data.mainImgAlt && (
				<img
					className="rounded-[5px] w-[98%] m-[1%]"
					src={project.data.mainImgSrc}
					alt={project.data.mainImgAlt}
				/>
			)}

			<div
				className="grid gap-y-5 gap-x-10 grid-cols-[3fr_2fr] grid-rows-[1fr_max-content] pt-5 px-[50px] pb-[50px] [&_p]:indent-5 max-tablet:flex max-tablet:flex-col max-tablet:p-5">
				<div className="col-start-1">
					<h5 className={heading}>Description</h5>
					<p>{project.data.description}</p>
				</div>

				{links.length > 0 && (
					<div className="col-start-2">
						<h5 className={heading}>Links</h5>
						<div className="flex gap-5 flex-wrap">
							{links.map(([label, url]) => (
								<a key={label} className={link} target="_blank" href={url}>
									{label}
								</a>
							))}
						</div>
					</div>
				)}

				<div className="col-start-1">
					<h5 className={heading}>Story</h5>
					{project.data.story.map((paragraph, index) => (
						<p key={index}>{paragraph}</p>
					))}
				</div>

				{hasLessons && (
					<div className="col-start-2">
						<h5 className={heading}>
							What I learned{' '}
							<span className="text-primary-fg-300">+ Takeaways</span>
						</h5>
						<ul className="list-disc text-accent-900">
							{lessons?.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
						<ul className="list-disc text-primary-fg-300">
							{takeaways?.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	)
}

export default ProjectDetails
