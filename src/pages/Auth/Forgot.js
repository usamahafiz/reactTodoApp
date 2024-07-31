import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Forgot() {
    const [state, setState] = useState({ email: '', newPassword: '', confirmPassword: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setState((s) => ({ ...s, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const users = JSON.parse(localStorage.getItem("users")) || [];
        console.log("users",users)
        const user = users.find((user) => user.email === state.email);
        console.log("user",user)
        if (!user) {
            toast.error("User not found. Please registered first");
            return;
        }
        if (state.newPassword !== state.confirmPassword) {
            toast.error("Password does not match");
        }
        if (state.newPassword.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }
       
        if (!state.email || !state.newPassword || !state.confirmPassword) {
            toast.error("Please fill out all fields");
            return;
        }
        
        user.password = state.newPassword;
        localStorage.setItem("users", JSON.stringify(users));
        toast.success("Password changed successfully");
        navigate("/auth/login");
        
      
           

        };

  return (
    <main className='auth py-4'>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="card border-0 py-5 px-4 mx-auto py-md-4 " style={{maxWidth : 400}}>
                    <div className="text-center">
                        <h2 className="text-dark mb-2 mt-2">Forgot Password</h2>
                        <form  onSubmit={handleSubmit}>
                
                        <div className="row">
                            <div className="col-12 mb-4 mt-2">
                                <input type="email" name='email' id="email" className='form-control' placeholder='Enter Email' onChange={handleChange}  />
                            </div>

                            <div className="col-12 mb-4" >
                                <input type="password" name='newPassword' id="password" className='form-control' placeholder='Update Password' onChange={handleChange}  />
                            </div>
                            
                            <div className="col-12 mb-4" >
                                <input type="password" name='confirmPassword' id="conpassword" className='form-control' placeholder='Confirm Password' onChange={handleChange} />
                            </div>
                            <div className="col-12">
                                <button type='submit' className='btn btn-secondary text-white border-0 btn-outline-dark w-50 mb-2'>Update</button><br />
                              <Link to='/auth/login' className='text-center mt-4'> Login here!</Link>
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
