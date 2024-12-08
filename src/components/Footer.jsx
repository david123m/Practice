import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="w-11/12 m-auto">
        <div className="flex flex-wrap justify-between">
          <div>
            <h2 className="font-bold text-xl mb-4">Uber Eats</h2>
            <div className="flex gap-3">
              <a href="#">
                <img src="appstore-link.png" alt="App Store" className="w-32" />
              </a>
              <a href="#">
                <img
                  src="googleplay-link.png"
                  alt="Google Play"
                  className="w-32"
                />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-8 text-sm">
            <div>
              <a href="#" className="block hover:underline mb-2">
                Obtén ayuda
              </a>
              <a href="#" className="block hover:underline mb-2">
                Agrega tu restaurante
              </a>
              <a href="#" className="block hover:underline mb-2">
                Regístrate para realizar entregas
              </a>
              <a href="#" className="block hover:underline mb-2">
                Crear una cuenta de negocios
              </a>
            </div>
            <div>
              <a href="#" className="block hover:underline mb-2">
                Restaurantes cerca de mí
              </a>
              <a href="#" className="block hover:underline mb-2">
                Conoce todas las ciudades
              </a>
              <a href="#" className="block hover:underline mb-2">
                Ver todos los países
              </a>
              <a href="#" className="block hover:underline mb-2">
                Pedidos para llevar cerca de mí
              </a>
            </div>
            <div>
              <a href="#" className="block hover:underline mb-2">
                Compras del súper
              </a>
              <a href="#" className="block hover:underline mb-2">
                Acerca de Uber Eats
              </a>
              <a href="#" className="block hover:underline mb-2">
                Español
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t pt-6 flex flex-col items-center">
          <div className="flex flex-rw gap-4 mb-4">
            <div>
              <a href="#">
                <img src="facebook-icon.png" alt="Facebook" className="w-6" />
              </a>
              <a href="#">
                <img src="twitter-icon.png" alt="Twitter" className="w-6" />
              </a>
              <a href="#">
                <img src="instagram-icon.png" alt="Instagram" className="w-6" />
              </a>
            </div>
            <div>
              <div className="text-center text-xs space-x-3">
                <a href="#" className="hover:underline">
                  Política de privacidad
                </a>
                <a href="#" className="hover:underline">
                  Términos
                </a>
                <a href="#" className="hover:underline">
                  Tarifas
                </a>
                <a href="#" className="hover:underline">
                  No vender ni compartir mi información personal
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs mt-3 text-end">
            reCAPTCHA y Google protegen este sitio. Se aplican la Política de
            privacidad y los Términos del servicio. © 2024 Uber Technologies
            Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
