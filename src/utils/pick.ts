import Joi, { Schema } from 'joi';
const pick = (object: any | { [k: string]: string } | Schema, keys: string[]) => {
  return keys.reduce((obj, key) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      // @ts-ignore
      obj[key] = object[key];
    }
    return obj;
  }, {});
};
export default pick;
