import React from 'react'


const ICONS  = {
	TRIANGLE_BLACK: (props) => (
		<svg width="63" height="65" viewBox="0 0 63 65" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M18.6208 27.1064L31.6553 40.3779L44.6897 27.1064H18.6208Z"
				fill="#1C1B1F"/>
		</svg>
	),
	TRIANGLE_BLACK_SMALL: (props) => (
		<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M13.5778 7.14834C14.5182 7.69133 14.5182 9.04879 13.5778 9.59178L2.93691 15.7353C1.99643 16.2783 0.820829 15.5995 0.820829 14.5136L0.820829 2.22656C0.820829 1.14058 1.99643 0.461849 2.93691 1.00484L13.5778 7.14834Z"
				fill="black"/>
		</svg>
	),
	PLAY_BUTTON: (props) => (
		<svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="-1.52588e-05" y="0.740479" width="56" height="56" rx="28" fill="#FEC20D"/>
			<path d="M23 22.3655V35.1155L33 28.7405L23 22.3655Z" fill="black"/>
		</svg>
	)
}

const Icon = ({ type, ...props }) => {
	const IconComponent = ICONS[type]

	return <IconComponent {...props} />
}

export { Icon }
