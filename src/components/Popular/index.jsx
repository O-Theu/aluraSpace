import picturesPopular from './pictures-popular.json';
import { Button, Container, Imagens } from './style';

export function Popular() {
    return(
        <Container>
            <h2>Populares</h2>
            <Imagens>
                {picturesPopular.map(picture => {
                    return(
                       <li key={picture.id}>
                            <img src={picture.path} alt={picture.alt} />
                       </li> 
                    )
                })}
            </Imagens>
            <Button>Ver mais fotos</Button>
        </Container>
    )
}