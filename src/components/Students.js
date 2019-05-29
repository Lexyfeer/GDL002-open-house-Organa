import React from 'react';

const Students = (props) => (
    <div className="mainContent">
        <div className="container">
            <h2>{props.title}</h2>
            <h3>Registra tu código QR</h3>
            <div className="qr">
                <p> Aquí código QR </p>
            </div>
        </div>
    </div>
);

export default Students;

