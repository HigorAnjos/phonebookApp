import Joi from 'joi';

const MAX_NAME_LENGTH = 60;
const MIN_NAME_LENGTH = 3;

const schemaName = Joi.string().alphanum().min(MIN_NAME_LENGTH).max(MAX_NAME_LENGTH)
  .required()
  .messages({
    'string.alphanum': 'nome nao e valido',
    'string.min': `nome deve ter no minimo ${MIN_NAME_LENGTH} caracteres`,
    'string.max': `nome deve ter no maximo ${MAX_NAME_LENGTH} caracteres`,
    'string.empty': 'nome nao pode ser vazio',
    'any.required': 'nome e obrigatorio',
  });

const hasNameError = (name) => {
  const { error } = schemaName.validate(name);

  if (error) {
    return error.details[0].message; // retorna o erro
  }

  return false; // retorna false se nao tiver erro
};

export default hasNameError;
