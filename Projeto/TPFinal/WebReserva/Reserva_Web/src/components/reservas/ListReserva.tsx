import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from "../../services/api"

export interface ReservaInterface { 
    id: number;
    hora_ini: string;
    hora_fim: string;
    usuario_id: string;
    local_id: string;

}


//componente
const ListReserva = () => {

    const handleDeleteReserva = async (id: number) => {

        //window.alert(id); //mostra o id na tela para testes
        if(!window.confirm("Confirma a exclusão da Reserva?")){
            return
        }
    
        const data = {
            id
        }

    
        try {
            await api.delete('/reserva', 
            {
                data: {
                    id
                }
            });
    

            setReserva(reserva.filter(reserva => 
                reserva.id != id) );
            
        } catch (error) {
            alert("Erro na exclusão da Reserva!");
            console.error(error);
        }
    }

    const [reserva, setReserva] = useState<ReservaInterface[]>([]);

    useEffect(() => {

        api.get('/reserva')
        .then(response => {
            console.log(response.data);
            setReserva(response.data);
        })

    })


    return (

        <div>
            <h2>Lista de Reservas: </h2>

            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Início</td>
                        <td>Final</td>
                        <td>Usuario ID</td>
                        <td>Local ID</td>

                        <td>Atualizar</td>
                        <td>Excluir</td>
                    </tr>
                </thead>

                <tbody>
                    {reserva.map(reserva => (
                        <tr key={reserva.id}>
                            <td>{reserva.id}</td>
                            <td>{reserva.hora_ini}</td>
                            <td>{reserva.hora_fim}</td>
                            <td>{reserva.usuario_id}</td>
                            <td>{reserva.local_id}</td>

                            <td><Link to={`/reserva/${reserva.id}`}>Atualizar</Link></td>
                            <td><button onClick={() => {handleDeleteReserva(reserva.id)}}>Excluir</button></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>

            <li><Link to="/reserva/novo">Cadastrar Reserva</Link></li>

            <li><Link to="/menu">Voltar</Link></li>
            

        </div>
    )


}

export default ListReserva;