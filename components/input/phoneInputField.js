import {forwardRef} from "react"
import styles from "../registration/form/registerForm.module.scss"

import {Controller} from "react-hook-form"
import InputMask from 'react-input-mask'

const PhoneInput = forwardRef(({value, onChange, className, ...rest}, ref) => {
	return (
		<InputMask
			mask='1-999-999-9999'
			maskChar={null}
			value={value}
			placeholder='1-516-395-4024'
			onChange={onChange}
			className={className}
			ref={ref}
			{...rest}>
		</InputMask>
	)
})
PhoneInput.displayName = "PhoneInput"

const PhoneInputField = ({ label, id, control }) => {
	return (
		<div className={styles.inputWrapper}>
			<label htmlFor={id}>{label}</label>
			<Controller
				control={control}
				name={id}
				render={(
					{ field: { value, ...rest },
						fieldState: { error } }) => {
					return (
						<PhoneInput
							id={id}
							value={value}
							className={`customSelectClass ${error ? 'selectError' : ''}`}
							{...rest}>
						</PhoneInput>
					)
				}}
			/>
		</div>
	)
}

export default PhoneInputField