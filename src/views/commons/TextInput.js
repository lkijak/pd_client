import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';


export class TextInput extends Component {
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
                    color="#6200ea"
                    margin="dense"
                />
            </Box>
        )
    }
}

export default TextInput
