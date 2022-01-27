import './App.css';
//components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

//pages
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Contact from './pages/Contact';
import GetHelp from './pages/GetHelp';

function App() {

  // const name="shiva kumar"
  return (
   <>
   <Navbar />
    <div className='container'>
      <Sidebar />
      <div className="mainContent">
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/contact" element={<Contact title="Contact1"/>} />

        <Route path="/get-help" element={<GetHelp title="GetHelp"/>} />
      </Routes>
      </div>
    </div>
  
    </>
  );
}

export default App;
