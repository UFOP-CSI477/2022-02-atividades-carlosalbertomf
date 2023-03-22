import { useState } from "react";
import api from "../../services/api";
import { Link, useNavigate } from "react-router-dom";

const CreateTipoSanguineo = () => {


    const [tipo, setTipo] = useState('');
    const [fator, setFator] = useState('');

    const navigate = useNavigate();


    const handleNewState = async (evenet: React.FormEvent<HTMLFormElement>) => {

        evenet.preventDefault();

        const data = {
            tipo,
            fator
        }

        try {

            if(data.tipo === "" || data.fator === "" )
            {
                alert("Dados incompletos. Favor inserir os dados corretamente.");
            }

            await api.post('/tiposanguineo', data);
            alert('Tipo Sanguineo inserido com sucesso');
            navigate('/tiposanguineo');

        } catch (error) {
            alert('Erro ao cadastrar o Tipo Sanguineo');
            console.error(error);

        }

    }


    return (

        <div>
            <h3>Cadastro de Tipo Sanguineo: {tipo} - {fator}</h3>

            <form onSubmit={handleNewState}>

                <div>
                    <label htmlFor="tipo">Tipo</label>
                    <input type="text"
                        name="tipo"
                        id="tipo"
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
                
                <button type="submit">Cadastrar</button>
                <button type="submit">Limpar</button>
                <li><Link to="/tiposanguineo">Voltar</Link></li>

            </form>
        </div>
    );
}

export default CreateTipoSanguineo;