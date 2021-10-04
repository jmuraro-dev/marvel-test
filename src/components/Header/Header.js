import './Header.scss'

function Header() {
    return (
        <header className="header" id="header">
            <div className="header__title">
                <a href="/" className="header__link">The Marvel Test</a>
            </div>

            <div className="header__logo">
                <img className="header__image" src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg" alt="Marvel logo"/>
            </div>
        </header>
    )
}


export default Header;