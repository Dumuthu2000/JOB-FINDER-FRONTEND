import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SubNavbar from '../../../components/Navbar/SubNavbar';

const CompanyLogin = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[companyName, setCompanyName] = useState('');

    const navigate = useNavigate();
  
    useEffect(()=>{
      const formData = {companyName}
      axios.post(`http://localhost:8080/job-service/api/job-list`, formData)
      .then((res)=>{
        const jobs = res.data;
        localStorage.setItem("JobDetails", JSON.stringify(jobs));
      }).catch((err)=>{
        alert(err.message)
      })
    },[companyName])

    const handleLogin=async()=>{
        const formData = {email, password};
        await axios.post(`http://localhost:8080/company-service/api/company/login`, formData)
        .then((res)=>{
            // alert("Login Successfull")
            const companyDetails = res.data;
            localStorage.setItem("CompantDetails", JSON.stringify(companyDetails));
            setCompanyName(companyDetails.companyName);
            navigate('/company/profile')
        }).catch((err)=>{
            alert(err.message);
            console.log(err.message)
        })
    }
  return (
    <div className="loginMainContainer">
      <SubNavbar/>
      <div className="mainConatainer">
          <div className='loginContainer'>
            
            <label htmlFor="">Email:</label>
            <input type="text" onChange={(e)=>{
              setEmail(e.target.value)
            }}/><br />
            <label htmlFor="">Password:</label>
            <input type="text" onChange={(e)=>{
              setPassword(e.target.value);
            }}/><br />
            <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default CompanyLogin
