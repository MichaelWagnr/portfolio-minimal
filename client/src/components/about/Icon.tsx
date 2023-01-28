import styled from 'styled-components'

type Props = {
	color: string
	text: string
	textRotation: string
}

function Icon({ color, text, textRotation }: Props) {
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

				<style>
					{/* text {
        font-size: 1.4rem;
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing: 5px;
      }
  
      path, circle, text {
        filter: url(#glow)
      } */}
				</style>
			</defs>

			<text dx={textRotation}>
				<textPath xlinkHref="#textcurve" fill={color}>
					{text}
				</textPath>
			</text>

			<circle cx="100" cy="100" r="78.8889" stroke={color} />

			<path
				d="M44.4444 100V155.556H155.556V44.4444H44.4444V100ZM133.982 95.5556C136.643 96.1731 139.062 97.565 140.933 99.5556C141.963 100.628 142.859 101.822 143.6 103.111C143.6 103.253 138.8 106.498 135.876 108.311C135.769 108.382 135.342 107.92 134.871 107.218C134.337 106.297 133.579 105.526 132.666 104.977C131.754 104.428 130.717 104.12 129.653 104.08C126.284 103.849 124.116 105.618 124.133 108.524C124.105 109.248 124.271 109.966 124.613 110.604C125.351 112.142 126.729 113.058 131.049 114.924C139.004 118.347 142.409 120.604 144.524 123.813C146.889 127.369 147.413 133.111 145.813 137.36C144.036 141.982 139.68 145.12 133.52 146.16C130.707 146.482 127.864 146.452 125.058 146.071C120.757 145.362 116.795 143.297 113.751 140.178C112.729 139.049 110.738 136.107 110.862 135.893C111.187 135.652 111.528 135.436 111.884 135.244L116 132.969L119.191 131.12L119.858 132.107C120.983 133.716 122.415 135.087 124.071 136.142C127.627 138.009 132.48 137.751 134.88 135.591C135.686 134.8 136.189 133.751 136.301 132.627C136.413 131.503 136.127 130.375 135.493 129.44C134.604 128.204 132.827 127.164 127.858 124.996C122.124 122.524 119.653 120.996 117.396 118.56C115.986 116.953 114.945 115.057 114.347 113.004C113.9 110.66 113.834 108.259 114.151 105.893C115.333 100.356 119.484 96.4889 125.547 95.3422C128.354 94.9948 131.198 95.0728 133.982 95.5733V95.5556ZM107.902 100.213V104.764H93.4756V145.858H83.2444V104.756H68.7822V100.311C68.7372 98.7784 68.7728 97.2445 68.8889 95.7156C68.96 95.6356 77.7778 95.6356 88.4444 95.6356H107.849L107.902 100.213Z"
				stroke={color}
			/>
		</SVG>
	)
}

const SVG = styled.svg`
	text {
		font-size: 1.4rem;
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
