import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';


export class TextSubInput extends Component {

    createTask = (e) => {
        this.props.createTask(e, this.props.parentId);
        if (e.key === 'Enter') {
            e.target.value = "";
        }
    }

    render() {
        return (
            <Box mb={2.5}>
                <TextField 
                    id="standard-search" 
                    label={this.props.label} 
                    variant="outlined" 
                    type="search" 
                    fullWidth
                    background="white"
                    margin="dense"
                    onChange={(e) => {this.props.updateValue(e.target.value)}}
                    onKeyDown={(e) => {this.createTask(e)}}
                />
            </Box>
        )
    }
}

export default TextSubInput
