import { useState } from "react";
import api from "../../services/api";
import { Link, useNavigate } from "react-router-dom";

const CreateEstado = () => {


    const [nome, setNome] = useState('');
    const [sigla, setSigla] = useState('');

    const navigate = useNavigate();


    const handleNewState = async (evenet: React.FormEvent<HTMLFormElement>) => {

        evenet.preventDefault();

        const data = {
            nome,
            sigla
        }

        try {
            if(data.nome === "" || data.sigla === "")
            {
                alert('Dados incompletos. Favor inserir os campos corretamente');
                
                return
            }

            await api.post('/estados', data);
            alert('Estado inserido com sucesso');
            navigate('/estados');

        } catch (error) {
            alert('Erro ao cadastrar o Estado');
            window.location.reload();
            console.error(error);

        }

    }


    return (

        <div>
            <h3>Cadastro de Estado: {nome} - {sigla}</h3>

            <form onSubmit={handleNewState}>

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

                <button type="submit">Cadastrar</button>
                <button type="submit">Limpar</button>
                <li><Link to="/estados">Voltar</Link></li>

            </form>
        </div>
    );
}

export default CreateEstado;