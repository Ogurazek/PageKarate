import styles from './cardTorneo.module.css'
import Link from 'next/link'



export default function CardTorneo() {
    return (
        <>
            <article className={styles.container}>
                <header className={styles.containerTitle}>
                    <span>Próximos Torneos</span>
                </header>
                <section className={styles.containerMain}>
                    <div className={styles.containerLeft}>
                        <strong>2025 Torneos Anuales</strong>
                        <p>holaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholahola</p>
                    </div>
                    <div className={styles.containerRight}>
                        <div className={styles.containerDateTorneo}>
                            <span>12</span>
                            <p>Sept, Sábado</p>
                        </div>
                        <div className={styles.containerbuttonTorneo}>
                            <Link href="/Torneos">
                                <div className={styles.buttonTorneo}>View Detail</div>
                            </Link>
                        </div>
                    </div>
                </section>
            </article>
        </>
    )
}