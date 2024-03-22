import './App.css'
import CreateJob from './Pages/Job/CreateJob'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/createJob' element={<CreateJob/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
