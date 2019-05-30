import React from 'react';
import moment from 'moment';




export default class Date extends React.Component {
    render() {
        return (
            <h5>
               
                {moment().format('LLLL')}
            </h5>
        );
    }
}
 