import './jobSeekerLogin.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const JobSeekerLogin = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLoginBtn=async(e)=>{
        e.preventDefault();

        const formData = {email, password}
        await axios.post(`http://localhost:8080/job-seeker-service/api/job-seeker/login`, formData)
        .then((res)=>{
            const jobSeekerDetails = res.data;
            localStorage.setItem("jobSeekerDetails", JSON.stringify(jobSeekerDetails));
            navigate(`/`);
        })
    }
  return (
    <div className='jobSeekerLoginContainer'>
      <div className="loginForm">
        <form action="">
            <div className="loginInput">
                <label htmlFor="">Email: </label>
                <input type="text" placeholder='Enter email' onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
            </div>
            <div className="loginInput">
                <label htmlFor="">Password: </label>
                <input type="text" placeholder='Enter password' onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
            </div>
            <button onClick={handleLoginBtn}>Login</button>
        </form>
      </div>
    </div>
  )
}

export default JobSeekerLogin
