import React from 'react';
import Chart from 'react-apexcharts';
import { useState, useEffect } from 'react';
import api from '../../../services/api';
import url from '../../../services/url';
import { getAccessToken } from '../../../utils/auth';

const DashboardStatistic = () => {

    const [dailyRevenueData, setDailyRevenueData] = useState({});
    const [customerFlowData, setCustomerFlowData] = useState({});


    const loadData = async () => {
        try {
            const headerConfig = {
                headers: {
                    Authorization: `Bearer ${getAccessToken()}`,
                },
            };
            const [dailyRevenueData, customerFlowData] = await Promise.all([
                api.get(url.DASHBOARD.DAILY_REVENUE, headerConfig),
                // api.get(url.DASHBOARD.TOTAL_ORDER_REVENUE, headerConfig),
            ]);

            setDailyRevenueData(dailyRevenueData.data.data);
            setCustomerFlowData(customerFlowData.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const dailyRevenueOptions = {
        chart: {
            type: 'line',
        },
        series: [{
            name: 'Revenue',
            data: [dailyRevenueData.totalRevenue || 0, 0], // Use fetched data
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
            data: [dailyRevenueData.totalRevenue || 0, 0], // Use fetched data
        }, {
            name: 'Online Order',
            data: [dailyRevenueData.totalRevenue || 0, 0], // Use fetched data
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
                                <h3 className="box-title mb-0 font-weight-700">${dailyRevenueData.totalRevenue }</h3>
                                <p className="mb-0"><span className="text-success">+ 1.5%</span> than last week</p>
                            </div>
                        </div>
                        <div id="chart" className="mt-20">
                            <Chart options={dailyRevenueOptions} series={dailyRevenueOptions.series} type="line" height={352} />
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
                            <Chart options={customerFlowOptions} series={customerFlowOptions.series} type="bar" height={326} />
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default DashboardStatistic;
