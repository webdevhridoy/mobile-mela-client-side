import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Feature from './Feature';

const RightSideBar = () => {
    const features = [
        {
            title: "Visitors",
            numbers: 10,
            text: 'Total views activity'
        },
        {
            title: "New Sale!",
            numbers: 10,
            text: 'Hurrah! Congratulations!'
        },
        {
            title: "Total Reviews",
            numbers: 10,
            text: 'Keep working hard'
        },
        {
            title: "Revenue",
            numbers: 85000,
            text: "You're doing good"
        },
    ];

    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400,
            "amt": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398,
            "amt": 2210
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800,
            "amt": 2290
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908,
            "amt": 2000
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800,
            "amt": 2181
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800,
            "amt": 2500
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300,
            "amt": 2100
        }
    ];
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    features.map((feature, idx) =>
                        <Feature
                            key={idx}
                            feature={feature}
                        ></Feature>
                    )
                }
            </div>
            <div className='p-5 border pt-5 mt-5 rounded-md bg-white'>
                <h2 className='text-start text-xl font-bold text-primary pb-5 uppercase'>Earnings</h2>
                <hr className='pb-5' />
                <ResponsiveContainer width="100%" aspect={3} className='mx-auto'>
                    <AreaChart width={950} height={250} data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div className='p-5 border pt-5 mt-5 rounded-md bg-white'>
                <h2 className='text-start text-xl font-bold text-primary pb-5 uppercase'>Best Selling Phones</h2>
                <hr className='pb-5' />
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>PHONES</th>
                                <th>SALES</th>
                                <th>AMOUNT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- row 1 --> */}
                            <tr>
                                <th>1</th>
                                <td>SAMSUNG GALAXY A6</td>
                                <td>20</td>
                                <td>2500 BDT</td>
                            </tr>
                            {/* <!-- row 2 --> */}
                            <tr className="hover">
                                <th>2</th>
                                <td>OPPOA31 6/128GB</td>
                                <td>10</td>
                                <td>1000 BDT</td>
                            </tr>
                            {/* <!-- row 3 --> */}
                            <tr>
                                <th>3</th>
                                <td>HP OPPO A31 RAM 6/128GB</td>
                                <td>25</td>
                                <td>15000 BDT</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default RightSideBar;