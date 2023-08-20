import styles from "../registration/form/registerForm.module.scss"

const InputField = ({ label, id, type, placeholder, error, registerOptions, ...rest }) => {
	return (
		<div className={`${styles.inputWrapper} ${type === 'text' && styles.inputFullWidth}`}>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				type={type}
				placeholder={placeholder}
				className={`${error ? styles.error : ''}`}
				{...registerOptions}
				{...rest}
			/>
		</div>
	)
}

export default InputField