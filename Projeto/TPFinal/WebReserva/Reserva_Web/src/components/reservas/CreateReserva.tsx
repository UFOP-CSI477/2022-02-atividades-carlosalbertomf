import { useState } from "react";
import api from "../../services/api";
import { Link, useNavigate } from "react-router-dom";

const CreateReserva = () => {


    const [hora_ini, setHoraIni] = useState('');
    const [hora_fim, setHoraFim] = useState('');
    const [usuario_id, setUsuarioId] = useState('');
    const [local_id, setLocalId] = useState('');

    const navigate = useNavigate();


    const handleNovaReserva = async (evenet: React.FormEvent<HTMLFormElement>) => {

        evenet.preventDefault();

        const data = {
            //id - pegar o ID se o usuário existir (key = email), senão, adicionar ao banco 
            hora_ini,
            hora_fim,
            usuario_id,
            local_id
        }

        try {
            if(data.hora_ini === "" || data.hora_fim === "" || usuario_id.toString() === ""|| local_id.toString() === "")
            {
                alert('Dados incompletos. Favor inserir todos os dados para concluir a reserva');
                
                return
            }

            await api.post('/reserva', data);
            alert('Reserva cadastrada com sucesso');
            navigate('/reserva');

        } catch (error) {
            alert('Erro ao cadastrar uma nova Reserva');
            window.location.reload();
            console.error(error);

        }
    }

    function limparCampos(){
        setHoraIni(''); 
        setHoraFim('');
        setLocalId('');
        setUsuarioId('');
        return;
    };


    return (

        <div>
            <h3>Reservar um Horário: </h3>

            <form onSubmit={handleNovaReserva}>

                <div>
                    <label htmlFor="hora_ini">Início: </label>
                    <input type="datetime-local"
                        name="hora_ini"
                        id="hora_ini"
                        value={hora_ini}
                        placeholder="Horário Inicial da Reserva"
                        onChange={e => setHoraIni(e.target.value)} 
                    />
                </div>

                <div>
                    <label htmlFor="hora_fim">Final: </label>
                    <input type="datetime-local"
                        name="hora_fim"
                        id="hora_fim"
                        value={hora_fim}
                        placeholder="Horário Final da Reserva"
                        onChange={e => setHoraFim(e.target.value)} 
                    />
                </div>

                <div>
                    <label htmlFor="local_id">Local: </label>
                    <input type="number"
                        name="local_id"
                        id="local_id"
                        value={local_id}
                        placeholder="Local a ser reservado"
                        onChange={e => setLocalId(e.target.value)} 
                    />
                </div>


                <div>
                    <label htmlFor="usuario_id">Usuário: </label>
                    <input type="number"
                        name="usuario_id"
                        id="usuario_id"
                        value={usuario_id}
                        placeholder="ID do usuário"
                        onChange={e => setUsuarioId(e.target.value)} 
                    />
                </div>

                <button type="submit">Confirmar Reserva</button>
                <button onClick={() => limparCampos} type="button">Limpar</button>
                <li><Link to="/reserva">Voltar</Link></li>

            </form>
        </div>
    );
}

export default CreateReserva;