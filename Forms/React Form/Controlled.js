const LoginForm = () => {
  const [form, setForm] = React.useState({
    email: 'john@doe.com',
    password: 'geheim',
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setForm({
      email: '',
      password: '',
    });
  };

//   return (...);
};