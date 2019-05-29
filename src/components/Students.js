import React from 'react';
import QRCode from './QRCode';

const Students = (props) => (
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

export default Students;

