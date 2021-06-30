import { Line } from 'react-chartjs-2';



export const UserPage = () => {

    const state = {
        datasets: [{
            borderColor: '#3A80BA',
            borderWidth: 5,
            backgroundColor: 'rgba(75,192,192,1)',
            lineTension: 0.4,
            label: "smth",

            data: [
                { user_id: 33, date: "2019-10-02", page_views: 260, clicks: 565 },
                { user_id: 38, date: "2019-10-03", page_views: 766, clicks: 258 },
                { user_id: 75, date: "2019-10-04", page_views: 528, clicks: 776 },
                { user_id: 94, date: "2019-10-05", page_views: 323, clicks: 373 },
                { user_id: 101, date: "2019-10-06", page_views: 721, clicks: 723 },
                { user_id: 111, date: "2019-10-07", page_views: 304, clicks: 726 },
                { user_id: 119, date: "2019-10-08", page_views: 724, clicks: 505 },
                { user_id: 121, date: "2019-10-09", page_views: 956, clicks: 133 },
                { user_id: 139, date: "2019-10-10", page_views: 496, clicks: 327 },
                { user_id: 159, date: "2019-10-11", page_views: 702, clicks: 917 },
                { user_id: 171, date: "2019-10-12", page_views: 635, clicks: 519 },
                { user_id: 173, date: "2019-10-13", page_views: 503, clicks: 930 },
                { user_id: 187, date: "2019-10-14", page_views: 946, clicks: 552 },
                { user_id: 190, date: "2019-10-15", page_views: 369, clicks: 344 },
                // { user_id: 219, date: "2019-10-16", page_views: 981, clicks: 196 },
                // { user_id: 224, date: "2019-10-17", page_views: 108, clicks: 399 },
                // { user_id: 253, date: "2019-10-18", page_views: 921, clicks: 686 },
                // { user_id: 259, date: "2019-10-19", page_views: 402, clicks: 764 },
                // { user_id: 268, date: "2019-10-20", page_views: 777, clicks: 255 },
                // { user_id: 341, date: "2019-10-21", page_views: 533, clicks: 260 },
                // { user_id: 390, date: "2019-10-22", page_views: 693, clicks: 588 },
                // { user_id: 515, date: "2019-10-23", page_views: 156, clicks: 990 },
                // { user_id: 542, date: "2019-10-24", page_views: 244, clicks: 124 }
            ]

        }]
    }
    return (
        <div>
            <Line
                data={state}
                options={{
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
            />
        </div >
    )
}