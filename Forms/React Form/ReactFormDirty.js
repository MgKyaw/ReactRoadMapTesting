const INITIAL_STATE = {
  email: '',
  password: '',
};

const getDirtyFields = (form) =>
  Object.keys(form).reduce((acc, key) => {
    // check all form fields that have changed
    const isDirty = form[key] !== INITIAL_STATE[key];

    return { ...acc, [key]: isDirty };
  }, {});

const LoginForm = ({ onLogin }) => {
  const [form, setForm] = React.useState(INITIAL_STATE);

  //...

  const dirtyFields = getDirtyFields(form);

  const hasChanges = Object.values(dirtyFields).every(
    (isDirty) => !isDirty
  );

  return (
    <form onSubmit={handleSubmit}>
      ...
      <button disabled={hasChanges} type="submit">
        Submit
      </button>
    </form>
  );
};