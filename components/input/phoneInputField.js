import styles from "../registration/form/registerForm.module.scss"

import {Controller} from "react-hook-form"
import { PatternFormat } from 'react-number-format'

const PhoneInputField = ({ label, id, control }) => {
	return (
		<div className={styles.inputWrapper}>
			<label htmlFor={id}>{label}</label>
			<Controller
				control={control}
				name={id}
				render={(
					{ field: { value, ref, ...rest },
						fieldState: { error } }) => {
					return (
						<PatternFormat
							id={id}
							format="1 ### ### ####"
							value={value}
							getInputRef={ref}
							placeholder='1-516-395-4024'
							className={`customSelectClass ${error ? 'selectError' : ''}`}
							{...rest}
						/>
					)
				}}
			/>
		</div>
	)
}

export default PhoneInputField