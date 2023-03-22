import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link, redirect, useNavigate, useParams } from "react-router-dom";

const UpdateEstado = () => {


    const [nome, setNome] = useState('');
    const [sigla, setSigla] = useState('');


    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/estados/${id}`).then(response => {
            setNome(response.data.nome);
            setSigla(response.data.sigla);
        })
    }, [id]);


    const handleUpdateState = async (evenet: React.FormEvent<HTMLFormElement>) => {

        evenet.preventDefault();

        const data = {
            id: parseInt(String(id)),
            nome,
            sigla
        }

        try {

            

            await api.put('/estados', data);
            alert('Estado atualizado com sucesso');
            navigate('/estados');

        } catch (error) {
            alert('Erro ao atualizar o Estado');
            console.error(error);

        }

    }


    return (

        <div>
            <h3>Cadastro de Estado: {nome} - {sigla}</h3>

            <form onSubmit={handleUpdateState}>

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text"
                        name="nome"
                        id="nome"
                        value={nome}
                        placeholder="Nome do Estado"
                        onChange={e => setNome(e.target.value)} // pega o valor
                    />
                </div>

                <div>
                    <label htmlFor="sigla">Sigla</label>
                    <input type="text"
                        name="sigla"
                        id="sigla"
                        value={sigla}
                        placeholder="Sigla do Estado"
                        onChange={e => setSigla(e.target.value)}
                    />
                </div>

                <button type="submit">Atualizar</button>
                <Link to="/estados">Cancelar</Link>
                <li> <Link to="/">Voltar</Link> </li>

            </form>
        </div>
    );
}

export default UpdateEstado;