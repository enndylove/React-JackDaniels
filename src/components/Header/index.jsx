import './index.scss';

import logo from './images/logo.svg'
import IconBasket from './images/basket.svg'

const Header = ({date}) => {
    return (
        <header className="header m-auto">
            <div className="header__block first flex justify-between items-center">
                <div className="header__width-wrapp"></div>

                <img
                    className="header__logo"
                    src={logo}
                    loading={"lazy"}
                    alt="logo"
                />

                <img
                    className="header__basket cursor-pointer header__width-wrapp"
                    src={IconBasket}
                    loading={"lazy"}
                    alt="basket-logo"
                />
            </div>

            <div className="header__block second flex justify-between items-center">
                <span className="header__block-text">
                    Loyalty program
                </span>

                <span className="header__block-text">
                    {date}
                </span>
            </div>
        </header>
    )
}

export default Header;