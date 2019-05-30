import {React, Component} from 'react';
import moment from 'moment';




export default class Date extends Component {
    render() {
        return (
            <h5>
               
                {moment().format('LLLL')}
            </h5>
        );
    }
}

 