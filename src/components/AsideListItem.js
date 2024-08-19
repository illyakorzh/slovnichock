import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AsideListItem = ({ text }) => {
	const navigate = useNavigate();
	return (
		<ListItem key={text} disablePadding>
			<ListItemButton onClick={() => navigate(text === 'main page' ? `/` : `/${text}`)}>
				<ListItemText primary={text} />
			</ListItemButton>
		</ListItem>
	);
};
export default AsideListItem;
