import React, { Component } from 'react';
import loading from './spinner.gif';
export class Spinner extends Component {
    render() {
        return (
            <div style={{height:"70vh"}}>
                <div className="text-center">
                    <img src={loading} alt="spinner" />
                    
                </div>
            </div>
        )
    }
}

export default Spinner
