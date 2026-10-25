function Footer() {
	return (
		<footer className="bg-primary-bg-500">
			<div className="h-[50px] flex items-center justify-end p-5 gap-5 max-w-page mx-auto">
				<p className="flex-1 text-h6">Built with React + TypeScript + Tailwind</p>
				<div className="flex min-w-fit gap-5 max-tablet:justify-end *:text-p *:hover:text-primary-fg-100">
					<a
						href="https://github.com/MichaelWagnr"
						target="_blank"
						className="text-accent-1000">
						GitHub
					</a>
					<a
						href="https://www.linkedin.com/in/mwagner514"
						target="_blank"
						className="text-accent-700">
						LinkedIn
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
