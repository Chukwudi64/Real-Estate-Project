import './App.css';
import Homepage from './components/Homepage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Delete from './components/Delete'
import Contact from './components/Contact';
import About from './components/About';
import Register from './components/Register';
import Add from './components/Add';
import Property from './components/Property';
import PrivateRoute from './components/PrivateRoute';
import Logout from './components/Logout';






function App() {
  return (
    <Router>
      <Routes>
        
        <Route path='/Home' element={<Homepage/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Logout' element={<Logout/>}/>
        <Route path='/' element={<PrivateRoute/>}>
          <Route path='/Delete' element={<Delete/>}/>
          <Route path='/Add' element={<Add/>}/>
          <Route path='/Property' element={<Property/>}/>
        </Route>
      </Routes>
    
    </Router>
  );
}

export default App;
