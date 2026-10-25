type Props = {
	color: string
	text?: string
	svg: string
	fill?: boolean
	size?: string
}

const SMALL = '55px'
const LARGE = '150px'

// devicon shapes are drawn on a 128x128 grid; fit them into a centered box inside the 200x200 badge
const BOX = 1000 / 9
const SCALE = BOX / 128
const OFFSET = (200 - BOX) / 2

function Icon({ color, text, svg, fill, size }: Props) {
	return (
		<svg
			width={size ?? (fill ? SMALL : LARGE)}
			height={size ?? (fill ? SMALL : LARGE)}
			// the label arc needs 50 units of headroom; the small filled badge crops to just the logo
			viewBox={fill ? `${OFFSET} ${OFFSET} ${BOX} ${BOX}` : '0 -50 200 250'}
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<defs>
				{/* circle starting at 9 o'clock, clockwise, so 25% along is 12 o'clock */}
				<path
					d="M15 100A85 85 0 1 1 185 100A85 85 0 1 1 15 100"
					id="textcurve"
				/>
			</defs>

			{fill ? null : (
				<>
					<text className="text-[1.06rem] font-[family-name:Arial,Helvetica,sans-serif] tracking-[5px]">
						<textPath
							href="#textcurve"
							startOffset="25%"
							textAnchor="middle"
							fill={color}>
							{text}
						</textPath>
					</text>

					<circle cx="100" cy="100" r="78.8889" stroke={color} />
				</>
			)}

			{/* devicon markup carries its own brand fills; [fill:inherit] swaps them for ours */}
			<g
				className="[&_*]:[fill:inherit]"
				transform={`translate(${OFFSET} ${OFFSET}) scale(${SCALE})`}
				strokeWidth={1 / SCALE}
				stroke={fill ? 'black' : color}
				fill={fill ? color : 'none'}
				dangerouslySetInnerHTML={{ __html: svg }}
			/>
		</svg>
	)
}

export default Icon
