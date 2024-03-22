import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const CreateJob = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [requirements, setRequirements] = useState("");
    const [workTime, setWorkTime] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [deadline, setDeadline] = useState("");

    const handleSubmit=async()=>{
        const formData ={title, description, category, requirements, workTime, companyName, deadline}
        await axios.post(`http://localhost:6010/job/addJob`, formData)
        .then((res)=>{
            alert("Success")
            
        }).catch((err)=>{
            alert(err.message)
            // console.log(err.message)
        })
    }
  return (
    <div>
      <form action="">
        <label htmlFor="">Job title</label>
        <input type="text" onChange={(e)=>{
            setTitle(e.target.value)
        }}/><br />
        <label htmlFor="">Job Description</label>
        <input type="text" onChange={(e)=>{
            setDescription(e.target.value)
        }}/><br />
        <label htmlFor="">Job Category</label>
        <input type="text" onChange={(e)=>{
            setCategory(e.target.value)
        }}/><br />
        <label htmlFor="">Job Requirements</label>
        <input type="text" onChange={(e)=>{
            setRequirements(e.target.value)
        }}/><br />
        <label htmlFor="">Job Work Time</label>
        <input type="text" onChange={(e)=>{
            setWorkTime(e.target.value)
        }}/><br />
        <label htmlFor="">Job Company Name</label>
        <input type="text" onChange={(e)=>{
            setCompanyName(e.target.value)
        }}/><br />
        <label htmlFor="">Job Deadline</label>
        <input type="text" onChange={(e)=>{
            setDeadline(e.target.value)
        }}/><br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default CreateJob
