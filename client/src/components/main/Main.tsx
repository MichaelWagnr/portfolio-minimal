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
	padding-top: calc(50vh - 260px);
	padding-left: 10px;
	top: 0;
	/* height: calc(100vh - 100px); */
	height: calc(60vh - 100px);
	max-width: 1200px;
	margin: auto;
`

export default Main
