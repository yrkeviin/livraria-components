import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Title from "../../components/Title";
import CardCategoria from "../../components/CardCategoria";

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

            <Card 
                        imgSrc="/livro01.png"
                        title="Eu e Esse Meu Coração" 
                        author="por C. C. Hunter" 
                        avaliacao="⭐⭐⭐⭐  (4)" 
                        genre="Romance" 
                        price="R$ 29,90" 
                        fav=" 💖  🛒"
                    />
            <Card 
                        imgSrc="/livro02.png"
                        title="A Culpa é das Estrelas" 
                        author="por John Green" 
                        avaliacao="⭐⭐⭐⭐⭐  (4.8)" 
                        genre="Romance" 
                        price="R$ 34,90"
                        fav=" 💖  🛒" 
                    />
            <Card 
                        imgSrc="/livro03.png"
                        title="O lado feio do amor " 
                        author="por Colleen Hoover" 
                        avaliacao="⭐⭐⭐⭐  (4.7)"
                        genre="Romance"  
                        price="R$ 39,90" 
                         fav=" 💖  🛒"
                    />
            <Card 
                        imgSrc="/livro04.png"
                        title="O Pequeno Príncipe" 
                        author="por Antoine de Saint-Exupéry" 
                        avaliacao="⭐⭐⭐⭐⭐  (4.9)" 
                        genre="Infantil" 
                        price="R$ 19,90"
                        fav=" 💖  🛒" 
                    />

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
        </>
    );
}