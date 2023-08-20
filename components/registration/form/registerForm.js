import styles from './registerForm.module.scss'

import BgColorText from "../../bgColorText/bgColorText"
import YellowButton from "../../buttons/yellowButton"

import {useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {validationSchema} from "./validation"

import {locations} from "./dataLocations"
import InputField from "../../input/inputField"
import PhoneInputField from "../../input/phoneInputField"
import SelectField from "../../input/selectInputField"

const RegisterForm = () => {

	const {
		register,
		handleSubmit,
		control,
		formState: { errors }
	} = useForm({
		resolver: zodResolver(validationSchema),
		shouldFocusError: false,
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

				<InputField
					label='First Name:'
					id='firstName'
					type='text'
					placeholder='John'
					error={errors.firstName}
					registerOptions={register("firstName", { required: true })}
				/>

				<InputField
					label='Last Name:'
					id='lastName'
					type='text'
					placeholder='Doe Smith'
					error={errors.lastName}
					registerOptions={register("lastName", { required: true })}
				/>

				<InputField
					label='Email:'
					id='email'
					type='email'
					placeholder='johndoemith@gmail.com'
					error={errors.email}
					registerOptions={{...register("email", { required: true })}}
				/>

				<PhoneInputField label="Phone:" id="phone" error={errors.phone} control={control} />

				<SelectField label="" id="location" error={errors.location} control={control} options={locations} placeholder="Location" />

				<InputField
					label='Your Pet&apos;s Favorite Treat:'
					id='petsTreat'
					type='text'
					placeholder='ex: dog biscuit, bone, cookie'
					error={errors.petsTreat}
					registerOptions={{...register("petsTreat", { required: true })}}
				/>

				<YellowButton type='submit'>Continue Booking</YellowButton>

			</form>
			
		</div>
	)
}

export default RegisterForm