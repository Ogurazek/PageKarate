'use client'

import styles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';


export default function Header() {
    const nameUrl = usePathname() // Me devuelve la URL
    return (
        <div className={styles.header_container}>
            <header className={styles.header_container2}>
                <div className={styles.containerLogo}>
                    <div>
                        <Image src="/Banderasss.png" alt="" width={300} height={300} />
                    </div>
                </div>
                <nav className={styles.navbar}>
                    <div className={nameUrl === '/' ? styles.active : styles.colorHover}>
                        <Link href="/">Inicio</Link>
                    </div>
                    <div className={nameUrl === '/Inscripciones' ? styles.active : styles.colorHover}>
                        <Link href="/Inscripciones" className={nameUrl === '/Inscripciones' ? styles.active : styles.colorHover}>Inscripciones</Link>
                    </div>
                    <div className={nameUrl === '/Nosotros' ? styles.active : styles.colorHover}>
                        <Link href="/Nosotros" className={nameUrl === '/Nosotros' ? styles.active : styles.colorHover}>Nosotros</Link>
                    </div>
                    <div className={nameUrl === '/Torneos' ? styles.active : styles.colorHover}>
                        <Link href="/Torneos" className={nameUrl === '/Torneos' ? styles.active : styles.colorHover}>Torneos</Link>
                    </div>
                </nav>
            </header>
        </div>
    );
}