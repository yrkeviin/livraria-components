import Header from "../../components/Header";
import Banner from "../../components/Banner";
import "./home.css"

export default function Page() {
    return (
        <>
            <Header />
            <Banner />
            <div className="container-title">
                <h1>Destaques da semana</h1>
                <p>Ver todos</p>
            </div>
        </>
    );
}