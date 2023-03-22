import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from "../../services/api"
import { EstadoInterface } from "../estados/ListEstados"

export interface CidadeInterface { //typescript -> tipando os itens retornados da request na API
    id: number;
    nome: string;
    estado_id: number;
    created_at: string;
    updated_at: string;
    estado: EstadoInterface;
}



//componente
const ListCidades = () => {

    const handleDeleteCidade = async (id: number) => {

        //window.alert(id); //mostra o id na tela para testes
        if(!window.confirm("Confirma a exclusão da Cidade?")){
            return
        }
    
        const data = {
            id
        }
    
        try {
            await api.delete('/cidades', 
            {
                data: {
                    id
                }
            });
    
            //Atualizar?
            setCidades(cidades.filter(cidades => 
                cidades.id != id) );
            
        } catch (error) {
            alert("Erro na exclusão da Cidade!");
            console.error(error);
        }
    }

    const [cidades, setCidades] = useState<CidadeInterface[]>([]);

    useEffect(() => {

        api.get('/cidades')
        .then(response => {
            console.log(response.data);
            setCidades(response.data);
        })

    })




    return (

        <div>
            <h2>Lista de Cidades</h2>

            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Nome</td>
                        <td>Sigla</td>
                        <td>Criado</td>
                        <td>Alterado</td>
                        <td>Atualizar</td>
                        <td>Excluir</td>
                    </tr>
                </thead>

                <tbody>
                    {cidades.map(cidade => (
                        <tr key={cidade.id}>
                            <td>{cidade.id}</td>
                            <td>{cidade.nome}</td>
                            <td>{cidade.estado.sigla}</td>
                            <td>{cidade.created_at}</td>
                            <td>{cidade.updated_at}</td>

                            <td><Link to={`/cidades/${cidade.id}`}>Atualizar</Link></td>
                            <td><button onClick={() => {handleDeleteCidade(cidade.id)}}>Excluir</button></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>

            <li><Link to="/cidades/novo">Cadastrar Cidade</Link></li>

            <li><Link to="/">Voltar</Link></li>
            

        </div>
    )


}

export default ListCidades;