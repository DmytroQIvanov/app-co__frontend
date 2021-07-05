import './MainHeader.scss'
import HeaderSVG from './assets/Rectangle 8.svg'
import {
    Link
} from "react-router-dom";
import mobile from './assets/mobile.png'

export const MainHeader = () => {

    return <header className="main-header">
        <div className="main-header__container">
            <div className="main-header__logo">AppCo</div>
            <img className="main-header__mobile-img" src={mobile} />

            <div className="main-header__info">

                <div className="main-header__first-block">
                    <div className="main-header__first-block-text">
                        <span>Brainstorming</span> for desired perfect Usability
                    </div>
                </div>
                <div className="main-header__second-block">
                    <div className="main-header__second-block-text">
                        Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!
                    </div>
                </div>
                <Link to="/users/1" className="main-header__views-stats-link" >
                    <div className="main-header__views-stats">Views Stats</div>
                </Link>
            </div>
        </div>
        <img src={HeaderSVG} />





    </header>
}