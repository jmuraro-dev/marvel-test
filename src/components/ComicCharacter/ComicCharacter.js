import React, {Component} from 'react';

import './ComicCharacter.scss'

class ComicCharacter extends Component {
    render() {
        const {name, thumbnail} = this.props.character

        return (
            <div className="character__container">
                <div className="character__image">
                    <img className="character__img" src={thumbnail.path + '/standard_large.' + thumbnail.extension} alt={name} />
                </div>
                <div className="character__content">
                    <h2 className="character__name">{name}</h2>
                </div>
            </div>
        );
    }
}

export default ComicCharacter;