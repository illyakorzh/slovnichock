import { BsSoundwave } from 'react-icons/bs';
import styled from 'styled-components';

export const Pronounce = ({ word }) => {
	function pronounce() {
		console.log('pronounce');
		let u = new SpeechSynthesisUtterance();
		u.lang = 'en-US';
		u.text = word;
		speechSynthesis.speak(u);
	}
	return <StyledBsSoundWave size={32} onClick={pronounce} />;
};

const StyledBsSoundWave = styled(BsSoundwave)`
	cursor: pointer;
`;
