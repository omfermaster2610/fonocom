import React from 'react';
import Header from '../../../../header';
import Link from 'next/link';
import Footer from '../../../../footer';

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
      <p className="text-2xl font-bold">Comunicación: Competencias comunicativas</p>
      </div>
      <section>
        <br></br>
        <p className="font-semibold">Descripción</p>
        <p>Este programa cubre los conceptos fundamentales de la comunicación...</p>
      </section>
      <br></br>
      <section className='space-y-1 w-fit flex'>
        <div>
            <p className="text-xl font-semibold">Introducción:</p>
            <p>
                Las competencias comunicativas es la capacidad para usar el lenguaje de manera adecuada según el contexto, integrando conocimientos lingüísticos, socioculturales y estratégicos con el fin de lograr una comunicación clara y efectiva.
            </p>
            <br/>
        </div>
      </section>
        <br></br>
          <div className="flex p-4 gap-10">
            <p className="text-xl font-semibold">Contenido Programático</p>
            <div className="mt-8 flex flex-col">       
              <br/>
              <div className="flex flex-row gap-6 max-w-full">
                <Link href="/programas/comunicacion/modulos/competencias/modulo1">
                  <button type="button" className="button">Modulo 1: Competencia lingüística</button>
                </Link>
                <Link href="/programas/comunicacion/modulos/competencias/modulo2">
                  <button type="button" className="button">Modulo 2: Competencia paralingüística</button>
                </Link>
                <Link href="/programas/comunicacion/modulos/competencias/modulo3">
                  <button type="button" className="button">Modulo 3: Competencia pragmática</button>
                </Link>
                <Link href="/programas/comunicacion/modulos/competencias/modulo4">
                  <button type="button" className="button">Modulo 4: Competencia proxémica</button>
                </Link>
              </div>
              <br />
            </div>
          </div>
        </div>
        <aside className=" w-64 p-4 border-l border-gray-300 shrink-0">
          <img src="/images/comunicacion.png" alt="Comunicación" className='w-192 h-192' />
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default Comunicacion;
