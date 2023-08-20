import style from "./testimonio.module.css";


const Customers = (card) => {
    console.log("son los datos del testimonio", card);
    return (
        <section className="w-[100%] m-auto">
            <div className={`${style.section} my-7`}>
                <div className=" w-80 h-52 shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={card.image}
                            alt="Shoes"
                            width={100}
                            height={100}
                            className="rounded-full absolute -top-16"
                        />
                    </figure>
                    <div className="text-center">
                        <p className="text-black font-Manrope font-medium text-base">
                            {card.description}
                        </p>
                        <h2 className="text-black font-Manrope text-base">{card.name}</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Customers
