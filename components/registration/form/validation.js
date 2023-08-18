import {number, string, z} from 'zod'

export const validationSchema = z
	.object({
		firstName: string().nonempty('Name is required'),
		lastName: string().nonempty('Name is required'),
		email: string({ required_error: "Email is required" }).email({
			message: "Should be a valid Email",
		}),
		phone: z.string().min(10).max(14).nonempty('Phone number is required'),
		petsTreat: string().nonempty('Field is required'),
		location: z.object({
			value: z.string().refine((value) => value !== "", "Select location"),
			label: z.string().refine((label) => label !== "", "Select location"),
		}),
	})