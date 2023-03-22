import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link, redirect, useNavigate, useParams } from "react-router-dom";

const UpdateLocais = () => {


    const [nome, setNome] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cidade_id, setCidade_id] = useState('');

    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/locaisdecoleta/${id}`).then(response => {
            setNome(response.data.nome);
            setRua(response.data.rua);
            setNumero(response.data.numero);
            setComplemento(response.data.complemento);
            setCidade_id(response.data.cidade_id);
        })
    }, [id]);


    const handleUpdateLocais = async (evenet: React.FormEvent<HTMLFormElement>) => {

        evenet.preventDefault();

        const data = {
            id: parseInt(String(id)),
            nome,
            rua,
            numero,
            complemento,          
            cidade_id: parseInt(cidade_id)
        }

        try {

            if(data.nome === "" || data.rua === "" || data.numero.toString() === "" || data.cidade_id.toString() === "")
            {
                alert('Dados incompletos. Favor inserir os campos corretamente');
                return
            }

            

            await api.put('/locaisdecoleta', data);
            alert('Local de Coleta atualizado com sucesso');
            navigate('/locaisdecoleta');

        } catch (error) {
            alert('Erro ao atualizar o Local de Coleta');
            console.error(error);

        }

    }


    return (

        <div>
            <h3>Cadastro de Local de Coleta: </h3>

            <form onSubmit={handleUpdateLocais}>

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text"
                        name="nome"
                        id="nome"
                        value={nome}
                        placeholder="Nome do Estado"
                        onChange={e => setNome(e.target.value)} 
                    />
                </div>

                <div>
                    <label htmlFor="rua">Rua</label>
                    <input type="text"
                        name="rua"
                        id="rua"
                        value={rua}
                        placeholder="Rua"
                        onChange={e => setRua(e.target.value)}
                    />
                </div>


                <div>
                    <label htmlFor="numero">Número</label>
                    <input type="number"
                        name="numero"
                        id="numero"
                        value={numero}
                        placeholder="Número"
                        onChange={e => setNumero(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="complemento">Complemento</label>
                    <input type="text"
                        name="complemento"
                        id="complemento"
                        value={complemento}
                        placeholder="Complemento"
                        onChange={e => setComplemento(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="cidade_id">ID da Cidade</label>
                    <input type="number"
                        name="cidade_id"
                        id="cidade_id"
                        value={cidade_id}
                        placeholder="ID da cidade"
                        onChange={e => setCidade_id(e.target.value)}
                    />
                </div>


                <button type="submit">Atualizar</button>
                <Link to="/locaisdecoleta">Cancelar</Link>
                <li> <Link to="/">Voltar</Link> </li>

            </form>
        </div>
    );
}

export default UpdateLocais;