import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';


export class TextSubInput extends Component {

    state = {
        text: ""
    }

    changeText = (e) => {
        this.setState({text: e.target.value});
    }
    
    submitText = (e) => {
        if (e.key === 'Enter' && this.state.text !== "") {
            this.props.createSubTask(this.props.parentId, this.state.text);
            this.setState({text: ""});
        }
    }

    render() {
        return (
            <Box mb={2.5}>
                <TextField 
                    ref={(el) => (this.input = el)}
                    id="standard-search" 
                    label={this.props.label} 
                    variant="outlined" 
                    type="search" 
                    fullWidth
                    background="white"
                    margin="dense"
                    onChange={(e) => {this.changeText(e)}}
                    onKeyDown={(e) => {this.submitText(e)}}
                    value={this.state.text}
                />
            </Box>
        )
    }
}

export default TextSubInput
