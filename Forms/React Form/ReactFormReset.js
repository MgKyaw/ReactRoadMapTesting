const LoginForm = ({ onLogin }) => {
  const [form, setForm] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onLogin(form);
  };

//   return (...);
};