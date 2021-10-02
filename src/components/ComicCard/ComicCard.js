import React, {Component} from 'react';

import './ComicCard.scss'
import '../../assets/styles/shared.scss'

import UilArrowRight from '@iconscout/react-unicons/icons/uil-arrow-right'

class ComicCard extends Component {
    render() {
        const {title, description, thumbnail} = this.props

        return (
            <div className="card__container">
                <div className="card">
                    <img className="card__image" src={thumbnail.path + '/portrait_incredible.' + thumbnail.extension}></img>
                    <div className="card__content">
                        <h2 className="card__title">{title}</h2>
                        <hr />
                        <p>
                            {description != null ? description.substr(0, 125) + '\u2026' : null}
                        </p>

                        <span className="card__button">
                            <span className="button__flex button__link">
                                View more
                                <UilArrowRight className="button__icon" />
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ComicCard;