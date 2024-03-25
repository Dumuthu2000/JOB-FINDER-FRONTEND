import { useEffect, useState } from 'react';
import './companyProfile.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SubNavbar from '../../components/Navbar/SubNavbar';
import backImage from '../../assets/background.jpeg'
import prodileImage from '../../assets/profile.jpeg'
import JobUpdateModel from '../../components/Model/JobUpdateModel';
import axios from 'axios';

const CompanyProfile = () => {

  const[modelDisplay, setModelDisplay] = useState('none');
  const[jobDetails, setJobDetails] = useState([]);
  const[companyDetails, setCompanyDetails] = useState({});
  const[editJobDetails, setEditJobDetails] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem("JobDetails")
    const storedCompanyData = localStorage.getItem("CompanyDetails")
    if(storedData || storedCompanyData){
      setJobDetails(JSON.parse(storedData))
      setCompanyDetails(JSON.parse(storedCompanyData))
    }
  }, []);

  const handleEditBtn=async(jobId)=>{
    await axios.get(`http://localhost:8080/job-service/api/job/${jobId}`)
    .then((res)=>{
      setEditJobDetails(res.data);
      setModelDisplay('block')
    }).catch((err)=>{
        alert(err.message)
    })
    
  }
  return (
    <div className="loginMainContainer">
      <div className='subNavbar'>
        <SubNavbar/>
      </div>
      <div className='pageConatiner'>
        <div className="welcomSection">
          <h2 className='welcomeTitle'>Welcome, <span className='companyNameInWelcome'>Gapstars lab (pvt) ltd.</span></h2>
          <button className='newJobBtn'>NEW JOB</button>
          {/* <h2 className='welcomeTitle'>Welcome, <span className='companyNameInWelcome'>{companyDetails.companyName}</span></h2> */}
        </div>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-around'}}>
          <h1 className='publishTitle'>Published Job Vacancies</h1>
          <h1 className='publishTitle'>WHO ARE YOU?</h1>
        </div>
        <div className="prodileMainContainer">
            <div className='profileConatiner'>
              {jobDetails.map((jobs, index)=>(
                <div className="profileCard" key={index}>
                  <div style={{display:"flex", alignItems:"center", gap:"1rem"}}>
                      <img src={companyDetails.profileImage} alt="" className='cardProfile'/>
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
                  <div className=''>
                    <button className='editBtn' onClick={()=>handleEditBtn(jobs.jobId)}>Edit</button>
                    <button className='deleteBtn'>Delete</button>
                  </div>
              </div>
              ))}
          </div>
          <JobUpdateModel modelDisplay={modelDisplay} jobData={editJobDetails} />
          <div className="profileDetailsBox">
            <div className="imageSection">
            <img src={companyDetails.profileImage} alt="" className='profileImage'/>
              <img src={companyDetails.backImage} alt="" className='backgroungImage'/>
              
            </div>
            <div className="detailsSection">
              <p><span style={{fontSize:"17px", fontWeight:"bold"}}>Name:</span> <span style={{fontFamily:'sans-serif', color:"#023e7d", fontWeight:"bold"}}>{companyDetails.companyName}</span></p><hr />
              <p><span style={{fontSize:"17px", fontWeight:"bold"}}>Location:</span> <span style={{fontFamily:'sans-serif', color:"#023e7d", fontWeight:"bold"}}>{companyDetails.location}</span></p><hr />
              <p><span style={{fontSize:"17px", fontWeight:"bold"}}>Establshed Date:</span> <span style={{fontFamily:'sans-serif', color:"#023e7d", fontWeight:"bold"}}>{companyDetails.establishedDate}</span></p><hr />
              <p><span style={{fontSize:"17px", fontWeight:"bold"}}>Industry:</span> <span style={{fontFamily:'sans-serif', color:"#023e7d", fontWeight:"bold"}}>{companyDetails.industry}</span></p><hr />
              <p><span style={{fontSize:"17px", fontWeight:"bold"}}>Conact No:</span> <span style={{fontFamily:'sans-serif', color:"#023e7d", fontWeight:"bold"}}>{companyDetails.contactDetails}</span></p><hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyProfile
