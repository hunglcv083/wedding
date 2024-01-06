import Joi from "joi";

export const formSchema = Joi.object({
    user_name: Joi.string(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'vn'] } })
        .messages({
            'string.email': 'Email không hợp lệ',           
        }),
    password: Joi.string(),
    ip_register: Joi.string(),
    device_register: Joi.string(),
    link_avatar: Joi.string(),
    email_or_username: Joi.string()

})
