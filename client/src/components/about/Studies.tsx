function Studies() {
	return (
		<div className="flex-1">
			<div className="text-center mb-10">
				<h2 className="text-primary-fg-300">Studies</h2>
				<h3 className="-mt-[30px] *:text-p *:font-thin">
					<span className="text-accent-700">School </span>
					<span className="text-accent-1000">Books </span>
					<span className="text-accent-800">Courses </span>
				</h3>
			</div>
			<div className="grid justify-center *:list-inside *:list-disc max-phone:*:list-none">
				<ul className="text-accent-700">
					<li>Concordia University Web Development Diploma</li>
				</ul>
				<ul className="text-accent-1000">
					<li>Programming TypeScript - Boris Cherny</li>
					<li>Eloquent JavaScript - Marijn Haverbeke</li>
					<li>HF Git - Raju Gandhi</li>
					<li>Grid Systems - Elam, Kimberly</li>
					<li>JavaScript and jQuery - Jon Duckett</li>
					<li>Web Design with HTML, CSS - Jon Duckett</li>
					<li>HF JavaScript Programming - Eric Freeman</li>
					<li>HF HTML and CSS - Elisabeth Robson</li>
				</ul>
				<ul className="text-accent-800">
					<li>Clean Code - Dec 2022</li>
					<li>Mastering Regular Expressions - Oct 2022</li>
					<li>Node.js, Express, MongoDB - Jun 2022</li>
					<li>React For Beginners - Nov 2021</li>
					<li>CSS Grid - Oct 2021</li>
					<li>Beginner JavaScript - Sept 2021</li>
				</ul>
			</div>
		</div>
	)
}

export default Studies
