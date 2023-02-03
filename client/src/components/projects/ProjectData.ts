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
			story: [''],
		},
	},
]

export default ProjectData
