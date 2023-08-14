import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link, redirect, useNavigate, useParams } from "react-router-dom";

const UpdateLocal = () => {


    const [descricao, setDescricao] = useState('');

    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/local/${id}`).then(response => {
            setDescricao(response.data.descricao);
        })
    }, [id]);


    const handleUpdateDescricao = async (evenet: React.FormEvent<HTMLFormElement>) => {

        evenet.preventDefault();

        const data = {
            id: parseInt(String(id)),
            descricao
        }

        try {

            if(data.descricao === "")
            {
                alert('Dados incompletos. Favor inserir a descrição do Local');
                return
            }

            

            await api.put('/local', data);
            alert('Local atualizado com sucesso');
            navigate('/local');

        } catch (error) {
            alert('Erro ao atualizar o Local');
            console.error(error);

        }

    }

    const linkCancel = {
        margin: "1rem",
        textDecoration: "none",
        color: 'red'
      };

      const linkVoltar = {
        margin: "1rem",
        textDecoration: "none",
        color: 'blue'
      };


    return (

        <div>
            <h3>Cadastro de Local: </h3>

            <form onSubmit={handleUpdateDescricao}>

                <div>
                    <label htmlFor="descricao">Descrição do Local: </label>
                    <input type="text"
                        name="descricao"
                        id="descricao"
                        value={descricao}
                        placeholder="Nome do Local"
                        onChange={e => setDescricao(e.target.value)} // pega o valor
                    />
                </div>

                <button type="submit" className="button buttonAtt">Atualizar</button>
                <Link to="/local" style={linkCancel}>Cancelar</Link>
                <li> <Link to="/" style={linkVoltar}>Voltar</Link> </li>

            </form>
        </div>
    );
}

export default UpdateLocal;