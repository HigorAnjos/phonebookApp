import Joi from 'joi';

const schemaEmail = Joi.string().email({ tlds: { allow: false } })
  .required()
  .messages({
    'string.email': 'email nao e valido',
    'string.empty': 'email nao pode ser vazio',
    'any.required': 'email e obrigatorio',
  });

const hasEmailError = (email) => {
  const { error } = schemaEmail.validate(email);

  if (error) {
    return error.details[0].message; // retorna o erro
  }

  return false; // retorna false se nao tiver erro
};

export default hasEmailError;
