import styles from './Nosotros.module.css'
import CardNosotros from './CardNosotros/CardNosotros'
import Image from 'next/image'
import { Fade } from "react-awesome-reveal";



export default function NosotrosPage() {
    return (
        <>
            <title>Nosotros</title>
            <article className={styles.container}>
                <section className={styles.containerInformacion}>
                    <div className={styles.containerInfoOne}>

                        <div className={styles.containerTitle}>
                            <Fade direction="left" triggerOnce duration={800}  >
                                <h1>Nosotros</h1>
                            </Fade>
                            <div className={styles.line}></div>
                        </div>
                        <p>
                            Somos una escuela de Barranqueras, Chaco, fundada en el año 2019. Comenzamos impartiendo clases en distintos espacios, como clubes y plazas, con recursos limitados, pero con un gran compromiso por la enseñanza. Con el tiempo, la escuela fue creciendo gracias al esfuerzo de nuestros alumnos y al apoyo incondicional de sus familias, hasta convertirnos en lo que somos hoy: un gran dojo de karate.

                            <br /><br />Nuestra escuela está dirigida por el Sensei Claudio Alejandro Núñez, 4° Dan Renshi, que actualmente es el Presidente de la Asociación Norte del Litoral de Karate Do Tradicional Kyudokan y Kobudo Ryukonkai, quien se encuentra instruido por el Maestro Mariano Hugo Moratto, 8° Dan Kyoshi, Director Técnico de la Región Norte en la Asociación Litoral Karate Do Tradicional y Kobudo Ryukonkai Okinawa Japón.

                            Nos especializamos en el karate tradicional de Okinawa, Japón, siguiendo la disciplina Kyudokan Shorin Ryu y el arte del Kobudo Ryukonkai. Más que formar competidores, buscamos transmitir valores como la disciplina, el respeto y la perseverancia, pilares fundamentales de estas tradiciones marciales.

                            <br /><br />Desde nuestros primeros torneos, nuestros alumnos han demostrado un gran nivel, logrando destacarse y subiendo al podio en cada competencia, tanto a nivel provincial, nacional como internacional. Estos logros reflejan el esfuerzo, la dedicación y el compromiso de cada uno de ellos, así como la pasión con la que entrenamos día a día.

                            Gracias a nuestros alumnos y sus familias, mantenemos viva esta escuela y seguimos creciendo juntos.
                        </p>
                    </div>
                    <div className={styles.containerInfoTwo}>
                    </div>
                </section>
                <section className={styles.containerLineDivisor}>
                    <Fade direction='left' triggerOnce>
                        <div className={styles.containerFirstDiv}><p>Desde 2019</p></div>
                    </Fade>
                    <Fade direction='right' triggerOnce>
                        <div className={styles.containerSecondDiv}><p>Actualidad </p></div>
                    </Fade>
                </section>
                <article className={styles.container2}>
                    <section className={styles.containerDojo}>
                        <div className={styles.containerImgDojo}>
                            <Image src="/Dojo.webp" alt="Dojo" width={600} height={600} />
                        </div>
                        <div className={styles.containerTextDojo}>
                            <header className={styles.headerDojo}>
                                <Fade direction='right' triggerOnce>
                                    <span className={styles.estiloTitulo}>Nuestro Dojo 🚩</span>
                                </Fade>
                                <div className={styles.line}></div>
                            </header>
                            <div className={styles.textDojo}>
                                <p>
                                    Nuestro dojo es la representación gráfica del esfuerzo y la perseverancia. Cada uno de nuestros alumnos y sus familias ha contribuido para que hoy seamos lo que somos. Contamos con un equipamiento completo, que incluye pecheras, guantes, cabezales, espejos y alfombras, además de diversos elementos para el entrenamiento físico, como pesas, escaleras y sogas. También disponemos de un botiquín de primeros auxilios, porque la seguridad es una prioridad.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className={styles.containerCards}>
                        <Fade direction='left' triggerOnce>
                            <CardNosotros img='/FotoClaudio.jpg' title='Claudio Alejandro Nuñez' description='Instructor de Karate 4° Dan Renshi Filial Barranqueras, Chaco Argentina' />
                            <CardNosotros img='/SenseiMoratto.jpg' title='Mariano Hugo Moratto' description='Instructor de Karate 8° Dan Kyoshi Filial Corrientes Capital Argentina' />
                            <CardNosotros img='/PedroFattore.jpg' title='Fundador | Pedro Fattore' description='Hanshi 10° Dan Buenos Aires, Argentina' />
                            <CardNosotros img='/Minoru.jpeg' title='Minoru Higa' description='Hanshi 10° Dan, Kaicho Okinawa Japon' />
                        </Fade>
                    </section>
                </article>
            </article>
        </>
    )
}