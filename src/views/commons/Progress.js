import React, { Component } from 'react'
import ProgressBar from '@ramonak/react-progress-bar';
import Box from '@material-ui/core/Box';

export class Progress extends Component {
    render() {
        return (
            <Box mb={2.5} px={0} className="fadeOnStart light-shadow">
                <ProgressBar 
                    completed={this.props.completed} 
                    labelSize="9px" 
                    height="10px" 
                    className="fadeOnStart" 
                />
            </Box>
        )
    }
} 

export default Progress
