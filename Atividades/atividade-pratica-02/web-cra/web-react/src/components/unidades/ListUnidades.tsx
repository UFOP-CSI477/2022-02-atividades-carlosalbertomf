import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from "../../services/api"

interface UnidadeInterface { //typescript -> tipando os itens retornados da request na API
    id: number;
    nome: string;
    numero: string;
    complemento: string;
    cidade_id: BigInteger;
    created_at: string;
    updated_at: string;
}

//componente
const ListUnidade = () => {

    const [unidade, setUnidade] = useState<UnidadeInterface[]>([]);

    useEffect(() => {

        api.get('/unidades')
        .then(response => {
            console.log(response.data);
            setUnidade(response.data);
        })

    }, [])




    return (

        <div>
            <h2>Lista de Unidades</h2>

            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Nome</td>
                        <td>Número</td>
                        <td>Complemento</td>
                        <td>Cidade ID</td>
                        <td>Criado</td>
                        <td>Alterado</td>
                    </tr>
                </thead>

                <tbody>
                    {unidade.map(unidade => (
                        <tr key={unidade.id}>
                            <td>{unidade.id}</td>
                            <td>{unidade.nome}</td>
                            <td>{unidade.numero}</td>
                            <td>{unidade.complemento}</td>
                            <td>{unidade.cidade_id}</td>
                            <td>{unidade.created_at}</td>
                            <td>{unidade.updated_at}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>



            <li><Link to="/">Voltar</Link></li>


        </div>
    )


}

export default ListUnidade;