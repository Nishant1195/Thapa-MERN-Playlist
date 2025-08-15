import { ZodError } from "zod";

const validate = (schema) => async (req, res, next) => {
        try {
            const parseBody = await schema.parseAsync(req.body);
            req.body = parseBody;
            next();
        }  catch (err) {
            if (err instanceof ZodError) {
            return next({
                status: 422,
                message: "Please fill the data properly",
                extraDetails: err.errors[0]?.message
            });
            }
            next(err); // Pass other errors to error middleware
  }
}

export default validate