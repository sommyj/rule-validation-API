import invalidPayLoadResBody from '../helper';
import User from '../models/user.model';
import execute, { validationResBody } from './helper';

const retrieveUser = (req, res) => {
  const user = User;

  return res.status(200).send({
    message: 'My Rule-Validation API',
    status: 'success',
    data: user,
  });
};

export const validateRule = (req, res) => {
  try {
    const { rule, data } = req.body;

    if ((rule.field.match(/\./g) || []).length > 1) {
      return invalidPayLoadResBody(res);
    }

    // For array data
    if (data.constructor === Array || typeof data === 'string') {
      if (!data[rule.field]) {
        return res.status(400).send({
          message: `field ${rule.field} is missing from data.`,
          status: 'error',
          data: null,
        });
      }
      const result = execute(data[rule.field], rule.condition, rule.condition_value);
      if (result) {
        return validationResBody(`field ${rule.field} successfully validated.`, 'success',
          false, rule.field, data[rule.field], rule.condition, rule.condition_value, 200, res);
      }
      return validationResBody(`field ${rule.field} failed validation.`, 'error',
        true, rule.field, data[rule.field], rule.condition, rule.condition_value, 400, res);
    }

    if (typeof data === 'object') {
      // eslint-disable-next-line no-restricted-syntax
      for (const iterator of Object.keys(data)) {
        if (rule.field.includes('.')) {
          const arr = rule.field.split('.');
          const field = arr[0];
          const nestedField = arr[arr.length - 1];
          if (iterator === field) {
            // eslint-disable-next-line no-restricted-syntax
            for (const iterator2 of Object.keys(data[iterator])) {
              if (iterator2 === nestedField) {
                const result = execute(data[iterator][iterator2],
                  rule.condition, rule.condition_value);
                if (result) {
                  return validationResBody(`field ${rule.field} successfully validated.`,
                    'success', false, rule.field, data[iterator][iterator2], rule.condition,
                    rule.condition_value, 200, res);
                }
                return validationResBody(`field ${rule.field} failed validation.`, 'error',
                  true, rule.field, data[iterator][iterator2], rule.condition,
                  rule.condition_value, 400, res);
              }
            }
          }
        } else if (iterator === rule.field) {
          const result = execute(data[iterator],
            rule.condition, rule.condition_value);
          if (result) {
            return validationResBody(`field ${rule.field} successfully validated.`,
              'success', false, rule.field, data[iterator], rule.condition,
              rule.condition_value, 200, res);
          }
          return validationResBody(`field ${rule.field} failed validation.`, 'error',
            true, rule.field, data[iterator], rule.condition,
            rule.condition_value, 400, res);
        }
      }

      return res.status(400).send({
        message: `field ${rule.field} is missing from data.`,
        status: 'error',
        data: null,
      });
    }

    return invalidPayLoadResBody(res);
  } catch (error) {
    console.error(error);
    return invalidPayLoadResBody(res);
  }
};

export default retrieveUser;
