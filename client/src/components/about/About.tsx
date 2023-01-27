import styled from 'styled-components'
import bg from '../../../public/scuffed.jpg'

function About() {
	return (
		<Background>
			<Container>hi</Container>
		</Background>
	)
}

const Background = styled.section`
	height: 100vh;
	width: 100vw;
	background: linear-gradient(rgb(26, 27, 38, 1), rgba(0, 0, 0, 0.4)),
		url(${bg});
	background-size: cover;
`

const Container = styled.div`
	opacity: 1;
	max-width: 1200px;
	margin: auto;
	padding: 50px 20px;
`

export default About
