import requiredResBody, { dataTypeResBody } from './helper';

const dataValidation = (req, res, next) => {
  const { rule, data } = req.body;

  if ((typeof req.body !== 'object' && req.body === null) || req.body.constructor === Array) {
    return res.status(400).send({
      message: 'Invalid JSON payload passed.',
      status: 'error',
      data: null,
    });
  }

  if (!rule) {
    return requiredResBody('rule', res);
  }

  if (!data) {
    return requiredResBody('data', res);
  }

  if (typeof rule !== 'object' || rule === null) {
    return res.status(400).send({
      message: 'rule should be an object.',
      status: 'error',
      data: null,
    });
  }

  if (!rule.field) {
    return requiredResBody('rule.field', res);
  }

  if (!rule.condition) {
    return requiredResBody('rule.condition', res);
  }

  if (!rule.condition_value) {
    return requiredResBody('rule.condition_value', res);
  }

  const validCondition = ['eq', 'neq', 'gt', 'gte', 'contains'];

  if (!validCondition.includes(rule.condition)) {
    return dataTypeResBody('rule.condition', 'eq, neq, gt, gte or contains', res);
  }

  if (typeof data !== 'object' || rule === null) {
    if (data.constructor !== Array) {
      if (typeof data !== 'string') {
        return dataTypeResBody('data', 'an object, array or String', res);
      }
    }
  }

  return next();
};

export default dataValidation;
