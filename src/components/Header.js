import { useEffect } from 'react';

import { ImExit } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import AnchorTemporaryDrawer from './AnchorTemporaryDrawer.js';
import { removeUser } from '../store/UserSlice.js';
import { getVerbs } from '../store/VerbsSlice.js';
export const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		dispatch(getVerbs());
	}, []);
	return (
		<StyledHeader>
			<AnchorTemporaryDrawer />
			<span>Slovnichock</span>
			<StyledImExit
				onClick={() => {
					dispatch(removeUser());
					navigate('/');
				}}
			/>
		</StyledHeader>
	);
};

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: end;
	gap: 20px;
	padding-bottom: 20px;
	font-style: italic;
`;

const StyledImExit = styled(ImExit)`
	font-size: 30px;
	cursor: pointer;

	&:hover {
		color: white;
	}
`;
