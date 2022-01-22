import Joi, { Schema } from 'joi';
const pick = (object: object | { [k: string]: string } | Schema, keys: string[]) => {
  return keys.reduce((obj, key) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
};
export default pick;
