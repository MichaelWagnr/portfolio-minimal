function Heading() {
	return (
		<div className="relative w-fit p-2.5">
			<h1 className="relative right-[3px] top-[9px] max-phone:leading-[60px] max-phone:-top-5">
				Michael Wagner
			</h1>
			<h2 className="text-h3 animate-subtitle before:content-['Montréal_based'] before:absolute before:bottom-[50px] before:left-[13px] before:text-h5 before:font-thin before:italic before:tracking-[1.5px] before:text-primary-fg-300 max-phone:text-h4 max-phone:before:bottom-[42px] max-phone:before:text-p">
				Full Stack Developer
			</h2>
			<img
				className="absolute -z-1 animate-logo max-phone:hidden"
				src="mtlnobg.png"
				alt="Montréal city logo"
			/>
		</div>
	)
}

export default Heading
