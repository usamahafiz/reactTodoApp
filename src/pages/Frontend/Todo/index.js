import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap';

export default function Todo() {

  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
 
     const navigate = useNavigate();
   

     useEffect(()=>{
      let storedTodos = JSON.parse(localStorage.getItem("todos"))
      if(storedTodos){
          setTodos(storedTodos);
      }
    }, []);
   

    const handleEditTodo = (todo) => {
      setEditTodo(todo);
      setShowEditModal(true);
    };
  
    const handleDeleteTodo = (todo) => {
      setEditTodo(todo);
      setShowDeleteModal(true);
    };

    const handleUpdateTodo = () => {
      const updatedTodos = todos.map((t) => (t.id === editTodo.id ? editTodo : t));
      setTodos(updatedTodos);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      setShowEditModal(false);
    };
  
    const handleConfirmDelete = () => {
      const updatedTodos = todos.filter((t) => t.id !== editTodo.id);
      setTodos(updatedTodos);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      setShowDeleteModal(false);
    };

     const handleAddTodo = () =>{
      navigate('/addTodo');
    }
  return (
    <main className='todo py-5'>
        <div className='container'>
            <div className="text-center">
            <h1 className='text-center'>Todo Table</h1>
            <button type='submit' className='btn btn-secondary text-white border-0 btn-outline-dark w-50' onClick={handleAddTodo}>Add New Todo</button>
            </div>

              <div className="table-responsive">
            <table className="table mt-3">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Location</th>
      <th scope="col">Description</th>
      <th scope="col">Date</th>
      <th scope="col">Created by</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {todos.map((todo,index) =>(
      <tr key={todo.id}>
        <th scope="row">{index+1}</th>
        <td>{todo.title}</td>
        <td>{todo.location}</td>
        <td>{todo.description}</td>
        <td>{todo.date}</td>
        <td>{todo.user_Id}</td>
        <td>{todo.status}</td>
        <td>
                <button className="btn btn-sm btn-info" onClick={() => handleEditTodo(todo)}>Edit</button>
                <button className="btn btn-sm ms-lg-2 ms-0 mt-2 mt-md-0 btn-danger" onClick={() => handleDeleteTodo(todo)}>Delete</button>
        </td>
      
        </tr>


))}
    
  
   
   
   
  </tbody>
</table>
            </div>
            </div>
          
            {/* Edit Todo Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={editTodo?.title || ''}
                onChange={(e) => setEditTodo({ ...editTodo, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                value={editTodo?.location || ''}
                onChange={(e) => setEditTodo({ ...editTodo, location: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                value={editTodo?.description || ''}
                onChange={(e) => setEditTodo({ ...editTodo, description: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={editTodo?.date || ''}
                onChange={(e) => setEditTodo({ ...editTodo, date: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                value={editTodo?.status || ''}
                onChange={(e) => setEditTodo({ ...editTodo, status: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formUserId">
              <Form.Label>Created by</Form.Label>
              <Form.Control
                type="text"
                value={editTodo?.user_Id || ''}
                onChange={(e) => setEditTodo({ ...editTodo, user_Id: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdateTodo}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Todo Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this todo?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

    </main>
  )
}
