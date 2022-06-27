
import './App.css';
import { Route, Routes } from 'react-router-dom';
import FirstPage from './components/FirstPage/FirstPage';
import Landing from './components/Home/Landing/Landing';
import Navbar from './components/FirstPage/Navbar/Navbar';
import CreateTeam from './components/CreateTeam/CreateTeam';
import Articles from './components/Articles/Articles';
import About from './components/About/About';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route exact path='/home' element={<><Navbar/><Landing /></>} />
        <Route path='/createTeam' element={<><Navbar/><CreateTeam/></>}/>
        <Route path='/articles' element={<><Navbar/><Articles/></>}/>
        <Route path='/about' element= {<><Navbar/><About/></>}/>
      </Routes>
    </div>
  );
}

export default App;
