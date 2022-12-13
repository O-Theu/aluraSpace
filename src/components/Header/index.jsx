import logo from './assets/logo.png';
import lupa from './assets/search.png';
import { Container, Search, Input } from './style';

export function Header() {
    return (
        <Container>
            <img src={logo} alt="Logo do Alura Space"/>
            <Search>
                <Input type="text" placeholder="O que você procura?"/>
                <img src={lupa} alt="Ícone de lupa"/>
            </Search>
        </Container>
    )
}