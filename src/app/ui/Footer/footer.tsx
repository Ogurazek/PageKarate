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
                        <Image className={styles.image} src='/Banderasss.png' alt='' width={800} height={800} />
                    </div>
                    <div className={styles.lineFooter}></div>
                    <nav className={styles.containerTexto}>
                        <Link href='/'>Inicio</Link>
                        <Link href='/Inscripciones'>Inscripciones</Link>
                        <Link href='/Nosotros'>Nosotros</Link>
                        <Link href='/Torneos'>Torneos</Link>
                    </nav>
                    <nav className={styles.containerTexto}>
                        <Link href='https://www.facebook.com/karate.nunez' target='_blank'><Facebook color='#4498e0' /></Link>
                        <Link href='/'><Instagram color='#4498e0' /></Link>
                        <Link href='/'><Twitter color='#4498e0' /></Link>
                        <Link href='/'><Phone color='#4498e0' /></Link>
                    </nav>
                </section>
            </article>
        </>
    )
}