import styles from './Torneos.module.css';
import CardTorneo from '../ui/Card/cardTorneo';
import CardCollage from './CardCollage/CardCollage';

export default function TorneosPage() {
    return (
        <>
            <article className={styles.container}>
                <section className={styles.containerMain}>
                    <h1>Hola</h1>
                </section>
                <div className={styles.containerCardTorneo}  >
                    <CardTorneo url='#' infobutton='no sé' />
                </div>
                <p className={styles.torneoTitle}>知らないフレーズ</p>
                <span>Si no abris una puerta, abris 2</span>
                <section className={styles.containerCollage}>
                    <div className={styles.containerCollageItem}>
                        <CardCollage urlImage='/ImgPrueba2.jpg' />
                        <CardCollage urlImage='/ImgPrueba4.jpg' />
                        <CardCollage urlImage='/ImgPrueba4.jpg' />
                        <CardCollage urlImage='/ImgPrueba4.jpg' />
                        <CardCollage urlImage='/ImgPrueba4.jpg' />
                        <CardCollage urlImage='/ImgPrueba4.jpg' />
                        <CardCollage urlImage='/ImgPrueba4.jpg' />
                        <CardCollage urlImage='/ImgPrueba4.jpg' />
                        <CardCollage urlImage='/ImgPrueba4.jpg' />
                        <CardCollage urlImage='/ImgPrueba4.jpg' />
                    </div>
                </section>
            </article>
        </>
    )
}