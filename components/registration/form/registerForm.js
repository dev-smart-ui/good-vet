import styles from './registerForm.module.scss'

import BgColorText from "../../bgColorText/bgColorText"
import YellowButton from "../../buttons/yellowButton"

import {Controller, useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {validationSchema} from "./validation"
import PhoneInput from "react-phone-number-input"

import dynamic from "next/dynamic"
import {Icon} from "../../Icon/icon"
const Select = dynamic(() => import('react-select'), {
	ssr: false,
})
import {components} from 'react-select'

import {locations} from "./dataLocations"

const CustomDropdownIndicator = (props) => {
	return (
		<components.DropdownIndicator {...props}>
			<Icon type='TRIANGLE_BLACK' />
		</components.DropdownIndicator>
	);
};

const RegisterForm = () => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors }
	} = useForm({
		resolver: zodResolver(validationSchema),
	})

	const onSubmit = (data) => {
		console.log(data)
	}

	return (
		<div className={styles.wrapper}>
			<h5>
				<BgColorText color='#fff' isFullWidth>Book by August 31<span className={styles.superscript}>st</span></BgColorText><br/> and qualify for a	free first exam.
			</h5>
			<p>Enter your information to begin our easy	<BgColorText color='#fff'>3 step booking process.</BgColorText></p>

			<form className={styles.registerForm} onSubmit={handleSubmit(onSubmit)}>

				<div className={`${styles.inputWrapper}`}>
					<label htmlFor='firstName'>First Name:</label>
					<input
						id='firstName'
						type='text'
						placeholder='John'
						className={`${errors.firstName ? styles.error : ''}`}
						{...register("firstName", { required: true })}
					/>
				</div>

				<div className={styles.inputWrapper}>
					<label htmlFor='lastName'>Last Name:</label>
					<input
						id='lastName'
						type='text'
						placeholder='Doe Smith'
						className={`${errors.lastName ? styles.error : ''}`}
						{...register("lastName", { required: true })}
					/>
				</div>

				<div className={styles.inputWrapper}>
					<label htmlFor='email'>Email:</label>
					<input
						id='email'
						type='email'
						placeholder='johndoemith@gmail.com'
						className={`${errors.email ? styles.error : ''}`}
						{...register("email", { required: true })}
					/>
				</div>

				<div className={styles.inputWrapper}>

					<label htmlFor='phone'>Phone:</label>
					<Controller
						control={control}
						name='phone'
						render={({ field: {value, ...rest }, fieldState: { error } }) => {

							return (
								<PhoneInput
									id='phone'
									placeholder='1-516-395-4024'
									countrySelectComponent={() => {}}
									value={value}
									className={error ? styles.error : ''}
									{...rest}
								/>
							)
						}}
					/>
				</div>

				<div className={`${styles.inputWrapper} ${styles.inputFullWidth}`}>
					<label htmlFor="location"></label>
					<Controller
						name='location'
						control={control}
						render={({field}) => {
							return (
								<Select
									isMulti={false}
									isSearchable={false}
									placeholder="Location"
									className="customSelectClass"
									classNamePrefix='controlCustomClass'
									components={{DropdownIndicator: () => <Icon type='TRIANGLE_BLACK'/>}}
									options={locations}
									{...field}
								/>
							)
						}}
					/>
				</div>

				<div className={`${styles.inputWrapper} ${styles.inputFullWidth}`}>
					<label htmlFor='petsTreat'>Your Pet&apos;s Favorite Treat:</label>
					<input
						id='petsTreat'
						type='text'
						placeholder='ex: dog biscuit, bone, cookie'
						className={`${errors.petsTreat ? styles.error : ''}`}
						{...register("petsTreat", { required: true })}
					/>
				</div>

				<YellowButton type='submit'>Continue Booking</YellowButton>

			</form>
			
		</div>
	)
}

export default RegisterForm