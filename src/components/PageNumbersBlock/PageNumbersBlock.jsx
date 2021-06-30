import './PageNumbersBlock.scss'
import Arrow from './assets/Arrow.svg'
import ActiveArrow from './assets/ActiveArrow.svg'
import { useState } from 'react';


export const PageNumbersBlock = (props) => {
    let { arrayNumber, setArrayNumber } = props;

    const [activePage, setActivePage] = useState(0)
    const [activeArrayOfPages, setActiveArrayOfPages] = useState(0)

    let NumberOfUsers = 502

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
    return (
        <div className="page-numbers-block">
            {arrayNumber ? <img src={ActiveArrow} onClick={() => { setArrayNumber(arrayNumber -= 1) }} className="page-numbers-block__control-element" /> : <img src={Arrow} />}
            {
                arrayNumbers[arrayNumber].map(elem =>
                    <div onClick={() => { setActivePage(elem - 1) }} className={`page-numbers-block__element ${activePage == elem - 1 && "page-numbers-block__element_active"}`}>
                        <span>{elem}</span>
                    </div>)

            }
            {arrayNumbers.length - 1 > arrayNumber
                ? <img src={ActiveArrow}
                    onClick={() => {
                        setArrayNumber(arrayNumber = arrayNumber + 1)
                    }}
                    className="page-numbers-block__control-element" />
                : <img src={Arrow} />}
        </div>)
}