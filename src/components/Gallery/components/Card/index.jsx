import open from './assets/open.png';
import favorite from './assets/favorito.png';
import { Container, Description, Imagem, Title } from './style';

export function Card({ item }) {
    return (
        <Container>
            <Imagem
                src={item.imagem}
                alt={item.titulo}
            />
            <Title>{item.titulo}</Title>
            <Description>
                <p>{item.creditos}</p>
                <span>
                    <img src={open} alt="ícone coração de curtir" />
                    <img src={favorite} alt="ícone de abrir modal" />
                </span>
            </Description>
        </Container>
    )
}