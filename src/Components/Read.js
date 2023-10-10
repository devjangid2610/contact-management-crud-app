import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import Footer from './Footer';

const Read = () => {

    const [data,setData] = useState([]);
    const [tabledark,setTableDark]=useState('');
    const [inputText,setInputText]=useState('');

 
    function getdata(){
        axios.get('https://651ec5e644a3a8aa4768fc52.mockapi.io/todo')
        .then((res)=>{
            console.log(res.data);
            setData(res.data);
        })
    }

    function handleDelete(id){
        axios.delete(`https://651ec5e644a3a8aa4768fc52.mockapi.io/todo/${id}`
        ).then(()=>{
            getdata();
        })
    }

    const handleLocalStorage =(id,name,email)=>{
        localStorage.setItem("id",id);
        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
    }

    

    useEffect(()=>{
        getdata();
    },[]);

    const InputHandler = (e)=>{
        setInputText(e.target.value.toLowerCase());
    };

  
  return (
    <>
    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={
    ()=>{
        if(tabledark==="table-dark") setTableDark("")
        else setTableDark('table-dark')
    }
  }/>
</div>
    <div className='d-flex justify-content-between m-4'>
    <h2>Read Operations</h2>
    <div class='mb-3'>
    <input type="search" placeholder='Type here..' class='form-control'onChange={InputHandler} />
    </div>
    <Link to="/create">
    <button className='btn btn-primary'>Create Data</button>
    </Link>
    </div>
      <table className={`table ${tabledark}`}>
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
{  
    data.filter((el)=>{
        if(el === ''){
            return el;
        }
        else{
            return(el.name.toLowerCase().includes(inputText) || el.email.toLowerCase().includes(inputText))
        }
    }).map((eachData)=>{
        return(
            <>
            <tbody>
    <tr>
      <th scope="row">{eachData.id}</th>
      <td>{eachData.name}</td>
      <td>{eachData.email}</td>
      <td>
      <Link to="/update">
      <button className='btn-success' onClick={()=> handleLocalStorage(eachData.id,eachData.name,eachData.email)}>Edit</button>
      </Link>  
      </td>   
      <td><button className='btn-danger' onClick={()=>handleDelete(eachData.id)}>Delete</button></td>
    </tr>
    
  </tbody>
            </>
        )
    })
   
}
</table>
<br>
    
    </br>
<Footer/> 
    </>
  )
}

export default Read
