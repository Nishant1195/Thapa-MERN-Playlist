import {email, z} from "zod";
import { de } from "zod/v4/locales";

const contactSchema = z.object({
    username: z
    .string({required_error:"Username Required"})
    .trim()
    .min(3,{message:"Username must be longer then 3 characters"})
    .max(255,{message:"Username must be lower then 255 characters"}),
    email: z
    .string({required_error:"Email Required"})
    .trim()
    .email({message:"Email must be valid"})
    .min(3,{message:"Email must be longer then 3 characters"})
    .max(255,{message:"Email must be lower then 255 characters"}),
    message: z
    .string({required_error:"Message Required"})
    .trim()
    .min(3,{message:"Message must be longer then 3 characters"})
    .max(255,{message:"Message must be lower then 255 characters"})
})

export default contactSchema;