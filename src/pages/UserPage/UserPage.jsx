import { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getUser, getUserData } from '../../Redux/userSlice'
import './UserPage.scss'
import DateRangeComponent from '../../components/DateRange/DateRange';

import { RegularHeader } from '../../components/RegularHeader/RegularHeader';
import { RegularFooter } from '../../components/RegularFooter/RegularFooter';
import { NavComponent } from '../../components/NavComponent/NavComponent';


const UserPage = () => {
    const params = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUser(params.id))
        dispatch(getUserData({ id: params.id }))

    }, [params.id])
    const user = useSelector(store => store.user.store.user)
    const status = useSelector(store => store.user.status)
    const userStatistics = useSelector(store => store.user.store.userStatistics)


    const state = {
        datasets: [{
            label: "",
            borderColor: '#3A80BA',
            borderWidth: 4,
            backgroundColor: 'rgba(75,192,192,1)',
            lineTension: 0.25,
            // label: userStatistics.data,

            data: userStatistics,

        }]
    }


    return (
        <div className='user-page'>
            <RegularHeader />

            <div className="user-page__inner-container">
                <div className="user-page__name-block">
                    <NavComponent namePage={'Users statistics'} currentPage={user.first_name + user.last_name} />
                    <h2>{user.first_name} {user.last_name}</h2>
                    <div className="user-page__date-range"><DateRangeComponent /></div>
                </div>
                <h2>Clicks</h2>
                {status != "loading" ?
                    <Line
                        width="400"
                        // height="93"
                        data={state}
                        options={{

                            elements: {
                                point: {
                                    radius: 0
                                }
                            },
                            title: {
                                display: true,
                                text: 'Average Rainfall per month',
                                fontSize: 20
                            },
                            parsing: {
                                xAxisKey: 'date',
                                yAxisKey: 'clicks'
                            },

                            scales: {
                                x: {
                                    grid: {
                                        color: '',
                                        // borderColor: 'grey',
                                        tickColor: 'grey'
                                    },

                                },
                            },
                            legend: { display: false },


                        }}
                    /> : <div>loading</div>}


                <h2>Vievs</h2>
                {status != "loading" ?
                    <Line
                        // height="93"

                        width="400"
                        data={state}

                        options={{
                            elements: {
                                point: {
                                    radius: 0
                                }
                            },
                            innerHeight: 300,
                            title: {
                                display: true,
                                text: 'Average Rainfall per month',
                                fontSize: 20
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            },
                            parsing: {
                                xAxisKey: 'date',

                                yAxisKey: 'page_views'
                            },

                            scales: {
                                x: {
                                    grid: {
                                        color: '',
                                        // borderColor: 'grey',
                                        tickColor: 'grey'
                                    },

                                }
                            }

                        }}
                    /> : <div>loading</div>}
            </div >
            <RegularFooter />

        </div>
    )
}

export default UserPage