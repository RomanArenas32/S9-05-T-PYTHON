import { useParams } from 'react-router-dom';
import { useGetPetByIdQuery } from '../../store/api/apiSlice';
import { USER } from '../../utils/user';

const PetProfile = () => {
	const params = useParams();

	const { currentData } = useGetPetByIdQuery(params.id);
	const images = [
		currentData?.img_pet1,
		currentData?.img_pet2,
		currentData?.img_pet3,
		currentData?.img_pet4,
		currentData?.img_pet5,
	];
	console.log(currentData?.img);

	return (
		<section className='pt-28 pb-20 flex gap-5 w-full max-w-[1300px] min-h-screen items-start justify-between mx-auto'>
			{/* Aside with pet's owner profile */}
			<div className='flex flex-col gap-3 flex-shrink-0 w-60 bg-white rounded overflow-hidden shadow-md p-5'>
				<img
					src={USER.img}
					alt='avatar'
					className='object-cover w-40 h-40 rounded-full self-center'
				/>
				<div className='flex flex-col gap-2'>
					<h6 className='text-xl font-semibold text-primary-dark text-center'>
						{USER.name}
					</h6>
					<p className='text-lg text-center'>{USER.address}</p>
					<div className='text-tertiary text-sm'>
						<p>{USER.country}</p>
						<p>{USER.city}</p>
						<p>{USER.email}</p>
					</div>
				</div>
			</div>
			{/* Main content with pet's info and actions */}
			<div className='w-full flex flex-col gap-8'>
				<div className='bg-white flex flex-col gap-4 rounded overflow-hidden shadow-md p-6'>
					<h3 className='text-4xl font-semibold text-center text-tertiary'>
						{currentData?.full_name}
					</h3>
					<img
						src={currentData?.img}
						alt='pet'
						className='object-cover w-full h-80'
					/>
					<h6 className='text-xl font-semibold text-[--primary-color-dark]'>
						Datos de la mascota
					</h6>
					<hr className='h-[3px] bg-primary-light border-none mt-[-5px]' />
					<div className='flex gap-4 items-start justify-between'>
						<p className='w-[65ch] break-words'>{currentData?.description}</p>
						<div className='columns-3 w-1/3'>
							<div className='mb-2'>
								<p className='font-semibold'>Género</p>
								<p className='text-primary'>{currentData?.gender}</p>
							</div>
							<div className='mb-2'>
								<p className='font-semibold'>Peso</p>
								<p className='text-primary'>{currentData?.peso} kg</p>
							</div>
							<div className='mb-2'>
								<p className='font-semibold'>Raza</p>
								<p className='text-primary'>{currentData?.breed}</p>
							</div>
							<div className='mb-2'>
								<p className='font-semibold'>Edad</p>
								<p className='text-primary'>{currentData?.age} años</p>
							</div>
							<div className='mb-2'>
								<p className='font-semibold'>Nacionalidad</p>
								<p className='text-primary'>{currentData?.nationality}</p>
							</div>
							<div className='mb-2'>
								<p className='font-semibold'>Chip</p>
								<p className='text-primary'>{currentData?.chip ? 'Si' : 'No'}</p>
							</div>
						</div>
					</div>
				</div>
				<div className='bg-tertiary flex flex-col gap-4 rounded overflow-hidden shadow-md p-6'>
					<h3 className='text-4xl font-semibold text-center text-white'>Galería</h3>
					<div className='flex flex-wrap gap-3 justify-evenly'>
						{images?.map((img, index) => {
							console.log(img);
							return (
								<img
									src={img}
									alt='gallery'
									className='object-cover w-48 h-48 rounded-lg shadow-md'
									key={index}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};
export default PetProfile;
