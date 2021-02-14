import React, { Component } from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Box from '@material-ui/core/Box';

export class FormSurvey extends Component {

    handleChange = (event) => {
        // Add value to survey state
        this.props.action(this.props.question, event.target.value, this.props.stepindex+1);
        this.setState({done: 1});

        setTimeout(() => {
            // Go to next step or send survey and close form popup
            if (this.props.stepindex < (this.props.lastindex -1)) {
                document.querySelectorAll('.multi-step-nav button')[1].click();
            } else {
                this.props.submitForm();
            }
        }, 300);
    };

    render() {
        return (
            <Box m="auto" className="survey-content">
                <Box className="survey-header" height={'100px'}><h3>{this.props.question}</h3></Box>
                <FormControl component="fieldset">
                    <Box className="survey-header" mb={2}>Odpowiedz według podanej skali</Box>
                    <RadioGroup className="survey-header" onChange={this.handleChange} row>
                        <FormControlLabel value="1" control={<Radio />} label="1" labelPlacement="top" />
                        <FormControlLabel value="2" control={<Radio />} label="2" labelPlacement="top" />
                        <FormControlLabel value="3" control={<Radio />} label="3" labelPlacement="top" />
                        <FormControlLabel value="4" control={<Radio />} label="4" labelPlacement="top" />
                        <FormControlLabel value="5" control={<Radio />} label="5" labelPlacement="top" />
                    </RadioGroup>
                </FormControl>
                <Box mt={4}>{this.props.stepindex+1}/{this.props.lastindex}</Box>
            </Box>
        )
    }
} 

export default FormSurvey
