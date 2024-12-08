import React from "react";

function Aside() {
  return (
    <aside className="w-full mb-28">
      <div className="w-11/12 m-auto py-16">
        <div className="flex justify-between mb-8 items-center">
          <h2 className="text-4xl font-semibold">
            Países donde opera Uber Eats
          </h2>
          <a href="#" className="underline decoration-1">
            Ver todos los países
          </a>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-5 font-extralight">
            <a href="">Alemania</a>
            <a href="">Australia</a>
            <a href="">Bélgica</a>
            <a href="">Canadá</a>
            <a href="">Chile</a>
            <a href="">Costa Rica</a>
            <a href="">Ecuador</a>
            <a href="">El Salvador</a>
          </div>
          <div className="flex flex-col gap-5 font-extralight">
            <a href="">España</a>
            <a href="">Estados Unidos</a>
            <a href="">Francia</a>
            <a href="">Guatemala</a>
            <a href="">Irlanda</a>
            <a href="">Italia</a>
            <a href="">Japón</a>
            <a href="">Kenia</a>
          </div>
          <div className="flex flex-col gap-5 font-extralight">
            <a href="">Luxemburgo</a>
            <a href="">México</a>
            <a href="">Nueva Zelanda</a>
            <a href="">Países Bajos</a>
            <a href="">Panamá</a>
            <a href="">Polonia</a>
            <a href="">Portugal</a>
            <a href="">Reino Unido</a>
          </div>
          <div className="flex flex-col gap-5 font-extralight">
            <a href="">República Dominicana</a>
            <a href="">Sri Lanka</a>
            <a href="">Sudáfrica</a>
            <a href="">Suecia</a>
            <a href="">Suiza</a>
            <a href="">Taiwán (República de China)</a>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
