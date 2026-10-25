import Story from './Background'
// import Studies from './Studies'

function About() {
	return (
		<section
			id="about"
			className="min-h-fit w-full bg-primary-bg-700 scroll-mt-[16vh]">
			<div className="p-5 max-w-page mx-auto flex gap-5 max-tablet:flex-col">
				<Story />
				{/* <Studies /> */}
			</div>
		</section>
	)
}

export default About
