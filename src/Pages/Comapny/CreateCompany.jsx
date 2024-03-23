import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const CreateCompany = () => {
    const [companyName, setCompanyName] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [industry, setIndustry] = useState("");
    const [establishedDate, setEstablishedDate] = useState("");
    const [contactDetails, setContactDetails] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit=async()=>{
        const formData ={companyName, description, location, industry, establishedDate, contactDetails, email, password}
        await axios.post(`http://localhost:8080/company-service/api/company`, formData)
        .then((res)=>{
            alert("Success")
            
        }).catch((err)=>{
            alert(err.message)
        })
    }
  return (
    <div>
      <form action="">
        <label htmlFor="">Comapny Name:</label>
        <input type="text" onChange={(e)=>{
            setCompanyName(e.target.value)
        }}/><br />
        <label htmlFor="">Description:</label>
        <input type="text" onChange={(e)=>{
            setDescription(e.target.value)
        }}/><br />
        <label htmlFor="">Location:</label>
        <input type="text" onChange={(e)=>{
            setLocation(e.target.value)
        }}/><br />
        <label htmlFor="">Industry:</label>
        <input type="text" onChange={(e)=>{
            setIndustry(e.target.value)
        }}/><br />
        <label htmlFor="">Established Date</label>
        <input type="text" onChange={(e)=>{
            setEstablishedDate(e.target.value)
        }}/><br />
        <label htmlFor="">Contact Details:</label>
        <input type="text" onChange={(e)=>{
            setContactDetails(e.target.value)
        }}/><br />
        <label htmlFor="">Email:</label>
        <input type="text" onChange={(e)=>{
            setEmail(e.target.value)
        }}/><br />
        <label htmlFor="">Password:</label>
        <input type="password" onChange={(e)=>{
            setPassword(e.target.value)
        }}/><br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default CreateCompany
