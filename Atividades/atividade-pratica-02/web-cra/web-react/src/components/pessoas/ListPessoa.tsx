import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from "../../services/api"

export interface PessoaInterface { //typescript -> tipando os itens retornados da request na API
    id: number;
    nome: string;
    rua: string;
    numero: number;
    complemento: string;
    documento: string;
    cidade_id: number;
    tipo_id: number;
    created_at: string;
    updated_at: string;
}


const ListPessoas = () => {

    const handleDeletePessoa = async (id: number) => {

        if(!window.confirm("Confirma a exclusão da Pessoa?")){
            return
        }
    
        const data = {
            id
        }
    
        try {
            await api.delete('/pessoas', 
            {
                data: {
                    id
                }
            });

            alert("Pessoa excluído com sucesso!");
    
            //Atualizar?
            setPessoas(pessoas.filter(estado => 
                estado.id != id) );
            
        } catch (error) {
            alert("Erro na exclusão da Pessoa!");
            console.error(error);
        }
    }

    const [pessoas, setPessoas] = useState<PessoaInterface[]>([]);

    useEffect(() => {

        api.get('/pessoas')
        .then(response => {
            console.log(response.data);
            setPessoas(response.data);
        })

    }, [])




    return (

        <div>
            <h2>Lista de Pessoas</h2>

            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Nome</td>
                        <td>Rua</td>
                        <td>Número</td>
                        <td>Complemento</td>
                        <td>Documento</td>
                        <td>Criado</td>
                        <td>Alterado</td>

                        <td>Atualizar</td>
                        <td>Excluir</td>
                    </tr>
                </thead>

                <tbody>
                    {pessoas.map(pessoa => (
                        <tr key={pessoa.id}>
                            <td>{pessoa.id}</td>
                            <td>{pessoa.nome}</td>
                            <td>{pessoa.rua}</td>
                            <td>{pessoa.numero}</td>
                            <td>{pessoa.complemento}</td>
                            <td>{pessoa.documento}</td>
                            <td>{pessoa.created_at}</td>
                            <td>{pessoa.updated_at}</td>

                            <td><Link to={`/pessoas/${pessoa.id}`}>Atualizar</Link></td>
                            <td><button onClick={() => {handleDeletePessoa(pessoa.id)}}>Excluir</button></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>

            <li><Link to="/pessoas/novo">Cadastrar Pessoas</Link></li>
            <li><Link to="/">Voltar</Link></li>
            

        </div>
    )


}

export default ListPessoas;