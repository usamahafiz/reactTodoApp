import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


export default function Register() {

    const [ state, setstate] = useState ({ fullname:' ' , email: '' , password: ''})
    const handleChange = e => setstate( s=>({...s,[e.target.name]: e.target.value }))
    const navigate = useNavigate()

    const handleSubmit = e =>{
        e.preventDefault()

        const users = JSON.parse(localStorage.getItem("users")) || [];

        if (state.fullname.length < 3) {
          toast.error("Please enter your fullname correctly");
          return;
        }
        if (state.password.length < 6) {
          toast.error("Please enter your password correctly");
          return;
        }
        if (users.find((user) => user.email === state.email)) {
          toast.error("User already exists. Please login");
          return;
        }

        const user = {
            fullname: state.fullname,
            email: state.email,
            password: state.password,
          };
      
          users.push(user);
          toast.success("A new user has been successfully registered.");
          localStorage.setItem("users", JSON.stringify(users));
          navigate("/auth/Login");
        };

  return (
    
    <main className='auth py-5'>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
                <div className="card border-none p-3 p-md-4 mx-auto" style={{maxWidth : 400}}>
                    <div className="text-center">
                        <h1 className="text-dark">Register</h1>
                        <p>Firstly, <b>Registered </b>yourself!</p>
                        <form onSubmit={handleSubmit}>
                
                        <div className="row">
                                  
                             <div className="form-group mb-4 mt-3">
                                 
                                  <input type="text" name="fullname" id="fullname" className="form-control px-2 rounded" placeholder="Enter name" onChange={handleChange} />
                                  </div>

                            <div className="form-group mb-4">
                                <input type="email" id="email" className='form-control' placeholder='Enter Email' onChange={handleChange} value={state.email}  name='email' />
                            </div>

                            <div className="form-group mb-4" >
                                <input type="password"  id="password" className='form-control' placeholder='Enter Password' onChange={handleChange} value={state.password} name='password' />
                            </div>
                            <div className="form-group">
                                <button type='submit' className='btn btn-secondary text-white border-0 btn-outline-dark w-50'>Register</button>
                                <p className='mt-3'>Have already an account. <Link to='/auth/login'>Login here!</Link></p>
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
