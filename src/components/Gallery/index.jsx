import { Tags } from "../Tags";
import { Container, Lista } from "./style";
import { Card } from './components/Card';

import pictures from './pictures.json';
import { useState } from "react";


export function Gallery() {
    const [itens, setItens] = useState(pictures);
    const tags = [...new Set(pictures.map((picture) => picture.tag))]

    const filtrarFotos = (tag) => {
        const novasFotos = pictures.filter((picture) => {
            return picture.tag === tag;
        })

        setItens(novasFotos);
    }

    return(
        <Container>
            <h2>Navegue pela galeria</h2>
            <Tags 
                tags={tags} 
                filtraFotos={filtrarFotos}
                setItens={setItens}
            />
            <Lista>
                {
                    itens.map((picture) => {
                        return(
                            <Card key={picture.id} item={picture}/>
                        )
                    })
                }
            </Lista>
        </Container>
    )
}