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
			mainImgSrc: '/patchdiverbrowser.png',
			mainImgAlt: 'Browser screenshot of Patch Diver app',
			description:
				'Patch Diver is an online patch editor for hardware synthesizers. With the ability to load, save, share and browse sounds.',
			githubUrl: 'https://github.com/MichaelWagnr/patchdiver',
			deploymentUrl: 'https://www.patchdiver.com/',
			videoUrl: 'https://vimeo.com/791977987',
		},
	},
	{
		name: 'Royal Mint',
		data: {
			technologies: ['JAVASCRIPT ES6+', 'REACT', 'CSS3'],
			mainImgSrc: '',
			mainImgAlt: '',
			description:
				'A React app that tracks shared expenses/purchases between two people.',
			githubUrl: 'https://github.com/MichaelWagnr/shared-expense-app',
			deploymentUrl: 'https://michaelwagnr.github.io/shared-expense-app/',
			videoUrl: '',
		},
	},
]

export default ProjectData
