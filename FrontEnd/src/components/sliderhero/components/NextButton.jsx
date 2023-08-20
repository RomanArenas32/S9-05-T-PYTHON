import { TiChevronRight } from "react-icons/ti";
import { useSwiper } from 'swiper/react';

const NextButton = () => {
    const swiper = useSwiper();

    return (
        <button
            onClick={() => swiper.slideNext()}
            className=" bg-[#737373ad] shadow-xl w-10 rounded-full h-10  flex items-center justify-center"
        >
            <TiChevronRight className=" text-[#080808b7] hover:text-[#080808b7] text-xl" />
        </button>
    );
};

export default NextButton