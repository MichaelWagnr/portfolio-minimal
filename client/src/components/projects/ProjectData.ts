export type Project = {
	name: string
	data: {
		technologies: string[]
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
		},
	},
	{
		name: 'Royal Mint',
		data: {
			technologies: ['JAVASCRIPT ES6+', 'REACT', 'CSS3'],
		},
	},
]

export default ProjectData
