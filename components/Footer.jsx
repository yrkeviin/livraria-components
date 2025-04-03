import styles from "../styles/Footer.module.css";
import List from "./List";

export default function Footer() {
    return (
            <section className={styles.footer}>
                <div className={styles.sobre}>
                    <h1>📚 Livraria Luz</h1>

                    <p>Vem pra luz, onde as histórias ganham vida!</p>

                    <p>A Livraria Luz é uma livraria online que conecta leitores ávidos com os melhores e mais diversos livros do mercado.</p>
                </div>

                <div className={styles.list}>
                    <List 
                        title="Links rápidos"
                        op1="Home"
                        op2="Catálogos"
                        op3="Ofertas"
                        op4="Sobre nós"
                    />
                    <List 
                        title="Categorias"
                        op1="Ficção Científica"
                        op2="Romance"
                        op3="Tecnologia"
                        op4="Fantasia"
                    />
                    <List
                        title="Redes"
                        op1="📸 Instagram"
                        op2="🎵 TikTok"
                        op3="🐦 Twitter"
                        op4="🎞 YouTube"
                    />
                </div>
            </section>
    );
}