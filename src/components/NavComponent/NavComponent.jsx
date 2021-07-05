import './NavComponent.scss'
import { Link } from 'react-router-dom'
export const NavComponent = (props) => {

    return (<div className="nav-component">
        <Link className="nav-component__main" to="/main">Main page  &gt;
            {props.namePage &&
                <Link className="nav-component__main"> {props.namePage} &gt; </Link>
            }
            <Link className="nav-component__active-page"> {props.currentPage}</Link>

        </Link>

    </div>)
}