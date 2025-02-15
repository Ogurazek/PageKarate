
import styles from './CardNosotros.module.css'
import Image from 'next/image'


type CardProps = {
    title: string;
    description: string;
    img: string;
}

export default function CardNosotros({ title, description, img }: CardProps) {
    return (
        <>
            <article className={styles.containerS4}>
                <div className={styles.containerIMGS4}>
                    <Image src={img} alt="" width={400} height={400} />
                </div>
                <section className={styles.containerInfoS4}>
                    <strong>{title}</strong>
                    <p>{description}</p>
                </section>
            </article>
        </>)


}