export default function errorHandler(err, _, res, __) {
  try {
    if (err.name === "ValidationError")
      return (err = handleValidationError(err, res));
    if (err.code && err.code == 11000)
      return (err = handleDuplicateKeyError(err, res));
  } catch (err) {
    res.status(500).send("An unknown error occurred.");
  }
}

function handleValidationError(err, res) {
  const errors = [];
  const fields = [];
  for (const field in err.errors) {
    errors.push(err.errors[field].message);
    fields.push(field);
  }
  res.status(400).send({ message: errors.join(", "), fields: fields });
}

function handleDuplicateKeyError(err, res) {
  const field = Object.keys(err.keyValue);
  const error = `An account with that ${field} already exists.`;
  res.status(409).send({ message: error, fields: field });
}
