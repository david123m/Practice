import React from "react";
import reactLogo from "../assets/burger.svg";

function Header() {
  return (
    <nav className="bg-white py-3 flex items-center justify-between">
      <div className="flex items-center">
        <img
          className="w-10 h-10 ml-7 hover:bg-slate-300 rounded-3xl p-2"
          src={reactLogo}
          alt="React logo"
        />
        <a className="pl-4 text-xl font-normal" href="">
          Uber
          <span className="font-black pl-1 text-xl tracking-wide">Eats</span>
        </a>
      </div>
      <div className="mr-6 flex gap-4 font-semibold">
        <button className=" font-light border-2 py-1 px-2 rounded-2xl shadow-xl hover:bg-slate-200">
          Iniciar sesion
        </button>
        <button className="font-light bg-black py-1 px-4 text-white rounded-2xl hover:bg-opacity-65">
          Registrate
        </button>
      </div>
    </nav>
  );
}

export default Header;
