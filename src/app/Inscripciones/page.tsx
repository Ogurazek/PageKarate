'use client'

import styles from './inscripciones.module.css'
import Image from 'next/image'
import { PhoneCall } from 'lucide-react';
import CardInscripcion from '../ui/CardInscripcion/CardInscripcion';
import Maps from '../ui/maps/mapa';

export default function InscripcionesPage() {

    return (
        <>
            <article className={styles.containerInscrip}>
                <section className={styles.containerInfo}>
                    <div className={styles.contenedorTextoIP}>
                        <span>Contactanos</span>
                        <strong>Estan Abiertas las Inscripciones para Unirte al Clan Claudio San</strong>
                        <p>Clases: Lunes de 18:30 • Martes 19:30 • Miércoles 20:30 • Jueves 21:30 • Viernes 22:30</p>
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
                <section className={styles.containerInfo3}>
                    <div className={styles.containerRequisitos}>
                        <div className={styles.contenedorBloque1Card}>
                            <header className={styles.containerRequisitosHder}>
                                <p>Beneficios de Inscribirse 😎🦖</p>
                            </header>
                            <article className={styles.containerRequisitosArti}>
                                <p>• Clases con instructores certificados</p>
                                <p>• Desarrollo físico y mental</p>
                                <p>• Golpear primero, golpear fuerte</p>
                                <p>• No ser una nenita</p>
                            </article>
                        </div>
                        <div className={styles.contenedorBloque2Card}>
                            <header className={styles.containerRequisitosHder}>
                                <p>Fechas y Horarios 📅🗓️</p>
                            </header>
                            <article className={styles.containerRequisitosArti}>
                                <p>• Clases con instructores certificados</p>
                                <p>• Desarrollo físico y mental</p>
                                <p>• Golpear primero, golpear fuerte</p>
                                <p>• No ser una nenita</p>
                            </article>
                        </div>
                    </div>
                    <div className={styles.containerRequisitos}>
                        <div className={styles.contenedorBloque1Card}>
                            <header className={styles.containerRequisitosHder}>
                                <p>Ubicación 🌎</p>
                            </header>
                            <article className={styles.containerRequisitosArti}>
                                <p>• Podes encontrarnos en Barranqueras Chaco</p>
                                <p>• Desarrollo físico y mental</p>
                                <p>• Golpear primero, golpear fuerte</p>
                                <p>• No ser una nenita</p>
                            </article>
                        </div>
                        <div className={styles.contenedorBloque2Card}>
                            <Maps></Maps>
                        </div>
                    </div>
                </section>
                <section className={styles.containerInfo2}>
                    {Cardsinscripcion.map(card => (
                        <CardInscripcion img={card.img} description={card.description} key={card.id} />
                    ))}
                </section>
            </article>
        </>
    )
}


const Cardsinscripcion = [
    {
        img: "/ImgPrueba2.jpg",
        description: "ESTAS",
        id: 1,
    },
    {
        img: "/ImgPrueba2.jpg",
        description: "PREPARADO",
        id: 2,
    },
    {
        img: "/ImgPrueba2.jpg",
        description: "PARA",
        id: 3,
    },
    {
        img: "/ImgPrueba2.jpg",
        description: "EL",
        id: 4,
    },
    {
        img: "/ImgPrueba2.jpg",
        description: "DESAFÍO",
        id: 5,
    },
    {
        img: "/ImgPrueba2.jpg",
        description: "TORNEOS",
        id: 6,
    },
    {
        img: "/ImgPrueba2.jpg",
        description: "SALUD",
        id: 7,
    },
    {
        img: "/ImgPrueba2.jpg",
        description: "ESPIRITU",
        id: 8,
    },
    {
        img: "/ImgPrueba2.jpg",
        description: "AMISTAD",
        id: 9,
    },
    {
        img: "/ImgPrueba2.jpg",
        description: "ENTRENAMIENTO",
        id: 10,
    },
]

