import {email, z} from "zod";

const signupSchema = z.object({
    username: z
    .string({required_error: "Username is required"})
    .trim()
    .min(3, {message:"More then 3 letters are required"})
    .max(255, {message:"Letters must not be more then 255 characters"}),
    email: z
    .string({required_error:"Email must be string"})
    .trim()
    .email({message:"Must be a valid email"})
    .min(3, {message:"Email must be longer then 3 characters"})
    .max(255, {message:"Email must not be longer then 255."}),
    phoneno: z
    .string({required_error: "Phone No is required"})
    .trim()
    .min(10, {message:"Phone No must not be smaller then 10 numbers"})
    .max(10, {message:"Phone No must not be larger then 10 numbers"}),
    password: z
    .string({required_error: "Username is required"})
    .trim()
    .min(3, {message:"More then 3 letters are required"})
    .max(255, {message:"Letters must not be more then 255 characters"})
})

export default signupSchema;