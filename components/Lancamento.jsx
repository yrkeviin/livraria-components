import styles from "../styles/Lancamento.module.css";

export default function Lancamento() {
    return (
        <div className={styles.footer}>
            <h1>Fique por dentro das novidades!</h1>
            <p>Assine nossa newsletter e receba atualizações sobre novos lançamentos,promoções exclusivas e dicas de leitura.</p>

            <div className={styles.button}>
                <input type="text" placeholder="Seu melhor e-mail!" />
                <button>Assinar</button>
            </div>
        </div>
    );
}