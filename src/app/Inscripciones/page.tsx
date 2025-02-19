'use client'

import styles from './inscripciones.module.css'
import Image from 'next/image'
import { PhoneCall } from 'lucide-react'
import CardInscripcion from '../ui/CardInscripcion/CardInscripcion'
import Maps from '../ui/maps/mapa'
import { Zoom, Slide, Fade } from 'react-awesome-reveal';




export default function InscripcionesPage() {
    return (
        <>
            <title>Inscripción</title>
            <article className={styles.containerInscrip}>
                <section className={styles.containerInfo}>
                    <div className={styles.contenedorTextoIP}>
                        <span>Contactanos</span>
                        <Zoom triggerOnce>
                            <strong>Inscripciones Abiertas</strong>
                        </Zoom>
                        <Slide triggerOnce>
                            <p>¿Qué esperas para Inscribirte?</p>
                        </Slide >
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
                                <p>Beneficios de Inscribirse</p>
                            </header>
                            <article className={styles.containerRequisitosArti}>
                                <div>
                                    <p>• Clases con instructores certificados</p>
                                    <p>• Desarrollo físico y mental</p>
                                    <p>• Golpear primero, golpear fuerte</p>
                                    <p>• No ser una nenita</p>
                                </div>
                            </article>
                        </div>
                        <div className={styles.contenedorBloque2Card}>
                            <header className={styles.containerRequisitosHder}>
                                <p>Día de Clases y Horarios</p>
                            </header>
                            <article className={styles.containerRequisitosArti}>
                                <div>
                                    <p>• Lunes de 18:30 a 20:00</p>
                                    <p>• Martes de 18:30 a 20:00</p>
                                    <p>• Miércoles de 18:30 a 20:00</p>
                                    <p>• Jueves de 18:30 a 20:00</p>
                                    <p>• Viernes de 18:30 a 20:00</p>
                                </div>
                            </article>
                        </div>
                    </div>
                    <section className={styles.contenedorInfoMaps}>
                        <p>Ubicación 📌</p>
                        <span>Podes encontrarnos en MZ 65 P17 500 Viv</span>
                        <Maps />
                    </section>
                </section>
                <section className={styles.containerInfo2}>
                    {Cardsinscripcion.map(card => (
                        <Fade direction='right' triggerOnce>
                            <CardInscripcion img={card.img} description={card.description} key={card.id} />
                        </Fade>
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
]

