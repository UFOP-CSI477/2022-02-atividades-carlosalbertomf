import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from "../../services/api"
import { LocalInterface } from "../locais_coleta/ListLocais";
import { PessoaInterface } from "../pessoas/ListPessoa";

export interface DoacaoInterface { 
    id: number;
    pessoa_id: number;
    local_id: number;
    data: string;

    pessoa: PessoaInterface;
    locais_coleta: LocalInterface;

}


const ListDoacoes = () => {

    const handleDeleteDoacao = async (id: number) => {

        if (!window.confirm("Confirma a exclusão da Doação?")) {
            return
        }

        const data = {
            id
        }

        try {
            await api.delete('/doacoes',
                {
                    data: {
                        id
                    }
                });

            alert("Doação excluída com sucesso!");

            setDoacoes(doacao.filter(doacao =>
                doacao.id != id));

        } catch (error) {
            alert("Erro na exclusão da Doação!");
            console.error(error);
        }
    }

    const [doacao, setDoacoes] = useState<DoacaoInterface[]>([]);

    useEffect(() => {

        api.get('/doacoes')
            .then(response => {
                console.log(response.data);
                setDoacoes(response.data);
            })

    }, [])




    return (

        <div>
            <h2>Lista de Doações: </h2>

            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>ID Pessoa</td>
                        <td>ID Local</td>
                        <td>Data</td>

                        <td>Atualizar</td>
                        <td>Excluir</td>
                    </tr>
                </thead>

                <tbody>
                    {doacao.map(doacao => (
                        <tr key={doacao.id}>
                            <td>{doacao.id}</td>
                            <td>{doacao.pessoa.nome}</td>
                            <td>{doacao.locais_coleta.nome}</td>
                            <td>{doacao.data}</td>

                            <td><Link to={`/doacoes/${doacao.id}`}>Atualizar</Link></td>
                            <td><button onClick={() => { handleDeleteDoacao(doacao.id) }}>Excluir</button></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>

            <li><Link to="/doacoes/novo">Cadastrar Doação</Link></li>
            <li><Link to="/">Voltar</Link></li>


        </div>
    )


}

export default ListDoacoes;