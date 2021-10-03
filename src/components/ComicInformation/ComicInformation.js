import React, {Component} from 'react';

import './ComicInformation.scss'

class ComicInformation extends Component {
    render() {
        const {title, description, format, thumbnail, series} = this.props.comic

        return (
            <div className="information__container">
                <div className="information__content">
                    <h2 className="information__title">{title}</h2>
                    <hr />
                    <p>{description !== null ? description.replaceAll("<br>", "") : "No description available"}</p>
                    <p><span style={{fontWeight: "bold"}}>Format : </span> {format}</p>
                    <p><span style={{fontWeight: "bold"}}>Series : </span> {series.name}</p>
                </div>
                <div className="information__image">
                    <img className="information__img" src={thumbnail.path + '/portrait_incredible.' + thumbnail.extension} alt={title} />
                </div>
            </div>
        );
    }
}

export default ComicInformation;