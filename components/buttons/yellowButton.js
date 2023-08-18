import styles from './yellowButton.module.scss'

import {Icon} from "../Icon/icon"

const YellowButton = ({children, type}) => {
	return (
		<button className={styles.wrapper} type={type}>
			{children}
			<Icon type='TRIANGLE_BLACK_SMALL'/>
		</button>
	)
}

export default YellowButton