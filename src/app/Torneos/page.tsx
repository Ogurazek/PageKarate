
import styles from './Torneos.module.css';
import CardTorneo from '../ui/Card/cardTorneo';
import CardCollage from './CardCollage/CardCollage';
import { Fade } from "react-awesome-reveal";

export default function TorneosPage() {

    return (
        <>
            <article className={styles.container}>
                <section className={styles.containerMain}>
                    <h1>Hola</h1>
                </section>
                <Fade direction='left' triggerOnce>
                    <p className={styles.torneoTitle}>知らないフレーズ</p>
                </Fade>
                <span>Si no abris una puerta, abris 2</span>
                <div className={styles.containerCardTorneo}  >
                    <CardTorneo url='#' infobutton='no sé' />
                </div>
                <p className={styles.torneoTitle}>Rompimos algunos trastes 🏆</p>
                <section className={styles.containerCollage}>
                    <div className={styles.containerCollageItem}>
                        <Fade direction='left' triggerOnce>
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
                        </Fade>
                    </div>
                </section>
            </article>
        </>
    )
}


