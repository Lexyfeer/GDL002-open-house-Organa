
import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';
import moment from 'moment';

 
class QRCode extends Component {
  constructor(props){
    super(props);
    this.state = {
      delay: 100,
      result: 'No result',
      date:moment().format('LLLL'),
    };
 
    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    this.setState({
      result: data,
    });

    // db.collection("organa-1020").doc("Attendance").set({
    //   name: data,
    //   date:moment().format('LLLL'),

    // })
    // .then(function() {
    //     console.log("Document successfully written!");

    // })
    // .catch(function(error) {
    //     console.error("Error writing document: ", error);
    // });
  
  
  };

  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      width: 320,
    }
 
    return(
      <div className= "video"> 
        <QrReader 
          className= "canvas"
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
        <p>{this.state.result}</p>
      </div>
    )
  }
}

export default QRCode;

