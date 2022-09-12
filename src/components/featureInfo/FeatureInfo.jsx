import React from 'react';
import './FeatureInfo.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const FeatureInfo = () => {
	return (
		<div className='featured'>
			<div className='featuredItem'>
				<span className='featureTitle'>Revenue</span>
				<div className='featureMoneyContainer'>
					<span className='featureMoney'>$25.2</span>
					<span className='featureMoneyRate'>
						$-11.5
						<ArrowDownwardIcon className='featureIcon negative' />
					</span>
				</div>
				<span className='featureSub'>Compared to last month</span>
			</div>

			<div className='featuredItem'>
				<span className='featureTitle'>Sales</span>
				<div className='featureMoneyContainer'>
					<span className='featureMoney'>$5.2</span>
					<span className='featureMoneyRate'>
						$-1.5
						<ArrowDownwardIcon className='featureIcon negative' />
					</span>
				</div>
				<span className='featureSub'>Compared to last month</span>
			</div>

			<div className='featuredItem'>
				<span className='featureTitle'>Cost</span>
				<div className='featureMoneyContainer'>
					<span className='featureMoney'>$21.2</span>
					<span className='featureMoneyRate'>
						$-11.5
						<ArrowUpwardIcon className='featureIcon' />
					</span>
				</div>
				<span className='featureSub'>Compared to last month</span>
			</div>
		</div>
	);
};

export default FeatureInfo;
