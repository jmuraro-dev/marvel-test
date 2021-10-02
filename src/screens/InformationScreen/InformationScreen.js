import React, {Component} from 'react';

import '../../assets/styles/shared.scss'

import {withRouter} from 'react-router-dom';

class InformationScreen extends Component {
    render() {
        return (
            <div className="container">
                Hello on the information screen
            </div>
        );
    }
}

export default withRouter(InformationScreen);