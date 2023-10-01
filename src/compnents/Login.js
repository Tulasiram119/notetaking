import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
export default function Login(props) {
    const[creditionals,setCreditionals] = useState({email:"",password:""}); 
    let navigate = useNavigate();   
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const response = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: {
              "content-type": "application/json",              
            },
            body: JSON.stringify({email: creditionals.email,password:creditionals.password})
            
          });
        const json = await response.json();
        console.log(json.sucess);
        if(json.sucess){
            //save auth token and redirect
            localStorage.setItem('token',json.authtoken);            
            props.showAlert("Logged in succesfully",'success');
            navigate('/');
        } else{
          props.showAlert("invalid creditionals",'danger');
        }
    }
    const handleChange = (e)=>{
        setCreditionals({...creditionals,[e.target.name]:e.target.value});
    }
  return (
    <div>
      <h1>Login to use Notebook</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email" value={creditionals.email} onChange={handleChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password" value={creditionals.password} onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
