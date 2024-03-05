
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/LandngPage/Landing_Page';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
         <Navbar/>
         <Landing_Page/>
            <Routes>
            <Route path="/" element={Landing_Page} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
