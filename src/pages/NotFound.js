import React from 'react';

import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const NotFound = () => {
	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	return (
		<NotFound.Wrapper>
			<NotFound.Image src={'https://i.imgur.com/fT1PScN.png'} alt='NotFoundImage' />
			<Link to='#' onClick={goBack}>
				Go Back
			</Link>
		</NotFound.Wrapper>
	);
};

NotFound.Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

NotFound.Image = styled.img`
	max-width: 90%;
	width: 90%;
	height: auto;
`;
