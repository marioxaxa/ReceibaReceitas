import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header";
import ThemeContext from "./context/ThemeContext";
import BuscarReceita from "./pages/BuscaReceita/BuscarReceita";
import EnviarReceita from "./pages/EnviarReceita/EnviarReceita";
import Inicial from "./pages/Inicial/Inicial";
import PDeReceita from "./pages/PDeReceita/PDeReceita";
import Login from "./pages/Login/login";
import Ranking from "./pages/Ranking/ranking.jsx";
import Sobre from "./pages/Sobre/Sobre.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import AppContextDiv from "./context/AppContextDiv.jsx";
import PDePerfil from "./pages/perfil/PDePerfil.jsx";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BuscarReceita from "./pages/BuscarReceita/BuscarReceita.jsx";

function App() {
    return (
        <>
            <ThemeContext>
                <AppContextDiv>
                    <Router>
                        <Header />
                        <Routes>
                            <Route path="/" element={<Inicial />} />
                            <Route path="/enviarreceita" element={<EnviarReceita />} />
                            <Route path="/sobre" element={<Sobre />} />
                            <Route path="/perfil" element={<PDePerfil />} />
                            <Route path="/receita" element={<PDeReceita />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/ranking" element={<Ranking />} />
                            <Route path="/buscar" element={<BuscarReceita />} />
                        </Routes>
                        <Footer />
                    </Router>
                </AppContextDiv>
            </ThemeContext>
        </>
    );
}

export default App;
