import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <h1>BookVerse</h1>
                <p>Onde histórias ganham vida</p>
            </div>

            <div>
                <a className={styles.on} href="">Início</a>
                <a href="">Livros</a>
                <a href="">Categorias</a>
                <a href="">Autores</a>
                <a href="">Ofertas</a>
            </div>

            <div>
                <input type="text" placeholder="Pesquisar" />
                <button>Pesquisar</button>
            </div>

            <div>
                <a href=""> <img src="" alt="" /> </a>
                <a href=""> <img src="" alt="" /> </a>
                <a href=""> <img src="" alt="" /> </a>
            </div>
        </header>
    );
}