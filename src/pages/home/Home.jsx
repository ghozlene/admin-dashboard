import React from 'react';
import Chart from '../../components/chart/Chart';
import FeatureInfo from '../../components/featureInfo/FeatureInfo';
import { userData } from '../../DummyData';
import './Home.css';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
const Home = () => {
	return (
		<>
			<div className='home'>
				<FeatureInfo />
				<Chart
					title='User Analytics'
					data={userData}
					datakey={userData.Active_User}
					grid
				/>
				<div className='homeWidget'>
					<WidgetSm />
					<WidgetLg />
				</div>
			</div>
		</>
	);
};

export default Home;
