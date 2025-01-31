import styles from './CardInscripcion.module.css'

type CardInscripcionProps = {
    description: string;
    img: string;
}

export default function CardInscripcion({ description, img }: CardInscripcionProps) {
    return (
        <>
            <article className={styles.container} style={{ backgroundImage: `url(${img})` }} >
                <section className={styles.containerDescription}>
                    <p className={styles.description}>{description}</p>
                </section>
            </article>
        </>
    )
}