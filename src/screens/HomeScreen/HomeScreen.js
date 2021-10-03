import React, {Component} from 'react';

import '../../assets/styles/shared.scss';

import ComicCard from "../../components/ComicCard";
import {getComics} from "../../api/Comics";

class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comics: []
        }
    }

    async componentDidMount() {
        const comics = await getComics()

        await this.setState({comics})
    }

    render() {
        return (
            <div className="container">
                {this.state.comics.length !== 0 ? this.state.comics.map((comic, key) => (
                    <ComicCard key={key} title={comic.title} description={comic.description} thumbnail={comic.thumbnail} />
                )) : null}
            </div>
        );
    }
}

export default HomeScreen;