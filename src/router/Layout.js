import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { Header } from '../components/Header.js';
import { getData } from '../store/DataSlice.js';

export const Layout = () => {
	const dispatch = useDispatch();
	const localUserId = useSelector((state) => state?.user?.token?.user_id);

	useEffect(() => {
		dispatch(getData(localUserId));
	}, [dispatch, localUserId]);

	return (
		<StyledMain>
			{localUserId && <Header />}
			<Outlet />
		</StyledMain>
	);
};

const StyledMain = styled.main`
	width: 100%;
	height: 100%;
	padding: 2%;
	@media (max-width: 440px) {
		padding: 10px 5px;
	}
`;
