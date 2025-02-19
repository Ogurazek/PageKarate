"use client";
import styles from './menuOverlay.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fade } from 'react-awesome-reveal';
export default function MenuOverlay({ setMenuOpen }: { setMenuOpen: any }) {

    const pathname = usePathname();

    return (
        <>

            <article className={styles.containerOv} >
                <ul>
                    <Fade direction='left' triggerOnce>
                        <Link className={pathname === "/" ? styles.active : ""} href={"/"}><li onClick={() => setMenuOpen(false)}>Inicio</li></Link>
                        <Link className={pathname === "/Inscripciones" ? styles.active : ""} href={"/Inscripciones"}><li onClick={() => setMenuOpen(false)}>Inscripciones</li></Link>
                    </Fade>
                    <Fade direction='right' triggerOnce>
                        <Link className={pathname === "/Nosotros" ? styles.active : ""} href={"/Nosotros"}><li onClick={() => setMenuOpen(false)}>Nosotros</li></Link>
                        <Link className={pathname === "/Torneos" ? styles.active : ""} href={"/Torneos"}><li onClick={() => setMenuOpen(false)}>Torneos</li></Link>
                    </Fade>
                </ul>
                <div className="overlay-background" onClick={() => setMenuOpen(false)}></div>
            </article>

        </>
    );
}