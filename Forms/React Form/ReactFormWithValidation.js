const INITIAL_STATE = {
  email: '',
  password: '',
};

const VALIDATION = {
  email: [
    {
      isValid: (value) => !!value,
      message: 'Is required.',
    },
    {
      isValid: (value) => /\S+@\S+\.\S+/.test(value),
      message: 'Needs to be an email.',
    },
  ],
  password: [
    {
      isValid: (value) => !!value,
      message: 'Is required.',
    },
  ],
};

const getErrorFields = (form) =>
  Object.keys(form).reduce((acc, key) => {
    if (!VALIDATION[key]) return acc;

    const errorsPerField = VALIDATION[key]
      // get a list of potential errors for each field
      // by running through all the checks
      .map((validation) => ({
        isValid: validation.isValid(form[key]),
        message: validation.message,
      }))
      // only keep the errors
      .filter((errorPerField) => !errorPerField.isValid);

    return { ...acc, [key]: errorsPerField };
  }, {});

const LoginForm = ({ onLogin }) => {
  const [form, setForm] = React.useState(INITIAL_STATE);

  //...

  const errorFields = getErrorFields(form);
  console.log(errorFields);

//   return (...);
};