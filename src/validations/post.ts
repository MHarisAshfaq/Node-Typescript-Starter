import Joi from 'joi';
import { objectId } from './custom';

export const createPost = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().optional().allow('').allow(null),
    channel: Joi.string().required(),
  }),
};

export const getPosts = {
  query: Joi.object().keys({
    channel: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

export const getPost = {
  params: Joi.object().keys({
    postId: Joi.string().custom(objectId),
  }),
};
