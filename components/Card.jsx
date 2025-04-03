import styles from "../styles/Card.module.css";

export default function BookCard({ title, bookAuthor, bookAvaliacao, bookGenero, bookPrice, bookFav, bookImage }) {
    return (
        <div className={styles.bookList}>
            <div className={styles.bookCard}>
                <div className={styles.bookCover}>
                    <img src={bookImage} alt={title} />
                </div>
                <div className={styles.bookInfo}>
                    <h3 className={styles.bookTitlee}>{title}</h3>
                    <p className={styles.bookAuthorr}>{bookAuthor}</p>
                    <p className={styles.bookAvaliacaoo}>{bookAvaliacao}</p>
                    <p className={styles.bookGeneroo}>{bookGenero}</p>
                    <div className={styles.bookPriceFav}>
                        <p className={styles.bookPricee}>{bookPrice}</p>
                        <p className={styles.bookFav}>{bookFav}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
