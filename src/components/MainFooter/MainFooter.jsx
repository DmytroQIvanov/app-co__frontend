import './MainFooter.scss'
import Footer from './assets/Rectangle 54.svg'
import { useState } from 'react'

export const MainFooter = () => {
    const [email, setEmail] = useState('')
    return (
        <footer className="main-footer">

            <div className="main-footer__titles-block">
                <div className="main-footer__brand-title">AppCo</div>

                <div className="main-footer__right-title">
                    All rights reserved by ThemeTags</div>
                <div className="main-footer__enter-email-block">
                    <input placeholder="Enter your email" value={email} onChange={(elem) => setEmail(elem.target.value)} />
                    <button onClick={() => { alert(email) }}>Subscribe</button>
                </div>
                <div className={`main-footer__copyrights-title`}>Copyrights © 2019. </div>
            </div>
            <img className={`main-footer__block-img`} src={Footer} alt="footer" />


        </footer >
    )
}