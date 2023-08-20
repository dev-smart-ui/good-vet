import styles from "../registration/form/registerForm.module.scss"

import {Controller} from "react-hook-form"
import {Icon} from "../Icon/icon"
import dynamic from "next/dynamic"
const Select = dynamic(() => import('react-select'), {
	ssr: false,
})

const SelectField = ({ label, id, control, options, placeholder }) => {
	return (
		<div className={`${styles.inputWrapper} ${styles.inputFullWidth}`}>
			<label htmlFor={id}>{label}</label>
			<Controller
				name={id}
				control={control}
				render={({ field, fieldState: { error }  }) => {
					return (
						<Select
							{...field}
							isMulti={false}
							isSearchable={false}
							placeholder={placeholder}
							className={`customSelectClass ${error ? 'selectError' : ''}`}
							classNamePrefix='controlCustomClass'
							components={{ DropdownIndicator: () => <Icon type='TRIANGLE_BLACK' /> }}
							options={options}
						/>
					);
				}}
			/>
		</div>
	);
}

export default SelectField