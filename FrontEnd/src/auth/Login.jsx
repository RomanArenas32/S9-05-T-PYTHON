import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../store/api/apiSlice';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../store/auth/authSlice';
import cat1 from '../assets/img/cat2.webp';

export const Login = () => {
	const [loginUser, { data: user, isSuccess, isError }] = useLoginUserMutation();
	const MySwal = withReactContent(Swal);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleUsernameChange = (event) => {
		setUsername(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = { username, password };

		loginUser(formData);
	};

	useEffect(() => {
		if (isSuccess) {
			dispatch(setCredentials(user));
			MySwal.fire({
				title: 'Inicio de sesión exitoso!',
				icon: 'success',
				scrollbarPadding: false,
				didClose: () => navigate('/user-profile'),
			});
		} else if (isError) {
			MySwal.fire({
				title: 'Ha ocurrido un Error!',
				icon: 'error',
				scrollbarPadding: false,
			});
		}
	}, [isSuccess, isError]);

	return (
		<div className='w-full min-h-screen grid place-items-center'>
			<div className='flex flex-row-reverse w-[900px] min-h-[600px] shadow-lg rounded overflow-hidden'>
				<div className='bg-primary-light relative w-1/2 rounded-s'>
					<img src={cat1} alt='cat' className='absolute bottom-0 right-0 w-[80%]' />
				</div>
				<div className='flex flex-col items-center justify-center gap-6 bg-white w-1/2'>
					<h2 className='text-4xl text-primary font-semibold'>Iniciar sesión</h2>
					<form onSubmit={handleSubmit} className='flex flex-col items-center'>
						<input
							type='text'
							placeholder='Nombre de usuario'
							value={username}
							onChange={handleUsernameChange}
							className='w-64 py-2 px-4 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
						/>
						<input
							type='password'
							placeholder='Contraseña'
							value={password}
							onChange={handlePasswordChange}
							className='w-64 py-2 px-4 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
						/>
						<button
							type='submit'
							className='bg-primary px-5 py-3 rounded hover:bg-primary-dark transition-all text-secondary-light shadow-md  outline-none'>
							Iniciar sesión
						</button>
						<p className='mt-5'>
							No tienes una cuenta?{' '}
							<Link to='/auth/login' className='text-primary font-semibold'>
								Regístrate
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};
