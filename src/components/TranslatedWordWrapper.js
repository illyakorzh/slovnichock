import React from 'react';

import styled from 'styled-components';

export const TranslatedWordWrapper = ({ arrWords }) => (
	<Wrapper>
		{arrWords?.map((word, index) => (
			<span key={index}>{word}</span>
		))}
	</Wrapper>
);

const Wrapper = styled.div`
	display: flex;
	gap: 10px;
	align-items: flex-start;
	flex-wrap: wrap;
	overflow-y: auto;
	//scrollbar-color: #f1f1f1 #888;
	//scrollbar-width: thin;

	span {
		word-break: break-word;
		background-color: rgba(130, 130, 130, 0.8);
		padding: 5px 10px;
		border-radius: 5px;
	}
`;
