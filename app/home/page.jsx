import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Title from "../../components/Title";

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
        </>
    );
}