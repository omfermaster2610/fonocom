/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Header from '../../header';
import Link from 'next/link';
import Footer from '../../footer';

const Comunicacion = () => {
  return (
    <div className="p-6 space-y-6">
      <Header />
    <div className="p-6 space-y-6 flex">
      <div className="flex-1 p-6 space-y-6 overflow-auto"
      style={{
          padding: "0 1.5rem",
        }}>
      <br></br>
      <div className="p-6 space-y-6 flex">
        <img src="/images/comunicacionIcon.png" alt="icon" className='size-7' />
      <p className="text-2xl font-bold">Comunicación</p>
      </div>
      <section>
        <br></br>
        <h1 className="text-xl font-extrabold">Descripción</h1>
        <p className='text-sm  font-light'>Este programa cubre los conceptos fundamentales de la comunicación...</p>
      </section>
      <br></br>
      <h1>Introducción</h1>
      <section className='space-y-1 gap-2 w-fit flex'>
        <div>
          <p>
            La comunicación es el proceso mediante el cual las personas intercambian información, ideas y sentimientos, utilizando distintos canales y códigos, con el objetivo de lograr comprensión y facilitar la interacción con la sociedad.
            En este programa encontrarás dos subprogramas diseñados para fortalecer las habilidades y competencias comunicativas de personas en condición de discapacidad cognitiva leve.
          </p>
          <br></br>
          <div className="flex p-4 gap-10">
            <p className="text-xl font-semibold">Módulos Programáticos:</p>
            <br></br>
            <div className="mt-8 flex flex-col">       
              <br />
              <Link href="/programas/comunicacion/modulos/habilidades">
                <button type='button' className="button">
                  Habilidades comunicativas
                </button>
              </Link>
            </div>
            <div className="mt-8 flex flex-col">       
              <br />
              <Link href="/programas/comunicacion/modulos/competencias">
                <button type='button' className="button">
                  Competencias comunicativas
                </button>
              </Link>
            </div>
          </div>
        </div>

          <aside className=" w-64 p-4 border-l border-gray-300 shrink-0">
            <img src="/images/comunicacion.png" alt="Comunicación" className='w-192 h-192' />
          </aside>
      </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Comunicacion;
