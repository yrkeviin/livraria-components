import styles from "../styles/Banner.module.css";

export default function Banner() {
    return (
        <section>
            <h1 className={styles.title} >Descubra mundos extraordinários!</h1>

            <p className={styles.descricao}>Promoção de lançamento com até 30% de desconto!</p>

            <button className={styles.botao}>Ver ofertas</button>
        </section>
    );
}