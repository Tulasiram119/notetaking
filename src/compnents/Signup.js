import React ,{useState}from "react";
import { useNavigate } from 'react-router-dom';
export default function Signup(props) {
    const[creditionals,setCreditionals] = useState({name:"",email:"",password:"",cpassword:""});
    let navigate = useNavigate(); 
    const handleSubmit = async (event)=>{
        const {name,email,password} = creditionals;
        event.preventDefault();
        const response = await fetch("http://localhost:3000/api/auth/createuser", {
            method: "POST",
            headers: {
              "content-type": "application/json",              
            },
            body: JSON.stringify({name,email,password})
            
          });
        const json = await response.json();
        console.log(json.sucess);
        if(json.sucess){
            //save auth token and redirect
            localStorage.setItem('token',json.authtoken);
            navigate('/');
            props.showAlert("Account created succesful",'success');
        } else{
            props.showAlert("invalid creditionals",'danger');
        }
    }
    const handleChange = (e)=>{
        setCreditionals({...creditionals,[e.target.name]:e.target.value});
    }
  return (
    <div className="container">
      <h1>Sign up to use Notebook</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name" name="name"
            aria-describedby="emailHelp"  onChange ={handleChange}
          />          
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email" name="email"
            aria-describedby="emailHelp" onChange ={handleChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password" name="password" onChange ={handleChange} required minLength={5}
          />
        </div>        
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword" name="cpassword" onChange ={handleChange} required minLength={5}
          />
        </div>        
        <button type="submit" className="btn btn-primary">
          Create An Account
        </button>
      </form>
    </div>
  );
}
