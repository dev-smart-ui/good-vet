import styles from './registerLeftHeader.module.scss'
import BgColorText from "../../../bgColorText/bgColorText"

const RegisterLeftHeader = () => {
	return (
		<div className={styles.header}>
			<h5>Thoughtful care, convenient hours, and purpose-built clinics <BgColorText>with your pets in mind.</BgColorText></h5>
			<div className={styles.videoWrapper}>
				<video src="/video/WorkOfHeart_Video_compressed.mp4" autoPlay muted controls></video>
			</div>
			<p>A vet that&apos;s <BgColorText>not &quot;all bark, no bite&quot;</BgColorText></p>
		</div>
	)
}

export default RegisterLeftHeader