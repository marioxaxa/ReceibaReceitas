import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header";
import ThemeContext from "./context/ThemeContext";
import Inicial from "./pages/Inicial/Inicial";
import PDeReceita from "./pages/PDeReceita/PDeReceita";
import Login from "./pages/Login/login";
import Ranking from "./pages/Ranking/ranking.jsx";
import Sobre from "./pages/Sobre/Sobre.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import AppContextDiv from "./context/AppContextDiv.jsx";
import PDePerfil from "./pages/perfil/PDePerfil.jsx";

function App() {
    return (
        <>
            <ThemeContext>
                <AppContextDiv>
                    <PDePerfil />
                </AppContextDiv>
            </ThemeContext>
        </>
    );
}

export default App;
