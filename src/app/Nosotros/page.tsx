import styles from './Nosotros.module.css'
import CardNosotros from './CardNosotros/CardNosotros'



export default function NosotrosPage() {
    return (
        <>
            <title>Nosotros</title>
            <article className={styles.container}>
                <section className={styles.containerInformacion}>
                    <div className={styles.containerInfoOne}>
                        <div className={styles.containerTitle}>
                            <h1>Nosotros</h1>
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
                    <div className={styles.containerInfoTwo}></div>
                </section>
                <section className={styles.containerLineDivisor}>
                    <div className={styles.containerFirstDiv}><p>Desde 2019</p></div>
                    <div className={styles.containerSecondDiv}><p>Al 2025 </p></div>
                </section>
                <article className={styles.container2}>
                    <section className={styles.containerCards}>
                        <CardNosotros img='/imgPrueba3.jpg' title='Claudio Nuñez' description='Instructor de Karate' />
                        <CardNosotros img='/imgPrueba4.jpg' title='Claudio Nuñez' description='Nada' />
                    </section>
                </article>
            </article>
        </>
    )
}