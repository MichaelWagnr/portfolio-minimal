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
	padding-top: calc(50vh - 170px);
	padding-left: 10px;
	position: absolute;
	top: 0;
	height: 100vh;
`

export default Main
