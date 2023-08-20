import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import * as yup from 'yup';
import { useRegisterUserMutation } from '../../../store/api/apiSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const schema = yup
	.object({
		name: yup.string().required('Por favor complete el campo requerido'),
		username: yup.string().required('Por favor complete el campo requerido'),
		email: yup
			.string()
			.email('Por favor ingrese un email válido')
			.required('Por favor complete el campo requerido'),
		password: yup
			.string()
			.matches(
				/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
				'La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula'
			)
			.required(),
		confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
	})
	.required();

const RegisterForm = () => {
	const [registerUser, { isSuccess, isError }] = useRegisterUserMutation();

	const MySwal = withReactContent(Swal);
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		mode: 'onBlur',
	});

	const formSubmit = (data) => {
		console.log(data);
		registerUser(data);

		reset();
	};

	useEffect(() => {
		if (isSuccess) {
			MySwal.fire({
				title: 'Registro exitoso!!',
				icon: 'success',
				scrollbarPadding: false,
				didClose: () => navigate('/auth/login'),
			});
		} else if (isError) {
			MySwal.fire({
				title: 'Registro fallido!!',
				icon: 'error',
				scrollbarPadding: false,
			});
		}
	}, [isSuccess, isError]);

	return (
		<form
			onSubmit={handleSubmit(formSubmit)}
			className='flex flex-col items-center justify-center gap-5 w-full'>
			<div className='w-full'>
				<input
					{...register('name')}
					placeholder='Nombre completo'
					autoFocus
					className='p-3 outline-none w-full border-b border-primary-light bg-white'
				/>
				<p className='text-tertiary text-center text-sm'>{errors.name?.message}</p>
			</div>
			<div className='w-full'>
				<input
					{...register('username')}
					placeholder='Nombre de usuario'
					className='p-3 outline-none w-full border-b border-primary-light bg-white'
				/>
				<p className='text-tertiary text-center text-sm'>
					{errors.username?.message}
				</p>
			</div>
			<div className='w-full'>
				<input
					{...register('email')}
					placeholder='Email'
					className='p-3 outline-none w-full border-b border-primary-light bg-white'
				/>
				<p className='text-tertiary text-center text-sm'>{errors.email?.message}</p>
			</div>
			<div className='w-full'>
				<input
					{...register('password')}
					type='password'
					placeholder='Contraseña'
					className='p-3 outline-none w-full border-b border-primary-light bg-white'
				/>
				<p className='text-tertiary text-center text-sm'>
					{errors.password?.message}
				</p>
			</div>
			<div className='w-full'>
				<input
					{...register('confirmPassword')}
					type='password'
					placeholder='Confirmar contraseña'
					className='p-3 outline-none w-full border-b border-primary-light bg-white'
				/>
				<p className='text-tertiary text-center text-sm'>
					{errors.confirmPassword && 'Las contraseñas no coinciden!'}
				</p>
			</div>
			<button
				type='submit'
				className='bg-primary px-5 py-3 rounded hover:bg-primary-dark transition-all text-secondary-light shadow-md min-w-[250px] mt-4 outline-none'>
				Enviar
			</button>
		</form>
	);
};
export default RegisterForm;
