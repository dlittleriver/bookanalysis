import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Navbar';
import TopNavbar from './TopNavbar';
import React from 'react';
import Home from './Home';

// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div>
      <TopNavbar/>
      <Home />
    </div>
  );
}

export default App;
