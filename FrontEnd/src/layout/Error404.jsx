import { useNavigate } from "react-router-dom";
import error404Image from '../assets/img/error404.jpg';

export const Error404 = () => {
  const navigate = useNavigate();

  const backToPage = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        className="bg-[--primary-color-light] hover:bg-[--primary-color-dark] text-white font-bold py-2 px-4 rounded shadow mb-4"
        onClick={backToPage}
      >
        Volver
      </button>
      <div className="text-red-700 text-3xl font-bold">
        <img src={error404Image} alt="error404" className="w-2/2" />
        <h2>
          OCURRIO UN ERROR INESPERADO!
        </h2>
      </div>
    </div>
  );
};
