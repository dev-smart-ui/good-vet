import styles from './registration.module.scss'

import RegisterLeft from "./left-side/registerLeft"
import RegisterForm from "./form/registerForm"
import BgColorText from "../bgColorText/bgColorText"

const Registration = () => {
	return (
		<div className={styles.wrapper}>
			<h1>Compassionate <BgColorText isShadow>Primary & Urgent Care</BgColorText> for Pets</h1>
			<div className={styles.body}>
				<RegisterLeft/>
				<RegisterForm/>
			</div>
		</div>
	)
}

export default Registration