import React, { useState, useRef } from 'react'
import styles from './registerLeftHeader.module.scss'

import BgColorText from "../../../bgColorText/bgColorText"
import {Icon} from "../../../Icon/icon"

const RegisterLeftHeader = () => {
	const [isPlaying, setIsPlaying] = useState(false)
	const videoRef = useRef(null)

	const handlePlayPause = () => {
		videoRef.current.play()
		setIsPlaying(true)
	}

	const handleVideoPlay = () => {
		setIsPlaying(true)
	}

	const handleVideoPause = () => {
		setIsPlaying(false)
	}

	return (
		<div className={styles.header}>
			<h5>Thoughtful care, convenient hours, and purpose-built clinics
				<BgColorText>with your pets in mind.</BgColorText></h5>

			<div className={styles.videoWrapper}>
				<video
					ref={videoRef}
					controls
					playsInline
					muted
					controlsList='nodownload'
					onPlay={handleVideoPlay}
					onPause={handleVideoPause}
				>
					<source src='/video/WorkOfHeart_Video_compressed.mp4' type="video/mp4"/>
				</video>

				{!isPlaying && (
					<button className={styles.playButton} onClick={handlePlayPause}>
						<span>Bigger, Brighter, Fresher</span>
						<Icon type='PLAY_BUTTON'/>
					</button>
				)}
			</div>

			<p>A vet that&apos;s <BgColorText>not &quot;all bark, no bite&quot;</BgColorText></p>
		</div>
	);
}

export default RegisterLeftHeader;
