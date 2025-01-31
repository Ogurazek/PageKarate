'use client'

import styles from './inscripciones.module.css'
import Image from 'next/image'
import { PhoneCall } from 'lucide-react';
import CardInscripcion from '../ui/CardInscripcion/CardInscripcion';


export default function InscripcionesPage() {
    return (
        <>
            <article className={styles.containerInscrip}>
                <section className={styles.containerInfo}>
                    <div className={styles.contenedorTextoIP}>
                        <span>Contactanos</span>
                        <strong>Estan Abiertas las Inscripciones para Unirte al Clan Claudio San</strong>
                        <p>Podes dejarnos un mensaje por whatsapp</p>
                    </div>
                    <section className={styles.contenedorCardIP}>
                        <a href="https://wa.me/543624280051" target="_blank">
                            <div className={styles.containerMessageIP}>
                                Haz click Aquí
                                <Image className={styles.containerImage} src="/WhatsApp.svg.webp" alt="" width={400} height={400} />
                            </div>
                        </a>
                        <p>O</p>
                        <div className={styles.containerMessageIP2}>
                            <p>N° 3624280051</p>
                            <PhoneCall />
                        </div>
                    </section>
                </section>
                <section className={styles.containerInfo2}>
                    <CardInscripcion img='/ImgPrueba2.jpg' description='ESTAS' />
                    <CardInscripcion img='/ImgPrueba3.jpg' description='PREPARADO' />
                    <CardInscripcion img='/ImgPrueba4.jpg' description='PARA' />
                    <CardInscripcion img='/ImgPrueba2.jpg' description='EL' />
                    <CardInscripcion img='/ImgPrueba2.jpg' description='DESAFIO?' />
                </section>
            </article>
        </>
    )
}

// import React, { useState } from "react";


// const Carousel = () => {
//     const images = [
//         "https://via.placeholder.com/600x300?text=Imagen+1",
//         "https://via.placeholder.com/600x300?text=Imagen+2",
//         "https://via.placeholder.com/600x300?text=Imagen+3",
//     ];

//     const [currentIndex, setCurrentIndex] = useState(0);

//     const nextSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     };

//     const prevSlide = () => {
//         setCurrentIndex(
//             (prevIndex) => (prevIndex - 1 + images.length) % images.length
//         );
//     };

//     return (
//         <div className="carousel">
//             <button onClick={prevSlide}>Prev</button>
//             <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
//             <button onClick={nextSlide}>Next</button>
//         </div>
//     );
// };
