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
                        <span>Contáctanos</span>
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
                                <p>Beneficios de Inscribirse 🥋</p>
                            </header>
                            <article className={styles.containerRequisitosArti}>
                                <div>
                                    <p>• Clases con instructores certificados</p>
                                    <p>• Espacio inclusivo</p>
                                    <p>• Aprendizaje de defensa personal</p>
                                    <p>• Mejora de la disciplina y la concentración</p>
                                    <p>• Aumento de la confianza y autoestima</p>
                                </div>
                            </article>
                        </div>
                        <div className={styles.contenedorBloque2Card}>
                            <header className={styles.containerRequisitosHder}>
                                <p>Días y Horarios 🕒</p>
                            </header>
                            <article className={styles.containerRequisitosArti}>
                                <div>
                                    <p>• Lunes de 18:30 a 20:00 || 20:30 a 22:00</p>
                                    <p>• Martes de 17:00 a 18:30</p>
                                    <p>• Miércoles de 18:30 a 20:00 || 20:30 a 22:00</p>
                                    <p>• Jueves de 17:00 a 18:30</p>
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
        img: "/cardInscripciones7.webp",
        description: "¿Listo/a",
        id: 1,
    },
    {
        img: "/cardInscripciones8.webp",
        description: "Para",
        id: 2,
    },
    {
        img: "/cardInscripciones6.webp",
        description: "Enfrentar",
        id: 3,
    },
    {
        img: "/cardInscripciones4.webp",
        description: "Un",
        id: 4,
    },
    {
        img: "/cardInscripciones3.webp",
        description: "Nuevo",
        id: 5,
    },
    {
        img: "/cardInscripciones1.webp",
        description: "Desafío?",
        id: 6,
    },
]

