import React, { useEffect } from 'react';

import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function ColorToggleButton({ passObj = {}, alignment, handleChange }) {
	const navigate = useNavigate();

	useEffect(() => {
		if (alignment) {
			const { path } = passObj[alignment];
			navigate(path);
		}
	}, [alignment, navigate, passObj]);

	const keys = Object.keys(passObj);

	return (
		<ToggleButtonGroup
			color='primary'
			value={alignment}
			exclusive
			onChange={handleChange}
			aria-label='Platform'
			sx={{
				display: 'flex',
				justifyContent: 'center',
				paddingBottom: '20px',
			}}
		>
			{keys.map((el) => (
				<ToggleButton
					key={el}
					value={el}
					sx={{
						backgroundColor: '#27293C',
						color: 'white',
					}}
				>
					{el}
				</ToggleButton>
			))}
		</ToggleButtonGroup>
	);
}
