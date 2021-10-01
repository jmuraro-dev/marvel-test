import React, {Component} from 'react';

import './ComicCard.css'

class ComicCard extends Component {
    constructor(props) {
        super(props);
    }

    animateOver = () => {
        document.getElementsByClassName('card__image')[this.props.id].style.filter = 'grayscale(100%)'
        document.getElementsByClassName('card__content')[this.props.id].style.transform = 'translateY(0px)'
    }

    animateOut = () => {
        document.getElementsByClassName('card__image')[this.props.id].style.filter = 'grayscale(0%)'
        document.getElementsByClassName('card__content')[this.props.id].style.transform = 'translateY(200px)'
    }

    render() {
        const {title, description, thumbnail} = this.props

        return (
            <div className="card__container">
                <div className="card" onMouseOver={this.animateOver} onMouseOut={this.animateOut}>
                    <img className="card__image" src={thumbnail.path + '/portrait_incredible.' + thumbnail.extension}></img>
                    <div className="card__content">
                        <h2 className="card__title">{title}</h2>
                        <hr />
                        <p>
                            {description != null ? description.substr(0, 125) + '\u2026' : null}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ComicCard;