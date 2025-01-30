'use client'

import styles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';


export default function Header() {
    const nameUrl = usePathname() // Me devuelve la URL
    console.log(nameUrl)


    return (
        <div className={styles.header_container}>
            <header className={styles.header_container2}>
                <div className={styles.containerLogo}>
                    <div>
                        <Image src="/Banderas.png" alt="" width={300} height={300} />
                    </div>
                </div>
                <nav className={styles.navbar}>
                    <div className={nameUrl === '/' ? styles.active : ""}>
                        <Link href="/">Inicio</Link>
                    </div>
                    <div className={nameUrl === '/Inscripciones' ? styles.active : ""}>
                        <Link href="/Inscripciones" className={nameUrl === '/Inscripciones' ? styles.active : ""}>Inscripciones</Link>
                    </div>
                    <div className={nameUrl === '/Nosotros' ? styles.active : ""}>
                        <Link href="/Nosotros" className={nameUrl === '/Nosotros' ? styles.active : ""}>Nosotros</Link>
                    </div>
                    <div className={nameUrl === '/Torneos' ? styles.active : ""}>
                        <Link href="" className={nameUrl === '/Torneos' ? styles.active : ""}>Torneos</Link>
                    </div>
                </nav>
            </header>
        </div>
    );
}