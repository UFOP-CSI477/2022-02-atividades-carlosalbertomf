import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link, redirect, useNavigate, useParams } from "react-router-dom";

const UpdateDoacao = () => {


    const [pessoa_id, setPessoa_id] = useState('');
    const [local_id, setLocal_id] = useState('');
    const [dataDoacao, setData] = useState('');


    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/doacoes/${id}`).then(response => {
            setPessoa_id(response.data.pessoa_id);
            setLocal_id(response.data.local_id);
            setData(response.data.dataDoacao);
        })
    }, [id]);


    const handleUpdateDoacao = async (evenet: React.FormEvent<HTMLFormElement>) => {

        evenet.preventDefault();

        const data = {
            id: parseInt(String(id)),
            pessoa_id: parseInt(pessoa_id),
            local_id: parseInt(local_id),
            data: new Date(new Date(dataDoacao.toString()).toISOString()) 
        }

        try {

            if (data.pessoa_id.toString() === "" || data.local_id.toString() === "" || data.data.toString() === "") {
                alert('Dados incompletos. Favor inserir os campos corretamente');

                return
            }

            await api.put('/doacoes', data);
            alert('Doação atualizada com sucesso');
            navigate('/doacoes');

        } catch (error) {
            alert('Erro ao atualizar a Doação');
            console.error(error);

        }

    }


    return (

        <div>
            <h3>Cadastro de Doação: </h3>

            <form onSubmit={handleUpdateDoacao}>

                <div>
                    <label htmlFor="pessoa_id">ID Pessoa</label>
                    <input type="number"
                        name="pessoa_id"
                        id="pessoa_id"
                        value={pessoa_id}
                        placeholder="ID da Pessoa"
                        onChange={e => setPessoa_id(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="local_id">ID Local</label>
                    <input type="number"
                        name="local_id"
                        id="local_id"
                        value={local_id}
                        placeholder="ID do Local"
                        onChange={e => setLocal_id(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="dataDoacao">Data da Doação</label>
                    <input type="date"
                        name="dataDoacao"
                        id="dataDoacao"
                        value={dataDoacao }
                        placeholder="Data da Doação"
                        onChange={e => setData(e.target.value)}
                    />
                </div>




                <button type="submit">Atualizar</button>
                <Link to="/doacao">Cancelar</Link>
                <li> <Link to="/">Voltar</Link> </li>

            </form>
        </div>
    );
}

export default UpdateDoacao;