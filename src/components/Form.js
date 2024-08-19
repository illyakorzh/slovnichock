import { getAuth, signInWithPopup } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Error } from './Error.js';
import { ReactComponent as Google } from '../assets/img/google.svg';
import { inputPasswordMessage } from '../const.js';
import { googleAuthProvider } from '../firebaseConfig.js';
import { setUser } from '../store/UserSlice.js';

export const Form = ({ title, handleClick }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { register, handleSubmit, formState } = useForm();
	const { errors } = formState;

	const onSubmit = (data) => handleClick(data.email, data.password);

	function popUp() {
		const auth = getAuth();
		signInWithPopup(auth, googleAuthProvider)
			.then(({ user }) => {
				dispatch(setUser(user.accessToken));
				navigate('/words');
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<StyledForm onSubmit={handleSubmit(onSubmit)}>
			<StyledInput
				autoComplete='off'
				type='email'
				id='email'
				placeholder={'email'}
				valid={errors.email ? 'false' : 'true'}
				invalid={errors.email ? 'true' : 'false'}
				{...register('email', {
					required: 'email is required',
					pattern: {
						value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
						message: 'Invalid email format',
					},
				})}
			/>
			{errors?.email?.message && <Error e={errors?.email?.message} />}

			<StyledInput
				autoComplete='off'
				type='password'
				id='password'
				placeholder={'password'}
				valid={errors.password ? 'false' : 'true'}
				invalid={errors.password ? 'true' : 'false'}
				{...register('password', {
					required: 'Password is required',
					pattern: {
						value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
						message: inputPasswordMessage,
					},
				})}
			/>
			{errors?.password?.message && <Error e={errors?.password?.message} />}

			<button>{title}</button>
			<button type='button' onClick={popUp} className='google'>
				<Google />
				google
			</button>
		</StyledForm>
	);
};

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
	border: 3px solid rgba(236, 236, 236, 0.8);
	padding: 20px;
	border-radius: 15px;
	backdrop-filter: blur(2px);
	margin: 20px 0;
	width: fit-content;
	height: fit-content;

	button {
		padding: 10px;
		border-radius: 10px;
		background-color: rgba(255, 255, 255, 0.3);
		cursor: pointer;
		color: white;
	}

	.google {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;
	}
`;

export const StyledInput = styled.input`
	width: 100%;
	background: transparent;
	height: 60px;
	border-radius: 50px;
	outline: none;
	padding: 10px;
	border: 3px solid rgba(236, 236, 236, 0.8);
	border: 3px solid ${({ valid }) => (valid ? 'rgba(236, 236, 236, 0.8)' : 'red')};
	color: rgba(236, 236, 236, 0.8);

	&::placeholder {
		text-align: center;
	}
`;
