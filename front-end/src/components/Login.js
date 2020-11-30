import React from "react";

const Login = () => {
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <section>
        <label>Email </label>
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={values.email}
          onChange={handleChange}
        ></input>
        {/* {errors.email && <p className="input-error"> {errors.email} </p>} */}
      </section>
      <br />
      <section>
        <label>Password </label>
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter your Password"
          value={values.password}
          onChange={handleChange}
        ></input>
        {/* {errors.password && <p className="input-error"> {errors.password} </p>} */}
      </section>
      <br />
      {/* {errors.validation && <p className="input-error">{errors.validation}</p>} */}
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
