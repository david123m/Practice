import React from "react";

function Card() {
  const cardInfo = [
    {
      id: 1,
      img: "https://www.ubereats.com/_static/88d55f7112efe55f.webp",
      title: "Pedir comida para tus empleados",
      button: "Crear una cuenta de negocios",
    },
    {
      id: 2,
      img: "https://www.ubereats.com/_static/711d51ca1b458931.webp",
      title: "Tu restaurante, a domicilio",
      button: "Agregar tu restaurante",
    },
    {
      id: 3,
      img: "https://www.ubereats.com/_static/16522a701585873b.webp",
      title: "Haz entregas con la app Uber Eats",
      button: "Registrate para realizar entregas",
    },
    {
      id: 4,
      img: "https://www.ubereats.com/_static/16522a701585873b.webp",
      title: "Haz entregas con la app Uber Eats",
      button: "Registrate para realizar entregas",
    },
    {
      id: 5,
      img: "https://www.ubereats.com/_static/88d55f7112efe55f.webp",
      title: "Haz entregas con la app Uber Eats",
      button: "Registrate para realizar entregas",
    },
    {
      id: 6,
      img: "https://www.ubereats.com/_static/711d51ca1b458931.webp",
      title: "Haz entregas con la app Uber Eats",
      button: "Registrate para realizar entregas",
    },
  ];

  const HTMLInfo = cardInfo.map((cards) => {
    return (
      <div
        key={cards.id}
        className="flex flex-col max-w-sm bg-white mx-3 rounded-lg"
      >
        <img className="w-full" src={cards.img} alt="" />
        <h2 className="text-3xl py-2">{cards.title} </h2>
        <button className="text-start underline decoration-1 mb-10">
          {cards.button}
        </button>
      </div>
    );
  });
  return <div className="flex flex-wrap">{HTMLInfo}</div>;
}

export default Card;
