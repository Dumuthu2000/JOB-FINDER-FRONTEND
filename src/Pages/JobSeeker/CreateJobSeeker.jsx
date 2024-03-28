import './createJobSeeker.css'
import { useState } from 'react'
import axios from 'axios';

const CreateJobSeeker = () => {
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[age, setAge] = useState('');
    const[address, setAddress] = useState('');
    const[gender, setGender] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleRegisterBtn=async()=>{
        console.log("This work")
        const formData = {firstName, lastName, age, address, gender, email, password}
        await axios.post(`http://localhost:8080/job-seeker-service/api/job-seeker`, formData)
        .then((res)=>{
            alert("Registered Success")
        }).catch((err)=>{
            alert(err.message)
        })
    }

  return (
    <div className='jobSeekerMainContainer'>
      <div className="jobSeekerForm">
        <form action="">
            <div className="jobSeekerInput">
                <label htmlFor="">First Name: </label>
                <input type="text" placeholder='Enter first name' onChange={(e)=>{
                    setFirstName(e.target.value)
                }}/>
            </div>
            <div className="jobSeekerInput">
                <label htmlFor="">Last Name: </label>
                <input type="text" placeholder='Enter last name' onChange={(e)=>{
                    setLastName(e.target.value)
                }}/>
            </div>
            <div className="jobSeekerInput">
                <label htmlFor="">Age: </label>
                <input type="text" placeholder='Enter age' onChange={(e)=>{
                    setAge(e.target.value)
                }}/>
            </div>
            <div className="jobSeekerInput">
                <label htmlFor="">Address: </label>
                <input type="text" placeholder='Enter address' onChange={(e)=>{
                    setAddress(e.target.value)
                }}/>
            </div>
            <div className="jobSeekerInput">
                <label htmlFor="">Gender: </label>
                <select value={gender} onChange={(e)=>{
                    setGender(e.target.value)
                }}>
                    <option value="male" selected>Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <div className="jobSeekerInput">
                <label htmlFor="">Email: </label>
                <input type="text" placeholder='Enter email' onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
            </div>
            <div className="jobSeekerInput">
                <label htmlFor="">Password: </label>
                <input type="text" placeholder='Enter password' onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
            </div>
            <div className="jobSeekerBtnSection">
                <button>Back</button>
                <button onClick={handleRegisterBtn}>Register</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default CreateJobSeeker
