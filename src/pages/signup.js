import React from 'react';
import { useFormik } from 'formik';

const Signup = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {email: '',password:''},
    
    onSubmit: values => {
      console.log("🚀 ~ file: Signup.js:15 ~ Signup ~ values:", values)
      formik.resetForm()
    },
  });
    
    
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <br />
      <label htmlFor="password">password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Signup;