import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    
  });

const navigate = useNavigate();
  
  

  const register = () => {
    const { username, email, password } = user;
    if (username && email && password ) {
      axios.post("http://localhost:5000/BoostCanada/First", user).then((res) => {
        if (res.status===200){
          navigate("/Login")
        }
      })
    } else {
      alert("invalid input");
    }
  }

  return (
    <div  >
      
      <div  >
      <h1 style={{ textAlign:'center' }}>
        Signup Form
      </h1>
      <br />
        <div className="register">
          {console.log("User", user)}
          <input
          style={{ border:'1px solid black' }}
          className="form-control"
            type="text"
            name="username"
            value={user.username}
            placeholder="Your Full Name"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          ></input>
          <br></br>
          
          
          <input
          style={{ border:'1px solid black' }}
          className="form-control"
            type="text"
            name="email"
            value={user.email}
            placeholder="Your Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          ></input>
          <br></br>
          
          
  
          <input
          style={{ border:'1px solid black' }}
          className="form-control"
            type="password"
            name="password"
            value={user.password}
            placeholder="Your Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          ></input>
          <br></br>
          
          
        
          
          <p> Please Click on Register to Continue.</p>
          <button className="btn btn-primary" onClick={register}>
            Register
          </button>
        </div>
      </div>
    </div>
  )
}
    
export default Signup;