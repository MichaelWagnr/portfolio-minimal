import styled from 'styled-components'

function SubHeading() {
	return (
		<Container>
			I'm a quiet creative, motivated by learning challenging subjects and
			helping others.
		</Container>
	)
}

const Container = styled.div`
	width: 357px;
	margin: 0px 0px 0px 11px;
	padding: 13px 0px 0px 5px;
	border-top: 0.5px solid var(--primary-fg-100);
	color: var(--primary-fg-100);
	font-weight: lighter;
	opacity: 0;
	animation-name: fadein;
	animation-duration: 0.6s;
	animation-timing-function: ease-out;
	animation-fill-mode: forwards;
	animation-delay: 0.6s;

	@keyframes fadein {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}
`

export default SubHeading
