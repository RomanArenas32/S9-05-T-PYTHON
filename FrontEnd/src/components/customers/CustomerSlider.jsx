import getCard from '../../utils/card.json';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { TiChevronLeft, TiChevronRight } from 'react-icons/ti';

import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
// import Customers from "./Customers";
import style from './testimonio.module.css';

const CustomerSlider = () => {
	return (
		<section className='py-24 flex flex-col gap-4 items-center'>
			<h2 className='text-4xl'>Que dicen nuestros usuarios</h2>
			<Swiper
				slidesPerView={1}
				spaceBetween={10}
				breakpoints={{
					0: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					330: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					410: {
						slidesPerView: 1,
						spaceBetween: 10,
					},

					700: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1280: {
						slidesPerView: 3,
						spaceBetween: 5,
					},
					1400: {
						slidesPerView: 3,
						spaceBetween: 5,
					},

					1650: {
						slidesPerView: 3,
						spaceBetween: 10,
					},
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Pagination]}
				className='max-w-[1300px]'>
				{getCard.map((card) => (
					<SwiperSlide key={card.id}>
						<section className='w-[100%]'>
							<div className={`${style.section} my-7 relative`}>
								<div className='w-80 h-80 shadow-2xl bg-white rounded-lg'>
									<figure className='ml-[40%] w-[90px] mt-5'>
										<img
											src={card.image}
											alt='Shoes'
											className='w-24 h-24 rounded-full object-cover'
										/>
									</figure>
									<div className='text-center pt-10 p-4'>
										<p className='text-black text-lg'>{card.description}</p>
										<h2 className='text-black font-title font-bold'>{card.name}</h2>
									</div>
								</div>
							</div>
						</section>
					</SwiperSlide>
				))}

				<div className='hidden sm:flex items-center absolute top-48 right-0 cursor-pointer w-[50px] h-[50px] justify-center rounded-full z-[8] bg-primary-light hover:bg-primary transition-all'>
					<SlideNextButton />
				</div>
				<div className='hidden sm:flex items-center absolute top-48 left-0 cursor-pointer w-[50px] h-[50px] justify-center rounded-full z-[8] bg-primary-light hover:bg-primary transition-all'>
					<SlidePrevButton />
				</div>
			</Swiper>
		</section>
	);
};

const SlideNextButton = () => {
	const swiper = useSwiper();

	return (
		<button onClick={() => swiper.slideNext()}>
			<TiChevronRight className='text-white text-3xl' />
		</button>
	);
};

const SlidePrevButton = () => {
	const swiper = useSwiper();

	return (
		<button onClick={() => swiper.slidePrev()}>
			<TiChevronLeft className='text-white text-3xl' />
		</button>
	);
};
export default CustomerSlider;
