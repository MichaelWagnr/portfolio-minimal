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
	padding-top: 100px;
`

export default Main
