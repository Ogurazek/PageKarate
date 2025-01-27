import styles from './home.module.css';
import Image from 'next/image';
import MiniCards from './ui/MiniCards/miniCards';


export default function Home() {
  return (
    <>
      <article className={styles.containerHome}>
        <section className={styles.containerTextHome}>
          <div>
            <h1> Karate para la Mente, Cuerpo y Espíritu </h1>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel officia non doloremque eaque quia, inventore ea, accusantium, aspernatur asperiores recusandae pariatur reprehenderit soluta velit ipsam accusamus debitis qui consequatur.</p>
          </div>
          <section className={styles.containerJoinToUs}>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
            <button> Unirme ahora</button>
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
          <p>hola</p>
        </section>

      </article>
    </>
  );
}
