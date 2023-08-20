import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import NextButton from './components/NextButton';
import PreviousButton from './components/PreviousButton';
import dataCardSlider from '../../utils/dataCardSlider.json';

const SliderHero = () => {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseOver = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};
	return (
		<section className='my-24' onMouseLeave={handleMouseLeave}>
			<Swiper
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={'auto'}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				pagination={true}
				modules={[EffectCoverflow, Pagination, Autoplay]}
				className='MySwiper'>
				{dataCardSlider.map((pet) => (
					<SwiperSlide onMouseOver={handleMouseOver} key={pet.id} className={''}>
						<figure>
							<img src={pet.image} alt={pet.title} className='' />
						</figure>
						<div className='p-3 flex items-center'>
							<h3 className='text-black text-center'>{pet.title}</h3>
							<p className='text-black text-sm'>{pet.description}</p>
						</div>
					</SwiperSlide>
				))}

				{isHovered && (
					<>
						<div className='sm:flex absolute top-[50%] bottom-0 right-0 cursor-pointer w-[50px] h-[50px] justify-center rounded-full z-[5]'>
							<NextButton />
						</div>
						<div className='sm:flex absolute top-[50%] bottom-0 left-0 cursor-pointer w-[50px] h-[50px] justify-center rounded-full z-[5]'>
							<PreviousButton />
						</div>
					</>
				)}
			</Swiper>
		</section>
	);
};

export default SliderHero;
