import React, { useState } from 'react';
import './ProductList.css';
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from '../../DummyData';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const ProductList = () => {
	const [data, setData] = useState(productRows);
	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const columns = [
		{ field: 'id', headerName: 'ID', width: 100 },
		{
			field: 'product',
			headerName: 'Product',
			width: 200,
			renderCell: (params) => {
				return (
					<div className='productListproduct'>
						<img className='productListImage' src={params.row.img} alt='' />
						{params.row.name}
					</div>
				);
			},
		},
		{ field: 'stock', headerName: 'Stock', width: 200 },
		{ field: 'price', headerName: 'Price', width: 120 },
		{ field: 'status', headerName: 'Status', width: 120 },
		{
			filed: 'action',
			headerName: 'Action',
			width: 150,
			renderCell: (params) => {
				return (
					<div key={params.row.id}>
						<Link to={'/product/' + params.row.id} target='_parent'>
							<button className='productListEdit'>Edit</button>
						</Link>

						<DeleteIcon
							className='productsListDelete'
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
		<div className='productsList'>
			<DataGrid
				rows={data}
				disableSelectionOnClick
				columns={columns}
				pageSize={5}
				rowsPerPageOptions={[5]}
				checkboxSelection
			/>
		</div>
	);
};

export default ProductList;
