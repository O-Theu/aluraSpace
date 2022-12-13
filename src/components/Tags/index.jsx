import { Container, Item, Lista } from "./style";
import pictures from '../Gallery/pictures.json';

export function Tags({ tags, filtraFotos, setItens}) {
    return (
        <Container>
            <p>Filtre por tags:</p>
            <Lista>
                {tags.map((tag, index) => (
                    <Item key={index} onClick={() => filtraFotos(tag)}>{tag}</Item>
                ))}
                <Item onClick={()=> setItens(pictures)}>Todas</Item>
            </Lista>
        </Container>
    )
}