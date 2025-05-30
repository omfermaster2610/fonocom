/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Header from '../../header';
import Link from 'next/link';
import Footer from '../../footer';

const empleo = () => {
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
        <img src="/images/negocioIcon.png" alt="icon" className='size-7' />
      <p className="text-2xl font-bold"> &nbsp; Ideas de negocio</p>
      </div>
      <section>
        <br></br>
        <h1 className="text-xl font-extrabold">Descripción</h1>
        <p className='text-sm  font-light'>Este programa cubre los conceptos fundamentales de la comunicación enfocada en los negocios y el emprendimiento...</p>
      </section>
      <br></br>
      <h1>Introducción</h1>
      <section className='space-y-1 w-fit flex'>
        <div>
          <p className="text-xl font-semibold">Introducción:</p>
          <p>
            Una idea de negocio es una propuesta inicial que identifica una necesidad en el mercado y plantea una solución a través de un producto o servicio. Su objetivo es generar valor económico y social, respondiendo a las demandas de los consumidores.
          </p>
          <br/>
          <p className="text-xl font-semibold">Objetivos:</p>
          <p>
            A continuación, encontrarás actividades diseñadas para fortalecer tus habilidades en la creación y visualización de un emprendimiento dentro del entorno del mercado.
          </p>
        </div>
          <aside className=" w-64 p-4 border-l border-gray-300 shrink-0">
            <img src="/images/negocio.png" alt="Negocio" className='w-192 h-192' />
          </aside>
      </section>
        <br></br>
          <div className="p-4 gap-10">
            <p className="text-xl font-semibold">Contenido Programático</p>
            <div className="mt-8">       
              <br/>
              <div className="flex flex-row gap-6 max-w-full">
                <Link href="/programas/negocio/modulos/modulo1">
                  <button type="button" className="button">Modulo 1: Capacitación en habilidades emprendedoras</button>
                </Link>
                <Link href="/programas/negocio/modulos/modulo2">
                  <button type="button" className="button">Modulo 2: Desarrollo de ideas de negocio</button>
                </Link>
                <Link href="/programas/negocio/modulos/modulo3">
                  <button type="button" className="button">Modulo 3: Educación financiera básica</button>
                </Link>
                <Link href="/programas/negocio/modulos/modulo4">
                  <button type="button" className="button">Modulo 4: Entrenamiento en comunicación para ventas</button>
                </Link>
                <Link href="/programas/negocio/modulos/modulo5">
                  <button type="button" className="button">Modulo 5: Formación a familias o cuidadores sobre emprendimiento</button>
                </Link>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default empleo;
