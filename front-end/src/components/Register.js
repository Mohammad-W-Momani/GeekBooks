import React from "react";

const Register = () => {
  return (
    <form onSubmit={handleSubmit} className="form">
      <h1>Register User</h1>
      <section>
        <label>Username</label>
        <input
          type="text"
          name="Fullname"
          placeholder="enter your Fullname"
          value={values.Fullname}
          onChange={handleChange}
        ></input>
        {errors.Fullname && <p className="input-error"> {errors.Fullname} </p>}
      </section>
      <section>
        <label>Email </label>
        <input
          type="email"
          name="email"
          placeholder="enter your email"
          value={values.email}
          onChange={handleChange}
        ></input>
        {errors.email && <p className="input-error"> {errors.email} </p>}
      </section>

      <section>
        <label>Password </label>
        <input
          type="password"
          name="password"
          placeholder="enter password"
          value={values.password}
          onChange={handleChange}
        ></input>
        {errors.password && <p className="input-error"> {errors.password} </p>}
      </section>

      <section>
        <label>Confirm Password </label>
        <input
          type="password"
          name="password2"
          placeholder="confirm password"
          value={values.password2}
          onChange={handleChange}
        ></input>
        {errors.password2 && (
          <p className="input-error"> {errors.password2} </p>
        )}
      </section>

      <section className="form-input">
        <label>Date Of Birth </label>

        <input
          type="date"
          name="dob"
          value={values.dob}
          onChange={handleChange}
        ></input>
      </section>

      <button type="submit" className="btn">
        Register
      </button>
    </form>
  );
};

export default Register;
