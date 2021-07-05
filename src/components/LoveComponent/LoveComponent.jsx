import './LoveComponent.scss'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'

export const LoveComponent = () => {
    return (
        <div className="love-component">
            <div className="love-component__main-title">Why
                <b> small business owners love</b> AppCo?
            </div>
            <div className="love-component__sub-title">
                Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!
            </div>

            <div className="love-component__advantages-blocks-container">
                <div className="love-component__advantages-block">
                    <img src={img1} />
                    <div className="advantages-block__main-title">Clear Design</div>
                    <div className="advantages-block__sub-title">Increase sales by showing true dynamics of your website.</div>

                </div>
                <div className="love-component__advantages-block">
                    <img src={img2} />
                    <div className="advantages-block__main-title">Secure Data</div>
                    <div className="advantages-block__sub-title">Build your online store’s trust using Social Proof & Urgency.</div>

                </div>
                <div className="love-component__advantages-block">
                    <img src={img3} />
                    <div className="advantages-block__main-title">Retina Ready</div>
                    <div className="advantages-block__sub-title">Realize importance of social proof in customer’s purchase decision.</div>


                </div>
            </div>

        </div>
    )
}