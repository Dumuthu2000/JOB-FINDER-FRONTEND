import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SubNavbar = () => {
    const navigate = useNavigate();
    const handleLogout=async()=>{
        localStorage.removeItem("CompanyDetails")
        localStorage.removeItem("JobDetails")
        navigate('/');
    }
  return (
    <div className='navbarContainer'>
        <div className="topSection">
            <Link to={`/`} style={{textDecoration:"none"}}><h1 className='systemName'><span style={{color:"#9ef01a"}}>Speed</span> Jobs</h1></Link>
            <div className="tabs">
                <p className="tabsName">ALL JOBS</p>
                <select className='navbarSelect'>
                    <option value="">LOGIN</option>
                    <option value="candidateLogin">CANDIDATE LOGIN</option>
                    <option value="companyLogin">COMPANY LOGIN</option>
                </select>
                <select className='navbarSelect'>
                    <option value="">REGISTER</option>
                    <option value="candidateLogin">CANDIDATE RESGISTER</option>
                    <option value="companyLogin">COMPANY RESGISTER</option>
                </select>
                <button className='logoutBtn' onClick={handleLogout}>LOGOUT</button>
            </div>
        </div>
    </div>
  )
}

export default SubNavbar
