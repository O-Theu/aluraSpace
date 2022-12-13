import { Lista, NavBar, Item} from './style';

import options from './icons.json';

export function Menu() {
    return (
        <NavBar>
            <Lista>
                {options.map(option => (
                    <Item key={option.id}>
                        <img src={option.path} alt={option.alt} />
                        <a>{option.link}</a>
                    </Item>
                ))}
            </Lista>
        </NavBar>
    )
}