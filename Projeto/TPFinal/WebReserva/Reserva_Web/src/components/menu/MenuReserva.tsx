import { Link } from "react-router-dom";

const link = {
    margin: "1rem",
    textDecoration: "none",
    color: 'blue'
  };
  
const MenuReserva = () => { 
    return ( 
        <>
            <h2>Menu</h2>
            <ul>
                {<li><Link to="/local"style={link}>Local</Link></li> } 
                {<li><Link to="/reserva"style={link}>Reservas</Link></li> } 
                {<li><Link to="/usuario"style={link}>Usuários</Link></li> } 

            </ul>
        </>

    );

}

export default MenuReserva;
