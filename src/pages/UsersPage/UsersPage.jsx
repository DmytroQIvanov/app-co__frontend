import { useState } from "react"
import { PageNumbersBlock } from "../../components/PageNumbersBlock/PageNumbersBlock"
import { UsersBlock } from "../../components/UsersBlock/UsersTable"
import './UsersPage.scss'
import { RegularFooter } from "../../components/RegularFooter/RegularFooter"
import { RegularHeader } from "../../components/RegularHeader/RegularHeader"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Loader } from "../../components/Loader/Loader"
import { NavComponent } from "../../components/NavComponent/NavComponent"

const UsersPage = () => {
    const [arrayNumber, setArrayNumber] = useState(0);
    const status = useSelector(store => store.users.status)


    return (
        <div className="users-page">
            <RegularHeader />
            {status == "loading" && <Loader />}

            <div className="users-page__users-table">

                <NavComponent currentPage={"Users statistics"} />
                <div className="users-page__main-title">Users statistics</div>
                <UsersBlock />
                <PageNumbersBlock arrayNumber={arrayNumber} setArrayNumber={setArrayNumber} />
            </div>
            <RegularFooter />

        </div>)
}
export default UsersPage