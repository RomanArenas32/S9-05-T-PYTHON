import { Provider, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useEliminatePetMutation } from '../../../store/api/apiSlice';
import { eliminateNewPet } from '../../../store/auth/authSlice';
import { store } from '../../../store/store';
import EditPetForm from './EditPetForm';

const PetCard = ({ info }) => {
	const MySwal = withReactContent(Swal);
	const dispatch = useDispatch();

	const [eliminatePet] = useEliminatePetMutation();

	const handleEditPet = () => {
		MySwal.fire({
			html: (
				<Provider store={store}>
					<EditPetForm id={info.id} />
				</Provider>
			),
			showConfirmButton: false,
			width: 'fit-content',
			scrollbarPadding: false,
		});
	};

	const handleEliminatePet = () => {
		MySwal.fire({
			title: 'Deseas eliminar esta mascota??',
			scrollbarPadding: false,
			showDenyButton: true,
			confirmButtonText: 'Si',
		}).then((result) => {
			if (result.isConfirmed) {
				eliminatePet(info.id);
				dispatch(eliminateNewPet(info.full_name));
			}
		});
	};

	return (
		<div className='flex flex-col min-w-[250px] w-full max-w-[400px] h-[420px] rounded-lg shadow-lg hover:shadow-primary hover:scale-[1.05] transition-all bg-white overflow-hidden'>
			<div className='w-full'>
				<img src={info?.img} alt='pet image' className='w-full h-40 object-cover' />
			</div>
			<div className='p-4 h-full flex flex-col justify-between gap-2 text-center'>
				<p className='text-4xl'>{info?.full_name}</p>
				<p className='text-body-light card-text'>{info?.description}</p>
				<div className='self-end flex gap-3'>
					<button
						className='p-2 text-primary bg-white transition-all text-xl font-title font-bold border-primary hover:border-b-2'
						onClick={handleEditPet}>
						Editar
					</button>
					<button
						className='p-2 text-tertiary bg-white transition-all text-xl font-title font-bold border-tertiary hover:border-b-2'
						onClick={handleEliminatePet}>
						Eliminar
					</button>
				</div>
			</div>
		</div>
	);
};
export default PetCard;
