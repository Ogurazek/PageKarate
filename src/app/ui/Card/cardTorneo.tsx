import styles from './cardTorneo.module.css'
import Link from 'next/link'



export default function CardTorneo({ url, infobutton }: { url: string, infobutton: string }) {
    return (
        <>
            <article className={styles.container}>
                <header className={styles.containerTitle}>
                    <span>Próximos Torneos</span>
                </header>
                <section className={styles.containerMain}>
                    <div className={styles.containerLeft}>
                        <strong>2025 Torneos Anuales</strong>
                        <p>Torneo Nacional | Torneo Internacional | Torneo en Goya | </p>
                    </div>
                    <div className={styles.containerRight}>
                        <div className={styles.containerDateTorneo}>
                            <span>12</span>
                            <p>Sept, Sábado</p>
                        </div>
                        <div className={styles.containerbuttonTorneo}>
                            <Link href={url}>
                                <div className={styles.buttonTorneo}>{infobutton}</div>
                            </Link>
                        </div>
                    </div>
                </section>
            </article>
        </>
    )
}