import { Footer } from "../../components/Footer";
import { Gallery } from "../../components/Gallery";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Popular } from "../../components/Popular";

import banner from './assets/banner.png';
import { Banner, ContainerGallery, Main, Principal } from "./style";

export function Home() {
    return (
        <>
            <Header />
            <Main>
                <Principal>
                    <Menu />
                    <Banner>
                        <h1>A galeria mais completa do espaço</h1>
                        <img src={banner} alt="A imagem da terra vista do espaço"/>
                    </Banner>
                </Principal>
                <ContainerGallery>
                    <Gallery />
                    <Popular />
                </ContainerGallery>
            </Main>
            <Footer />
        </>
    )
}