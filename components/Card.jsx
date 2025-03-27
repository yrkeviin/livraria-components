import styles from "../styles/Card.module.css";


export default function BookCard({ Texto }) {
    return (
        <div className={styles.bookList}>
            <div className={styles.bookCard}>
                <div className={styles.bookCover}>
                    <img src="https://m.media-amazon.com/images/I/81w-GCfqtjL.jpg" alt="Eu e Esse Meu Coração Livro por C. C. Hunter" />
                </div>
                <div className={styles.bookInfo}>
                    <h3 className={styles.bookTitle}>{Texto}</h3>
                    <p className={styles.bookAuthor}>{Texto}</p>
                    <p className={styles.bookAvaliacao}>{Texto}</p>
                    <p className={styles.bookGenero}>{Texto}</p>
                    <p className={styles.bookPrice}>{Texto}</p>
                </div>
            </div>
        </div>
    );
}
