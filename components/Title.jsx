import styles from "../styles/Title.module.css";

export default function Title() {
    return (
        <div className={styles.container_title}>
            <h1>Destaques da semana</h1>
            <p>Ver todos</p>
        </div>
    );
}