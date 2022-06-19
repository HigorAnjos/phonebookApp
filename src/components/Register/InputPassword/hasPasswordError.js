import Joi from 'joi';

const MAX_PASSWORD_LENGTH = 120;
const MIN_PASSWORD_LENGTH = 6;

const schemaPassword = Joi.string().min(MIN_PASSWORD_LENGTH).max(MAX_PASSWORD_LENGTH)
  // eslint-disable-next-line max-len
  // .pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/))
  .required()
  .messages({
    'string.min': 'senha deve ter no minimo 6 caracteres',
    'string.max': 'senha deve ter no maximo 120 caracteres',
    'string.empty': 'senha nao pode ser vazia',
    // eslint-disable-next-line max-len
    // 'string.pattern.base': 'senha deve ter no minimo uma letra maiuscula, uma minuscula, um numero e um caracter especial',
    'any.required': 'senha e obrigatoria',
  });

const hasPasswordError = (password) => {
  const { error } = schemaPassword.validate(password);

  if (error) {
    return error.details[0].message; // retorna o erro
  }

  return false; // retorna false se nao tiver erro
};

export default hasPasswordError;
