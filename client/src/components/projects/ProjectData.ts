export type Project = {
	name: string
	data: {
		technologies: string[]
		mainImgSrc: string
		mainImgAlt: string
		description: string
		githubUrl: string
		deploymentUrl: string
		videoUrl: string
		story: string[]
		lessons: string[]
		takeaways: string[]
	}
}

const ProjectData: Project[] = [
	{
		name: 'Patch Diver',
		data: {
			technologies: [
				'TYPESCRIPT',
				'REACT',
				'STYLED COMPONENTS',
				'NODE.JS',
				'EXPRESS',
				'MONGO DB',
				'FIGMA',
			],
			mainImgSrc: '/patchdiver.png',
			mainImgAlt: 'Browser screenshot of Patch Diver app',
			description:
				'Patch Diver is an online patch editor for hardware synthesizers. With the ability to load, save, share and browse sounds.',
			githubUrl: 'https://github.com/MichaelWagnr/patchdiver',
			deploymentUrl: 'https://www.patchdiver.com/',
			videoUrl: 'https://vimeo.com/791977987',
			story: [
				"In the mid 1980s, with the success of the Yamaha DX7, a number of synthesizer manufacturers turned to removing sliders and encoders on the panels of their synthesizers in favor of a digital screen and a number of button combinations to navigate menus. These synthesizers are notoriously tedius to program and are often quite under-valued on the used market. Sounds are typically patched with sysex MIDI messages, and the conventional method to upload these sounds can entail over-writing any personally-saved sounds. If this wasn't intimidating enough, sysex messages are often presented as a wall of hexidecimal values.",

				'Patch Diver is my way of creating what I wish existed for synthesizer enthusiasts. The MVP is compatible with the Yamaha DX100 but because of similarities between other Yamaha synthesizer models from the same period, it should hypothetically work with a number of models.',
			],
			lessons: [
				'Working with the Web MIDI API',
				'Converting 60+ components to TypeScript',
				'Deploying and handling CORS issues',
				'JWT authentication',
				'Building UIs with SVGs',
				"Binary two's complement + 8BitInts",
				'Making 3rd party API calls on the BE',
				'State management in a larger application',
			],
			takeaways: [
				'Due to the time crunch some complexity was added to existing components and functions that ideally would have branched off into more specific parts.',
				'Building authentication from the ground up was a rewarding experience, but I will need to add "reset password" functionality before promoting the app to real users.',
			],
		},
	},
	{
		name: 'Royal Mint',
		data: {
			technologies: ['JAVASCRIPT ES6+', 'REACT', 'CSS3'],
			mainImgSrc: '/royalmint.png',
			mainImgAlt: 'Browser screenshot of Royal Mint App',
			description:
				'A React app that tracks shared expenses/purchases between two people.',
			githubUrl: 'https://github.com/MichaelWagnr/shared-expense-app',
			deploymentUrl: 'https://michaelwagnr.github.io/shared-expense-app/',
			videoUrl: '',
			story: [
				'Prior to learning how to build applications, I built a sort of "no-code" solution to tracking expenses between me and someone I was living with at the time. It was a few google sheets that took in information in the form of a survey and calculated the totals of purchases and how much each party owed one another. I worked many hours on it and was really happy with the result.',
				'As an introduction into building React applications, I re-imagined this solution in the form of a web app. It was pretty primitive, data was persisted in local storage, and there was questionable state management. However, I was again quite happy with the result.',
			],
			lessons: [
				'Building a React app from scratch',
				'Persisting data in local storage',
				'React Hooks',
				'Designing an single page app',
			],
			takeaways: [
				'There were a couple bugs at the point of building this that are likely related to redudant useState hooks. It would be interesting to try remaking this from scratch.',
			],
		},
	},
]

export default ProjectData
