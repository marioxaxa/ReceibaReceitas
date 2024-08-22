import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header";
import ThemeContext from "./context/ThemeContext";
import BuscarReceita from "./pages/BuscaReceita/BuscarReceita";
import Inicial from "./pages/Inicial/Inicial";
import PDeReceita from "./pages/PDeReceita/PDeReceita";

function App() {
    return (
        <>
            <ThemeContext>
                <BuscarReceita />
            </ThemeContext>
        </>
    );
}

export default App;
