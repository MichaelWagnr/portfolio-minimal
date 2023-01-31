import styled from 'styled-components'
import { Icon } from '../tech/Icons'
import Svg from './../tech/Icon'

type Props = {
	name: string
	icons: Icon[]
}

function ProjectHeader({ name, icons }: Props) {
	return (
		<Container>
			<h3>{name}</h3>
			<p>Technologies used:</p>
			<Icons>
				{icons.map((icon, index) => {
					return (
						<SVGWrapper>
							<Svg
								key={index}
								color="var(--accent-900)"
								text={''}
								textRotation={''}
								svg={icon.svg}
								fill={true}
							/>
						</SVGWrapper>
					)
				})}
			</Icons>
		</Container>
	)
}

const Container = styled.div`
	height: 100px;
	background-color: var(--primary-bg-700);
	display: grid;
	place-content: center;
	color: var(--accent-900);
	text-align: center;

	h3 {
		font-size: 2rem;
	}

	p {
		/* font-weight: lighter; */
		font-size: 0.8rem;
		font-style: italic;
		margin-top: -5px;
	}
`

const Icons = styled.div`
	display: flex;
	justify-content: center;
	margin: -15px 0px 0px 20px;
`

const SVGWrapper = styled.div`
	display: inline-block;
	margin-left: -15px;
`

export default ProjectHeader
