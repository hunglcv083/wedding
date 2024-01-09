import Joi from "joi";



export const changePassSchema = Joi.object({
    old_password: Joi.string().min(6).max(32).required().messages({
        'string.min': 'Password can\'t be less than 6 letters!',
        'string.max': 'Password can\'t be more than 32 letters!',
        'any.required': 'Password can\'t be empty!',
        'string.empty': 'Password can\'t be empty!'
    }),
    new_password: Joi.string().min(6).max(32).required().messages({
        'string.min': 'Password can\'t be less than 6 letters!',
        'string.max': 'Password can\'t be more than 32 letters!',
        'any.required': 'Password can\'t be empty!',
        'string.empty': 'Password can\'t be empty!'
    }),
    cf_pw: Joi.valid(Joi.ref('new_password')).messages({
        'any.only':'Password no match!!',
    })
})