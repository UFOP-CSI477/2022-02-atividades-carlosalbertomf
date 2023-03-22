//convenção do React é criar todos os componentes iniciando com letra Maiúscula

import './menu.css'

import { Link } from 'react-router-dom';

const Menu = () => { //sintaxe de arrow function



    return ( //encapsular múltiplas tags em uma única div ou em uma tag vazia (<>)
        <>
            <h2>Menu</h2>
            <ul>
                {/* <li><Link to="/">Home</Link></li> */}
                <li><Link to="/estados">Estados</Link></li>
                <li><Link to="/cidades">Cidades</Link></li>
                <li><Link to="/pessoas">Pessoas</Link></li>
                <li><Link to="/tiposanguineo">Tipos Sanguineos</Link></li>
                <li><Link to="/locaisdecoleta">Locais de Coleta</Link></li>
                <li><Link to="/doacoes">Doações</Link></li>

                {/* <li><Link to="/unidades">Unidades</Link></li> */}
            </ul>
        </>

    );

}

export default Menu;