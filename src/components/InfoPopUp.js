import styled, { keyframes } from 'styled-components';

export const InfoPopUp = ({ text, color = 'green' }) => (
	<Wrapper color={color}>
		<span>{text}</span>
	</Wrapper>
);

const trans = keyframes`
    0% {
        transform: translate(-50%, 0);
    }
    40% {
        transform: translate(-50%, -100px);
    }
    60% {
        transform: translate(-50%, -100px);
    }
    100% {
        transform: translate(-50%, 0px);
    }
`;

const Wrapper = styled.div`
	background-color: ${({ color }) => color};
	width: fit-content;
	position: absolute;
	bottom: -40px;
	left: 50%;
	transform: translate(-50%);
	padding: 8px 10px;
	border-radius: 8px;
	animation: ${trans} 4s ease-out;
`;
