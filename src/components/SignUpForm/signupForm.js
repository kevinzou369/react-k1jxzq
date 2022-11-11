import React, {useState, useEffect} from 'react'
import './signUpForm.css'
import validation from "./signUpValidation";
import {useNavigate ,Link} from 'react-router-dom';
// import axios from "axios";
// import loginForm from "../loginForm/loginForm";

export function SignUpForm() {
    const [errors, setError] = useState({ });
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: '',
        password: '',
        confirmPassword: ''
    })

    function handleChanged(e) {
        setValues({...values,[e.target.name]: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        setError(validation(values));


        console.log("This is test ID : ", window.localStorage.getItem("uID"));

        // TODO: update URL
        // console.log("This is name : ", window.localStorage.getItem("name"));
        // console.log("This is password : ", window.localStorage.getItem("password"));
        // let url = 'https://localhost:8080/api/v1/person/';
        // // let url = '/';
        // axios.post(url, {
        //     name: values.name,
        //     password: values.password
        // }).then((response) => {
        //     if (response.status === 200){
        //         console.log("Success");
        //
        //     }else{
        //
        //     }
        // });

    }

    // for testing only. Remove when release
    useEffect(() => {
            if(Object.keys(errors).length === 0 && values.name !== "" && values.password !== "" ) {
                alert("Form Submitted");
                console.log("Success");
                navigate('/');
                // console.log(values.password);
            }
        }, [errors]
    )

    return (
        <div className='wrap'>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <h1 style={{textAlign: "center"}}>
                        Sign Up
                    </h1>
                </div>
                <div className="container">
                    <label><b>Username : </b></label>
                    <input type="text" placeholder="Enter Username" name="name" value={values.name} onChange={handleChanged}/>
                    {errors.name && <p style={{color: "red", fontSize: "13px"}}>{errors.name}</p>}
                    <label><b>Password : </b></label>
                    <input type="password" placeholder="Enter Password" name="password" value={values.password} onChange={handleChanged}/>
                    {errors.password && <p style={{color: "red", fontSize: "13px"}}>{errors.password}</p>}
                    <label><b>Confirm Password : </b></label>
                    <input type="password" placeholder="Enter Password again" name="confirmPassword" value={values.confirmPassword} onChange={handleChanged}/>
                    {errors.confirmPassword && <p style={{color: "red", fontSize: "13px"}}>{errors.confirmPassword}</p>}
                    <hr/>
                    <button type="submit">Register</button>
                    <Link to="/" >
                        <button type="button" className="signUpBtn" >Back to Login</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm;