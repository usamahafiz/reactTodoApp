
import React from 'react';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {

    
    const [ state, setstate] = useState ({ email: '' , password: ''});
    const handleChange = (e) => 
        setstate( (s) =>({...s,[e.target.name]: e.target.value }));
    const navigate = useNavigate();
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        
        const users = JSON.parse(localStorage.getItem("users")) || [];
        console.log("retrieve data from local storage ", users);

        const {email, password} = state;
        console.log("email and password", email, password)

        //check email or password
        if(!email || !password){
            toast.error("Please enter email and password");
            return;
        }
        if(password.length < 6){
            toast.error("Password must be at least 6 characters");
            return;
        }
        const formData = {email, password};
        console.log("email",email)
        console.log("password",password)

        const userFound = users.find((user) => user.email === formData.email && user.password === formData.password)
        console.log("userFound", userFound)
      
        if (userFound) {

            toast.success("User has been logged in successfully");

            setTimeout (()=>navigate('/'),1500);
        } 
        else {
            toast.error("Invalid email or password.Please register first");
          }
        };
 
  return (
    <main className='auth py-5'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                <div className="card border-none p-3 p-md-4 mx-auto" style={{maxWidth : 400}}>
                    <div className="text-center">
                    <h1 className="text-dark">Login</h1>
                <p>Continue your design with <b>Clarity.</b></p>
                            <form onSubmit={handleSubmit}>
                    
                            <div className="row">
                                <div className="form-group mb-4 mt-2">
                                    <input type="text" id="email" className='form-control' placeholder='Enter Email'onChange={handleChange} name='email' />
                                    
                                </div>

                                <div className="form-group" >
                                    <input type="password" id="password" className='form-control' placeholder='Enter Password' onChange={handleChange} name='password' />
                                </div>
                                <div className="form-group mb-4 mt-2 me-2 text-end text-dark" style={{textDecoration: 'none'}}>
                                <Link to="/auth/Forgot" className='forget'>Forgot Password</Link>
                                </div>
                                <div className="form-group">
                                    <button type='submit' className='btn btn-secondary text-white border-0 btn-outline-dark w-50'>Login</button>
                                    <p className='mt-3'>Don't have an account? <Link to='/auth/Register'>Register now</Link></p>
                                </div>

                            </div>
                            

                            </form>
                </div>
            </div>
        </div>
        </div>
        </div>

      
    </main>
  )
}
