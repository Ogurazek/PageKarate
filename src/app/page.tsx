
import styles from './home.module.css';
import Image from 'next/image';
import MiniCards from './ui/MiniCards/miniCards';
import CardTorneo from './ui/Card/cardTorneo';
import Link from 'next/link';
import Card from './ui/Card/Card';
import { Fade } from "react-awesome-reveal";



export default function Home() {

  return (
    <>
      <title>Karate Do / Inicio</title>
      <article className={styles.containerHome}>
        <div className={styles.containerTextImage}>
          <section className={styles.containerTextHome}>
            <div>
              <h1> Karate Do para la Mente, Cuerpo y Espíritu </h1>
            </div>
            <div>
              <p>Somos una escuela de Karate Do Tradicional Kyudokan Shorin Ryu y Kobudo Ryukonkai, con sede en Chaco, Argentina. Nos especializamos en defensa personal (combate de manos vacías) y competencias deportivas, tanto individuales como en equipo, en niveles provinciales, nacionales e internacionales</p>
            </div>
            <section className={styles.containerJoinToUs}>
              <span>¿Qué estas esperando para unirte?</span>
              <Link href="/Inscripciones"><button>Unirme ahora</button></Link>
            </section>
          </section>
          <div className={styles.containerImgLogoHome}>
            <div>
              <Image src="/LogoDojohd2.png" alt="Logo Okinawa" width={400} height={300} style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </article>
      <article className={styles.containerHome2}>
        <div className={styles.containerMini}>
          <section className={styles.containerMiniCards}>
            <p>Ofrecemos Clases Para</p>
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
                  <Fade direction="left" triggerOnce>
                    <Image src="/fotoportada.webp" alt="prueba" width={400} height={400} />
                  </Fade>
                </div>
                <div className={styles.contenedorTexto}>
                  <p>Cada fin de año, nuestros alumnos rinden examen en nuestra Sede Central en Corrientes (Capital), el Dojo Shibana, para demostrar lo aprendido a lo largo del año. La evaluación está a cargo del Director Técnico de la Región Norte, Sensei Moratto Hugo Mariano, 8° Dan Kyoshi.       <a href="/Nosotros">Ver más</a>
                  </p>
                </div>
              </div>
            </div>
            <Fade direction="right" triggerOnce>
              <div className={styles.containerSecondText}>
                <div className={styles.recuadroTexto}>
                  <span>🏆 Okinawa Shorin Ryu Kyudokan</span>
                  <strong>空手道少林流弓道館</strong>
                  <p>El Shorin Ryu es uno de los primeros estilos de Karate que surgieron en Okinawa, fundado por Choshin Chibana (1885-1969). Su nombre significa "Estilo del Bosque Pequeño" y es una adaptación de las enseñanzas del antiguo Shuri-Te, el arte marcial practicado en la capital de Okinawa, Shuri.</p>
                  <p>El Kyudokan es una de las principales ramas del Shorin Ryu, fundada por Yuchoku Higa (1910-1994), un discípulo directo de Choshin Chibana. Su objetivo era preservar las técnicas tradicionales del Karate de Okinawa con un énfasis en la fluidez, la precisión y el control corporal.
                    El nombre "Kyudokan" significa "Casa de la Investigación", reflejando el compromiso de Higa con el estudio profundo del Karate. En este estilo, se pone especial atención en la postura, la respiración y la aplicación práctica de las técnicas en combate real.
                  </p>
                  <Link href="/Nosotros">Ver más</Link>
                </div>
              </div>
            </Fade>
          </section>
        </div>
      </article>
      <article className={styles.containerHome3}>
        <div className={styles.containerSubTitle}>
          <Fade direction="right" triggerOnce>
            <span>El Karate es la disciplina que forja carácter, control y determinación</span>
          </Fade>
        </div>
        <section className={styles.containerBoxCards}>
          <CardTorneo url='/Torneos' infobutton='Ver más' />
        </section>
      </article>
      <article className={styles.containerHome4}>

        <div className={styles.containerCardS4}>
          <Fade direction="left" triggerOnce>
            <Card title='Inscripciones' description='Beneficios, Días y horarios, Ubicación, Whatsapp' link='/Inscripciones' img='/FotoCardPage.jpg' />
            <Card title='Nosotros' description='Somos una escuela de Barranqueras, Chaco, fundada en el año 2019. Comenzamos impartiendo clases en distintos espacios, como clubes...' link='/Nosotros' img='/Dojo.webp' />
            <Card title='Torneos' description='Los desafios que vienen, y torneos en donde hicimos historia' link='Torneos' img='/fotoportada2.png' />
          </Fade>
        </div>
      </article>
    </>
  );
}

