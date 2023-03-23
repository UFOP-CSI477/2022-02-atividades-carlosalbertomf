import { useState } from "react";
import api from "../../services/api";
import { Link, useNavigate } from "react-router-dom";

const CreateLocal = () => {


    const [descricao, setDescricao] = useState('');


    const navigate = useNavigate();


    const handleNovoLocal = async (evenet: React.FormEvent<HTMLFormElement>) => {

        evenet.preventDefault();

        const data = {
            descricao
        }

        try {
            if(data.descricao === "")
            {
                alert('Dados incompletos. Favor inserir a descrição do Local');
                
                return
            }

            await api.post('/local', data);
            alert('Local cadastrado com sucesso');
            navigate('/local');

        } catch (error) {
            alert('Erro ao cadastrar um novo Local');
            window.location.reload();
            console.error(error);

        }

    }


    return (

        <div>
            <h3>Cadastro de Local: </h3>

            <form onSubmit={handleNovoLocal}>

                <div>
                    <label htmlFor="descricao">Descricao</label>
                    <input type="text"
                        name="descricao"
                        id="descricao"
                        value={descricao}
                        placeholder="Nome do Local"
                        onChange={e => setDescricao(e.target.value)} 
                    />
                </div>

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>
                <li><Link to="/local">Voltar</Link></li>

            </form>
        </div>
    );
}

export default CreateLocal;