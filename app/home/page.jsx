import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Title from "../../components/Title";
import Card from "../../components/Card";
import CardCategoria from "../../components/CardCategoria";
import Lancamento from "../../components/Lancamento";
import Footer from "../../components/Footer";

import "./home.css"

export default function Page() {
    return (
        <>
            <Header />
            <Banner />
            <Title 
                text="Destaques da semana"
                all="Ver todos"
            />
            <div className="cards">
            <Card 
                        bookImage="/livro01.png"
                        title="Eu e Esse Meu Coração" 
                        bookAuthor="por C. C. Hunter" 
                        bookAvaliacao="⭐⭐⭐⭐  (4)" 
                        bookGenero="Romance" 
                        bookPrice="R$ 29,90" 
                        fav=" 💖  🛒"
                    />
            <Card 
                        bookImage="/livro02.png"
                        title="A Culpa é das Estrelas" 
                        bookAuthor="por John Green" 
                        bookAvaliacao="⭐⭐⭐⭐⭐  (4.8)" 
                        bookGenero="Romance" 
                        bookPrice="R$ 34,90"
                        fav=" 💖  🛒" 
                    />
            <Card 
                        bookImage="/livro03.png"
                        title="O lado feio do amor " 
                        bookAuthor="por Colleen Hoover" 
                        bookAvaliacao="⭐⭐⭐⭐  (4.7)"
                        bookGenero="Romance"  
                        bookPrice="R$ 39,90" 
                        fav=" 💖  🛒"
                    />
            <Card 
                        bookImage="/livro04.png"
                        title="O Pequeno Príncipe" 
                        bookAuthor="por Antoine de Saint-Exupéry" 
                        bookAvaliacao="⭐⭐⭐⭐⭐  (4.9)" 
                        bookGenero="Infantil" 
                        bookPrice="R$ 19,90"
                    />
                    </div>

            <Title
                text="Categorias"
                all="Ver todas"
            />



            <section className="categorias">
                <CardCategoria 
                    emoji="🚀"
                    categoria="Ficção científica"
                />

                <CardCategoria 
                    emoji="💘"
                    categoria="Romance"
                />

                <CardCategoria 
                    emoji="👤"
                    categoria="Biografia"
                />

                <CardCategoria 
                    emoji="💻"
                    categoria="Tecnologia"
                />

                <CardCategoria 
                    emoji="🔮"
                    categoria="Fantasia"
                />

                <CardCategoria 
                    emoji="📜"
                    categoria="História"
                />

                <CardCategoria 
                    emoji="🌱"
                    categoria="Autoajuda"
                />
            </section>

            <Title 
                text="Lançamentos"
                all="Ver todos"
            />   

            <Lancamento />

            <Footer />
        </>
    );
}