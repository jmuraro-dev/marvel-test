import React, {Component} from 'react';

import './ComicInformation.scss'

class ComicInformation extends Component {
    render() {
        const {title, description, thumbnail} = this.props.comic

        return (
            <div className="information__container">
                <div className="information__content">
                    <h2 className="information__title">{title}</h2>
                    <hr />
                    <p>{description}</p>
                </div>
                <div className="information__image">
                    <img className="information__img" src={thumbnail.path + '/portrait_incredible.' + thumbnail.extension} alt="Comic cover" />
                </div>
            </div>
        );
    }
}

export default ComicInformation;