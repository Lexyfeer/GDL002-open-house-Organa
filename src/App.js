import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Students from './components/Students';
import Admin from './components/Admin';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/Students" render={ () => <Students title="Registro de asistencia" />} />
        <Route exact path="/Admin" render={ () => <Admin title="Control de asistencias" />} />
      </div>
    </BrowserRouter>

  );
}

export default App;
