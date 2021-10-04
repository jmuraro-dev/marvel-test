import React, {Component} from 'react';

import '../../assets/styles/shared.scss';
import './HomeScreen.scss'

import ComicCard from "../../components/ComicCard";
import { UilArrowRandom } from "@iconscout/react-unicons/icons/uil-arrow-random"

import {getComics} from "../../api/Comics";
import UilAngleLeft from "@iconscout/react-unicons/icons/uil-arrow-random";

class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comics: [],
            comicsTotal: 0,
            loading: true
        }
    }

    async componentDidMount() {
        const comics = await getComics()
        await this.setState({comics: comics.results, comicsTotal: comics.total, loading: false})
    }

    getNewComics = async () => {
        this.setState({loading: true})

        const min = Math.ceil(0)
        const max = Math.floor(this.state.comicsTotal / 10)
        const offset = Math.floor(Math.random() * (max - min)) + min

        const comics = await getComics(offset)
        await this.setState({comics: comics.results, comicsTotal: comics.total, loading: false})
    }

    render() {
        if (this.state.loading) {
            return (
                <div className="container">
                    <h1>Loading data ...</h1>
                </div>
            )
        } else {
            return (
                <div className="container">
                    <button onClick={this.getNewComics} className="button__random button__random__flex random__button">
                        Other random comics
                    </button>

                    <div className="home__content">
                        {this.state.comics.length !== 0 ? this.state.comics.map((comic, key) => (
                            <ComicCard key={key} id={comic.id} title={comic.title} description={comic.description}
                                       thumbnail={comic.thumbnail}/>
                        )) : null}
                    </div>
                </div>
            );
        }
    }
}

export default HomeScreen;