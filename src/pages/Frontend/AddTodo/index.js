import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

export default function AddTodo() {
    const navigate = useNavigate();
    const handleShow = () =>{
        navigate('/todo');
      }
    
      const [title, setTitle] = useState('');
      const [location, setLocation] = useState('');
      const [status, setStatus] = useState("incomplete")
      const [date, setDate] = useState('');
      const [description, setDescription] = useState('');
      const [user_id, setUserId] = useState('');
      const [todos, setTodos] = useState([]);


      useEffect(() => {
        let storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(storedTodos);
      }, []);

      const handleSubmit = (e) =>{
        e.preventDefault();
        const newTodo = {
          id: Date.now() + Math.random().toString(36).slice(2), // Generate unique ID
          title,
          location,
          status,
          date,
          description,
          user_id: Date.now() + Math.random().toString(36).slice(2), 
        };
      
        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        setTitle("");
        setLocation("");
        setStatus("incomplete");
        setDate("");
        setDescription("");
        setUserId("");
    
        toast.success("New Todo has been added successfully");
      }
      


  return (
   <main className='addTodo py-5'>
     <div className="container">
            <div className="row">
                <div className="col">
                    <h2 className="text-center mt-4 ">Add Your Tasks</h2>
                </div>
            </div>

     <div className="container">
        <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <div className="card p-3 p-md-4 p-lg-5 mt-3">
                    <div className="row mb-3">
                        <div className="col-12 col-md-6 mb-md-0 mb-3">
                            <input type="text" name="title" id="title" className="form-control px-2 rounded" placeholder="Title" value={title}
                      onChange={(e) => setTitle(e.target.value)} />

                        </div>
                        <div className="col-12  col-md-6 mb-2 mb-md-0">
                            <input type="text" name="location" id="location" className="form-control px-2 rounded" placeholder="Location" value={location}
                      onChange={(e) => setLocation(e.target.value)} />
                        </div>
                    </div>

                        <div className="row mb-3">
                    <div className="col-sm-6 col-lg-6 mb-3">
              <select
                name="status"
                id="status"
                className="form-control"
                value={status}
                      onChange={(e) => setStatus(e.target.value)}
                >
                <option value="">Select status</option>
                <option value="Completed">Completed</option>
                <option value="UnCompleted">Uncompleted</option>
              </select>
             </div>
                       
                        <div className="col-12  col-md-6 mb-2 mb-md-0">
                            <input type="date" name="location" id="date" className="form-control px-2 rounded"  value={date}
                      onChange={(e) => setDate(e.target.value)} />
                        </div>
                    </div>

                    <div className="row mb-md-3">
                        <div className="col-12 mb-2 mb-md-0 ">
                             <textarea name="description" id="description" placeholder="Description" className="form-control px-2 form-control-sm rounded"  value={description}
                      onChange={(e) => setDescription(e.target.value)}></textarea>
            
                        </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6 offset-md-3">
    
                        <button className="btn btn-secondary text-white text-center btn-md mb-2  w-100 mt-3" id="btnAdd" onClick={handleSubmit}
                        >Add Task</button>
                        <button className="btn btn-success text-white text-center btn-md mb-2  w-100" id="btnUpdate" onClick={handleShow}>Show Todo Table</button>
    
                    </div>
                </div>
    
            </div>
        </div>
     </div>
     </div>
     </div>

   </main>
  )
}
