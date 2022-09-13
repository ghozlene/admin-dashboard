import React from 'react';
import Chart from '../../components/chart/Chart';
import FeatureInfo from '../../components/featureInfo/FeatureInfo';
import { userData } from '../../DummyData';
import './Home.css';

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
			</div>
		</>
	);
};

export default Home;
