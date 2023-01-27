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
	padding-top: calc(50vh - 177.88px);
	padding-left: 10px;
	position: absolute;
	top: 0;
	height: 100vh;
`

export default Main
