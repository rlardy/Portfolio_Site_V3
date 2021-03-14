import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="B.S. Software Engineering" where="University of Wisconsin-Madison" from="August 2017" to="September 2021"/>
            <Widecard title="PLTW Engineering" where="East Ridge High School" from="2013" to="2017"/>
            </div>
            )
        }
    }
    
export default Education
    