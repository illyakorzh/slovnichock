import { useState } from 'react';

import { Box, Drawer, List } from '@mui/material';
import { GiHamburgerMenu } from 'react-icons/gi';
import styled from 'styled-components';

import AsideListItem from './AsideListItem.js';
import { asideListItem, styleAside } from '../const.js';

export default function AnchorTemporaryDrawer() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDrawer = (open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		setIsOpen(open);
	};

	return (
		<div>
			<StyledGiHamburgerMenu size={32} onClick={toggleDrawer(true)} />
			<Drawer
				transitionDuration={1000}
				open={isOpen}
				onClose={toggleDrawer(false)}
				sx={styleAside}
			>
				<Box
					sx={{ width: 250 }}
					role='presentation'
					onClick={toggleDrawer(false)}
					onKeyDown={toggleDrawer(false)}
				>
					<List>
						{asideListItem.map((text) => (
							<AsideListItem text={text} key={text} />
						))}
					</List>
				</Box>
			</Drawer>
		</div>
	);
}

const StyledGiHamburgerMenu = styled(GiHamburgerMenu)`
	cursor: pointer;

	&:hover {
		background-color: rgba(255, 255, 255, 0.3);
		border-radius: 3px;
	}
`;
