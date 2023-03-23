import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from "../../services/api"
import { CidadeInterface } from "../cidades/ListCidades";

export interface LocalInterface { //typescript -> tipando os itens retornados da request na API
    id: number;
    nome: string;
    rua: string;
    numero: number;
    complemento: string;
    cidade_id: number;

    cidade: CidadeInterface;

}


const ListLocais = () => {

    const handleDeletePessoa = async (id: number) => {

        if (!window.confirm("Confirma a exclusão do Local de Coleta?")) {
            return
        }

        const data = {
            id
        }

        try {
            await api.delete('/locaisdecoleta',
                {
                    data: {
                        id
                    }
                });

            alert("Local de Coleta excluído com sucesso!");

            setLocais(local.filter(local =>
                local.id != id));

        } catch (error) {
            alert("Erro na exclusão do Local de Coleta!");
            console.error(error);
        }
    }

    const [local, setLocais] = useState<LocalInterface[]>([]);

    useEffect(() => {

        api.get('/locaisdecoleta')
            .then(response => {
                console.log(response.data);
                setLocais(response.data);
            })

    }, [])




    return (

        <div>
            <h2>Lista de Locais de Coleta: </h2>

            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Nome</td>
                        <td>Rua</td>
                        <td>Número</td>
                        <td>Complemento</td>
                        <td>Cidade</td>
                        <td>Atualizar</td>
                        <td>Excluir</td>
                    </tr>
                </thead>

                <tbody>
                    {local.map(local => (
                        <tr key={local.id}>
                            <td>{local.id}</td>
                            <td>{local.nome}</td>
                            <td>{local.rua}</td>
                            <td>{local.numero}</td>
                            <td>{local.complemento}</td>
                            <td>{local.cidade.nome}</td>

                            <td><Link to={`/locaisdecoleta/${local.id}`}>Atualizar</Link></td>
                            <td><button onClick={() => { handleDeletePessoa(local.id) }}>Excluir</button></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>

            <li><Link to="/locaisdecoleta/novo">Cadastrar Local de Coleta</Link></li>
            <li><Link to="/">Voltar</Link></li>


        </div>
    )


}

export default ListLocais;