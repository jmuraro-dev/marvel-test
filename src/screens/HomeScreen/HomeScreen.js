import React, {Component} from 'react';

import '../../assets/styles/shared.scss';
import './HomeScreen.scss'

import ComicCard from "../../components/ComicCard";
import Loading from "../../components/Loading";

import {getComics} from "../../api/Comics";
import {Redirect} from "react-router-dom";

class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comics: [],
            comicsTotal: 0,
            loading: true,
            error: false
        }
    }

    async componentDidMount() {
        const min = Math.ceil(0)
        const max = Math.floor(100)
        const offset = Math.floor(Math.random() * (max - min)) + min

        const comics = await getComics(offset)

        if (comics === null || comics === undefined)
            this.setState({error: true})
        else
            await this.setState({comics: comics.results, comicsTotal: comics.total, loading: false})
    }

    getNewComics = async () => {
        this.setState({loading: true})

        const min = Math.ceil(0)
        const max = Math.floor(this.state.comicsTotal / 10)
        const offset = Math.floor(Math.random() * (max - min)) + min

        const comics = await getComics(offset)
        if (comics === null)
            this.setState({error: true})
        else
            await this.setState({comics: comics.results, comicsTotal: comics.total, loading: false})
    }

    render() {
        if (this.state.error) {
            return (
                <div className="container" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                    Oops ! Something went wrong with the request. <br />
                    Please verify the configuration
                </div>
            )
        } else if (this.state.loading) {
            return (<Loading />)
        } else {
            return (
                <div className="container">
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <button onClick={this.getNewComics} className="button__random button__random__flex random__button">
                            Other random comics
                        </button>
                    </div>

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