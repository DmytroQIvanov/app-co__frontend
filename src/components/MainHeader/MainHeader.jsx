import './MainHeader.scss'
import HeaderSVG from './assets/Rectangle 8.svg'
import {
    Link
} from "react-router-dom";

export const MainHeader = () => {

    return <header className="main-header">
        <div className="main-header__container">
            <div className="main-header__logo">AppCo</div>
            <div className="main-header__info">
                <div className="main-header__first-block"><span>Brainstorming</span> for desired perfect Usability</div>
                <div className="main-header__second-block">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</div>
                <Link to="/users" className="main-header__views-stats-link" >
                    <div className="main-header__views-stats">Views Stats</div></Link>
            </div>
        </div>
        <img src={HeaderSVG} />





    </header>
}