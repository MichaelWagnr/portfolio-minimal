import Heading from './Heading'
import SubHeading from './SubHeading'

function Main() {
	return (
		<main className="pl-2.5 min-h-[200px] h-[calc(60vh-60px)] flex flex-col justify-end max-w-page mx-auto max-phone:h-fit max-phone:pt-[50px]">
			<Heading />
			<SubHeading />
		</main>
	)
}

export default Main
