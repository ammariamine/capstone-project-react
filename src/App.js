
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Sign_Up from './Components/Sign_up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import FindDoctorSearchIC from './Components/InstantConsultation/FindDoctorSearchIC/FindDoctorSearchIC';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
         <Navbar/>
         <switch>
            <Routes>
            <Route exact path="/" Component={Landing_Page} />
            <Route path="/singup" Component={Sign_Up} />
            <Route path="/login" Component={Login} />
            <Route path="/instant-consultation" Component={ InstantConsultation } />
            <Route path="/search/doctors" Component={FindDoctorSearch} />
            
            </Routes>
         </switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
