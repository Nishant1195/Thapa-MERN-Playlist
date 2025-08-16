import { ZodError } from "zod";

const contactvalidator = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
        re
    } catch (err) {
    if (err instanceof ZodError) {
      return res.status(422).json({
        status: 422,
        message: err.errors[0]?.message || "Invalid input",
      });
    }
    next(err);
  }
};

export default contactvalidator;