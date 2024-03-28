import './home.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar'
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Home = () => {
  const[jobDetails, setJobDetails] = useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:8080/job-service/api/jobs`)
    .then((res)=>{
      setJobDetails(res.data);
      console.log(res.data)
    }).catch((err)=>{
      alert(err.message)
    })
  },[])
  return (
    <div className='homeContainer'>
      <div className="mainContainer">
        <Navbar/>
      </div>
      <div className="mainHome">
          <div className='profileConatiner' style={{marginLeft:"40px"}}>
            <h1 className='title'>NEW JOB FEATURES</h1>
              {jobDetails.map((jobs, index)=>(
                <Link to={`/job/${jobs.jobId}`} style={{textDecoration:"none", color:"black"}}>
                  <div className="profileCard" key={index}>
                    <div style={{display:"flex", alignItems:"center", gap:"1rem"}}>
                        <img src={jobs.profileImage} alt="" className='cardProfile'/>
                        <div>
                          <p className="jobTitle">{jobs.title}</p>
                          <p className="jobTitle">{jobs.companyName}</p>
                        </div>
                    </div>
                    <div style={{display:"flex", alignItems:"center", gap:"1rem"}}>
                        <LocationOnIcon htmlColor='red'/>
                        <p className="">{jobs.location}</p>
                    </div>
                    <div>
                        <p>Expires On</p>
                        <p className="">{jobs.deadline}</p>
                    </div>
                    <p className="workTime">{jobs.workTime}</p>
                  </div>
                </Link>
              ))}
          </div>
          <div className="homeCategoryBox">
            <h1 className='title'>JOB CATEGORIES</h1>
            <div className="categoryContent" id='nextContent'>
              <p className="category">Information Technology (IT)</p>
              <p className="categoryAmount">100</p>
            </div>
            <div className="categoryContent">
              <p className="category">Sales and Marketing</p>
              <p className="categoryAmount">100</p>
            </div>
            <div className="categoryContent" id='nextContent'>
              <p className="category">Business Management</p>
              <p className="categoryAmount">100</p>
            </div>
            <div className="categoryContent">
              <p className="category">School Leavers</p>
              <p className="categoryAmount">100</p>
            </div>
            <div className="categoryContent" id='nextContent'>
              <p className="category">Internship / Undergraduate</p>
              <p className="categoryAmount">100</p>
            </div>
            <div className="categoryContent">
              <p className="category">Digital Marketing</p>
              <p className="categoryAmount">100</p>
            </div>
            <div className="categoryContent" id='nextContent'>
              <p className="category">IT & Technology</p>
              <p className="categoryAmount">100</p>
            </div>
            <div className="categoryContent">
              <p className="category">IT & Technology</p>
              <p className="categoryAmount">100</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home
