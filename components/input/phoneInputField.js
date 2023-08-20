import styles from "../registration/form/registerForm.module.scss"

import {Controller} from "react-hook-form"
import InputMask from 'react-input-mask'

function PhoneInput({value, onChange, className, rest}) {
	return (
		<InputMask
			mask='1-999-999-9999'
			maskChar={null}
			value={value}
			placeholder='1-516-395-4024'
			onChange={onChange}
			className={className}
			{...rest}>
		</InputMask>
	);
}

const PhoneInputField = ({ label, id, error, control }) => {

	return (
		<div className={styles.inputWrapper}>
			<label htmlFor={id}>{label}</label>
			<Controller
				control={control}
				name={id}
				render={({ field: { value, ...rest }, fieldState: { error } }) => {
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