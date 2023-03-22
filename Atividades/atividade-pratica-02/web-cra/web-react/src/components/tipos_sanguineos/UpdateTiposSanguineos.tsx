import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link, redirect, useNavigate, useParams } from "react-router-dom";

const UpdateTipoSanguineo = () => {


    const [tipo, setTipo] = useState('');
    const [fator, setFator] = useState('');


    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/tiposanguineo/${id}`).then(response => {
            setTipo(response.data.tipo);
            setFator(response.data.fator);
        })
    }, [id]);


    const handleUpdateTipoSanguineo = async (evenet: React.FormEvent<HTMLFormElement>) => {

        evenet.preventDefault();

        const data = {
            id: parseInt(String(id)),
            tipo,
            fator
        }

        try {

            if (data.tipo === "" || data.fator === "") {
                alert("Dados incompletos. Favor inserir os dados corretamente.");
            }

            await api.put('/tiposanguineo', data);
            alert('Tipo Sanguíneo atualizado com sucesso');
            navigate('/tiposanguineo');

        } catch (error) {
            alert('Erro ao atualizar o Tipo Sanguíneo');
            console.error(error);

        }

    }


    return (

        <div>
            <h3>Cadastro de Tipo Sanguíneo: </h3>

            <form onSubmit={handleUpdateTipoSanguineo}>

                <div>
                    <label htmlFor="tipo">Tipo</label>
                    <input type="text"
                        name="tipo"
                        id="tipo"
                        maxLength={2}
                        value={tipo}
                        placeholder="Tipo Sanguineo"
                        onChange={e => setTipo(e.target.value)} // pega o valor do tipo sanguineo
                    />
                </div>

                <div>
                    <label htmlFor="fator">Fator</label>
                    <input type="text"
                        name="fator"
                        id="fator"
                        value={fator}
                        placeholder="Fator"
                        onChange={e => setFator(e.target.value)}
                    />
                </div>

                <button type="submit">Atualizar</button>
                <Link to="/estados">Cancelar</Link>
                <li> <Link to="/">Voltar</Link> </li>

            </form>
        </div>
    );
}

export default UpdateTipoSanguineo;