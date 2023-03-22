import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link, redirect, useNavigate, useParams } from "react-router-dom";

const UpdatePessoa = () => {


    const [nome, setNome] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [documento, setDocumento] = useState('');
    const [cidade_id, setCidade_id] = useState('');
    const [tipo_id, setTipo_id] = useState('');


    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/pessoas/${id}`).then(response => {
            setNome(response.data.nome);
            setRua(response.data.rua);
            setNumero(response.data.numero);
            setComplemento(response.data.complemento);
            setDocumento(response.data.documento);
            setCidade_id(response.data.cidade_id);
            setTipo_id(response.data.tipo_id);
        })
    }, [id]);


    const handleUpdatePessoa = async (evenet: React.FormEvent<HTMLFormElement>) => {

        evenet.preventDefault();

        const data = {
            id: parseInt(String(id)),
            nome,
            rua,
            numero,
            complemento,
            documento,            
            cidade_id: parseInt(cidade_id),
            tipo_id: parseInt(tipo_id)
        }

        try {

            if(data.nome === "" || data.rua === "" || data.documento === "" || numero.toString() === "")
            {
                alert('Dados incompletos. Favor inserir os campos corretamente');
                return
            }

            

            await api.put('/pessoas', data);
            alert('Pessoa atualizada com sucesso');
            navigate('/pessoas');

        } catch (error) {
            alert('Erro ao atualizar a Pessoa');
            console.error(error);

        }

    }


    return (

        <div>
            <h3>Cadastro de Pessoa: </h3>

            <form onSubmit={handleUpdatePessoa}>

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
                    <label htmlFor="documento">Documento</label>
                    <input type="text"
                        name="documento"
                        id="documento"
                        value={documento}
                        placeholder="Documento"
                        onChange={e => setDocumento(e.target.value)}
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

                <div>
                    <label htmlFor="tipo_id">ID do Tipo</label>
                    <input type="number"
                        name="tipo_id"
                        id="tipo_id"
                        value={tipo_id}
                        placeholder="ID do Tipo"
                        onChange={e => setTipo_id(e.target.value)}
                    />
                </div>


                <button type="submit">Atualizar</button>
                <Link to="/estados">Cancelar</Link>
                <li> <Link to="/">Voltar</Link> </li>

            </form>
        </div>
    );
}

export default UpdatePessoa;