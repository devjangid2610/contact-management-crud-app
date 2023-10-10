import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from "react-router-dom";
import Footer from './Footer';

const Update = () => {
    const [id,setId] = useState(0);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const navigate=useNavigate();
    

    useEffect(()=>{
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));

    },[])

    const handleUpdate =(e)=>{
        e.preventDefault();
        axios.put(`https://651ec5e644a3a8aa4768fc52.mockapi.io/todo/${id}`,
        {
            name: name,
            email: email,
        }
        ).then(()=>{
            navigate("/read");
        });
    }
  return (
    <>
    <h2>Update Data</h2>
        <form>
  
  <div className="mb-3">
    <label className="form-label">Name</label>
    <input type="text" className="form-control" value={name}
         onChange={(e)=> setName(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control" aria-describedby="emailHelp" value={email}
         onChange={(e)=> setEmail(e.target.value)}
    />
  </div>
  
  <button type="submit" className="btn btn-success" mx-2
   onClick={handleUpdate}
  >Update</button>
  <Link to="/read">
  <button className='btn btn-secondary mx-2'>Back</button>
  </Link>
</form>
<br>

</br>
<br>
    
    </br>
    <br>
    
</br>
<Footer/>
    </>
  )
}

export default Update
