import './ComicCard.scss'
import '../../assets/styles/shared.scss'

import { useHistory } from "react-router-dom";

import UilArrowRight from '@iconscout/react-unicons/icons/uil-arrow-right'

function ComicCard(props) {
        const {title, description, thumbnail} = props
        const history = useHistory()

        const redirect = () => {
            let path = '/comics/' + props.id;
            history.push(path);
        }

        return (
            <div className="card__container">
                <div className="card">
                    <img className="card__image" src={thumbnail.path + '/portrait_incredible.' + thumbnail.extension} alt={title}></img>
                    <div className="card__content">
                        <h2 className="card__title">{title}</h2>
                        <hr />
                        <p>
                            {description != null ? description.substr(0, 125) + '\u2026' : null}
                        </p>

                        <span className="card__button">
                            <span className="button__flex button__link" onClick={redirect}>
                                View more
                                <UilArrowRight className="button__icon" />
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        );
}

export default ComicCard;