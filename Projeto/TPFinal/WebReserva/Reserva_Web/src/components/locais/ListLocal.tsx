import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from "../../services/api"
import Table from 'react-bootstrap/Table';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export interface LocalInterface {
    id: number;
    descricao: string;
    created_at: string;
    updated_at: string;
}

const ListLocal = () => {

    const handleDeleteLocal = async (id: number) => {

        //window.alert(id); //mostra o id na tela para testes
        if (!window.confirm("Confirma a exclusão do Local?")) {
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
                local.id != id));

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

    const link = {
        margin: "1rem",
        textDecoration: "none",
        color: 'blue'
      };


    return (
        <Table responsive>
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

                                <td><Link to={`/local/${local.id}`} style={link}>Atualizar</Link></td>
                                <td><button className="button buttonExclude"
                                            onClick={() => {handleDeleteLocal(local.id)}} >Excluir</button>{' '}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>

                <li><Link to="/local/novo"style={link}>Cadastrar Local</Link></li>

                <li> <Link to="/" style={link}>Voltar</Link> </li>
            </div>
        </Table>
    )


    // return (
    //     <Form>
    //         <Form.Group className="mb-3" controlId="local.id">
    //             <Form.Label>ID</Form.Label>
    //             <Form.Control type="text"/>
    //         </Form.Group>

    //         <Form.Group className="mb-3" controlId="local.descricao">
    //             <Form.Label>Descrição</Form.Label>
    //             <Form.Control type="text" placeholder="Descrição do Local" />
    //         </Form.Group>

    //         <Button variant="primary" type="submit">
    //             Atualizar
    //         </Button>

    //         <Button variant="primary" type="submit">
    //             Excluir
    //         </Button>
    //         <li><Link to="/">Voltar</Link></li> 
    //     </Form>
    // );

}

export default ListLocal;