import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from "../../services/api"

export interface LocalInterface { 
    id: number;
    descricao: string;
    created_at: string;
    updated_at: string;
}


//componente
const ListLocal = () => {

    const handleDeleteLocal = async (id: number) => {

        //window.alert(id); //mostra o id na tela para testes
        if(!window.confirm("Confirma a exclusão do Local?")){
            return
        }
    
        const data = {
            id
        }

    
        try {
            await api.delete('/local', 
            {
                data: {
                    id
                }
            });
    
            //Atualizar?
            setLocal(locais.filter(local => 
                local.id != id) );
            
        } catch (error) {
            alert("Erro na exclusão do Local!");
            console.error(error);
        }
    }

    const [locais, setLocal] = useState<LocalInterface[]>([]);

    useEffect(() => {

        api.get('/local')
        .then(response => {
            console.log(response.data);
            setLocal(response.data);
        })

    })


    return (

        <div>
            <h2>Lista de Locais</h2>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descricao</th>
                        <th>Atualizar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>

                <tbody>
                    {locais.map(local => (
                        <tr key={local.id}>
                            <td>{local.id}</td>
                            <td>{local.descricao}</td>

                            <td><Link to={`/local/${local.id}`}>Atualizar</Link></td>
                            <td><button onClick={() => {handleDeleteLocal(local.id)}}>Excluir</button></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>

            <li><Link to="/local/novo">Cadastrar Local</Link></li>

            <li><Link to="/">Voltar</Link></li>
            

        </div>
    )


}

export default ListLocal;