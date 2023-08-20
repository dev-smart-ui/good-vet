import styles from "../registration/form/registerForm.module.scss"

import {Controller} from "react-hook-form"
import PhoneInput from "react-phone-number-input"

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
							placeholder='1-516-395-4024'
							countrySelectComponent={() => {}}
							value={value}
							className={error ? styles.phoneError : ''}
							{...rest}
						/>
					);
				}}
			/>
		</div>
	);
}

export default PhoneInputField