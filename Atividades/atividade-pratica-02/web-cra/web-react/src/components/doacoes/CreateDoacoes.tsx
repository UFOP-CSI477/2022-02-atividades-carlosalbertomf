import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { PessoaInterface } from "../pessoas/ListPessoa";
import { LocalInterface } from "../locais_coleta/ListLocais";

const CreateDoacao = () => {

    const [pessoa_id, setPessoa_id] = useState(0);
    const [local_id, setLocal_id] = useState(0);
    const [dataDoacao, setData] = useState('');

    const [pessoas, setPessoas] = useState<PessoaInterface[]>([]);

    useEffect(() => {

        api.get('/pessoas')
            .then(response => {
                console.log(response.data);
                setPessoas(response.data);
            })

    }, [])

    const [local, setLocais] = useState<LocalInterface[]>([]);

    useEffect(() => {

        api.get('/locaisdecoleta')
            .then(response => {
                console.log(response.data);
                setLocais(response.data);
            })

    }, [])


    const navigate = useNavigate();


    const handleDoacoes = async (evenet: React.FormEvent<HTMLFormElement>) => {

        evenet.preventDefault();

        const data = {
            pessoa_id: parseInt(pessoa_id.toString()),
            local_id: parseInt(local_id.toString()),
            data: new Date(new Date(dataDoacao.toString()).toISOString()) //TODO - Verificar como trabalhar com data no padrão: 2023-03-19T05:55:51.141Z
        }


        try {
            if (data.pessoa_id.toString() === "" || data.local_id.toString() === "" || data.data.toString() === "") {
                alert('Dados incompletos. Favor inserir os campos corretamente');

                return
            }

            await api.post('/doacoes', data);
            alert('Doação cadastrada com sucesso');
            navigate('/doacoes');

        } catch (error) {
            alert('Erro ao cadastrar uma nova Doação');
            window.location.reload();
            console.error(error);

        }

    }

    return (

        <div>
            <h3>Cadastro de Doação: </h3>

            <form onSubmit={handleDoacoes}>

                <div>
                    <label htmlFor="pessoa_id">Pessoa: </label>
                    <select
                        name="pessoa_id"
                        id="pessoa_id"
                        value={pessoa_id}
                        onChange={e =>
                            setPessoa_id(parseInt(e.target.value))}>
                        <option
                            value="0"
                            selected>Selecione</option>
                        {
                            pessoas.map(pessoas => (
                                <option
                                    value={pessoas.id}>
                                    {pessoas.nome}
                                </option>
                            ))
                        }
                    </select>
                </div>


                <div>
                    <label htmlFor="local_id">Local: </label>
                    <select
                        name="local_id"
                        id="local_id"
                        value={local_id}
                        onChange={e =>
                            setLocal_id(parseInt(e.target.value))}>
                        <option
                            value="0"
                            selected>Selecione</option>
                        {
                            local.map(local => (
                                <option
                                    value={local.id}>
                                    {local.nome}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <div>
                    <label htmlFor="dataDoacao">Data da Doação</label>
                    <input type="date"
                        name="dataDoacao"
                        id="data"
                        value={dataDoacao}
                        placeholder="Data da Doação"
                        onChange={e => setData(e.target.value)}
                    />
                </div>


                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>
                <li><Link to="/doacoes">Voltar</Link></li>

            </form>
        </div>
    );
}

// function formatarData(e: { target: { value: string; }; }){

//     var v=e.target.value.replace(/\D/g,"");

//     v=v.replace(/(\d{2})(\d)/,"$1/$2") 

//     v=v.replace(/(\d{2})(\d)/,"$1/$2") 

//     e.target.value = v;

//     }

export default CreateDoacao;