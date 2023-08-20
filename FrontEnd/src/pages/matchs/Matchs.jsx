import { useGetPetsQuery } from '../../store/api/apiSlice';
import CardMatch from './components/CardMatch';

const Matchs = () => {
	const { currentData } = useGetPetsQuery();

	return (
		<div className='w-[100%] min-h-[100vh] flex flex-col justify-center items-center'>
			<div className='w-[80%] min-h-[100vh] pt-[10em] flex flex-wrap justify-center items-center '>
				{currentData?.map((info) => (
					<CardMatch info={info} key={info.id} />
				))}
			</div>
		</div>
	);
};
export default Matchs;
