import React, { Component } from 'react';
import QRCode from './QRCode';


class StudentsDB extends Component  {
    constructor () {
      super();
      this.state = {
        attendance:[],
    }}

    render() {
        const props = this.props;
        return(
    
    <div className="mainContent">
        <div className="container">
            <h2>{props.title}</h2>
            <h3>Registra tu código QR</h3>
            <div className="qr">
                
                    <QRCode />
            </div>
        </div>
    </div>
        );
    }
}

export default StudentsDB;

