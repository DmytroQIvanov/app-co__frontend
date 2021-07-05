import './PageNumbersBlock.scss'
import Arrow from './assets/Arrow.svg'
import ActiveArrow from './assets/ActiveArrow.svg'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUsers, getUsersLength } from '../../Redux/usersSlice';
import { Link, useParams } from 'react-router-dom';


export const PageNumbersBlock = (props) => {
    let { arrayNumber, setArrayNumber } = props;
    const params = useParams()


    const [activePage, setActivePage] = useState(params.page - 1)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getUsers(activePage + 1))
    }, [activePage])

    useEffect(() => {
        dispatch(getUsersLength())
    }, [])


    let NumberOfUsers = useSelector(store => store.users.store.numberOfUsers)
    let status = useSelector(store => store.users.status)


    let pageNumber = 0
    let arrayNumbers = []
    let bufferArray = []
    let internalCounter = 0;
    while (NumberOfUsers > 0) {
        while (NumberOfUsers > 0 && internalCounter < 6) {
            pageNumber++
            bufferArray.push(pageNumber)
            NumberOfUsers -= 20
            internalCounter++
        }
        arrayNumbers.push(bufferArray)
        bufferArray = []
        internalCounter = 0
    }



    if (status == "loading" && pageNumber == 0) {
        return (<></>)
    }
    return (
        <div className="page-numbers-block">
            {/* LEFT ARROW */}
            {arrayNumber ?
                <img src={ActiveArrow} onClick={() => {
                    setArrayNumber(arrayNumber -= 1)
                }}
                    className="page-numbers-block__left-arrow unselectable" />
                : <img src={Arrow} />}

            {/* CONTROL ELEM */}
            {arrayNumbers[arrayNumber].map(elem =>
                <Link onClick={() => { setActivePage(elem - 1) }}
                    to={`/users/${elem}`}
                    className={`page-numbers-block__element
                     ${activePage == elem - 1 && "page-numbers-block__element_active"} 
                     unselectable`}>
                    {elem}
                </Link>
            )}

            {/* RIGTH ARROW */}
            {arrayNumbers.length - 1 > arrayNumber
                ? <img src={ActiveArrow}
                    onClick={() => {
                        setArrayNumber(arrayNumber = arrayNumber + 1)
                    }}
                    className="page-numbers-block__rigth-arrow unselectable" />
                : <img className="page-numbers-block__rigth-arrow_no-active unselectable" src={Arrow} />}
        </div>)
}