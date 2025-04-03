import styles from "../styles/Card.module.css";

export default function BookCard({ title, bookAuthor, bookAvaliacao, bookGenero, bookPrice, bookFav, bookImage }) {
    return (
        <div className={styles.bookList}>
            <div className={styles.bookCard}>
                <div className={styles.bookCover}>
                    <img src={bookImage} alt={title} />
                </div>
                <div className={styles.bookInfo}>
                    <h3 className={styles.bookTitlee} style={styles.title}>{title}</h3>
                    <p className={styles.bookAuthorr} style={styles.bookAuthor}>{bookAuthor}</p>
                    <p className={styles.bookAvaliacaoo} style={styles.bookAvaliacao}>{bookAvaliacao}</p>
                    <p className={styles.bookGeneroo} style={styles.bookGenero}>{bookGenero}</p>
                    <p className={styles.bookPricee} style={styles.bookPrice}>{bookPrice}</p>
                    <p className={styles.bookFav} style={styles.bookFav}>{bookFav}</p>
                </div>
            </div>
        </div>
    );
}
