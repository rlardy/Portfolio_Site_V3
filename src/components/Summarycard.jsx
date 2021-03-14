import React, { Component } from 'react'

class SummaryCard extends Component {
    render() {
        return (
            <div class="summarycard">
            <div class="compdet">
            <h3>{this.props.title}</h3>
            <h3 class="secondtext">{this.props.company} | {this.props.from} - {this.props.to} | {this.props.city}, {this.props.state}</h3>
            <h4 class="summarytext">{this.props.summary}.</h4>
            </div>
            </div>
            )
        }
    }
    
export default SummaryCard
    