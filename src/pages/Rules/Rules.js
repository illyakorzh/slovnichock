import React, { useEffect, useState } from 'react';

import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { ColorToggleButton } from '../../components/ColorToggleButton.js';
import { pagesRules } from '../../const.js';

export const Rules = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [alignment, setAlignment] = useState('degrees of comparison');

	useEffect(() => {
		if (location.pathname === '/rules') {
			navigate(pagesRules[alignment].path);
		}
	}, [location]);

	const handleChange = (event, newAlignment) => setAlignment(newAlignment);
	return (
		<>
			<ColorToggleButton
				alignment={alignment}
				passObj={pagesRules}
				setAlignment={setAlignment}
				handleChange={handleChange}
			/>
			<Outlet />
		</>
	);
};
