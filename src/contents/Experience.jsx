import React, { Component } from 'react';
import SummaryCard from '../components/Summarycard';

class Experience extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Experience</h1>
                <SummaryCard title="Software Engineering Intern" company="DispatchIt, Inc." from="May 2020" to="August 2020" city="Bloomington (Virtual)" state="MN" summary={'Worked remotely (COVID-19) with the product and engineering team using Ruby on Rails in order to create a multiple stop order solution for the company. Duties included regular Agile meetings, using RSpec to write unit tests to ensure functionality, and completing assigned new feature stories'}/>
                <SummaryCard title="IoT Engineering Intern" company="Flad Architects" from="January 2020" to="May 2020" city="Madison" state="WI" summary="Architected and programmed a complete post-occupancy evaluation solution using LoRa, ESP32 BLE sensors, Google Firebase, Arduino, reported using PowerBI dashboard. Being able to make design choices as an engineer allowed me to make a higher quality product by using a technology stack that best fit the project requirements" />
                <SummaryCard title="Software Development Engineering Intern" company="Pearson VUE" from="May 2019" to="August 2019" city="Bloomington" state="MN" summary="Fixed defects and wrote new stories in multiple codebases across company. Gave bi-weekly presentations to management as Team Scrum iteration review. Maintained build tools (Gradle, Ant) to ensure builds containing 100+ dependencies succeeded"/>
                <SummaryCard title="Soccer Referee" company="Woodbury Athletic Association" from="June 2016" to="August 2019" city="Woodbury" state="MN" summary="Grade 7 referee. Officiated competetive youth soccer games while maintaining control of the game, managing my referee crew, and keeping players safe"/>
                <SummaryCard title="Food Server" company="Marcus Theatres" from="May 2018" to="September 2018" city="Oakdale" state="MN" summary="Managed the orders of multiple customers at once. Provided excellent customer service through conflict resolution using excellent communication skills"/>
            </div>
        )
    }
}

export default Experience
