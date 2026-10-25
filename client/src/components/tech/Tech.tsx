import Icon from './Icon'
import Icons from './Icons'

function Tech() {
	return (
		<section className="min-h-fit w-full bg-[image:linear-gradient(rgb(26,27,38),rgba(0,0,0,0.3)),url(/scuffed.jpg)] bg-cover opacity-0 animate-fadein max-tablet:bg-contain">
			<div className="grid place-content-center gap-[60px] max-w-page mx-auto pt-[40vh] px-5 pb-[25vh] max-phone:pt-[38vh] max-phone:px-[5px] max-phone:pb-[100px]">
				<div className="text-center">
					<h2 className="text-primary-fg-300">Technologies</h2>
					<h3 className="-mt-[30px] *:text-p *:font-thin">
						<span className="text-accent-900">Languages </span>
						<span className="text-accent-800">Frameworks </span>
						<span className="text-accent-1000">Tools </span>
					</h3>
				</div>
				<div className="w-fit flex flex-wrap justify-around max-phone:*:size-[120px]">
					{Icons.map((icon) => (
						<Icon
							key={icon.text}
							color={icon.color}
							text={icon.text}
							svg={icon.svg}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Tech
