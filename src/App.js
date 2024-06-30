

import './App.css';

//Bootstrap imported
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'

//import react-router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginCard from './components/login/login';
import SignupCard from './components/signup/signup';
import Section from './components/section/section';
function App() {
  return (
   
    <Router>
      <Routes>
        <Route path="/" element={ <Section/>}/>
        <Route path="/login" element={ <LoginCard/>}/>
        <Route path="/signin" element={ <SignupCard/>}/>


      </Routes>
    </Router>
  );
}

export default App;
