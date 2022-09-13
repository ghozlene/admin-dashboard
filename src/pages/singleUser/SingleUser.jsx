import React from 'react';
import { Link } from 'react-router-dom';
import './SingleUser.css';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PublishIcon from '@mui/icons-material/Publish';
const SingleUser = () => {
	return (
		<div className='SingleUser'>
			<div className='userTitleContainer'>
				<h1 className='userTitle'>Edit User</h1>
				<Link to='/new-user'>
					<button className='userAddBtn'>Create</button>
				</Link>
			</div>
			<div className='userContainer'>
				<div className='userShow'>
					<div className='userShopTop'>
						<img
							src='https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg'
							alt=''
							className='userShowingImg'
						/>
						<div className='userShowTopTitle'>
							<span className='userShowUsername'>Mr.Smith</span>
							<span className='userShowUserTitle'>Software Enginner</span>
						</div>
					</div>
					<div className='userShopBottom'>
						<span className='userShowTitle'>Account Details</span>
						<div className='userShowInfo'>
							<PermIdentityIcon className='userShowIcon' />
							<span className='userShowInputTitle'>Mr.Smith</span>
						</div>

						<div className='userShowInfo'>
							<CalendarMonthIcon className='userShowCalender' />
							<span className='userShowInputTitle'>14/02/1997</span>
						</div>
						<span className='userShowTitle'>Contact Details</span>

						<div className='userShowInfo'>
							<PhoneAndroidIcon className='userShowIcon' />
							<span className='userShowInputTitle'>+216 2514214</span>
						</div>

						<div className='userShowInfo'>
							<AlternateEmailIcon className='userShowIcon' />
							<span className='userShowInputTitle'>MrSmith@gmail.com</span>
						</div>

						<div className='userShowInfo'>
							<LocationOnIcon className='userShowIcon' />
							<span className='userShowInputTitle'>London |UK</span>
						</div>
					</div>
				</div>
				<div className='userUpdate'>
					<span className='userUpdateTitle'>Edit</span>

					<form action='' className='userUpdateForm'>
						<div className='userUpdateLeft'>
							<div className='userUpdateItem'>
								<label htmlFor=''>Username</label>
								<input
									type='text'
									placeholder='new name'
									className='userUpdateInput'
								/>
							</div>

							<div className='userUpdateItem'>
								<label htmlFor=''>Full name</label>
								<input
									type='text'
									placeholder='new Full name'
									className='userUpdateInput'
								/>

								<div className='userUpdateItem'>
									<CalendarMonthIcon className='userShowCalenderUpdate' />
									<input type='date' className='userUpdateInput' />
								</div>

								<div className='userUpdateItem'>
									<PhoneAndroidIcon className='userShowCalenderUpdate' />
									<input type='text' className='userUpdateInput' />
								</div>

								<div className='userUpdateItem'>
									<AlternateEmailIcon className='userShowCalenderUpdate' />
									<input type='email' className='userUpdateInput' />
								</div>
								<div className='userUpdateItem'>
									<LocationOnIcon className='userShowIcon' />
									<input type='text' className='userUpdateInput' />
								</div>
							</div>
						</div>
						<div className='userUpdateRight'>
							<div className='userUpdateUpload'>
								<img
									src='https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg'
									alt=''
									className='userUpdateImg'
								/>
								<label htmlFor='file'>
									<PublishIcon className='userUpdateIcon' />
								</label>
								<input type='file' id='file' style={{ display: 'none' }} />
							</div>
							<button className='userUpdateBtn'>Update</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SingleUser;
