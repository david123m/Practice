import React from "react";
import img from "../assets/imagen.png";
function Ubication() {
  return (
    <article>
      <div className="flex justify-between mb-8 items-center">
        <h2 className="text-4xl font-semibold">Ciudades cerca de mi</h2>
        <a href="#" className="underline decoration-1" >Conoce las mas de 500 Ciudades</a>
      </div>
      <img className="w-full" src={img} alt="" />
      <div className="py-10 flex justify-between">
        <a href="#">Ambato</a>
        <a href="#">Cuenca</a>
        <a href="#">Guyaquil</a>
        <a href="#">Quito</a>
      </div>
    </article>
  );
}

export default Ubication;
