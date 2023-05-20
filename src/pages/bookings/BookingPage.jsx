import React from 'react';
import './booking.css';
import { useFormik } from "formik";
import * as Yup from 'yup';
import PrimaryBtn from '../../components/buttons/PrimaryBtn';

const BookingPage = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      date: '',
      select: '',
      guest: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().max(25, "Must be 25 characters or less").min(2, "Must be 2 characters or more").required(),
      email: Yup.string().email('Invalid email').required(),
      date: Yup.date().required().nullable(),
      select: Yup.string().required(),
      guest: Yup.number().moreThan(0, 'Atleast 1 guest').lessThan(11, "No more than 10").integer().required(),
    }),
    onSubmit: (values, { resetForm }) => {
      alert(`Your info has been submitted and confirmation will be emailed to you! Thank you, ${values.name}.`);
      resetForm({ values: '' });
    }
  });
  return (
    <section id='formPage-section'>
      <div className="form-container">
        <div className="form-heading">
          <h1>Reserve a Table</h1>
        </div>
        <div className="form-table">
          <form onSubmit={formik.handleSubmit}>
            <div className="input-container">
              <label htmlFor="occassion">Select a date: </label>
              <input
                type="date"
                id='date'
                name='date'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.date}
              />
            </div>
            <div className="form-msg">
              {formik.touched.date && formik.errors.date ? <p>{formik.errors.date}</p> : null}
            </div>
            <div className="input-container">
              <label htmlFor="occassion">Select occassion: </label>
              <select
                id='select'
                name='select'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.select}
              >
                <option value='' disabled></option>
                <option value="birthday">Birthday</option>
                <option value="engagement">Engagement</option>
                <option value="anniversary">Anniversary</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-msg">
              {formik.touched.select && formik.errors.select ? <p>{formik.errors.select}</p> : null}
            </div>
            <div className="input-container">
              <label htmlFor="guest">Number of guest: </label>
              <input
                type='number'
                placeholder='1-10'
                name='guest'
                id='guest'
                value={formik.values.guest}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="form-msg">
              {formik.touched.guest && formik.errors.guest ? <p>{formik.errors.guest}</p> : null}
            </div>
            <div className="input-container">
              <label htmlFor="email">Enter name: </label>
              <input
                id='name'
                name='name'
                placeholder='First and last'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
            </div>
            <div className="form-msg">
              {formik.touched.name && formik.errors.name ? <p>{formik.errors.name}</p> : null}
            </div>
            <div className="input-container">
              <label htmlFor="email">Enter email: </label>
              <input
                id='email'
                name='email'
                placeholder='Email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </div>
            <div className="form-msg">
              {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
            </div>
            <div className="form-btn">
              <PrimaryBtn>Reserve</PrimaryBtn>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingPage;
