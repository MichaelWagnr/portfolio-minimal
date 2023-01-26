import styled from 'styled-components'
import Heading from './Heading'

function Main() {
	return (
		<Container>
			<Heading />
		</Container>
	)
}

const Container = styled.main`
	padding-top: calc(70vh / 2);
	padding-left: 10px;
	position: absolute;
	top: 0;
	height: 100vh;
`

export default Main
