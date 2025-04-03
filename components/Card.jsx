import styles from "../styles/Card.module.css";

export default function BookCard({ title, bookAuthor, bookAvaliacao, bookGenero, bookPrice }) {
    return (
        <div className={styles.bookList}>
            <div className={styles.bookCard}>
                <div className={styles.bookCover}>
                    <img src="https://m.media-amazon.com/images/I/81w-GCfqtjL.jpg" alt="Eu e Esse Meu Coração Livro por C. C. Hunter" />
                </div>
                <div className={styles.bookInfo}>
                    <h3 className={styles.bookTitlee} style={styles.title}>{title}</h3>
                    <p className={styles.bookAuthorr} style={styles.bookAuthor}>{bookAuthor}</p>
                    <p className={styles.bookAvaliacaoo} style={styles.bookAvaliacao}>{bookAvaliacao}</p>
                    <p className={styles.bookGeneroo} style={styles.bookGenero}>{bookGenero}</p>
                    <p className={styles.bookPricee} style={styles.bookPrice}>{bookPrice}</p>
                </div>
            </div>
        </div>
    );
}
