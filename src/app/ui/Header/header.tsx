'use client'

import styles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Dispatch, SetStateAction } from "react";

interface HeaderProps {
    setMenuOpen: Dispatch<SetStateAction<boolean>>;
}
export default function Header({ setMenuOpen }: HeaderProps) {

    const nameUrl = usePathname()

    return (
        <>
            <div className={styles.header_container}>
                <header className={styles.header_container2}>
                    <div className={styles.containerLogo}>
                        <div>
                            <Image src="/Banderasss.png" alt="" width={300} height={300} />
                        </div>
                    </div>
                    <nav className={styles.navbarHamburguesa}>
                        <button onClick={() => setMenuOpen(prev => !prev)}><Menu size={32} /></button>

                    </nav>
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
        </>
    );
}