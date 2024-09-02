import React from 'react';
import Chart from 'react-apexcharts';

const DashboardStatistic = () => {
    const dailyRevenueOptions = {
        chart: {
            type: 'line',
        },
        series: [{
            name: 'Revenue',
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148] // Example data
        }],
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        }
    };

    const customerFlowOptions = {
        chart: {
            type: 'bar',
        },
        series: [{
            name: 'In Restaurant',
            data: [44, 55, 41, 67, 22, 43, 21, 49, 36]
        }, {
            name: 'Online Order',
            data: [13, 23, 20, 8, 13, 27, 33, 12, 27]
        }],
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        }
    };

    return (
        <>
            <div className="col-xxxl-7 col-xl-6 col-lg-6 col-12">
                <div className="box">
                    <div className="box-body">
                        <div className="d-flex justify-content-between">
                            <div>
                                <h4 className="box-title mb-0">Daily Revenue</h4>
                                <p className="mb-0 text-mute">Lorem ipsum dolor</p>
                            </div>
                            <div className="text-right">
                                <h3 className="box-title mb-0 font-weight-700">$ 154K</h3>
                                <p className="mb-0"><span className="text-success">+ 1.5%</span> than last week</p>
                            </div>
                        </div>
                        <div id="chart" className="mt-20">
                            <Chart options={dailyRevenueOptions} series={dailyRevenueOptions.series} type="line" height={350} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xxxl-5 col-xl-6 col-lg-6 col-12">
                <div className="box">
                    <div className="box-body">
                        <h4 className="box-title">Customer Flow</h4>
                        <div className="d-md-flex d-block justify-content-between">
                            <div>
                                <h3 className="mb-0 font-weight-700">$2,780k</h3>
                                <p className="mb-0 text-primary"><small>In Restaurant</small></p>
                            </div>
                            <div>
                                <h3 className="mb-0 font-weight-700">$1,410k</h3>
                                <p className="mb-0 text-danger"><small>Online Order</small></p>
                            </div>
                        </div>
                        <div id="yearly-comparison">
                            <Chart options={customerFlowOptions} series={customerFlowOptions.series} type="bar" height={350} />
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default DashboardStatistic;
