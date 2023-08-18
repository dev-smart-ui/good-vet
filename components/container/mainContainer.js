import styles from './mainContainer.module.scss'

const MainContainer = ({children}) => {

	return (
		<div className={styles.wrapper}>
			{children}
		</div>
	)
}

export default MainContainer