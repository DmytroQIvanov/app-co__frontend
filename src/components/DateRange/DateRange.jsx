import { DateRange } from 'react-date-range';
import { useState } from "react"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import calendar2 from './assets/calendar.svg'
import './DateRange.scss'
import { getUserData } from '../../Redux/userSlice';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const DateRangeComponent = () => {
    const [calendar, setCalendar] = useState(false);
    const params = useParams()

    const dispatch = useDispatch()

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }]

    );


    return (<div className="date-range">
        <div className="date-range__select-container">
            <span>Select date range</span>
            <div className="date-range__select-date-container"><span className="date-range__img-container">
                <img src={calendar2} className="date-range__img" onClick={() => setCalendar(!calendar)} />
                <span>
                    {state[0].startDate.getFullYear()}
                    -
                    {state[0].startDate.getMonth()}
                    -
                    {state[0].startDate.getDate()}

                    {state[0].endDate && <> - {state[0].endDate && state[0].endDate.getFullYear()}
                        -
                        {state[0].endDate && state[0].endDate.getMonth()}
                        -
                        {state[0].endDate && state[0].endDate.getDate()}
                    </>}

                </span>
            </span>
            </div>
        </div>

        {calendar && <div className="date-range__calendar">
            <DateRange
                editableDateInputs={true}
                onChange={item =>
                    setState([item.selection])
                }
                moveRangeOnFirstSelection={false}
                ranges={state}
                direction="horizontal"
                months={2}
                dateDisplayFormat={"MMM d yyyy"}


            />
            <button onClick={() => {
                const jsonStartDate = state[0].startDate.getFullYear() + "-" + state[0].startDate.getMonth() + "-" + state[0].startDate.getDate()
                const jsonEndDate = state[0].endDate.getFullYear() + "-" + state[0].endDate.getMonth() + "-" + state[0].endDate.getDate()
                dispatch(getUserData({ jsonStartDate, id: params.id, jsonEndDate, }))
            }}

                className="date-range__apply-button">Apply</button>
            or
            <button onClick={() => {
                dispatch(getUserData({ id: params.id }))
                setCalendar(false)
            }}
                className="date-range__cancel-button"
            >Cancel</button>

        </div>}
    </div>)
}
export default DateRangeComponent