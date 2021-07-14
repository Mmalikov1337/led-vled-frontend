import React from 'react'

import Composition from "./Composition";
import Usage from "./Usage";
import Price from "./Price";
import Delivery from "./Delivery";
import Tastes from "./Tastes";
import Partners from "./Partners";
import Contacts from "./Contacts";

import useWindowSize from "../../WindowSize"

const CircleSVG = ({ style }) => {
	return (<svg style={style} width={154} height={154} viewBox="0 0 154 154" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g filter="url(#filter0_ddddii)">
			<circle cx={75} cy={75} r={51} fill="#008CE7" />
		</g>
		<defs>
			<filter id="filter0_ddddii" x={0} y={0} width={154} height={154} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
				<feFlood floodOpacity={0} result="BackgroundImageFix" />
				<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
				<feOffset dx={8} dy={8} />
				<feGaussianBlur stdDeviation={10} />
				<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.466667 0 0 0 0 0.768627 0 0 0 0.9 0" />
				<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
				<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
				<feOffset dx={-8} dy={-8} />
				<feGaussianBlur stdDeviation={8} />
				<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.631373 0 0 0 0 1 0 0 0 0.9 0" />
				<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
				<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
				<feOffset dx={8} dy={-8} />
				<feGaussianBlur stdDeviation={8} />
				<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.466667 0 0 0 0 0.768627 0 0 0 0.2 0" />
				<feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow" />
				<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
				<feOffset dx={-8} dy={8} />
				<feGaussianBlur stdDeviation={8} />
				<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.466667 0 0 0 0 0.768627 0 0 0 0.2 0" />
				<feBlend mode="normal" in2="effect3_dropShadow" result="effect4_dropShadow" />
				<feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow" result="shape" />
				<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
				<feOffset dx={-1} dy={-1} />
				<feGaussianBlur stdDeviation={1} />
				<feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
				<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.466667 0 0 0 0 0.768627 0 0 0 0.5 0" />
				<feBlend mode="normal" in2="shape" result="effect5_innerShadow" />
				<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
				<feOffset dx={1} dy={1} />
				<feGaussianBlur stdDeviation={1} />
				<feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
				<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.631373 0 0 0 0 1 0 0 0 0.3 0" />
				<feBlend mode="normal" in2="effect5_innerShadow" result="effect6_innerShadow" />
			</filter>
		</defs>
		<svg width={50} height={50} x={50} y={50} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd" d="M7.80784 6.49052L17.191 11.7854V1.19026C22.2694 -0.396752 27.7278 -0.396752 32.8062 1.19026V11.7854L42.1931 6.49052C46.1438 9.99073 48.8738 14.6121 50 19.706L40.6122 25.0027L50 30.2971C48.8742 35.3909 46.1441 40.0121 42.1931 43.5117L32.8062 38.2182V48.8115C27.7274 50.3962 22.2698 50.3962 17.191 48.8115V38.2182L7.80784 43.5117C3.85563 40.013 1.12499 35.3914 0 30.2971L9.38552 25.0027L0 19.706C1.12542 14.6116 3.85596 9.98992 7.80784 6.49052Z" fill="#159FF8" />
		</svg>
	</svg>


	)
}

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
export type Visibility =  "collapse" | "hidden" | "visible";