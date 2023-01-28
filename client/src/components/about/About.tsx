import styled from 'styled-components'
import bg from '../../../public/scuffed.jpg'
import Icon from './Icon'
import Icons from './Icons'

function About() {
	return (
		<Background>
			<Container>
				{Icons.map((icon) => (
					<Icon
						key={icon.text}
						color={icon.color}
						text={icon.text}
						textRotation={icon.textRotation}
						svg={icon.svg}
						svg2={icon?.svg2}
						svg3={icon?.svg3}
					/>
				))}
			</Container>
		</Background>
	)
}

const Background = styled.section`
	height: 130vh;
	width: 100vw;
	background: linear-gradient(rgb(26, 27, 38, 1), rgba(0, 0, 0, 0.4)),
		url(${bg});
	background-size: cover;
	opacity: 0;
	animation-name: fadein;
	animation-duration: 0.2s;
	animation-timing-function: linear;
	animation-fill-mode: forwards;

	@keyframes fadein {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}
`

const Container = styled.div`
	opacity: 1;
	max-width: 1200px;
	margin: auto;
	padding: 50px 20px;

	padding: 500px 300px;
`

export default About
