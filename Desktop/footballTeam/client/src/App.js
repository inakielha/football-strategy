
import './App.css';
import { Route, Routes } from 'react-router-dom';
import FirstPage from './components/FirstPage/FirstPage';
import Landing from './components/Home/Landing/Landing';
import Navbars from './components/Navbar/Navbar';
import CreateTeam from './components/CreateTeam/CreateTeam';
import Articles from './components/Articles/Articles';
import About from './components/About/About';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route exact path='/home' element={<><Navbars/><Landing /></>} />
        <Route path='/createTeam' element={<><Navbars/><CreateTeam/></>}/>
        <Route path='/articles' element={<><Navbars/><Articles/></>}/>
        <Route path='/about' element= {<><Navbars/><About/></>}/>
      </Routes>
    </div>
  );
}

export default App;
