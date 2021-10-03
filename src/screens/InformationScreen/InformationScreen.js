import React, {Component} from 'react';

import '../../assets/styles/shared.scss'

import {withRouter, Redirect} from 'react-router-dom';

import {getComic} from "../../api/Comics";
import {getCharacter} from "../../api/Characters";

import ComicInformation from "../../components/ComicInformation";
import ComicCharacter from "../../components/ComicCharacter";

class InformationScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comic: null,
            characters: null,
            loading: true,
            error404: false
        }
    }

    async componentDidMount() {
        let comic = await getComic(this.props.match.params.comic)

        if (comic === 404) {
            this.setState({error404: true})
        } else {
            const characters = []

            for (const character of comic.characters.items) { characters.push(await getCharacter(character.resourceURI)) }

            await this.setState({comic, characters, loading: false})
        }
    }

    render() {
        if (this.state.error404) {
            return <Redirect to='/404' />
        } else if (this.state.loading)
            return (<h1>Loading data</h1>)
        else
            return (
                <div className="container" style={{'grid-template-columns': 'repeat(auto-fill, 75%)'}}>
                    <ComicInformation comic={this.state.comic}/>

                    {
                        this.state.comic.characters.available === 0 ?
                        null :
                        <h2>Characters on this comic</h2>
                    }

                    {
                        this.state.comic.characters.available === 0 ?
                        null :
                        this.state.characters.map((character, key) => (
                            <ComicCharacter character={character} />
                        ))
                    }
                </div>
            );
    }
}

export default withRouter(InformationScreen);