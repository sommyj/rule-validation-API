const invalidPayLoadResBody = (res) => res.status(400).send({
  message: 'Invalid JSON payload passed.',
  status: 'error',
  data: null,
});

export default invalidPayLoadResBody;
