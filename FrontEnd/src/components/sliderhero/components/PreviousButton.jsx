import { TiChevronLeft } from "react-icons/ti";
import { useSwiper } from 'swiper/react';
const PreviousButton = () => {
    const swiper = useSwiper();

    return (
        <button
            onClick={() => swiper.slidePrev()}
            className=" bg-[#626262ad] shadow-xl w-10 rounded-full h-10 flex items-center justify-center"
        >
            <TiChevronLeft className=" text-[#080808] hover:text-[#080808] text-xl" />
        </button>
    );
};

export default PreviousButton