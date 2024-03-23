import { useEffect, useState } from 'react';
import './companyProfile.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SubNavbar from '../../components/Navbar/SubNavbar';
import backImage from '../../assets/background.jpeg'
import prodileImage from '../../assets/profile.jpeg'

const CompanyProfile = () => {
const [jobDetails, setJobDetails] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("JobDetails")
    if(storedData){
      setJobDetails(JSON.parse(storedData))
    }
  }, []);

  return (
    <div className="loginMainContainer">
      <SubNavbar/>
      <div className="welcomSection">
        <h2 className='welcomeTitle'>Welcome, <span style={{color:"white", fontSize:"15px"}}>Gapstars Software Technologies (pvt) Ltd.</span></h2>
      </div>
      <h1 className='publishTitle'>Published Job Vacancies</h1>
      <div className="prodileMainContainer">
          <div className='profileConatiner'>
            {jobDetails.map((jobs, index)=>(
              <div className="profileCard" key={index}>
                <div style={{display:"flex", alignItems:"center", gap:"1rem"}}>
                    <img src={prodileImage} alt="" className='cardProfile'/>
                    <div>
                      <p className="jobTitle">{jobs.title}</p>
                      <p className="jobTitle">{jobs.companyName}</p>
                    </div>
                </div>
                <h1 className='shadowTitle'>Speed Jobs</h1>
                <div style={{display:"flex", alignItems:"center", gap:"1rem"}}>
                    <LocationOnIcon/>
                    <p className="">{jobs.location}</p>
                </div>
                <div>
                    <p>Expires On</p>
                    <p className="">{jobs.deadline}</p>
                </div>
                <p className="workTime">{jobs.workTime}</p>
                <div className=''>
                  <button className='editBtn'>Edit</button>
                  <button className='deleteBtn'>Delete</button>
                </div>
            </div>
            ))}
        </div>
        <div className="profileDetailsBox">
          <div className="imageSection">
            <img src={backImage} alt="" className='backgroungImage'/>
            <img src={prodileImage} alt="" className='profileImage'/>
          </div>
          <div className="detailsSection">
            <p><span style={{fontSize:"17px", fontWeight:"bold"}}>Name:</span> <span style={{fontFamily:'sans-serif', color:"#023e7d", fontWeight:"bold"}}>Gapstars Software Technologies (pvt) Ltd.</span></p>
            <p><span style={{fontSize:"17px", fontWeight:"bold"}}>Location:</span> <span style={{fontFamily:'sans-serif', color:"#023e7d", fontWeight:"bold"}}>Colombo</span></p>
            <p><span style={{fontSize:"17px", fontWeight:"bold"}}>Establshed Date:</span> <span style={{fontFamily:'sans-serif', color:"#023e7d", fontWeight:"bold"}}>2000/11/06</span></p>
            <p><span style={{fontSize:"17px", fontWeight:"bold"}}>Industry:</span> <span style={{fontFamily:'sans-serif', color:"#023e7d", fontWeight:"bold"}}>IT & Technology</span></p>
            <p><span style={{fontSize:"17px", fontWeight:"bold"}}>Conact No:</span> <span style={{fontFamily:'sans-serif', color:"#023e7d", fontWeight:"bold"}}>0118235466</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyProfile
