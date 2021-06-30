import './MainFooter.scss'
import Footer from './assets/Rectangle 54.svg'

export const MainFooter = () => {
    return (
        <footer className="main-footer">

            <div className="main-footer__titles-block">
                <div className="main-footer__brand-title">AppCo</div>
                <div className={`main-footer__rights-title`}>All rights reserved by ThemeTags</div>
                <div className={`main-footer__copyrights-title`}>Copyrights © 2019. </div>
            </div>
            <img className={`main-footer__block-img`} src={Footer} alt="footer" />
        

        </footer >
    )
}