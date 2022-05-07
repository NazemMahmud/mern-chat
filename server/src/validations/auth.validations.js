import Joi from "joi";

// minDomainSegments: like test@gmail.com, here domain segments 2
const loginSchema = Joi.object().keys({
    email: Joi.string().email({ minDomainSegments: 2 }).min(6).required(),
    password: Joi.string().min(3).required(),
});

const loginValidate = data => {
    console.log('data: ', data);
    const result = loginSchema.validate(data, {abortEarly: false});
    result.value = data;
    return result;
}

export { loginValidate }
