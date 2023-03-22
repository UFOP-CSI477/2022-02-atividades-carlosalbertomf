import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { EstadoInterface } from "../estados/ListEstados";

const CreateCidade = () => {

    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [estadoID, setEstadoID] = useState(0);

    const [estados, setEstados] = useState<EstadoInterface[]>([]);


    useEffect(() => {
        api.get('/estados').then(response => {
            setEstados(response.data);
        })
    })


    const handleNewCidade = async (evenet: React.FormEvent<HTMLFormElement>) => {

        evenet.preventDefault();

        const data = {
            nome,
            estado_id: estadoID
        }

        try {

            if(data.estado_id === 0 || data.nome === "")
            {
                // navigate('/cidades/novo');
                window.location.reload();
                return
            }

            await api.post('/cidades', data);
            alert('Cidade inserida com sucesso');
            navigate('/cidades');

        } catch (error) {
            alert('Erro ao cadastrar a Cidade');
            console.error(error);

        }

    }


    return (

        <div>
            <h3>Cadastro da Cidade: </h3>

            <form onSubmit={handleNewCidade}>

                <div>
                    <label htmlFor="nome">Nome: </label>
                    <input type="text"
                        name="nome"
                        id="nome"
                        value={nome}
                        placeholder="Nome da cidade"
                        onChange={e => setNome(e.target.value)} // pega o valor
                    />
                </div>

                <div>
                    <label htmlFor="estadoID">Estado: </label>

                    <select
                        name="estado"
                        id="estado"
                        value={estadoID}
                        onChange={e =>
                            setEstadoID(parseInt(e.target.value))}>

                        <option
                            value="0"
                            selected>Selecione</option>
                        {
                            estados.map(estado => (
                                <option
                                    value={estado.id}>
                                    {estado.nome}
                                </option>
                            ))
                        }

                    </select>

                </div>

                <button type="submit">Cadastrar</button>
                <button type="submit">Limpar</button>
                <div><li><Link to="/cidades">Voltar</Link></li></div>

            </form>
        </div>
    );
}

export default CreateCidade;