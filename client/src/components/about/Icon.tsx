import styled from 'styled-components'

type Props = {
	color: string
	text: string
	textRotation: string
	svg: string
	svg2?: string
	svg3?: string
}

function Icon({ color, text, textRotation, svg, svg2, svg3 }: Props) {
	return (
		<SVG
			width="200"
			height="200"
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

			<text dx={textRotation}>
				<textPath xlinkHref="#textcurve" fill={color}>
					{text}
				</textPath>
			</text>

			<circle cx="100" cy="100" r="78.8889" stroke={color} />

			<path d={svg} stroke={color} />

			{svg2 && <path d={svg2} stroke={color} />}
			{svg3 && <path d={svg3} stroke={color} />}
		</SVG>
	)
}

const SVG = styled.svg`
	text {
		font-size: 1.06rem;
		font-family: Arial, Helvetica, sans-serif;
		letter-spacing: 5px;
	}

	path,
	circle,
	text {
		filter: url(#glow);
	}
`

export default Icon
