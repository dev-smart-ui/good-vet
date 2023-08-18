import React from "react"
import styles from './registerInfo.module.scss'

import Image from "next/image"
import Link from "next/link"
import {infoData} from "./data"

const RegisterInfo = () => {
	return (
		<div className={styles.wrapper}>
			{infoData.map((obj) => {
				return (
					<React.Fragment key={obj.linkDesc} >
						<div className={styles.box}>
							<div className={styles.imgWrapper}>
								<Image src={obj.image} alt='image' width={122} height={80}/>
							</div>
							<p>{obj.quantity}</p>
							<span>{obj.desc}</span>
							<Link href={obj.linkPath}>{obj.linkDesc}</Link>
						</div>
					</React.Fragment>
				)
			})}
		</div>
	)
}

export default RegisterInfo