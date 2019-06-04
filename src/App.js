import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import StudentsDB from './components/Students';
import AdminDB from './components/Admin';
import Students from './components/Students';

import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/Students" render={ () => <StudentsDB title="Registro de asistencia" />} />
        <Route exact path="/Admin" render={ () => <AdminDB title="Control de asistencias" />} />
      </div>
    </HashRouter>
    


  );
}

export default App;
