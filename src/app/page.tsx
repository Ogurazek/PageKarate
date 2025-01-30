import styles from './home.module.css';
import Image from 'next/image';
import MiniCards from './ui/MiniCards/miniCards';
import CardTorneo from './ui/Card/cardTorneo';
import Link from 'next/link';
import Card from './ui/Card/Card';



export default function Home() {


  return (
    <>
      <title>Karate Do / Inicio</title>
      <article className={styles.containerHome}>
        <section className={styles.containerTextHome}>
          <div>
            <h1> Karate Do para la Mente, Cuerpo y Espíritu </h1>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel officia non doloremque eaque quia, inventore ea, accusantium, aspernatur asperiores recusandae pariatur reprehenderit soluta velit ipsam accusamus debitis qui consequatur.</p>
          </div>
          <section className={styles.containerJoinToUs}>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
            <button><Link href="/Inscripciones">Unirme ahora</Link></button>
          </section>
        </section>
        <div className={styles.containerImgLogoHome}>
          <div>
            <Image src="/LogoDojohd2.png" alt="Logo Okinawa" width={400} height={400} />
          </div>
        </div>
      </article>
      <article className={styles.containerHome2}>
        <section className={styles.containerMiniCards}>
          <p>Damos clases a: </p>
          <div className={styles.containerMiniCards2}>
            <MiniCards title='Niños' />
            <MiniCards title='Adolescentes' />
            <MiniCards title='Adultos' />
            <MiniCards title='Familias' />
          </div>
        </section>
        <section className={styles.containerCard}>
          <div className={styles.containerSecondImg}>
            <div className={styles.recuadroImg}>
              <div className={styles.contenedorImg}>
                <Image src="/Img Prueba.jpg" alt="prueba" width={400} height={400} />
              </div>
              <div className={styles.contenedorTexto}>
                <p>elit. Corrupti libero nesciunt illum cupiditate, voluptates at totam, hic officiis nam accusantium aspernatur
                  voluptatibus mollitia quas cumque architecto necessitatibus id alias odio.voluptatibus mollitia quas cumque architecto necessitatibus id alias odio. <a href="">Ver más</a>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.containerSecondText}>
            <div className={styles.recuadroTexto}>
              <span>🏆 Okinawa Shorin Ryu Kyudokan</span>
              <strong>Okinawa Shorin Ryu Kyudokan</strong>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit atque tempora, minus omnis harum consequatur vero, totam quibusdam saepe porro possimus, nam cumque minima
                repudiandae molestiae explicabo reiciendis qui ad!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, velit nulla. Reprehenderit placeat temporibus atque id illo, magnam odio nobis beatae assumenda esse excepturi corporis necessitatibus qui. Impedit, assumenda tempore.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, velit nulla. Reprehenderit placeat temporibus atque id illo, magnam odio nobis beatae assumenda esse excepturi corporis necessitatibus qui. Impedit, assumenda tempore.
              </p>
              <Link href="/Nosotros">Ver más</Link>
            </div>
          </div>
        </section>
      </article>
      <article className={styles.containerHome3}>
        <div className={styles.containerSubTitle}>
          <span>El Karate es la disciplina que forja carácter, control y determinación</span>
        </div>
        <section className={styles.containerBoxCards}>
          <CardTorneo />
        </section>
      </article>
      <article className={styles.containerHome4}>
        <div className={styles.containerCardS4}>
          <Card title='Titulo que no sé' description='i dont know' link='' img='/Img Prueba.jpg' />
          <Card title='Titulo que no sé' description='i dont know' link='' img='/Img Prueba.jpg' />
          <Card title='Titulo que no sé' description='i dont know' link='' img='/Img Prueba.jpg' />
        </div>
      </article>
    </>
  );
}
