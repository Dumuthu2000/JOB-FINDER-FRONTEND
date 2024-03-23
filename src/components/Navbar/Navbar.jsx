import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
    const[login, setLogin] = useState('');
    const[register, setRegister] = useState('');
    const navigate = useNavigate();

    if(login === "candidateLogin"){
        navigate("/");
    }else if(login === "companyLogin"){
        navigate("/company/login");
    }

    
    if(register === "candidateRegister"){
        navigate("/");
    }else if(register === "companyRegister"){
        navigate("/company/createCompany");
    }
  return (
    <div className='navbarContainer'>
        <div className="topSection">
            <Link to={`/`} style={{textDecoration:"none"}}><h1 className='systemName'><span style={{color:"#9ef01a"}}>Speed</span> Jobs</h1></Link>
            <div className="tabs">
                <p className="tabsName">ALL JOBS</p>
                <select className='navbarSelect' onChange={(e)=>{
                    setLogin(e.target.value)
                }}>
                    <option value="">LOGIN</option>
                    <option value="candidateLogin">CANDIDATE LOGIN</option>
                    <option value="companyLogin">COMPANY LOGIN</option>
                </select>
                <select className='navbarSelect' onChange={(e)=>{
                    setRegister(e.target.value)
                }}>
                    <option value="">REGISTER</option>
                    <option value="candidateRegister">CANDIDATE RESGISTER</option>
                    <option value="companyRegister">COMPANY RESGISTER</option>
                </select>
            </div>
        </div>
        <div className="systemThumnail">
            <h3>Give your Career a Quick Start !</h3>
        </div>
        <div className="bottomSection">
            <input type="text" className='navbarInput' placeholder='Select Job Title'/>
            <input type="text" className='navbarInput' placeholder='Select Job Location'/>
            <input type="text" className='navbarInput' placeholder='Select Job Category'/>
            <button className='navbarSearchBtn'>SEARCH</button>
        </div>
    </div>
  )
}

export default Navbar
