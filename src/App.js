import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import StudentsDB from './components/Students';
import AdminDB from './components/Admin';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/Students" render={ () => <StudentsDB title="Registro de asistencia" />} />
        <Route exact path="/Admin" render={ () => <AdminDB title="Control de asistencias" />} />
      </div>
    </BrowserRouter>

  );
}

export default App;
