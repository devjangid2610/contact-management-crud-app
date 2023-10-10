import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaMedium } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div className="card text-center">
  <div className="card-header">
    About
  </div>
  <div className="card-body">
    <h5 className="card-title">Contact Management System (Crud Operation Web App)</h5>
    <p className="card-text">A CRUD-enabled user management system allowing users to seamlessly create, read, update, and delete their name and email information.</p>
    {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
  </div>
  
  <div className="card-footer text-body-secondary">
      <a href="https://github.com/devjangid2610" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} style={{marginRight: '10px',color:'black' }}/>
      </a>
      <a href="https://www.linkedin.com/in/devendra-jangid26" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} style={{ margin: '0 10px' }}/>
      </a>
      <a href="https://medium.com/@devjangid2610" target="_blank" rel="noopener noreferrer">
        <FaMedium size={30} style={{ marginLeft: '10px', color:'black' }}/>
      </a>
    
  </div>
</div>
    </>
  )
}

export default Footer
