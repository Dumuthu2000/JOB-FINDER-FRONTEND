import './jobUpdateModel.css'
import { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const JobUpdateModel = (props) => {
    const[modelDisplay, setModelDisplay] = useState('block')

    const [title, setTitle] = useState(props.jobData.title || '');
    const [description, setDescription] = useState(props.jobData.description || '');
    const [category, setCategory] = useState(props.jobData.category || '');
    const [requirements, setRequirements] = useState(props.jobData.requirements || '');
    const [workTime, setWorkTime] = useState(props.jobData.workTime || '');
    const [companyName, setCompanyName] = useState(props.jobData.companyName || '');
    const [deadline, setDeadline] = useState(props.jobData.deadline || '');
    const [location, setLocation] = useState(props.jobData.location || '');

    const navigate = useNavigate();

    const handleCloseBtn=async()=>{
        setModelDisplay('none')
        navigate("company/profile")
    }

    //Updating Job
    const handleUpdateBtn=async()=>{
        const jobId = props.jobData.jobId;
        const updatedData = {jobId, title, description, category, requirements, workTime, companyName, deadline, location}
        try {
            const response = await axios.put(`http://localhost:8080/job-service/api/job/updateJob`, updatedData);
            const storedData = localStorage.getItem("JobDetails");
            if (storedData) {
                const jobDetails = JSON.parse(storedData);
                const updatedJobDetails = jobDetails.map(job => {
                    if (job.jobId === jobId) {
                        return updatedData;
                    } else {
                        return job; // Keep other jobs unchanged
                    }
                });
                localStorage.setItem("JobDetails", JSON.stringify(updatedJobDetails));
            }
            navigate("company/profile");
        } catch (err) {
            alert(err.message);
        }
    }
    useEffect(() => {
        setTitle(props.jobData.title || '');
        setDescription(props.jobData.description || '');
        setCategory(props.jobData.category || '');
        setRequirements(props.jobData.requirements || '');
        setWorkTime(props.jobData.workTime || '');
        setCompanyName(props.jobData.companyName || '');
        setDeadline(props.jobData.deadline || '');
        setLocation(props.jobData.location || '');
    }, [props.jobData]);
  return (
    <div style={{display:modelDisplay}}>
        <div className='itemModalBackground' style={{display:props.modelDisplay}}>
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <h3 className='newItemModelTitle'></h3>
            <div onClick={handleCloseBtn}><CloseIcon/></div>
        </div>
        <div className="objectSection">
            <form action="">
                <label htmlFor="">Job title: </label>
                <input type="text" value={title} className='modelInput' onChange={(e)=>{
                    setTitle(e.target.value)
                }}/><br />
                <label htmlFor="">Job Description : </label>
                <input type="text" value={description} className='modelInput' onChange={(e)=>{
                    setDescription(e.target.value)
                }}/><br />
                <label htmlFor="">Job Category : </label>
                <input type="text" value={category} className='modelInput' onChange={(e)=>{
                    setCategory(e.target.value)
                }}/><br />
                <label htmlFor="">Job Requirements : </label>
                <input type="text" value={requirements} className='modelInput' onChange={(e)=>{
                    setRequirements(e.target.value)
                }}/><br />
                <label htmlFor="">Job Work Time : </label>
                <input type="text" value={workTime} className='modelInput' onChange={(e)=>{
                    setWorkTime(e.target.value)
                }}/><br />
                <label htmlFor="">Job Company Name : </label>
                <input type="text" disabled value={companyName} className='modelInput' onChange={(e)=>{
                    setCompanyName(e.target.value)
                }}/><br />
                <label htmlFor="">Job Deadline : </label>
                <input type="text" value={deadline} className='modelInput' onChange={(e)=>{
                    setDeadline(e.target.value)
                }}/><br />
                <label htmlFor="">Job Location : </label>
                <input type="text" value={location} className='modelInput' onChange={(e)=>{
                    setLocation(e.target.value)
                }}/><br />
                <button onClick={handleUpdateBtn}>Update</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default JobUpdateModel

