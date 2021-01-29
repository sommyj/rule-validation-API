const requiredResBody = (value, res) => res.status(400).send({
  message: `${value} is required.`,
  status: 'error',
  data: null,
});

export const dataTypeResBody = (value, type, res) => res.status(400).send({
  message: `${value} should be ${type}.`,
  status: 'error',
  data: null,
});

export default requiredResBody;
