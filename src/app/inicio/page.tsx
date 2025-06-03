'use client'
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Playfair_Display } from 'next/font/google'
import { Pacifico } from 'next/font/google'
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../footer";
import Conocenos from "../conocenos";

interface Program {
  id: string
  name: string
  description: string
}

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'] })
const pacifico = Pacifico({ subsets: ['latin'], weight: '400' })
const programs: Program[] = [
  {
    id: "comunicacion",
    name: "Comunicación",
    description:
      "En este programa encontrarás dos subprogramas diseñados para fortalecer las habilidades y competencias comunicativas de personas en condición de discapacidad cognitiva leve.",
  },
  {
    id: "empleo",
    name: "Empleo y trabajo",
    description:
      "A continuación, encontrarás una serie de actividades diseñadas para fortalecer tus habilidades y prepararte para comprender mejor cómo funciona el mundo laboral.",
  },
  {
    id: "emprendimiento",
    name: "Ideas de negocio",
    description:
      "A continuación, encontrarás actividades diseñadas para fortalecer tus habilidades en la creación y visualización de un emprendimiento dentro del entorno del mercado.",
  },
]

const Intro = () => {

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);
  const [selectedProgram, setSelectedProgram] = useState<Program>(programs[0])

  return (
    <>
    <div className="flex flex-col px-6 items-center justify-center min-h-screen bg-gradient-to-b from-[#cce0b4] via-white to-[#d9dbf7] py-20">
    <div className="fixed top-0 p-6 z-50 w-full bg-[#f3f3f3] bg-gradient-to-b from-[#f3f3f3] to-transparent flex items-center justify-between mb-8">
      <div className="flex items-center space-x-2"> 
          <Image
            src="/images/fonoconLogo.png"
            alt="Logo"
            width={60}
            height={60}
            className="object-contain"
          />
          <p className="text-xl text-[#1e2363] font-bold">
            <span className={playfair.className}>FONO</span>
            <span className={pacifico.className}>Com</span>
          </p>
        </div>

        {/* Botones */}
        <nav className="flex items-center gap-6 space-x-4">
              <Conocenos />
          <Link href="/login">
            <button className="button1 bg-[#9da5ff] text-white px-4 py-2 rounded-xl hover:bg-[#7f89f8] transition">
              Iniciar Sesión
            </button>
          </Link>
          <Link href="/registro">
            <button className="button2 bg-[#aac993] text-white px-4 py-2 rounded-xl hover:bg-[#94b27b] transition">
              Registrarse
            </button>
          </Link>
        </nav>
      </div>
      {/* Sección 1 */}
    <section className="w-full min-h-screen bg-gradient-to-b from-[#cce0b4] via-white to-[#d9dbf7] flex flex-col items-center justify-center px-4 py-20" data-aos-delay={100}>
        {/* Título principal */}
        <p className="text-6xl sm:text-8xl font-bold text-[#1e2363] text-center" data-aos="fade-up">
          <span className={playfair.className}>FONO</span>
          <span className={pacifico.className}>Com</span>
        </p>

        {/* Subtítulo */}
        <p className="mt-4 text-2xl sm:text-3xl font-light tracking-wide text-center text-black" data-aos="fade-up">
          Inclusión e <br className="sm:hidden" /> innovación
        </p>
        <br/>
        {/* Botón */}
        <Link href="/registro">
          <button className="button1 mt-8 bg-[#1e2363] hover:bg-[#151943] text-white font-semibold text-lg px-8 py-3 rounded-full transition shadow-md" data-aos="fade-up">
            Empezar ahora
          </button>
        </Link>
    </section>

    {/* Sección 2 */}

    <section className="bg-[#BDC3E9] py-16 px-8 relative justify-between">
      <div className="h-10 bg-gradient-to-b from-[rgb(217,219,247)] to-[#BDC3E9] flex p-6" />
        <div className="max-w-full mx-auto flex flex-col md:flex-row items-center gap-6 relative p-6 z-10">
          {/* Imagen con fade-in */}
          <div data-aos="fade-right" className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/images/inicioChicaSenalando.png"
              alt="Chica señalando"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>

          {/* Texto y botón */}
          <div className="md:w-2/5 text-center md:text-left flex justify-center" data-aos="fade-up">
            <div className="comic-vignete bg-green-300 p-8 rounded-3xl border-4 border-black">
              <p className="text-[#444] mb-6 m-6sm:text-xl font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorem optio voluptas dolore atque fugiat.
                Corporis atque magnam quas laboriosam magni possimus reprehenderit debitis animi aliquid, sed fuga impedit
                officia.
              </p>
              <Link href="/registro">
                <button className="button1 bg-[#1e2363] hover:bg-[#151943] text-white font-semibold text-lg px-8 py-3 rounded-full transition shadow-md">
                  Empieza hoy
                </button>
              </Link>
            </div>
          </div>
        </div>
        <br/>
    </section>

    {/* Sección 3 */}
    <div className="bg-gradient-to-b from-[#BDC3E9] to-[#9FC8F6] w-full h-screen flex justify-center items-center py-20">
      <section className="w-full max-w-6xl px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="" data-aos="fade-up">
          <br/>
          <br/>
            {/* Lista de programas */}
            <p className="text-4xl font-bold text-gray-800">
              Conoce todos nuestros programas:
            </p>
          <div className="flex flex-col lg:flex-row justify-between items-center">

            <div className="w-full lg:w-1/2 space-y-8">
              <br/>
              <div className="space-y-4 flex flex-col gap-4">
                {programs.map((program) => (
                  <button
                    key={program.id}
                    onClick={() => setSelectedProgram(program)}
                    className={`flex items-center w-full p-4 rounded-xl transition duration-300 ${
                      selectedProgram.id === program.id
                        ? "bg-white/30 backdrop-blur shadow-md scale-[1.02]"
                        : "hover:bg-white/20 hover:scale-[1.01]"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full mr-4 transition ${
                        selectedProgram.id === program.id
                          ? "bg-[#1e2363] shadow"
                          : "bg-gray-600 group-hover:bg-gray-700"
                      }`}
                    />
                    <span
                      className={`text-lg font-semibold ${
                        selectedProgram.id === program.id
                          ? "text-[#1e2363]"
                          : "text-gray-800"
                      }`}
                    >
                      {program.name}
                    </span>
                    <br/>
                  </button>
                ))}
              </div>
            </div>

            {/* Panel de detalle del programa */}
            <div className="w-full h-auto lg:w-1/2 max-w-lg p-8" data-aos="fade-left">
              <div className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-3xl shadow-xl p-8">
                <h3 className="text-3xl font-bold text-[#1e2363] mb-4">
                  {selectedProgram.name}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  {selectedProgram.description}
                </p>
                <br/>
                <Link href="/registro">
                  <button className="button1">Empezar ahora</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br/>
      <br/>
    </div>

    {/* Sección 4 */}
    <section className="bg-gradient-to-b from-[#9FC8F6] to-[#90be3e] w-full flex justify-center-safe h-svh px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-16">
      <div className="max-w-full w-full mx-auto flex flex-col md:flex-row items-center justify-center-safe gap-2">
        {/* Texto */}
        <div className="md:w-2/5">
          <p className="text-4xl md:text-5xl font-bold text-black mb-6" data-aos="fade-right">
            Apoyar a su comunicación <br />
            <span className="font-extrabold">nos importa</span>
          </p>
          <br/>
          <p className="text-lg text-black leading-relaxed" data-aos="fade-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed tincidunt eros, at tincidunt ante. Aenean ut imperdiet lacus. Morbi efficitur ullamcorper erat, ac vestibulum sapien dignissim at. Morbi posuere, metus et maximus aliquam, lorem quam placerat erat, a gravida justo mauris vestibulum sem.
          </p>
        </div>

        {/* Imagen */}
        <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
          <Image
            src="/images/inicioChicaConLupa.png"
            alt="Mujer con lupa"
            className="max-w-md w-full h-auto"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>

    {/* Sección 5 */}
  <section className="bg-gradient-to-b from-[#90be3e] h-screen w-full to-[#e9f0e1] py-16 px-6 text-center">
  <p className="text-4xl font-bold text-black mb-12" data-aos="fade-up">
    Conoce a nuestro equipo <br /> de trabajo
  </p>
  <br/>
  <br/>
  <div className="flex flex-wrap justify-center gap-10">
    {/* Miembro del equipo */}
    {[
      { nombre: "Ana María Collante", img: "/images/integrantes/anaMaria.png" },
      { nombre: "Isis Ballona", img: "/images/integrantes/isisBallona.png" },
      { nombre: "Ubaldo Andrés Hernández", img: "/images/integrantes/andres.png" },
      { nombre: "Kimberly Johana Valencia", img: "/images/integrantes/kimberly.png" },
    ].map((persona, i) => (
      <div key={i} className="flex flex-col items-center" data-aos="fade-up" data-aos-delay={i * 100}>
        <div className="integrantes w-40 h-40 rounded-full border-[6px] border-black overflow-hidden flex items-center justify-center bg-white">
          <Image
            src={persona.img}
            alt={persona.nombre}
            width={200}
            height={200}
            className="object-fill rounded-full"
          />
        </div>
        <br/>
        <p className="mt-4 font-serif font-bold">{persona.nombre}</p>
      </div>
    ))}
  </div>
</section>
    {/* Sección 6 */}
  <section className="bg-gradient-to-b from-[#eaf1e0] via-[#cce0ab] to-[#eaf1e0] h-90 w-full items-center py-32 px-6 text-center">
    <div className="flex flex-col items-center" data-aos="fade-up">
        <br/>      
      <p className="text-4xl font-bold text-black mb-4">

      ¿Qué estás esperando?
    </p>
        <br/>
    <p className="text-xl text-black mb-8">
      Empieza hoy de manera gratuita
    </p>
        <br/>    
          <Link href="/registro">
        <button className="button1 mt-8 bg-[#1e2363] hover:bg-[#151943] text-white font-semibold text-lg px-8 py-3 rounded-full transition shadow-md">
          Empezar ahora
        </button>
      </Link>
    </div>
  </section>

    <div className="w-full bg-gradient-to-b from-[#eaf1e0] to-[#f3f3f3] mx-auto mt-16">
      <Footer />
    </div>
    </div>
    </>
  );
};

export default Intro;