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