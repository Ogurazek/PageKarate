import Link from 'next/link'
import styles from './card.module.css'
import Image from 'next/image'

type CardProps = {
    title: string;
    description: string;
    link: string;
    img: string;
}

export default function Card({ title, description, link, img }: CardProps) {
    return (
        <>
            <article className={styles.containerS4}>
                <div className={styles.containerIMGS4}>
                    <Image src={img} alt="" width={400} height={400} />
                </div>
                <section className={styles.containerInfoS4}>
                    <strong>{title}</strong>
                    <p>{description}</p>
                    <Link className={styles.aS4} href={link}>Ver más</Link>
                </section>
            </article>
        </>)


}