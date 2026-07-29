const LoginForm = () => {
//   ...

  const errorFields = getErrorFields(form);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={form.email}
          onChange={handleChange}
        />
        {errorFields.email?.length ? (
          <span style={{ color: 'red' }}>
            {errorFields.email[0].message}
          </span>
        ) : null}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
        {errorFields.password?.length ? (
          <span style={{ color: 'red' }}>
            {errorFields.password[0].message}
          </span>
        ) : null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};