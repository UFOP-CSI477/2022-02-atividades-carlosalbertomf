import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { CidadeInterface } from "../cidades/ListCidades";


const CreateLocal = () => {


    const [nome, setNome] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cidade_id, setCidade_id] = useState(0);



    const navigate = useNavigate();

    const [cidades, setCidades] = useState<CidadeInterface[]>([]);

    useEffect(() => {

        api.get('/cidades')
        .then(response => {
            console.log(response.data);
            setCidades(response.data);
        })

    })


    const handleLocal = async (evenet: React.FormEvent<HTMLFormElement>) => {

        evenet.preventDefault();

        const data = {
            nome,
            rua,
            numero,
            complemento,
            cidade_id

        }

        try {
            if(data.nome === "" || data.rua === "" || data.numero.toString() === "" || data.cidade_id.toString() === "")
            {
                alert('Dados incompletos. Favor inserir os campos corretamente');
                
                return
            }

            await api.post('/locaisdecoleta', data);
            alert('Local de Coleta cadastrado com sucesso');
            navigate('/locaisdecoleta');

        } catch (error) {
            alert('Erro ao cadastrar um novo Local de Coleta');
            window.location.reload();
            console.error(error);

        }

    }

    return (

        <div>
            <h3>Cadastro de Local de Coleta: </h3>

            <form onSubmit={handleLocal}>

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text"
                        name="nome"
                        id="nome"
                        value={nome}
                        placeholder="Nome do Local de Coleta"
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
                    <label htmlFor="cidade_id">Cidade: </label>
                    <select
                        name="cidade_id"
                        id="cidade_id"
                        value={cidade_id}
                        onChange={e =>
                            setCidade_id(parseInt(e.target.value))}>
                        <option
                            value="0"
                            selected>Selecione</option>
                        {
                            cidades.map(cidades => (
                                <option
                                    value={cidades.id}>
                                    {cidades.nome}
                                </option>
                            ))
                        }
                    </select>
                </div>


                <button type="submit">Cadastrar</button>
                <button type="submit">Limpar</button>
                <li><Link to="/locaisdecoleta">Voltar</Link></li>

            </form>
        </div>
    );
}

export default CreateLocal;