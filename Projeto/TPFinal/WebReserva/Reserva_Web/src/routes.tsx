import App from "./App"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ListLocal from "./components/locais/ListLocal";
import CreateLocal from "./components/locais/CreateLocal";
import UpdateLocal from "./components/locais/UpdateLocal";
import ListReserva from "./components/reservas/ListReserva";
import CreateReserva from "./components/reservas/CreateReserva";
import UpdateReserva from "./components/reservas/UpdateReserva";
import ListUsuario from "./components/usuarios/ListUsuario";
import CreateUsuario from "./components/usuarios/CreateUsuario";
import UpdateUsuario from "./components/usuarios/UpdateUsuario";

const AppRoutes = () => {

return (

            <BrowserRouter>
                <Routes>
                    <Route path="/" element= { <App /> } />

                    <Route path="/local" element= {<ListLocal/>} />
                    <Route path="/local/novo" element= {<CreateLocal/>} />
                    <Route path="/local/:id" element= {<UpdateLocal/>} />

                    <Route path="/reserva" element= {<ListReserva/>} />
                    <Route path="/reserva/novo" element= {<CreateReserva/>} />
                    <Route path="/reserva/:id" element= {<UpdateReserva/>} />

                    <Route path="/usuario" element= {<ListUsuario/>} />
                    <Route path="/usuario/novo" element= {<CreateUsuario/>} />
                    <Route path="/usuario/:id" element= {<UpdateUsuario/>} />
                    

                </Routes>
            </BrowserRouter>
        )
}

export default AppRoutes;