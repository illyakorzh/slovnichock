import { useEffect } from 'react';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Form } from '../../components/Form.js';
import { setUser } from '../../store/UserSlice.js';

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const localUserId = useSelector((state) => state?.user?.token?.user_id);

	useEffect(() => {
		if (localUserId) navigate('/words');
	}, [localUserId, navigate]);

	const handleLogin = (email, password) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				dispatch(setUser(user.accessToken));
				navigate('/words');
			})
			.catch(() => alert('Invalid user!'));
	};

	return (
		<Wrapper>
			<h1>Login</h1>
			<Form title='sign in' handleClick={handleLogin} />
			<p>
				Or <Link to='/register'>register</Link>
			</p>
		</Wrapper>
	);
};
const Wrapper = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;
export default Login;
