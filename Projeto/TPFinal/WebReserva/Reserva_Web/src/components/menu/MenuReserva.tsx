import { Link } from "react-router-dom";

const MenuReserva = () => { 
    return ( 
        <>
            <h2>Menu</h2>
            <ul>
                {<li><Link to="/local">Local</Link></li> } 
                {<li><Link to="/reserva">Reservas</Link></li> } 

            </ul>
        </>

    );

}

export default MenuReserva;
