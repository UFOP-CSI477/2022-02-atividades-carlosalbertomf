import App from "./App"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ListLocal from "./components/locais/ListLocal";
import CreateLocal from "./components/locais/CreateLocal";
import UpdateLocal from "./components/locais/UpdateLocal";
import ListReserva from "./components/reservas/ListReserva";
import CreateReserva from "./components/reservas/CreateReserva";

const AppRoutes = () => {

return (

            <BrowserRouter>
                <Routes>
                    <Route path="/menu" element= { <App /> } />

                    <Route path="/local" element= {<ListLocal/>} />
                    <Route path="/local/novo" element= {<CreateLocal/>} />
                    <Route path="/local/:id" element= {<UpdateLocal/>} />

                    <Route path="/reserva" element= {<ListReserva/>} />
                    <Route path="/reserva/novo" element= {<CreateReserva/>} />
                    <Route path="/reserva/:id" element= {<UpdateLocal/>} />
                    

                </Routes>
            </BrowserRouter>
        )
}

export default AppRoutes;