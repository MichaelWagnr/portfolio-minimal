export type Project = {
	name: string
	data: {
		technologies: string[]
		mainImgSrc: string
		mainImgAlt: string
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
		},
	},
	{
		name: 'Royal Mint',
		data: {
			technologies: ['JAVASCRIPT ES6+', 'REACT', 'CSS3'],
			mainImgSrc: '',
			mainImgAlt: '',
		},
	},
]

export default ProjectData
