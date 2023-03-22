import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link, redirect, useNavigate, useParams } from "react-router-dom";
import { EstadoInterface } from "../estados/ListEstados";

const UpdateCidades = () => {


    const [nome, setNome] = useState('');
    const [estadoID, setEstadoID] = useState(0);
    
    const [estados, setEstados] = useState<EstadoInterface[]>([]);


    useEffect(() => {
        api.get('/estados').then(response => {
            setEstados(response.data);
        })
    })

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/cidades/${id}`).then(response => {
            setNome(response.data.nome);
            setEstadoID(response.data.estadoID);
        })
    }, [id]);


    const handleUpdateCidade = async (evenet: React.FormEvent<HTMLFormElement>) => {

        evenet.preventDefault();

        const data = {
            id: parseInt(String(id)),
            nome: nome,
            estadoID: parseInt(estadoID.toString())
            
        }

        try {

            if(data.estadoID === 0 || data.nome === "")
            {
                window.location.reload();
                return
            }

            await api.put('/cidades', data);
            alert('Cidade atualizada com sucesso');
            navigate('/cidades');

        } catch (error) {
            alert('Erro ao atualizar a Cidade');
            console.error(error);

        }

    }


    return (

        <div>
            <h3>Cadastro de Cidade: </h3>

            <form onSubmit={handleUpdateCidade}>

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

                <button type="submit">Atualizar</button>
                <button type="submit">Limpar</button>
                <div><li><Link to="/cidades">Voltar</Link></li></div>

            </form>
        </div>
    );
}

export default UpdateCidades;