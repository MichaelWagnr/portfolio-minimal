import styled from 'styled-components'

function Studies() {
	return (
		<Container>
			<Heading>
				<h2>Studies</h2>
				<h3>
					<span className="a">School </span>
					<span className="c">Books </span>
					<span className="b">Courses </span>
				</h3>
			</Heading>
			<Lists>
				<ul className="a">
					<li>Concordia University Web Development Diploma</li>
				</ul>
				<ul className="c">
					<li>Programming TypeScript - Boris Cherny</li>
					<li>Eloquent JavaScript - Marijn Haverbeke</li>
					<li>HF Git - Raju Gandhi</li>
					<li>Grid Systems - Elam, Kimberly</li>
					<li>JavaScript and jQuery - Jon Duckett</li>
					<li>Web Design with HTML, CSS - Jon Duckett</li>
					<li>HF JavaScript Programming - Eric Freeman</li>
					<li>HF HTML and CSS - Elisabeth Robson</li>
				</ul>
				<ul className="b">
					<li>Clean Code - Dec 2022</li>
					<li>Mastering Regular Expressions - Oct 2022</li>
					<li>Node.js, Express, MongoDB & More - Jun 2022</li>
					<li>React For Beginners - Nov 2021</li>
					<li>CSS Grid - Oct 2021</li>
					<li>Beginner JavaScript - Sept 2021</li>
				</ul>
			</Lists>
		</Container>
	)
}

const Container = styled.div`
	h2 {
		color: var(--primary-fg-300);
		text-align: center;
	}

	.a {
		color: var(--accent-700);
	}
	.b {
		color: var(--accent-800);
	}
	.c {
		color: var(--accent-1000);
	}
	.d {
		color: var(--primary-fg-300);
	}

	flex: 1;
`

const Heading = styled.div`
	text-align: center;
	margin-bottom: 40px;

	h2 {
		color: var(--primary-fg-300);
	}

	h3 {
		margin-top: -30px;
	}

	span {
		font-size: var(--p);
		font-weight: lighter;
	}
`

const Lists = styled.div`
	display: grid;
	justify-content: center;

	li {
		list-style: inside;
		@media (max-width: 495px) {
			list-style: none;
		}
	}
`

export default Studies
