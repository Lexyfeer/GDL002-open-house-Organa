import React from "react";
import QRCode from "./QRCode";
import Date from "./Date";
import Brackets from './Brackets.png'

// import firebase from '../firebase/firebase';

const StudentsDB = props => (
    <div>
  <div className="container2">
      
    <div className="row">
      <div className="qr">
      <h1>{props.title}</h1>
        <QRCode />
        <Date />
      </div>
    </div>
  </div>
  <div className="arrow-img-container">
  <img src={Brackets} className="logoLink" width="150" height="120" class="d-inline-block" alt="logo" />
  </div>
  </div>
  
);

export default StudentsDB;
