import styled from 'styled-components'
import bg from '/scuffed.jpg'
import Icon from './Icon'
import Icons from './Icons'

function Tech() {
	return (
		<Background>
			<Container>
				<Heading>
					<h2>Technologies</h2>
					<h3>
						<span className="a">Languages </span>
						<span className="b">Frameworks </span>
						<span className="c">Tools </span>
					</h3>
				</Heading>
				<IconContainer>
					{Icons.map((icon) => (
						<Icon
							key={icon.text}
							color={icon.color}
							text={icon.text}
							textRotation={icon.textRotation}
							svg={icon.svg}
						/>
					))}
				</IconContainer>
			</Container>
		</Background>
	)
}

const Background = styled.section`
	min-height: fit-content;
	width: 100vw;
	background: linear-gradient(rgb(26, 27, 38, 1), rgba(0, 0, 0, 0.3)),
		url(${bg});
	background-size: cover;
	opacity: 0;
	animation-name: fadein;
	animation-duration: 1s;
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

	@media (max-width: 495px) {
		background-size: contain;
	}
`

const Container = styled.div`
	display: grid;
	place-content: center;
	gap: 60px;
	max-width: 1200px;
	margin: auto;
	padding: 40vh 20px 25vh;

	@media (max-width: 495px) {
		padding: 200px 5px 100px;
	}
`

const Heading = styled.div`
	text-align: center;

	h2 {
		color: var(--primary-fg-300);
	}

	h3 {
		margin-top: -30px;
	}

	span {
		font-size: var(--p);
		font-weight: lighter;
		&.a {
			color: var(--accent-900);
		}
		&.b {
			color: var(--accent-800);
		}
		&.c {
			color: var(--accent-1000);
		}
	}
`

const IconContainer = styled.div`
	width: fit-content;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;

	@media (max-width: 495px) {
		& > * {
			width: 100px;
			height: 100px;
		}
	}
`

export default Tech
