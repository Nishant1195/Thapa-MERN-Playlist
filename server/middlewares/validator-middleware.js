import { ZodError } from "zod";

const validate = (schema) => async (req, res, next) => {
        try {
            const parseBody = await schema.parseAsync(req.body);
            req.body = parseBody;
            next();
        }  catch (err) {
        console.log("Error caught:", err); // Debug log
        console.log("Error type:", err.constructor.name); // Debug log
        
        if (err instanceof ZodError) {
            // Additional safety check
            const errorMessage = err.errors && err.errors.length > 0 
                ? err.errors[0].message 
                : "Invalid input";
            
            res.status(400).json({ 
                msg: errorMessage,
                // Optional: include all errors for debugging
                errors: err.errors 
            });
        } else {
            res.status(500).json({ msg: "Something went wrong" });
        }
    }
}

export default validate