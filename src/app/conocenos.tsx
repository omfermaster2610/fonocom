import React from "react";
import Link from "next/link";

const ConocenosMenu = () => {
  return (
    <div className="relative inline-block group m-6"> {/* Margen exterior aquí */}
      <button className="text-xl text-black px-6 py-3 rounded bg-white hover:bg-gray-100 transition">
        ↓ Conócenos
      </button>

      <div className="absolute m-6 left-0 mt-2 w-60 bg-white shadow-lg border border-gray-200 rounded transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 z-10">
        <ul className="text-left">

          {/* Sobre nosotros */}
          <li className="relative group/submenu px-5 py-3 hover:bg-gray-100 cursor-pointer text-base">
            &larr; Sobre nosotros
            <div className="absolute top-0 right-full ml-2 w-72 bg-white shadow-lg border border-gray-200 rounded opacity-0 invisible group-hover/submenu:visible group-hover/submenu:opacity-100 transition-all duration-300 z-20 p-4">
              <p className="text-sm">
                Somos una empresa orientados a ofrecer servicios que favorezcan las competencias y habilidades comunicativas a personas con discapacidad cognitiva leve por medio de una plataforma web denominada FonoCom. 
              </p>
            </div>
          </li>

          {/* Misión */}
          <li className="relative group/submenu px-5 py-3 hover:bg-gray-100 cursor-pointer text-base">
            &larr; Misión
            <div className="absolute top-0 right-full ml-2 w-72 bg-white shadow-lg border border-gray-200 rounded opacity-0 invisible group-hover/submenu:visible group-hover/submenu:opacity-100 transition-all duration-300 z-20 p-4">
              <p className="text-sm">
                En FonoCom nos dedicamos a ofrecer un servicio innovador y personalizado que potencie el desarrollo integral de la comunicación en personas con discapacidad cognitiva leve. Nuestro objetivo es mejorar su calidad de vida y fomentar su participación activa y plena en la sociedad.
              </p>
            </div>
          </li>

          {/* Visión */}
          <li className="relative group/submenu px-5 py-3 hover:bg-gray-100 cursor-pointer text-base">
            &larr; Visión
            <div className="absolute top-0 right-full ml-2 w-72 bg-white shadow-lg border border-gray-200 rounded opacity-0 invisible group-hover/submenu:visible group-hover/submenu:opacity-100 transition-all duration-300 z-20 p-4">
              <p className="text-sm">
                Para el año 2030, queremos consolidarnos como la plataforma de referencia en capacitación y desarrollo de habilidades comunicativas para personas con discapacidad cognitiva leve. Apostamos por un entorno digital accesible y adaptado, que promueva la inclusión, la equidad y el empoderamiento de nuestros usuarios a nivel global.
              </p>
            </div>
          </li>

          {/* Contáctanos */}
          <li className="relative group/submenu px-5 py-3 hover:bg-gray-100 cursor-pointer text-base">
            &larr; Contáctanos
            <div className="absolute top-0 right-full ml-2 w-72 bg-white shadow-lg border border-gray-200 rounded opacity-0 invisible group-hover/submenu:visible group-hover/submenu:opacity-100 transition-all duration-300 z-20 p-4">
              <p className="text-sm mb-2">Puedes contactarnos por los siguientes medios:</p>
              <p><strong>Facebook: </strong>FonoCom S.A.S</p>
              <p><strong>Instagram: </strong>@FonoComS.A.S</p>
              <p><strong>Tik Tok: </strong>FonoCom</p>
              <p>
                <strong>WhatsApp : </strong>
              <Link href="wa.me/573157569120">
                <span className="underline">3157569120</span>
              </Link>,
              <Link href="wa.me/573115508970">
                <span className="underline"> 3115508970</span>
              </Link>
              </p>
            </div>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default ConocenosMenu;
