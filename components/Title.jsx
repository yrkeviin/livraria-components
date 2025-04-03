import styles from "../styles/Title.module.css";

export default function Title({text, all}) {
    return (
        <div className={styles.container_title}>
            <h1 style={styles.text}>{text}</h1>
            <p style={styles.all}>{all}</p>
        </div>
    );
}