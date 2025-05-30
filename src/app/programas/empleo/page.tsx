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
        <img src="/images/empleoIcon.png" alt="icon" className='size-7' />
      <p className="text-2xl font-bold">Empleo y trabajo</p>
      </div>
      <section>
        <br></br>
        <h1 className="text-xl font-extrabold">Descripción</h1>
        <p className='text-sm  font-light'>Este programa cubre los conceptos fundamentales de la comunicación enfocada en el empleo...</p>
      </section>
      <br></br>
      <section className='space-y-1 w-fit flex'>
        <div>
          <p className="text-xl font-semibold">Introducción:</p>
          <p>
            El empleo es una actividad laboral que una persona realiza a cambio de una remuneración. Esta actividad puede desarrollarse en el marco de una relación formal o informal con una organización o un empleador.
          </p>
          <br/>
          <p className="text-xl font-semibold">Objetivos:</p>
          <p>
            A continuación, encontrarás una serie de actividades diseñadas para fortalecer tus habilidades y prepararte para comprender mejor cómo funciona el mundo laboral.
          </p>
        </div>
          <aside className=" w-64 p-4 border-l border-gray-300 shrink-0">
            <img src="/images/empleo.png" alt="Empleo" className='w-192 h-192' />
          </aside>
      </section>
        <br></br>
          <div className="p-4 gap-10">
            <p className="text-xl font-semibold">Contenido Programático</p>
            <div className="mt-8">       
              <br/>
              <div className="flex flex-row gap-6 max-w-full">
                <Link href="/programas/empleo/modulos/modulo1">
                  <button type="button" className="button">Modulo 1: Evaluación de habilidades laborales</button>
                </Link>
                <Link href="/programas/empleo/modulos/modulo2">
                  <button type="button" className="button">Modulo 2: Entrenamiento en habilidades socio-laborales</button>
                </Link>
                <Link href="/programas/empleo/modulos/modulo3">
                  <button type="button" className="button">Modulo 3: Talleres de comunicación funcional</button>
                </Link>
                <Link href="/programas/empleo/modulos/modulo4">
                  <button type="button" className="button">Modulo 4: Orientación a familias y cuidadores en inclusión laboral</button>
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
