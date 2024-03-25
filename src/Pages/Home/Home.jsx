import { useState, useEffect } from 'react'
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar'
import prodileImage from '../../assets/profile.jpeg'
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
      <div className='profileConatiner'>
            <hr />
            {jobDetails.map((jobs, index)=>(
              <div className="profileCard" key={index}>
                <div style={{display:"flex", alignItems:"center", gap:"1rem"}}>
                    <img src={prodileImage} alt="" className='cardProfile'/>
                    <div>
                      <p className="jobTitle">{jobs.title}</p>
                      <p className="jobTitle">{jobs.companyName}</p>
                    </div>
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"1rem"}}>
                    <LocationOnIcon/>
                    <p className="">{jobs.location}</p>
                </div>
                <div>
                    <p>Expires On</p>
                    <p className="">{jobs.deadline}</p>
                </div>
                <p className="workTime">{jobs.workTime}</p>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Home
