import angular from 'devicon/icons/angular/angular-plain.svg?raw'
import css3 from 'devicon/icons/css3/css3-plain.svg?raw'
import express from 'devicon/icons/express/express-original.svg?raw'
import html5 from 'devicon/icons/html5/html5-plain.svg?raw'
import javascript from 'devicon/icons/javascript/javascript-plain.svg?raw'
import mongodb from 'devicon/icons/mongodb/mongodb-plain.svg?raw'
import nestjs from 'devicon/icons/nestjs/nestjs-original.svg?raw'
import postgresql from 'devicon/icons/postgresql/postgresql-plain.svg?raw'
import prisma from 'devicon/icons/prisma/prisma-original.svg?raw'
import react from 'devicon/icons/react/react-original.svg?raw'
import tailwind from 'devicon/icons/tailwindcss/tailwindcss-original.svg?raw'
import typescript from 'devicon/icons/typescript/typescript-plain.svg?raw'
// classic "JS" hexagon from devicon v2.15.1; newer releases switched to the faceted logo
import nodejs from './nodejs-plain.svg?raw'
// devicon has no Nx icon; simple-icons' Nx path rescaled to devicon's 128x128 grid
import nx from './nx.svg?raw'

export type Icon = {
	color: string
	text: string
	svg: string
}

const LANGUAGE = 'var(--color-accent-900)'
const FRAMEWORK = 'var(--color-accent-800)'
const TOOL = 'var(--color-accent-1000)'

// devicon files are full <svg> documents on a 128x128 grid; keep only the inner shapes
export const inner = (svg: string) => svg.replace(/<\/?svg[^>]*>/g, '')

// text doubles as the key ProjectData.technologies matches against
const Icons: Icon[] = [
	{ color: LANGUAGE, text: 'TYPESCRIPT', svg: inner(typescript) },
	{ color: LANGUAGE, text: 'JAVASCRIPT ES6+', svg: inner(javascript) },
	{ color: LANGUAGE, text: 'CSS3', svg: inner(css3) },
	{ color: LANGUAGE, text: 'HTML5', svg: inner(html5) },
	{ color: FRAMEWORK, text: 'ANGULAR', svg: inner(angular) },
	{ color: FRAMEWORK, text: 'REACT', svg: inner(react) },
	{ color: FRAMEWORK, text: 'NESTJS', svg: inner(nestjs) },
	{ color: FRAMEWORK, text: 'EXPRESS', svg: inner(express) },
	{ color: TOOL, text: 'NODE.JS', svg: inner(nodejs) },
	{ color: TOOL, text: 'TAILWIND', svg: inner(tailwind) },
	{ color: TOOL, text: 'POSTGRES', svg: inner(postgresql) },
	{ color: TOOL, text: 'MONGO DB', svg: inner(mongodb) },
	{ color: TOOL, text: 'PRISMA', svg: inner(prisma) },
	{ color: TOOL, text: 'NX MONOREPO', svg: inner(nx) },
]

export default Icons
