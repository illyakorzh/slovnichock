import React from 'react';

import { Alert } from '@mui/material';
import styled from 'styled-components';

export const Error = ({ e }) => (
	<StyledFormError>
		{Array.isArray(e) ? (
			e.map((el, index) => (
				<Alert key={index} severity='error'>
					{el}
				</Alert>
			))
		) : (
			<Alert severity='error'>{e}</Alert>
		)}
	</StyledFormError>
);

const StyledFormError = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;
