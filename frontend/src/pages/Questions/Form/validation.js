const validate = (values) => {
  const errors = {};
  const {
    name = null,
    email = null,
    date = null,
    observations = null,
  } = values;

  if (!name) errors.name = 'Required';
  if (!observations) errors.observations = 'Required';

  if (!email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Invalid email address';
  }

  if (!date) {
    errors.date = 'Required';
  } else {
    const now = new Date();
    const dateObj = new Date(date);
    now.setHours(0,0,0,0);
    dateObj.setHours(0,0,0,0);

    if (dateObj.getTime() <= now.getTime())
      errors.date = 'Must be greater than following day';
  }

  return errors;
};

export default validate;
