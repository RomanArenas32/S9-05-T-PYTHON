import { Formik, Form, Field, ErrorMessage } from 'formik';
import Swal from 'sweetalert2';
import * as yup from 'yup';

const userSchema = yup.object({
	name: yup
		.string()
		.min(3, 'Nombre muy corto!')
		.max(15, 'Nombre demasiado largo!')
		.required('No puedes dejar este espacio en blanco!')
		.matches(/^[A-Z _]+$/i, 'El nombre solo puede contener letras'),
	lastname: yup
		.string()
		.min(3, 'Apellido muy corto!')
		.max(15, 'Apellido demasiado largo!')
		.required('No puedes dejar este espacio en blanco!')
		.matches(/^[A-Z _]+$/i, 'El nombre solo puede contener letras'),
	dateOfBirty: yup
		.date()
		.max(new Date(Date.now() - 567648000000), 'Debes tener al menos 18 años')
		.required('Obligatorio'),
	zipCode: yup
		.string()
		.required()
		.matches(/^[0-9]+$/, 'Solo se deben ingresar dígitos')
		.min(4, 'Deben ser 4 dígitos exactos')
		.max(4, 'Deben ser 4 dígitos exactos')
		.required('Obligatorio'),
	newEmail: yup
		.string()
		.email('Mail no valido')
		.required('Debes ingresar un mail'),
});

const UserEditForm = () => {
	const handleSubmit = () => {
		Swal.fire({
			title: 'Actualización Exitosa!',
			icon: 'success',
		});
	};

	return (
		<div className='max-w-[1000px] h-fit'>
			<h3 className='text-primary-dark font-bold text-3xl'>
				Información Personal
			</h3>
			<Formik
				initialValues={{
					name: '',
					lastname: '',
					dateOfBirty: '',
					zipCode: '',
					newEmail: '',
				}}
				validationSchema={userSchema}>
				<Form onSubmit={handleSubmit}>
					<div className='grid gap-6 grid-cols-4 grid-rows-4 '>
						<div className='col-span-1'>
							<label className='  font-bold block text-labelColor mt-5  mb-2    font-khula'>
								Nombre
							</label>
							<Field
								name='name'
								id='name'
								type='text'
								className=' px-3 py-2 focus: outline-focusColor rounded-xl w-full    border-labelGrayColor border-2'
							/>
							<ErrorMessage
								name='name'
								component='p'
								className='font-bold  text-labelColor'
							/>
						</div>
						<div className='  col-start-2 col-end-3'>
							<label
								className='  font-bold block text-labelColor  mt-5  mb-2  font-khula '
								htmlFor='password '>
								Apellido
							</label>
							<Field
								name='lastname'
								id='lastname'
								type='text'
								className='  px-3 py-2 focus: outline-focusColor  rounded-xl  w-full border-labelGrayColor border-2 placeholder:-translate-x-6'
							/>
							<ErrorMessage
								name='lastname'
								component='p'
								className='font-bold  text-labelColor'
							/>
						</div>
						<div className='col-start-1 col-end-3'>
							<label
								className=' font-bold block text-labelColor mt-5 '
								htmlFor='password'>
								Código Postal
							</label>
							<Field
								name='zipCode'
								id='zipCode'
								type='number'
								className=' px-3 py-2 focus: outline-focusColor w-full rounded-xl pl-60 border-labelGrayColor border-2 placeholder:-translate-x-6  '
							/>
							<ErrorMessage
								name='zipCode'
								component='p'
								className='font-bold  text-labelColor'
							/>
						</div>
						<div className='col-start-1 col-end-3'>
							<label
								className=' font-bold block text-labelColor mt-5 mr-24 m '
								htmlFor='password'>
								Fecha de nacimiento
							</label>
							<Field
								name='dateOfBirty'
								id='dateOfBirty
                '
								type='date'
								className=' px-3 py-2  w-full focus: outline-focusColor rounded-xl pl-72    border-labelGrayColor border-2 placeholder:-translate-x-6  '
							/>
							<ErrorMessage
								name='dateOfBirty'
								component='p'
								className='font-bold  text-labelColor'
							/>
						</div>
						<div className='col-start-1 col-end-3'></div>
						<div className='col-start-3 col-end-5 row-start-1 row-end-2'>
							<label
								className=' font-bold block text-labelColor mt-7 mr-24    '
								htmlFor='password'>
								Nuevo Email
							</label>
							<Field
								name='passwordConfirmation'
								id='passwordConfirmation'
								type='password'
								className=' w-full px-3 py-2 focus: outline-focusColor rounded-xl pl-60   border-labelGrayColor border-2 placeholder:-translate-x-6  '
							/>
							<ErrorMessage
								name='passwordConfirmation'
								component='p'
								className='font-bold  text-[#ffffff]'
							/>
						</div>
						<div className='row-start-2 row-end-3 col-start-3 col-end-5'>
							<label
								className=' font-bold block text-labelColor mt-5 mr-24 m '
								htmlFor='password'>
								Teléfono de contacto
							</label>
							<Field
								name='passwordConfirmation'
								id='passwordConfirmation'
								type='password'
								className=' w-1/4 px-3 py-2 focus: outline-focusColor rounded-xl pl-60   border-labelGrayColor border-2 placeholder:-translate-x-6  '
							/>
							<ErrorMessage
								name='passwordConfirmation'
								component='p'
								className='font-bold  text-[#ffffff]'
							/>
						</div>
						<div className='row-start-3 row-end-4 col-start-3 col-end-5'>
							<label
								className=' font-bold block text-labelColor mt-5 mr-24 m '
								htmlFor='password'>
								Pais
							</label>
							<Field
								as='select'
								name='passwordConfirmation'
								id='passwordConfirmation'
								type='password'
								className=' w-full px-3 py-2 focus: outline-focusColor rounded-xl pl-60   border-labelGrayColor border-2 placeholder:-translate-x-6  '>
								<option hidden selected>
									Selecciona una opción
								</option>
								<option value='argentina'>Argentina</option>
								<option value='chile'>Chile</option>
								<option value='colombia'>Colombia</option>
								<option value='ecuador'>Ecuador</option>
							</Field>
							<ErrorMessage
								name='passwordConfirmation'
								component='p'
								className='font-bold  text-[#ffffff]'
							/>
						</div>
						<div className='col-start-3 col-end-5'>
							<label
								className=' font-bold block text-labelColor mt-5 mr-24 '
								htmlFor='password'>
								Ciudad/Provincia
							</label>
							<Field
								name='passwordConfirmation'
								id='passwordConfirmation'
								type='password'
								className=' w-full px-3 py-2 focus: outline-focusColor rounded-xl pl-60   border-labelGrayColor border-2 placeholder:-translate-x-6  '
							/>
							<ErrorMessage
								name='passwordConfirmation'
								component='p'
								className='font-bold  text-[#ffffff]'
							/>
						</div>

						<div>
							<button
								type='submit'
								className='p-2 text-primary bg-white transition-all text-xl font-title font-bold border-primary border-b-2'>
								Guardar
							</button>
						</div>
					</div>
				</Form>
			</Formik>
		</div>
	);
};

export default UserEditForm;
