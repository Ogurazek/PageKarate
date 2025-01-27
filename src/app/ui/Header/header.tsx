'use client'

import styles from './header.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function Header() {
    const nameUrl = usePathname() // Me devuelve la URL
    console.log(nameUrl)


    return (
        <div className={styles.header_container}>
            <header className={styles.header_container2}>
                <div className={styles.containerLogo}>
                    <div>
                        <img src="/Banderas.png" alt="" />
                    </div>
                </div>
                <nav className={styles.navbar}>
                    <div className={nameUrl === '/' ? styles.active : ""}>
                        <Link href="/">Inicio</Link>
                    </div>
                    <Link href="" className={nameUrl === '/Inscripciones' ? styles.active : ""}>Inscripciones</Link>
                    <Link href="/Nosotros" className={nameUrl === '/Nosotros' ? styles.active : ""}>Nosotros</Link>
                    <Link href="" className={nameUrl === '/Torneos' ? styles.active : ""}>Torneos</Link>
                </nav>
            </header>
        </div>
    );
}