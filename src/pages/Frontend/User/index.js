import React from 'react'


export default function User() {

 

  const users = JSON.parse(localStorage.getItem("users")) || [];



  return (
    <main className='user py-5'>
       <div className='container'>
            <div className="text-center">
            <h1 className='text-center mt-4'>Registered Users</h1>
            </div>

              <div className="table-responsive">
            <table className="table mt-3">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
    </tr>
  </thead>
  <tbody>
    {users.length > 0 ? (
      users.map((user, index) => (
        <tr key={index}>
        <th scope="row">{index+1}</th>
        <td>{user.fullname}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
  
        </tr>

    ))
) :(
  <tr>
    <td colSpan="4" className="text-center fw-bold">No Users Registered </td>
  </tr>
)
}
   
   
   
  </tbody>
</table>
            </div>
            </div>

    </main>
  )
}
