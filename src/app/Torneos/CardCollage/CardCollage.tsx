import styles from "./CardCollage.module.css"
import Image from "next/image"

export default function CardCollage({ urlImage }: { urlImage: string }) {
    return (
        <article className={styles.container}>
            <Image src={urlImage} alt="Imagen Torneo" width={600} height={600} ></Image>
        </article>
    )
}      