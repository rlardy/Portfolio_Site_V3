import React, { Component } from 'react';
import resumePic from '../img/ReeceLardyResume.jpeg';
import resumePDF from '../img/ReeceLardyResume.pdf';

class Resume extends Component {

    render() {
        return (
            <div class="condiv">
            <h1 className="subtopic">My Resume</h1>
                <br />
                <a className='subtopic' href={resumePDF} download>Click to download</a>
                <img src={resumePic} alt="Resume" className="resumePic"></img>
            </div>

    )
        }
    }
    
    export default Resume
