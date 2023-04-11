import { useFormik } from "formik";
import React from "react";

const Login = () => {


  const formik = useFormik({
    initialValues:{fname:'', email:'', password: ''},

    //onSubmit send data to backend
    onSubmit: async(value)=>{

      const respones= await fetch('http://localhost:8080/' ,{
        method:'post' ,
        body:JSON.stringify(formik),
        headers: {
          'Content-Type' : 'application/json'
        }
      })
      const data  = await respones.text()
      console.log(data)
      console.log(respones)


      console.log(value.email) 
      console.log(value.fname)
      console.log(value.password)
      formik.resetForm()
    }
  })

  return (
    <div>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">name</label>
        <input
          id="fname"
          name="fname"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.fname}
        />
        <br />
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
    </div>
  );
};

export default Login;
