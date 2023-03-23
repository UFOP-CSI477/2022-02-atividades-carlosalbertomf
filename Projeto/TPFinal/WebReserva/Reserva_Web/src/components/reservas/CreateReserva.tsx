import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { UsuarioInterface } from "../usuarios/ListUsuario";
import { LocalInterface } from "../locais/ListLocal";

const CreateReserva = () => {


    const [hora_ini, setHoraIni] = useState('');
    const [hora_fim, setHoraFim] = useState('');
    const [usuario_id, setUsuarioId] = useState(0);
    const [local_id, setLocalId] = useState(0);


    const navigate = useNavigate();


    const [usuario, setUsuario] = useState<UsuarioInterface[]>([]);
    useEffect(() => {
        api.get('/usuario').then(response => {
            setUsuario(response.data);
        })
    })

    const [local, setLocal] = useState<LocalInterface[]>([]);
    useEffect(() => {
        api.get('/local').then(response => {
            setLocal(response.data);
        })
    })


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
            if (data.hora_ini === "" || data.hora_fim === "" || usuario_id.toString() === "" || local_id.toString() === "") {
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
                    <label>Local a ser Reservado: </label>
                    <select
                        name="local"
                        id="local"
                        value={local_id}
                        onChange={e =>
                            setLocalId(parseInt(e.target.value))}>

                        <option
                            value="0"
                            selected>Selecione</option>
                        {
                            local.map(local => (
                                <option
                                    value={local.id}>
                                    {local.descricao}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <div>
                    <label>Nome do Usuário: </label>
                    <select
                        name="usuario"
                        id="usuario"
                        value={usuario_id}
                        onChange={e =>
                            setUsuarioId(parseInt(e.target.value))}>

                        <option
                            value="0"
                            selected>Selecione</option>
                        {
                            usuario.map(usuario => (
                                <option
                                    value={usuario.id}>
                                    {usuario.nome}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <button type="submit">Confirmar Reserva</button>
                <button type="reset">Limpar</button>
                <li><Link to="/reserva">Voltar</Link></li>
            </form>

        </div>
    );
}

export default CreateReserva;