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
            return <Redirect to='/404'/>
        } else if (this.state.loading) {
            return (<h1>Loading data</h1>)
        } else {
            const {comic, characters} = this.state
            console.log(characters)
            return (
                <div className="container" style={{gridTemplateColumns: 'repeat(auto-fill, 75%)'}}>
                    <ComicInformation comic={comic}/>

                    {
                        characters.length === 0 ?
                            null :
                            <h3>{characters.length > 1 ? 'Characters' : 'Character'} on this
                                comic</h3>
                    }

                    {
                        characters.available === 0 ?
                            null :
                            characters.map((character, key) => (
                                <ComicCharacter character={character}/>
                            ))
                    }
                </div>
            );
        }
    }
}

export default withRouter(InformationScreen);