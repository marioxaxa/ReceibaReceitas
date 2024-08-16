import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header";
import ThemeContext from "./context/ThemeContext";
import Inicial from "./pages/Inicial/Inicial";
import PDeReceita from "./pages/PDeReceita/PDeReceita";

function App() {
    return (
        <>
            <ThemeContext>
                <PDeReceita />
            </ThemeContext>
        </>
    );
}

export default App;
