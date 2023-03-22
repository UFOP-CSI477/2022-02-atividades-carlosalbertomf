import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from "../../services/api"

export interface EstadoInterface { //typescript -> tipando os itens retornados da request na API
    id: number;
    nome: string;
    sigla: string;
    created_at: string;
    updated_at: string;
}



//componente
const ListEstados = () => {

    const handleSDeleteEstado = async (id: number) => {

        //window.alert(id); //mostra o id na tela para testes
        if(!window.confirm("Confirma a exclusão do Estado?")){
            return
        }
    
        const data = {
            id
        }
    
        try {
            await api.delete('/estados', 
            {
                data: {
                    id
                }
            });

            alert("Estado excluído com sucesso!");
    
            //Atualizar?
            setEstados(estados.filter(estado => 
                estado.id != id) );
            
        } catch (error) {
            alert("Erro na exclusão do Estado!");
            console.error(error);
        }
    }

    const [estados, setEstados] = useState<EstadoInterface[]>([]);

    useEffect(() => {

        api.get('/estados')
        .then(response => {
            console.log(response.data);
            setEstados(response.data);
        })

    }, [])




    return (

        <div>
            <h2>Lista de Estados</h2>

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
                    {estados.map(estado => (
                        <tr key={estado.id}>
                            <td>{estado.id}</td>
                            <td>{estado.nome}</td>
                            <td>{estado.sigla}</td>
                            <td>{estado.created_at}</td>
                            <td>{estado.updated_at}</td>

                            <td><Link to={`/estados/${estado.id}`}>Atualizar</Link></td>
                            <td><button onClick={() => {handleSDeleteEstado(estado.id)}}>Excluir</button></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>

            <li><Link to="/estados/novo">Cadastrar Estado</Link></li>
            <li><Link to="/">Voltar</Link></li>
            

        </div>
    )


}

export default ListEstados;