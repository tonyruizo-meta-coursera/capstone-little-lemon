import React from 'react';
import './loginPage.css';
import Logo from '../../assets/img-logos/logo-lemon.png';
import { useFormik } from "formik";
import * as Yup from 'yup';
import PrimaryBtn from '../../components/buttons/PrimaryBtn';

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      userName: '',
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("Please ener your login")
    }),
    onSubmit: (values, { resetForm }) => {
      alert(`The username ${values.userName} is not found. Try again or sign up for an account.`);
      resetForm({ values: '' });
    }
  });
  return (
    <div className='login-container'>
      <div className="login-header">
        <img src={Logo} alt="Little Lemon restaurant logo" />
      </div>
      <div className="login-heading">
        <h1>Sign in to <span>Little Lemon</span></h1>
      </div>
      <div className="login-form">
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            id='userName'
            name='userName'
            placeholder='Phone, email, or username'
            onChange={formik.handleChange}
            value={formik.values.userName}
          />
          <div className="form-msg">
            {formik.errors.userName ? <p>{formik.errors.userName}</p> : null}
          </div>
          <div className="form-btn">
            <PrimaryBtn>Next</PrimaryBtn>
          </div>
        </form>
      </div>
      <div className="login-text">
        <p>Don't have an account? <a href="/">Sign up</a></p>
      </div>
    </div>
  );
};

export default LoginPage;
