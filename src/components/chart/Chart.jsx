import React from 'react';
import './Chart.css';
import '../../DummyData';
import {
	LineChart,
	Line,
	XAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';

const Chart = ({ title, data, dataKey, grid }) => {
	return (
		<div className='chart'>
			<h3 className='chartTitle'>{title}</h3>

			<ResponsiveContainer width='100%' aspect={4 / 1}>
				<LineChart
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}>
					<XAxis dataKey='name' stroke='#5550bd' />
					<Line type='monotone' dataKey={'Active_User'} stroke='#5550bd' />
					<Tooltip />
					{grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />}
					<Legend />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Chart;
