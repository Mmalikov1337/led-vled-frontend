const GapLine = ({ color }) => {
	return (
		<svg width="71" height="6" viewBox="0 0 71 6" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="1" y="2.5" width="70" height="1" rx="0.5" fill={color} />
			<circle cx="2.5" cy="3" r="2.5" fill={color} />
			<circle cx="68.5" cy="3" r="2.5" fill={color} />
		</svg>
	);
};
export default GapLine;
