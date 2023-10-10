import axios from 'axios';
import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Footer from './Footer';

export default function Create() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const history = useNavigate();

    const Header = {"Access-Control-Allow-Origin" : "*"};
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Clicked");
        axios.post(
            'https://651ec5e644a3a8aa4768fc52.mockapi.io/todo',
            {name : name, email : email,
                Header
        })
       .then(()=>{
        history('/read');
       });
       
        
    };
  return (
    <>
  
    <div className='d-flex justify-content-between m-4'>
    
    <h2>Create Data </h2>
    <Link to="/read">
    <button className='btn btn-info'>Show Data</button>
    </Link>
    </div>
      <form>
  <div className="mb-3">
    <label className="form-label">Name</label>
    <input type="text" className="form-control" 
         onChange={(e)=> setName(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control" aria-describedby="emailHelp"
        onChange={(e)=> setEmail(e.target.value)}
    />
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
<br></br>
<br></br>
<br></br>
<Footer/>
    </>
  )
}
