import Select from "../components/Select";
import Fondo from "../assets/fondo.webp";
import location from "../assets/location.svg";

function HeaderMain() {
  const background = {
    backgroundImage: `url(${Fondo})`,
  };

  return (
    <header
      className="bg-cover bg-center h-screen max-h-[95vh] flex items-center justify-start"
      style={background}
    >
      <div className="text-black ml-10 w-10/12">
        <h1 className="text-5xl font-bold mb-10">
          Entrega de pedidos cerca de ti
        </h1>
        <div className="flex items-center gap-4">
          <div className="relative w-5/12">
            <input
              type="text"
              className="pl-12 w-164 outline-none p-4 w-full"
              placeholder="Ingresa la dirección de entrega"
            />
            <img
              src={location}
              alt="Location Icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
            />
          </div>
          <div>
            <Select></Select>
          </div>
          <button
            className="bg-black text-white p-4 px-7 rounded-lg"
          >
            Buscar comida
          </button>
        </div>

        <div className="mt-5">
            <span className="mr-2">O</span>
            <a className="text-slate-600 underline decoration-1" href="#">Inicia Sesion</a>
      </div>
      </div>
    </header>
  );
}

export default HeaderMain;
