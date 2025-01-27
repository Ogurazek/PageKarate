import styles from './miniCards.module.css'


export default function MiniCards({ title }: { title: string }) {
    return (
        <>
            <div className={styles.containerMC}>
                <span>{title}</span>
            </div>
        </>
    )
}