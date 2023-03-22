import App from "./App"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ListEstados from "./components/estados/ListEstados"
import ListUnidade from "./components/unidades/ListUnidades"
import CreateEstado from "./components/estados/CreateEstado"
import UpdateEstado from "./components/estados/UpdateEstado"
import ListTiposSanguineos from "./components/tipos_sanguineos/ListTiposSanguineos"
import CreateTipoSanguineo from "./components/tipos_sanguineos/CreateTiposSanguineos"
import ListCidades from "./components/cidades/ListCidades"
import CreateCidade from "./components/cidades/CreateCidade"
import ListPessoas from "./components/pessoas/ListPessoa"
import CreatePessoa from "./components/pessoas/CreatePessoa"
import UpdatePessoa from "./components/pessoas/UpdatePessoa"
import UpdateTipoSanguineo from "./components/tipos_sanguineos/UpdateTiposSanguineos"
import ListLocais from "./components/locais_coleta/ListLocais"
import CreateLocal from "./components/locais_coleta/CreateLocais"
import UpdateLocais from "./components/locais_coleta/UpdateLocais"
import ListDoacoes from "./components/doacoes/ListDoacoes"
import CreateDoacao from "./components/doacoes/CreateDoacoes"
import UpdateDoacao from "./components/doacoes/UpdateDoacoes"
import UpdateCidades from "./components/cidades/UpdateCidades"


const AppRoutes = () => {

return (

            <BrowserRouter>
                <Routes>
                    <Route path="/" element= { <App /> } />


                    <Route path="/unidades" element= {<ListUnidade/>} />


                    <Route path="/estados" element= {<ListEstados/>} />
                    <Route path="/estados/novo" element= {<CreateEstado/>} />
                    <Route path="/estados/:id" element= {<UpdateEstado/>} />


                    <Route path="/tiposanguineo" element= {<ListTiposSanguineos/>} />
                    <Route path="/tiposanguineo/novo" element= {<CreateTipoSanguineo/>} />
                    <Route path="/tiposanguineo/:id" element= {<UpdateTipoSanguineo/>} />


                    <Route path="/cidades" element= {<ListCidades/>} />
                    <Route path="/cidades/novo" element= {<CreateCidade/>} />
                    <Route path="/cidades/:id" element= {<UpdateCidades/>} />

                    <Route path="/pessoas" element={<ListPessoas/>}></Route>
                    <Route path="/pessoas/novo" element= {<CreatePessoa/>} />
                    <Route path="/pessoas/:id" element= {<UpdatePessoa/>} />

                    <Route path="/locaisdecoleta" element={<ListLocais/>}></Route>
                    <Route path="/locaisdecoleta/novo" element={<CreateLocal/>}></Route>
                    <Route path="/locaisdecoleta/:id" element={<UpdateLocais/>}></Route>


                    <Route path="/doacoes" element={<ListDoacoes/>}></Route>
                    <Route path="/doacoes/novo" element={<CreateDoacao/>}></Route>
                    <Route path="/doacoes/:id" element={<UpdateDoacao/>}></Route>

                    

                </Routes>
            </BrowserRouter>
        )
}

export default AppRoutes;