import { useEffect, useState } from 'react';
import './companyProfile.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';

const CompanyProfile = () => {
const [jobDetails, setJobDetails] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("JobDetails")
    if(storedData){
      setJobDetails(JSON.parse(storedData))
    }
  }, []);

  return (
    <div className='profileConatiner'>
      {jobDetails.map((jobs, index)=>(
        <div className="profileCard" key={index}>
          <div style={{display:"flex", alignItems:"center", gap:"1rem"}}>
              <img src="" alt="iiamge" />
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
              <p className="workTime">{jobs.workTime}</p>
          </div>
      </div>
      ))}
    </div>
  )
}

export default CompanyProfile
