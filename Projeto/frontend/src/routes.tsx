import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './App';

import CreatePessoa from './components/usuarios/CreatePessoa';
import ListPessoas from './components/usuarios/ListUsuarios';
import UpdatePessoa from './components/usuarios/UpdateUsuario';
import CreateLocal from './components/servicos/CreateLocal';
import ListLocais from './components/servicos/ListLocais';
import UpdateLocal from './components/servicos/UpdateLocal';
import CreateDoacao from './components/cotacoes/CreateDoacao';
import ListDoacoes from './components/cotacoes/ListDoacoes';
import UpdateDoacao from './components/cotacoes/UpdateDoacao';

const AppRoutes = () => {

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <App /> } />

                <Route path="/pessoas/create" element={<CreatePessoa />} />
                <Route path="/pessoas" element={<ListPessoas />} />
                <Route path="/pessoas/update/:id" element={ <UpdatePessoa /> } />

                <Route path="/locais/create" element={<CreateLocal />} />
                <Route path="/locais" element={<ListLocais />} />
                <Route path="/locais/update/:id" element={<UpdateLocal />} />

                <Route path="/doacoes/create" element={<CreateDoacao />} />
                <Route path="/doacoes/" element={<ListDoacoes />} />
                <Route path="/doacoes/update/:id" element={<UpdateDoacao />} />



            </Routes>
        </BrowserRouter>

    );

}

export default AppRoutes;