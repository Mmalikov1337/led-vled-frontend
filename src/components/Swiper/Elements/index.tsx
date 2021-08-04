import React from 'react'

import Composition from "./Composition";
import Usage from "./Usage";
import Price from "./Price";
import Delivery from "./Delivery";
import Tastes from "./Tastes";
import Partners from "./Partners";
import Contacts from "./Contacts";

import useWindowSize from "../../WindowSize"
import CircleSVG from '@src/components/SVG/CircleSVG';


export default function Elements({ toTop, toBottom, currentPage, swiperPause }) {
	// const [state, setstate] = useState(initialState)
	let windowSize = useWindowSize()

	const elementsList = [
		<Composition />,
		<Usage />,
		<Price />,
		<Delivery />,
		<Tastes/>,
		<Partners onLoad={swiperPause} />,
		<Contacts onLoad={swiperPause}  />
	]
	
	const circleStyles = [
		{
			x: `${windowSize.width - 430}px`,
			y: `${windowSize.height - 300}px`,
		}, {
			x: `${windowSize.width - 430}px`,
			y: `0`,
		}, {
			x: `${windowSize.width - 1100}px`,
			y: `0`,
		}, {
			x: `${windowSize.width - 1100}px`,
			y: `${windowSize.height - 300}px`,
		}, {
			x: `${windowSize.width - 320}px`,
			y: `${windowSize.height - 300}px`,
		}, {
			x: `${windowSize.width - 430}px`,
			y: `0`,
		}, {
			x: `${windowSize.width - 1600}px`,
			y: `160px`,
		},
	]

	function changeBlock(value) {
		if (value > 0)
			toTop();
		else
			toBottom();
	}

	return (
		<div className="elements" id="elements" onWheel={(e) => changeBlock(e.deltaY)}>
			<div className="elements__background" >
				<div className="elements__background-circle">
					<CircleSVG style={{
						transform: `translate(${circleStyles[currentPage].x},${circleStyles[currentPage].y})`
					}} />
				</div>
				
			</div>

			{elementsList.map((it, index) => (
				<div className="opacity-toggler" key={index}
					style={{
						opacity: `${currentPage === index ? "1" : "0"}`,
						visibility: `${currentPage === index ? "visible" : "hidden"}` as Visibility
					}}>
					{it}
				</div>
			))}
		</div>
	)
}
type Visibility =  "collapse" | "hidden" | "visible";