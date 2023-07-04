import React, { useState } from "react";

export default function AddUser() {

  const [user,setUsers]=useState({
    name:"",
    username:"",
    email:""
  })

  const{name,username,email}=user

  const onInputChange=(e)=> {
    setUsers({...user,[e.target.name]:e.target.value});
  };

  const onSubmit=(e)=>{
    
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e)=>onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Name
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e)=>onInputChange(e)}
            ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="Username" className="form-label">
              Username
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Username"
              name="username"
              value={username}
              onChange={(e)=>onInputChange(e)}
            ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              E-mail
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="E-mail"
              name="email"
              value={email}
              onChange={(e)=>onInputChange(e)}
            ></input>
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>
          <button type="submit" className="btn btn-outline-danger mx-2">
            Cancel
          </button>
          </form>
        </div>
      </div>
    </div>
  );
}
