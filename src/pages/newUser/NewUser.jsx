import React from 'react';
import './NewUser.css';
const NewUser = () => {
	return (
		<div className='newUser'>
			<h1 className='newUserTitle'>New user</h1>
			<form action='' className='newUserForm'>
				<div className='newUserItem'>
					<label htmlFor='username'>Username</label>
					<input type='text' id='username' placeholder='enter your username' />
				</div>

				<div className='newUserItem'>
					<label htmlFor='fullname'>Full name</label>
					<input type='text' id='fullname' placeholder='enter your Full name' />
				</div>

				<div className='newUserItem'>
					<label htmlFor='email'>Email</label>
					<input type='email' id='email' placeholder='enter your email' />
				</div>

				<div className='newUserItem'>
					<label htmlFor='password'>Passowrd</label>
					<input
						type='password'
						id='password'
						placeholder='enter your password'
					/>
				</div>

				<div className='newUserItem'>
					<label htmlFor='phone'>Phone</label>
					<input type='text' id='phone' placeholder='enter your phone' />
				</div>

				<div className='newUserItem'>
					<label htmlFor='address'>Address</label>
					<input type='text' id='address' placeholder='enter your address' />
				</div>

				<div className='newUserItem'>
					<label>Gender</label>
					<div className='newUserGender'>
						<input type='radio' id='male' name='gender' value='male' />
						<label for='male'>male</label>

						<input type='radio' id='female' name='gender' value='female' />
						<label for='fale'>female</label>
					</div>
				</div>
				<div className='newUserItem'>
					<label>Active</label>

					<select className='newUserSelect' name='active' id='active'>
						<option value='yes'>Yes</option>
						<option value='No'>No</option>
					</select>
				</div>
				<button className='newUserBtn'>Create</button>
			</form>
		</div>
	);
};

export default NewUser;
