import React, { Component } from 'react'
import HelpIcon from '@material-ui/icons/Help';
import ReactTooltip from 'react-tooltip';
import Box from '@material-ui/core/Box';

export class Header extends Component {
    render() {
        return (
            <Box mb={1}>
                <h3 className="u-text--left u-margin-bottom-tiny">
                    {this.props.title}
                    <Box display="inline" ml={0.5}>
                        {this.props.desc && <HelpIcon
                            data-tip={this.props.desc}
                            color="action"
                            fontSize="small"
                            ml="2"
                            className="fadeOnStart"/>
                        }
                    </Box>
                    <ReactTooltip style="max-width: 400px"/>
                </h3>
            </Box>
        )
    }
} 

export default Header
