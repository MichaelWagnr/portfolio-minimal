function Header() {
	return (
		<header className="h-15 flex items-center justify-end pr-5 max-w-page mx-auto max-[500px]:justify-center max-[500px]:pr-0">
			<div className="flex gap-6 *:text-[1.1rem] *:hover:text-accent-1000">
				<a href="#about">About</a>
				<a href="#projects">Projects</a>
				<a href="#contact">
					<span className="text-accent-900 hover:text-accent-1000">Contact</span>
				</a>
			</div>
		</header>
	)
}

export default Header
