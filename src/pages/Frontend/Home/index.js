import React from 'react'
import { useNavigate } from 'react-router-dom';



export default function Home() {
  const navigate = useNavigate();

    const handleTodo = () =>{
      navigate('/todo');
    }
    const handleUser = () =>{
      navigate('/user');
    }    
    return (

    <main className='frontend'>
    <div className="container">
          <h1 className='text-center mb-3'>Welcome to Home Page </h1>
          <hr className='mt-4' />
      <div className="row justify-content-center">
        <div className="col-lg-6 mt-3">
        
              <div className="card border-none p-3 "  >
                  <h5 className="card-title">Number of Todos</h5>
                  <p className="card-text">When you click the button, a comprehensive To-Do table is revealed, providing a detailed snapshot of the user's tasks and activities.</p>
                  <button type='submit' className='btn btn-secondary btn-outline-dark text-white border-0 w-100' onClick={handleTodo}>Todos Table</button>
            </div>
          </div>
          

          <div className="col-lg-6 text-center">
              <div className="card border-none p-3 mt-3" >
                  <h5 className="card-title">Registered Users</h5>
                  <p className="card-text">Click the button to unlock a comprehensive list of registered users, showcasing the core information about each individual. </p>
                  <button type='submit' className='btn btn-secondary btn-outline-dark text-white border-0 btm-sm w-100' onClick={handleUser} >Registered Users</button>
            </div>
             </div>





          </div>



          </div>

         
          </main>
  
    
  )
    };
  


  