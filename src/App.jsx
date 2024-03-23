import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import CreateJob from './Pages/Job/CreateJob'
import CreateCompany from './Pages/Comapny/CreateCompany'
import CompanyLogin from './Pages/Login/CompanyLogin/CompanyLogin'
import CompanyProfile from './Pages/CompanyProfile/CompanyProfile'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/createJob' element={<CreateJob/>}/>
          <Route path='/company/createCompany' element={<CreateCompany/>}/>
          <Route path='/company/login' element={<CompanyLogin/>}/>
          <Route path='/company/profile' element={<CompanyProfile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
