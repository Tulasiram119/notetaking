
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './compnents/Navbar';
import Home from './compnents/Home';
import About from './compnents/About';
import NoteState from './context/notes/NoteState';
import Alert from './compnents/Alert';
import Login from './compnents/Login';
import Signup from './compnents/Signup';
function App() {
  return (
    <> 
    <NoteState>
    <Router>    
      <Navbar />
      <Alert message = "I still don't know how to send an alert"/>
      <div className="container">      
      <Routes>
      <Route path='/' element ={<Home />}/>
      <Route path='/about' element ={<About />}/>
      <Route path='/login' element = {<Login />} />
      <Route path='/signup' element = {<Signup />}/>
      </Routes>
      </div>
      </Router> 
      </NoteState>
    </>
  );
}

export default App;
