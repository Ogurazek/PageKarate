'use client'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Facebook, Instagram, Phone, Twitter } from 'lucide-react';

export default function Footer() {

    const nameUrl = usePathname() // Me devuelve la URL

    return (
        <>
            <article className={styles.container}>
                <section className={styles.containerSection}>
                    <div className={styles.containerImgFooter}>
                        <Image className={styles.image} src='/Banderasss.png' alt='' width={800} height={800} />
                    </div>
                    <div className={styles.lineFooter}></div>
                    <nav className={styles.containerTexto}>
                        <Link className={nameUrl === '/' ? styles.active : ""} href='/'>Inicio</Link>
                        <Link className={nameUrl === '/Inscripciones' ? styles.active : ""} href='/Inscripciones'>Inscripciones</Link>
                        <Link className={nameUrl === '/Nosotros' ? styles.active : ""} href='/Nosotros'>Nosotros</Link>
                        <Link className={nameUrl === '/Torneos' ? styles.active : ""} href='/Torneos'>Torneos</Link>
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