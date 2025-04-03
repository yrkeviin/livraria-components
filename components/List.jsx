import styles from "../styles/List.module.css";

export default function List({title, op1, op2, op3, op4}) {
    return (
        <div className={styles.list}>
            <h1 style={styles.title}>{title}</h1>

            <li className={styles.listItem}>
                <ul style={styles.op1}> {op1}</ul>
                <ul style={styles.op2}> {op2}</ul>
                <ul style={styles.op3}> {op3}</ul>
                <ul style={styles.op4}> {op4}</ul>
            </li>
        </div>
    );
}