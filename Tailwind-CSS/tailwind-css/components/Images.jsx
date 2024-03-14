const Images = () => {
  return (
    <section id="modelS" className="car_section">
      <img src="./images/ModelS.jfif" alt="model s image" className="img" />
      <div className=" absolute top-[20%] left-[50%] text-center transform_50">
        <h1 className=" text-[5rem] font-semibold text-zinc-950">Model S</h1>
        <h2 className=" text-4xl text-zinc-600">
          Order Online For{" "}
          <span className=" underline cursor-pointer">Touchless Delivery</span>
        </h2>
      </div>
      <div className=" absolute top-[85%] left-[50%] text-center transform_50">
        <button className=" bg-black text-white font-semibold text-4xl px-20 py-5 rounded-full uppercase bg-opacity-80">
          Custom Order
        </button>
        <button className=" bg-white text-black font-semibold text-4xl px-20 py-5 rounded-full ml-8 uppercase">
          Existing Inventry
        </button>
      </div>
      <a href="#model3">
        <svg
          className=" block w-full h-20 mx-auto absolute top-[93%] animate-bounce"
          viewBox="0 0 30 30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="var(--tds-icon--fill, #171a20)"
            stroke-width="1.5"
            d="m19.5 12.5-4.5 4-4.5-4"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </section>
  );
};

export default Images;
