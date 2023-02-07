import styled from 'styled-components'
import Heading from './Heading'
import SubHeading from './SubHeading'

function Main() {
	return (
		<Container>
			<Heading />
			<SubHeading />
		</Container>
	)
}

const Container = styled.main`
	padding-left: 10px;
	min-height: 200px;
	height: calc(60vh - 100px);
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	max-width: 1200px;
	margin: auto;

	@media (max-width: 495px) {
		height: fit-content;
		padding-top: 50px;
	}
`

export default Main
