import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from "../../services/api"

interface TipoSanguineoInterface { 
    id: number;
    tipo: string;
    fator: string;
    created_at: string;
    updated_at: string;
}

    const ListTipoSanguineo = () => {

        const handleTipoSanguineo = async (id: number) => {
    
            if(!window.confirm("Confirma a exclusão do Tipo Sanguíneo?")){
                return
            }
        
            const data = {
                id
            }
        
            try {
                await api.delete('/tiposanguineo', 
                {
                    data: {
                        id
                    }
                });
    
                alert("Tipo Sanguíneo excluído com sucesso!");
        
                //Atualizar?
                setTipoSanguineo(tipoSanguineo.filter(tipoSanguineo => 
                    tipoSanguineo.id != id) );
                
            } catch (error) {
                alert("Erro na exclusão do Tipo Sanguíneo!");
                console.error(error);
            }
        }
    
        const [tipoSanguineo, setTipoSanguineo] = useState<TipoSanguineoInterface[]>([]);

        useEffect(() => {
    
            api.get('/tiposanguineo')
            .then(response => {
                console.log(response.data);
                setTipoSanguineo(response.data);
            })
    
        }, [])




    return (

        <div>
            <h2>Lista de Tipos Sanguineos</h2>

            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Tipo</td>
                        <td>Fator</td>
                        <td>Criado</td>
                        <td>Alterado</td>
                    </tr>
                </thead>

                <tbody>
                    {tipoSanguineo.map(tipoSanguineo => (
                        <tr key={tipoSanguineo.id}>
                            <td>{tipoSanguineo.id}</td>
                            <td>{tipoSanguineo.tipo}</td>
                            <td>{tipoSanguineo.fator}</td>
                            <td>{tipoSanguineo.created_at}</td>
                            <td>{tipoSanguineo.updated_at}</td>

                            <td><Link to={`/tiposanguineo/${tipoSanguineo.id}`}>Atualizar</Link></td>
                            <td><button onClick={() => {handleTipoSanguineo(tipoSanguineo.id)}}>Excluir</button></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>

            <li><Link to="/tiposanguineo/novo">Cadastrar Tipo Sanguíneo</Link></li>
            <li><Link to="/">Voltar</Link></li>
            

        </div>
    )


}

export default ListTipoSanguineo;