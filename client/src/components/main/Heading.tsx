import styled from 'styled-components'

function Heading() {
	return (
		<Container>
			<h1>Michael Wagner</h1>
			<h2>Full Stack Developer</h2>
			<Logo src="mtlnobg.png" alt="Montréal city logo" />
		</Container>
	)
}

const Container = styled.div`
	position: relative;
	width: fit-content;
	padding: 10px;

	h1 {
		position: relative;
		right: 3px;
		top: 9px;

		@media (max-width: 495px) {
			font-size: var(--h1);
			line-height: 60px;
			top: -20px;
		}
	}

	h2 {
		font-size: var(--h3);

		&::before {
			content: 'Montréal based';
			color: var(--primary-fg-300);
			position: absolute;
			font-size: var(--h5);
			font-weight: lighter;
			font-style: italic;
			bottom: 50px;
			left: 13px;
			letter-spacing: 1.5px;
		}

		animation-name: subtitle;
		animation-duration: 0.6s;
		animation-timing-function: ease-in;
		animation-fill-mode: forwards;

		@media (max-width: 495px) {
			font-size: var(--h4);

			&::before {
				bottom: 42px;
				font-size: var(--p);
			}
		}
	}

	@keyframes subtitle {
		0% {
			color: var(--primary-fg-300);
		}

		99% {
			color: var(--primary-fg-300);
		}

		100% {
			color: var(--accent-900);
		}
	}
`

const Logo = styled.img`
	position: absolute;
	z-index: -1;
	animation-name: logo;
	animation-duration: 0.6s;
	animation-timing-function: ease-out;
	animation-fill-mode: forwards;

	@keyframes logo {
		from {
			width: 180px;
			filter: grayscale(10) invert(0.2);
			opacity: 0;
			bottom: 22px;
			right: -9px;
			rotate: 360deg;
		}

		to {
			width: 40px;
			filter: grayscale(0) invert(0.25);
			opacity: 1;
			bottom: 22px;
			right: 89px;
			rotate: 0deg;
		}
	}

	@media (max-width: 495px) {
		display: none;
	}
`

export default Heading
