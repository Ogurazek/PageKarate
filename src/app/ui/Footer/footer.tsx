import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Phone, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <>
            <article className={styles.container}>
                <section className={styles.containerSection}>
                    <div className={styles.containerImgFooter}>
                        <Image className={styles.image} src='/Banderas.png' alt='' width={600} height={600} />
                    </div>
                    <div className={styles.lineFooter}></div>
                    <nav className={styles.containerTexto}>
                        <Link href='/'>Inicio</Link>
                        <Link href='/Inscripciones'>Inscripciones</Link>
                        <Link href='/Nosotros'>Nosotros</Link>
                        <Link href='/Torneos'>Torneos</Link>
                    </nav>
                    <nav className={styles.containerTexto}>
                        <Link href='https://www.facebook.com/karate.nunez' target='_blank'><Facebook color='red' /></Link>
                        <Link href='/'><Instagram color='red' /></Link>
                        <Link href='/'><Twitter color='red' /></Link>
                        <Link href='/'><Phone color='red' /></Link>
                    </nav>
                </section>
            </article>
        </>
    )
}