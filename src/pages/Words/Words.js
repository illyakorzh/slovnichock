import React, { useEffect, useState } from 'react';

import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { ColorToggleButton } from '../../components/ColorToggleButton.js';
import { pagesWord } from '../../const.js';

export const Words = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [alignment, setAlignment] = useState('all');

	useEffect(() => {
		if (location.pathname === '/words') {
			navigate(pagesWord[alignment].path);
		}
	}, [location]);

	const handleChange = (event, newAlignment) => setAlignment(newAlignment);
	return (
		<>
			<ColorToggleButton
				alignment={alignment}
				passObj={pagesWord}
				setAlignment={setAlignment}
				handleChange={handleChange}
			/>
			<Outlet />
		</>
	);
};
