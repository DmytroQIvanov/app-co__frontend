import './RegularHeader.scss'
import { Link } from 'react-router-dom'
export const RegularHeader = () => {

    return (<div className="regular-header">
        <Link to="/main" className="regular-header__brand-name">
            <span>
                AppCo
            </span>
        </Link>
    </div>)
}