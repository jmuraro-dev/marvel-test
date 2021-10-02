import React, {Component} from 'react';

import '../../assets/styles/shared.scss'

import {withRouter, Redirect} from 'react-router-dom';
import {getComic} from "../../api/Comics";
import ComicInformation from "../../components/ComicInformation";

class InformationScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comic: null,
            loading: true,
            error404: false
        }
    }

    async componentDidMount() {
        let comic = await getComic(this.props.match.params.comic)

        if (comic === 404) {
            this.setState({error404: true})
        } else {
            await this.setState({comic: comic, loading: false})
        }
    }

    render() {
        if (this.state.error404) {
            return <Redirect to='/404' />
        } else if (this.state.loading)
            return (<h1>Loading data</h1>)
        else
            return (
                <div className="container">
                    <ComicInformation comic={this.state.comic}/>
                </div>
            );
    }
}

export default withRouter(InformationScreen);