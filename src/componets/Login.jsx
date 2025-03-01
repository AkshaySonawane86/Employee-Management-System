import React, { useState } from "react";

function Login() {


    const [username,setName] = useState('')
    const [userpassword,setPassword] = useState('')
    // console.log(username);
    // console.log(userpassword);

    const submitHandler=(e) =>
    {
        console.log("Hello submit");
    }

    return (
     <>
        <div className="container">
          <div ClassName="box">
          <div class="mb-4">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control"
  onChange={(e)=>{setName(e.target.value) }} value={username} id="exampleFormControlInput1" placeholder="name@gmail.com" required />
</div>

<div class="mb-4">
    <label for="inputPassword" class="form-label">Password</label>
   
      <input type="password" onChange={(e)=>{setPassword(e.target.value) }} value={userpassword} class="form-control" id="inputPassword"/>
    
  </div>
  <div class="col-auto">
    <button type="submit" onSubmit={(e)=>{submitHandler(e)}} class="btn btn-primary mb-3">Submit</button>
  </div>
  {/* <h1>username</h1> */}
            </div>  
        </div>
     </>
    );
  }
  
  export default Login;