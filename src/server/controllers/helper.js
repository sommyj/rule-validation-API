const execute = (value, condition, conditionValue) => {
  switch (condition) {
    case 'eq':
      return value === conditionValue;
    case 'neq':
      return value !== conditionValue;
    case 'gt':
      return value > conditionValue;
    case 'gte':
      return value >= conditionValue;
    case 'contains':
      return value.includes(conditionValue);

    default:
      return false;
  }
};

export const validationResBody = (
  message, status, error,
  field, fieldValue, condition,
  conditionValue, statusCode, res,
) => res.status(statusCode).send({
  message,
  status,
  data: {
    validation: {
      error,
      field,
      field_value: fieldValue,
      condition,
      condition_value: conditionValue,
    },
  },
});

export default execute;
