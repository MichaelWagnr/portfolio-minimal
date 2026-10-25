import { ReactNode } from 'react'

const Tech = ({ children }: { children: ReactNode }) => (
	<span className="text-accent-100">{children}</span>
)

const Summary = ({ children }: { children: ReactNode }) => (
	<span className="text-accent-300">{children}</span>
)

function Story() {
	return (
		<div className="flex-1 max-w-3xl mx-auto [&>p]:mb-2.5 [&>p]:indent-5">
			<div className="text-center mb-10">
				<h2 className="text-primary-fg-300">Background</h2>
				<h3 className="-mt-[30px]">
					<span className="text-p font-thin text-accent-900">
						How I got into programming - <Summary>TL</Summary>
						<Tech>DR</Tech>
					</span>
				</h3>
			</div>
			<p>
				In my mid 20s, I worked as a Manager for a company that had two Python
				Developers. I greatly admired their work and would often look curiously
				at their computer monitors filled with colourfully highlighted text.
				<Summary>
					{' '}
					I began learning <Tech>SQL</Tech> with the goal of helping write
					database queries for my coworkers, later turning my interests towards
					<Tech> Python</Tech>.
				</Summary>
			</p>
			<p>
				Relocating to Montréal, my focus shifted from coding to learning French
				and in my spare time playing piano. The challenge of thinking in another
				language, and translating dots on a page into musical performance gave
				me the practice in abstract thought and humility necessary to attempt
				programming again.
			</p>
			<p>
				<Summary>
					I learned <Tech>HTML</Tech>, <Tech>CSS</Tech>, <Tech>Git</Tech>,{' '}
					<Tech>JavaScript</Tech> and <Tech>React</Tech> through a combination
					of textbooks, online courses and other resources.
				</Summary>{' '}
				To my surprise, what I had previously researched of Python (loops, logic
				and functions) complimented my studies, and I was able to make progress
				in a short amount of time.{' '}
			</p>
			<p>
				<Summary>
					Later enrolled at Concordia University, I extended my understanding of
					React, <Tech>Node</Tech>, <Tech>MongoDB</Tech> and{' '}
					<Tech>TypeScript</Tech>, culminating in the ability to program complex
					applications
				</Summary>{' '}
				I could not have imagined myself building when I first started.
			</p>
			<p>
				<Summary>
					In 2023 I joined Connect it, developing custom <Tech>Angular</Tech>{' '}
					and <Tech>NestJS</Tech> web applications for dozens of clients.
				</Summary>{' '}
				Along the way I built custom app integrations and mentored several
				junior developers.
			</p>
		</div>
	)
}

export default Story
