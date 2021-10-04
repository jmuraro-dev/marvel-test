import './NoScreen.scss'

import { useHistory } from "react-router";

function NoScreen(props) {
    let history = useHistory()

    return (
        <div className="container">
            <div className="no__screen__container">
                <h3 className="no__screen__title" style={{textAlign: 'center'}}>
                    Oops ! <br /> Looks like Thanos has been there.
                </h3>

                <img className="no__screen__image" src="https://cdn140.picsart.com/305940572135211.png" alt="Thanos snap" />
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px'}}>
                <button onClick={() => history.push("/")} className="button__random button__random__flex random__button">
                    Go on homescreen
                </button>
            </div>
        </div>
    )
}

export default NoScreen;