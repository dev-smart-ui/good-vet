import styles from './registerLeft.module.scss'

import RegisterLeftHeader from "./registerLeftHeader/registerLeftHeader"
import RegisterInfo from "./registerInfo/registerInfo"
import RegisterSlider from "./registerSlider/registerSlider"

const RegisterLeft = () => {
	return (
		<div className={styles.wrapper}>
			<RegisterLeftHeader/>
			<RegisterInfo/>
			<RegisterSlider/>
		</div>
	)
}

export default RegisterLeft