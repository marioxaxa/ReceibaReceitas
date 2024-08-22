import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header";
import ThemeContext from "./context/ThemeContext";
import EnviarReceita from "./pages/EnviarReceita/EnviarReceita";
import Inicial from "./pages/Inicial/Inicial";
import PDeReceita from "./pages/PDeReceita/PDeReceita";

function App() {
    return (
        <>
            <ThemeContext>
                <EnviarReceita />
            </ThemeContext>
        </>
    );
}

export default App;
