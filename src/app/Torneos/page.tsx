
import styles from './Torneos.module.css';
import CardTorneo from '../ui/Card/cardTorneo';
import CardCollage from './CardCollage/CardCollage';
import { Fade } from "react-awesome-reveal";

export default function TorneosPage() {

    return (
        <>
            <article className={styles.container}>
                <section className={styles.containerMain}>
                    <Fade direction='left' triggerOnce>
                        <div className={styles.containerh1}>
                            <h1>これから起こる挑戦と、私たちが歴史を作ったトーナメント。</h1>
                            <span>LOS DESAFíOS QUE VIENEN Y LOS TORNEOS DONDE HICIMOS HISTORIA</span>
                        </div>
                    </Fade>
                </section>
                <Fade direction='right' triggerOnce>
                    <p className={styles.torneoTitle}>
                        1 つのドアが閉まると、さらに 7 つのドアが開きます</p>
                </Fade>
                <span>Cuando una puerta se cierra, siete más se abren</span>
                <div className={styles.containerCardTorneo}  >
                    <CardTorneo url='#' infobutton='Próximamente' />
                </div>
                <p className={styles.torneoTitle}>Campeonatos Ganados 🏆</p>
                <section className={styles.containerCollage}>
                    <div className={styles.containerCollageItem}>
                        <Fade direction='left' triggerOnce>
                            <CardCollage urlImage='/collage1.webp' />
                            <CardCollage urlImage='/collage2.webp' />
                            <CardCollage urlImage='/collage3.webp' />
                            <CardCollage urlImage='/collage4.webp' />
                            <CardCollage urlImage='/collage5.webp' />
                            <CardCollage urlImage='/collage6.webp' />
                            <CardCollage urlImage='/collage7.webp' />
                            <CardCollage urlImage='/collage8.webp' />
                            <CardCollage urlImage='/collage9.webp' />
                            <CardCollage urlImage='/collage11.webp' />
                            <CardCollage urlImage='/collage12.webp' />
                            <CardCollage urlImage='/collage13.webp' />
                            <CardCollage urlImage='/collage14.webp' />
                            <CardCollage urlImage='/collage15.webp' />
                            <CardCollage urlImage='/collage16.webp' />
                        </Fade>
                    </div>
                </section>
            </article>
        </>
    )
}


