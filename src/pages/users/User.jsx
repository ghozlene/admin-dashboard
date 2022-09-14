import React, { useState } from 'react';
import './User.css';
import { DataGrid } from '@mui/x-data-grid';
import { rows } from '../../DummyData';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
const User = () => {
	const [data, setData] = useState(rows);

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};
	const columns = [
		{ field: 'id', headerName: 'ID', width: 100 },
		{
			field: 'user',
			headerName: 'User',
			width: 200,
			renderCell: (params) => {
				return (
					<div className='userListUser' key={params.row.id}>
						<img className='userListImage' src={params.row.avatar} alt='' />
						{params.row.username}
					</div>
				);
			},
		},
		{ field: 'email', headerName: 'Email', width: 200 },
		{ field: 'status', headerName: 'Status', width: 120 },
		{ field: 'transaction', headerName: 'Transaction', width: 150 },

		{
			filed: 'action',
			headerName: 'Action',
			width: 150,
			renderCell: (params) => {
				return (
					<div key={params.row.id}>
						<Link to={'/user/' + params.row.id} target='_parent'>
							<button className='userListEdit'>Edit</button>
						</Link>

						<DeleteIcon
							className='userListDelete'
							onClick={() => {
								handleDelete(params.row.id);
							}}
						/>
					</div>
				);
			},
		},
	];
	return (
		<div className='userList'>
			<DataGrid
				rows={data}
				disableSelectionOnClick
				columns={columns}
				pageSize={8}
				rowsPerPageOptions={[5]}
				checkboxSelection
			/>
		</div>
	);
};

export default User;
