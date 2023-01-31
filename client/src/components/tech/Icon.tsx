import styled from 'styled-components'

type Props = {
	color: string
	text: string
	textRotation: string
	svg: string[]
	fill?: boolean
}

const SMALL = '55px'
const LARGE = '150px'

function Icon({ color, text, textRotation, svg, fill }: Props) {
	return (
		<SVG
			width={fill ? SMALL : LARGE}
			height={fill ? SMALL : LARGE}
			viewBox="0 -50 200 250"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<defs>
				<path
					d="M15.555599999999998,100A84.4444,84.4444 0 1 1184.4444,100A84.4444,84.4444 0 1"
					id="textcurve"
				/>

				<filter
					id="glow"
					filterUnits="userSpaceOnUse"
					x="-50%"
					y="-50%"
					width="200%"
					height="200%">
					<feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur5" />
					<feGaussianBlur
						in="SourceGraphic"
						stdDeviation="10"
						result="blur10"
					/>
					<feGaussianBlur
						in="SourceGraphic"
						stdDeviation="20"
						result="blur20"
					/>
					<feGaussianBlur
						in="SourceGraphic"
						stdDeviation="30"
						result="blur30"
					/>
					<feGaussianBlur
						in="SourceGraphic"
						stdDeviation="50"
						result="blur50"
					/>
					<feMerge result="blur-merged">
						<feMergeNode in="blur10" />
						<feMergeNode in="blur20" />
						<feMergeNode in="blur30" />
						<feMergeNode in="blur50" />
					</feMerge>
					<feColorMatrix
						result="blur"
						in="blur-merged"
						type="matrix"
						values="0 0 0 0 0
                             0 0 0 0 0
                             0 0 0 0 0
                             0 0 0 1 0"
					/>
					<feMerge>
						<feMergeNode in="blur" />
						<feMergeNode in="blur5" />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>
			</defs>

			{fill ? null : (
				<>
					<text dx={textRotation}>
						<textPath xlinkHref="#textcurve" fill={color}>
							{text}
						</textPath>
					</text>

					<circle cx="100" cy="100" r="78.8889" stroke={color} />
				</>
			)}

			{svg.map((path, index) => (
				<path
					d={path}
					key={index}
					stroke={fill ? 'black' : color}
					fill={fill ? color : ''}
				/>
			))}
		</SVG>
	)
}

const SVG = styled.svg`
	text {
		/* font-size: 1.4rem; */
		font-size: 1.06rem;
		font-family: Arial, Helvetica, sans-serif;
		letter-spacing: 5px;
	}

	path,
	circle,
	text {
		/* filter: url(#glow); */
	}
`

export default Icon
