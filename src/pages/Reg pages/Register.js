import { useEffect } from 'react';

import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Form } from '../../components/Form.js';
import { setUser } from '../../store/UserSlice.js';

const Register = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const localUserId = useSelector((state) => state?.user?.token?.user_id);

	useEffect(() => {
		if (localUserId) navigate('/words');
	}, [localUserId, navigate]);

	const handleRegister = (email, password) => {
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				dispatch(setUser(user.accessToken));
				navigate('/words');
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<Wrapper>
			<h1>Register</h1>
			<Form title='register' handleClick={handleRegister} />
			<p>
				Already have an account? <Link to='/'>Sign in</Link>
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
export default Register;
