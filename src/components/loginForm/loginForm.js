import React, { useState, useEffect } from 'react';
import './loginForm.css';
import validation from './loginValidation';
// import axios from "axios";
import useLocalState from '../../hook/useLocalState';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [errors, setError] = useState({});
  const [uID, setUID] = useLocalState('uID', '');
  const [values, setValues] = useState({
    name: '',
    password: '',
  });

  function handleChanged(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError(validation(values));
    try {
      setUID(values.name);
    } catch (e) {
      console.log('Failed ', uID);
    } finally {
      console.log('ID ', uID);
    }

    console.log('This is test ID : ', window.localStorage.getItem('uID'));

    // TODO: update URL
    // console.log("This is name : ", window.localStorage.getItem("name"));
    // console.log("This is password : ", window.localStorage.getItem("password"));
    // let url = 'https://localhost:8080/api/v1/login';
    // // let url = '/';
    // axios.post(url, {
    //     name: values.name,
    //     password: values.password
    // }).then((response) => {
    //     if (response.status === 200){
    //         setPost(response.data);
    //         setUID(response.data.uid);
    //         console.log(uID);
    //     }else{
    //
    //     }
    // });
  }

  // for testing only. Remove when release
  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      values.name !== '' &&
      values.password !== ''
    ) {
      alert('Form Submitted');
      console.log(uID);
      // console.log(values.password);
    }
  }, [errors]);

  return (
    <div className="wrap">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1 style={{ textAlign: 'center' }}>Login Page</h1>
        </div>
        <div className="container">
          <label>
            <b>Username : </b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="name"
            value={values.name}
            onChange={handleChanged}
          />
          {errors.name && (
            <p style={{ color: 'red', fontSize: '13px' }}>{errors.name}</p>
          )}
          <label>
            <b>Password : </b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={values.password}
            onChange={handleChanged}
          />
          {errors.password && (
            <p style={{ color: 'red', fontSize: '13px' }}>{errors.password}</p>
          )}
          <button type="submit">Login</button>
          <hr />
          <Link to="/signUp">
            <button type="button" className="signUpBtn">
              Sign Up
            </button>
          </Link>
          <Link to="/">
            <button type="button" className="forgetPassBtn">
              Forget Password
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
