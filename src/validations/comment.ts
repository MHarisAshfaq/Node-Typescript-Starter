import Joi from 'joi';

export const createComment = {
  body: Joi.object().keys({
    post: Joi.string().required(),
    description: Joi.string().optional().allow('').allow(null),
  }),
};

export const getComments = {
  query: Joi.object().keys({
    post: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};
