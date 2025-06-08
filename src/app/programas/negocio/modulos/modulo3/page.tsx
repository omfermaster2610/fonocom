"use client";

import React from 'react';
import Header from '../../../../header';
import Link from 'next/link';
import Footer from '../../../../footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Modulo = () => {

    return (
        <div className="p-6 space-y-6">
            <Header />
            <div className="p-6 space-y-6"
            style={{
                    padding: "0 1.5rem",
                }}>
                <br></br>
                      <div className="p-6 space-y-6 flex">
                        <img src="/images/empleoIcon.png" alt="icon" className='size-7' />
                        <p className="text-2xl font-bold">Empleo y trabajo: Módulo 3</p>
                    </div>
                    <br/>
                    <p className="text-2xl font-bold">Talleres de comunicación funcional</p>                    
                <br></br>
                <div className="p-6 space-y-6 flex">
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        slidesPerView={1}
                        spaceBetween={30}
                    >
                        <SwiperSlide>
                            <section className=''>
                            <p className="text-xl font-semibold">Descripción</p>
                            <p>
                                En esta actividad se acompaña a los usuarios en el proceso de creación y estructuración de una idea de negocio, partiendo de sus intereses, habilidades y recursos disponibles. 
                                Se promueve el análisis del entorno, la identificación de necesidades del mercado y la definición de productos o servicios viables. 
                                El objetivo es que cada persona pueda visualizar un proyecto realista y sostenible, que responda a sus capacidades y al contexto en el que se desenvuelve.
                            </p>
                            </section>
                        </SwiperSlide>
                        <SwiperSlide>
                            <section className='flex justify-center'>
                            <p className="text-sm text-justify justify-center w-2xl">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores earum neque ut doloremque, tempore enim cum expedita voluptatibus pariatur provident eligendi cupiditate ab illo eius mollitia tempora quo quam. Soluta.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestiae est corporis provident quod, similique totam iure voluptatem earum quibusdam ipsam fugit at consequatur tempora dignissimos dolores inventore? Ad, laboriosam.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi atque officiis asperiores repudiandae maiores dolor commodi, ab expedita sapiente, ipsam earum illo molestiae aliquid hic aliquam esse voluptas cupiditate aperiam!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro officiis, quam tempora labore corporis fugit placeat doloremque vero dicta magni repudiandae culpa recusandae nihil? Voluptatum mollitia laboriosam consectetur a!
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi quis amet quisquam a, placeat est nemo veritatis esse ab consequuntur, magnam sequi nesciunt, ad quos tenetur omnis non. Accusantium, perspiciatis.                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores earum neque ut doloremque, tempore enim cum expedita voluptatibus pariatur provident eligendi cupiditate ab illo eius mollitia tempora quo quam. Soluta.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestiae est corporis provident quod, similique totam iure voluptatem earum quibusdam ipsam fugit at consequatur tempora dignissimos dolores inventore? Ad, laboriosam.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi atque officiis asperiores repudiandae maiores dolor commodi, ab expedita sapiente, ipsam earum illo molestiae aliquid hic aliquam esse voluptas cupiditate aperiam!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro officiis, quam tempora labore corporis fugit placeat doloremque vero dicta magni repudiandae culpa recusandae nihil? Voluptatum mollitia laboriosam consectetur a!
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi quis amet quisquam a, placeat est nemo veritatis esse ab consequuntur, magnam sequi nesciunt, ad quos tenetur omnis non. Accusantium, perspiciatis.
                            </p>
                            </section>
                        </SwiperSlide>
                        <SwiperSlide>
                            <section className='flex justify-center'>
                            <p className="text-sm text-justify justify-center w-2xl">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores earum neque ut doloremque, tempore enim cum expedita voluptatibus pariatur provident eligendi cupiditate ab illo eius mollitia tempora quo quam. Soluta.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestiae est corporis provident quod, similique totam iure voluptatem earum quibusdam ipsam fugit at consequatur tempora dignissimos dolores inventore? Ad, laboriosam.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi atque officiis asperiores repudiandae maiores dolor commodi, ab expedita sapiente, ipsam earum illo molestiae aliquid hic aliquam esse voluptas cupiditate aperiam!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro officiis, quam tempora labore corporis fugit placeat doloremque vero dicta magni repudiandae culpa recusandae nihil? Voluptatum mollitia laboriosam consectetur a!
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi quis amet quisquam a, placeat est nemo veritatis esse ab consequuntur, magnam sequi nesciunt, ad quos tenetur omnis non. Accusantium, perspiciatis.                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores earum neque ut doloremque, tempore enim cum expedita voluptatibus pariatur provident eligendi cupiditate ab illo eius mollitia tempora quo quam. Soluta.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestiae est corporis provident quod, similique totam iure voluptatem earum quibusdam ipsam fugit at consequatur tempora dignissimos dolores inventore? Ad, laboriosam.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi atque officiis asperiores repudiandae maiores dolor commodi, ab expedita sapiente, ipsam earum illo molestiae aliquid hic aliquam esse voluptas cupiditate aperiam!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro officiis, quam tempora labore corporis fugit placeat doloremque vero dicta magni repudiandae culpa recusandae nihil? Voluptatum mollitia laboriosam consectetur a!
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi quis amet quisquam a, placeat est nemo veritatis esse ab consequuntur, magnam sequi nesciunt, ad quos tenetur omnis non. Accusantium, perspiciatis.
                            </p>
                            </section>
                        </SwiperSlide>
                        <SwiperSlide>
                            <section className=''>
                            <div className='flex justify-center'>
                            <p className="text-sm text-justify justify-center w-2xl">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores earum neque ut doloremque, tempore enim cum expedita voluptatibus pariatur provident eligendi cupiditate ab illo eius mollitia tempora quo quam. Soluta.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestiae est corporis provident quod, similique totam iure voluptatem earum quibusdam ipsam fugit at consequatur tempora dignissimos dolores inventore? Ad, laboriosam.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi atque officiis asperiores repudiandae maiores dolor commodi, ab expedita sapiente, ipsam earum illo molestiae aliquid hic aliquam esse voluptas cupiditate aperiam!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro officiis, quam tempora labore corporis fugit placeat doloremque vero dicta magni repudiandae culpa recusandae nihil? Voluptatum mollitia laboriosam consectetur a!
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi quis amet quisquam a, placeat est nemo veritatis esse ab consequuntur, magnam sequi nesciunt, ad quos tenetur omnis non. Accusantium, perspiciatis.                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores earum neque ut doloremque, tempore enim cum expedita voluptatibus pariatur provident eligendi cupiditate ab illo eius mollitia tempora quo quam. Soluta.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestiae est corporis provident quod, similique totam iure voluptatem earum quibusdam ipsam fugit at consequatur tempora dignissimos dolores inventore? Ad, laboriosam.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi atque officiis asperiores repudiandae maiores dolor commodi, ab expedita sapiente, ipsam earum illo molestiae aliquid hic aliquam esse voluptas cupiditate aperiam!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro officiis, quam tempora labore corporis fugit placeat doloremque vero dicta magni repudiandae culpa recusandae nihil? Voluptatum mollitia laboriosam consectetur a!
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi quis amet quisquam a, placeat est nemo veritatis esse ab consequuntur, magnam sequi nesciunt, ad quos tenetur omnis non. Accusantium, perspiciatis.
                            </p>
                            <br></br>
                            </div>
                            <div className="flex justify-end ml-4 mb-4 gap-6">
                                <Link href="../../../../../actividades/empleo/modulo3">
                                <button type="button" className="button">Empezar actividad</button>
                            </Link>
                            </div>
                            </section>
                        </SwiperSlide>
                    </Swiper>
                    <aside className=" w-64 p-4 border-l border-gray-300 shrink-0 justify-center">
                        <img src="/images/empleo2.png" alt="Comunicación" className='w-192 h-192' />
                    </aside>
                </div>
                <section>

                </section>
                <Footer />
            </div>
        </div>
    );
};

export default Modulo;