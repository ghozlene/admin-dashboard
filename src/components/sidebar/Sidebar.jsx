import React from 'react';
import './Sidebar.css';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Person2Icon from '@mui/icons-material/Person2';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ForumIcon from '@mui/icons-material/Forum';
import ChatIcon from '@mui/icons-material/Chat';
const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='sidebarWrapper'>
				<div className='sidebarMenu'>
					<h3 className='sidebarTitle'>Dashboard</h3>
					<ul className='sidebarList'>
						<li className='sidebarListItem active'>
							<LineStyleIcon className='sidebarIcon' />
							Home
						</li>

						<li className='sidebarListItem'>
							<TimelineIcon className='sidebarIcon' />
							Analytics
						</li>

						<li className='sidebarListItem'>
							<TrendingUpIcon className='sidebarIcon' />
							Sales
						</li>
					</ul>

					<h3 className='sidebarTitle'>Quick Menu</h3>
					<ul className='sidebarList'>
						<li className='sidebarListItem active'>
							<Person2Icon className='sidebarIcon' />
							User
						</li>

						<li className='sidebarListItem'>
							<Inventory2Icon className='sidebarIcon' />
							Products
						</li>

						<li className='sidebarListItem'>
							<AttachMoneyIcon className='sidebarIcon' />
							Transactions
						</li>
					</ul>

					<h3 className='sidebarTitle'>Notifications</h3>
					<ul className='sidebarList'>
						<li className='sidebarListItem active'>
							<MarkEmailUnreadIcon className='sidebarIcon' />
							Mail
						</li>

						<li className='sidebarListItem'>
							<ForumIcon className='sidebarIcon' />
							Feedback
						</li>

						<li className='sidebarListItem'>
							<ChatIcon className='sidebarIcon' />
							Message
						</li>
						<h3 className='sidebarTitle'>Staff</h3>
						<ul className='sidebarList'>
							<li className='sidebarListItem active'>
								<LineStyleIcon className='sidebarIcon' />
								Home
							</li>

							<li className='sidebarListItem'>
								<TimelineIcon className='sidebarIcon' />
								Analytics
							</li>

							<li className='sidebarListItem'>
								<AttachMoneyIcon className='sidebarIcon' />
								Sales
							</li>
						</ul>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
