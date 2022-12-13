import { Container, Icons } from "./style";

import facebook from './assets/facebook.svg';
import instagram from './assets/instagram.svg';
import twitter from './assets/twitter.svg';

export function Footer() {
    const socialIcons = [
        { img: facebook, alt: "Icone do facebook", href: "https://www.facebook.com/AluraCursosOnline/"},
        { img: instagram, alt: "Icone do instagram", href: "https://www.instagram.com/aluraonline/?hl=en"},
        { img: twitter, alt: "Icone do twitter", href: "https://twitter.com/aluraonline?lang=en"},
    ]

    return (
        <Container>
            <Icons>
                {
                    socialIcons.map((icon, index) => (
                        <a  
                            key={index}
                            href={icon.href}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={icon.img} alt={icon.alt} />
                        </a>
                    ))
                }
            </Icons>
            <p>Desenvolvido por Mateus</p>
        </Container>
    )
}