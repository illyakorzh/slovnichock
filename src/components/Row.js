import React, { useState } from 'react';

import { Button } from '@mui/material';
import { IoIosArrowDown } from 'react-icons/io';
import styled from 'styled-components';

import { Pronounce } from './Pronounce.js';
import { TranslatedWordWrapper } from './TranslatedWordWrapper.js';

export const Row = ({
	el,
	callback,
	btnState1,
	btnState2,
	isDisablet,
	callbackDelete,
}) => {
	const [toggle, setToggle] = useState(false);
	return (
		<>
			<StyledTr className='cursor-pointer'>
				<td>{el.word}</td>
				<td>
					<Pronounce word={el.word} />
				</td>
				<td>
					<Button
						size='small'
						variant='contained'
						disabled={isDisablet}
						onClick={() => callback(el)}
					>
						{el.isLearned ? btnState1 : btnState2}
					</Button>
				</td>
				<td>
					<StyledIoIosArrowDown
						toggle={toggle.toString()}
						onClick={() => setToggle((prevState) => !prevState)}
					/>
				</td>
			</StyledTr>
			{toggle && (
				<StyledTranslate>
					<td colSpan={4} id={'translate-cel'}>
						<TranslatedWordWrapper arrWords={el.translatedWords} />
					</td>
				</StyledTranslate>
			)}
			{callbackDelete && toggle && (
				<StyledTranslate>
					<td colSpan={4} id={'translate-cel'}>
						<Button
							size='small'
							fullWidth
							variant='contained'
							color={'error'}
							onClick={() => callbackDelete(el)}
						>
							Delete
						</Button>
					</td>
				</StyledTranslate>
			)}
		</>
	);
};

export const StyledTr = styled.tr`
	&:last-child {
		border-bottom: 1px solid #2e3148;
	}

	td {
		word-break: break-word;

		vertical-align: middle;

		button {
			white-space: nowrap;
		}
	}
`;

export const StyledTranslate = styled.tr`
	box-shadow: none !important;
	td#translate-cel {
		padding-top: 0 !important;
	}
`;

export const StyledIoIosArrowDown = styled(IoIosArrowDown)`
	cursor: pointer;
	transform: ${({ toggle }) => (toggle === 'true' ? 'rotate(180deg)' : 'rotate(0deg)')};
`;
