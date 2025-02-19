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
                            Somos una empresa dedicada a la venta de productos de tecnología, con más de 10 años de experiencia en el mercado.
                            Nuestro objetivo es brindar a nuestros clientes
                            Somos una empresa dedicada a la venta de productos de tecnología, con más de 10 años de experiencia en el mercado.
                            Nuestro objetivo es brindar a nuestros clientes
                            Somos una empresa dedicada a la venta de productos de tecnología, con más de 10 años de experiencia en el mercado.
                            Nuestro objetivo es brindar a nuestros clientes
                            Somos una empresa dedicada a la venta de productos de tecnología, con más de 10 años de experiencia en el mercado.
                            Nuestro objetivo es brindar a nuestros clientes
                            Somos una empresa dedicada a la venta de productos de tecnología, con más de 10 años de experiencia en el mercado.
                            Nuestro objetivo es brindar a nuestros clientes
                            Somos una empresa dedicada a la venta de productos de tecnología, con más de 10 años de experiencia en el mercado.
                            Nuestro objetivo es brindar a nuestros clientes
                            Somos una empresa dedicada a la venta de productos de tecnología, con más de 10 años de experiencia en el mercado.
                            Nuestro objetivo es brindar a nuestros clientes
                            Nuestro objetivo es brindar a nuestros clientes
                            Somos una empresa dedicada a la venta de productos de tecnología, con más de 10 años de experiencia en el mercado.
                            Nuestro objetivo es brindar a nuestros clientes
                            Nuestro objetivo es brindar a nuestros clientes
                            Somos una empresa dedicada a la venta de productos de tecnología, con más de 10 años de experiencia en el mercado.
                            Nuestro objetivo es brindar a nuestros clientes
                            Nuestro objetivo es brindar a nuestros clientes
                            Somos una empresa dedicada a la venta de productos de tecnología, con más de 10 años de experiencia en el mercado.
                            Nuestro objetivo es brindar a nuestros clientes
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
                        <div className={styles.containerSecondDiv}><p>Al 2025 </p></div>
                    </Fade>
                </section>
                <article className={styles.container2}>
                    <section className={styles.containerDojo}>
                        <div className={styles.containerImgDojo}>
                            <Image src="/ImgPrueba3.jpg" alt="Dojo" width={600} height={600} />
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
                                    Nuestro dojo es la representación gráfica de esfuerzo y luchaNuestro dojo es la representación gráfica de esfuerzo y lucha
                                    Nuestro dojo es la representación gráfica de esfuerzo y luchaNuestro dojo es la representación gráfica de esfuerzo y lucha
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className={styles.containerCards}>
                        <Fade direction='left' triggerOnce>
                            <CardNosotros img='/imgPrueba3.jpg' title='Claudio Nuñez' description='Instructor de Karate' />
                            <CardNosotros img='/imgPrueba4.jpg' title='Claudio Nuñez' description='Nada' />
                        </Fade>
                    </section>
                </article>
            </article>
        </>
    )
}