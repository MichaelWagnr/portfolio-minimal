import Icon from '../tech/Icon'
import Icons from '../tech/Icons'

type Props = {
	technologies: string[]
	size: string
}

function ProjectIcons({ technologies, size }: Props) {
	const icons = Icons.filter((icon) => technologies.includes(icon.text))

	return (
		<div className="flex flex-wrap gap-2">
			{icons.map((icon) => (
				<div key={icon.text} title={icon.text}>
					<Icon
						color={icon.color}
						svg={icon.svg}
						fill={true}
						size={size}
					/>
				</div>
			))}
		</div>
	)
}

export default ProjectIcons
