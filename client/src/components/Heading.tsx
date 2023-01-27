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

		/* animation-name: title;
		animation-duration: 0.5s;
		animation-timing-function: ease-in;
		animation-fill-mode: forwards; */
	}

	h2 {
		font-size: var(--h3);
		color: var(--accent-900);

		&::before {
			content: 'Montréal Based';
			color: var(--primary-fg-300);
			position: absolute;
			font-size: var(--h5);
			bottom: 50px;
		}

		animation-name: subtitle;
		animation-duration: 1s;
		animation-timing-function: ease-in;
		animation-fill-mode: forwards;
	}

	@keyframes title {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}

	@keyframes subtitle {
		0% {
			color: var(--primary-fg-300);
			/* opacity: 0; */
		}

		50% {
			color: var(--primary-fg-300);
			/* opacity: 1; */
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
	animation-duration: 1s;
	animation-timing-function: ease-in-out;
	animation-fill-mode: forwards;

	@keyframes logo {
		from {
			width: 160px;
			filter: grayscale(10) invert(0.2);
			opacity: 0;
			bottom: 22px;
			right: -9px;
			rotate: 270deg;
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
`

export default Heading
