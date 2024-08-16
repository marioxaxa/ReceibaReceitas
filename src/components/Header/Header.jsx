import { IconButton } from "@mui/material";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
    return (
        <header>
            <div id="header-div">
                <div id="div-menu-bars">
                    <input
                        //id="menu-bars"
                        type="checkbox"
                        name="menu"
                        id="checkbox-menu"
                        checked
                    />
                    <div id="header-logo-menu">
                        <img
                            src="../../public/imagens/Comida_caseira_Logo_laranja__3_-removebg-preview 2.png"
                            alt="Logo do Receiba"
                        />
                    </div>
                </div>
                <div className="header-options">
                    <div>
                        <a href="../p_enviar/p_enviar.html">
                            Envie sua receita
                        </a>
                    </div>
                    <div>
                        <a href="../sobre/sobre.html">Sobre nós</a>
                    </div>
                </div>
                <div id="header-logo">
                    <a href="/index.html">
                        <img
                            src="../../public/imagens/Comida_caseira_Logo_laranja__3_-removebg-preview 2.png"
                            alt="Logo do Receiba"
                        />
                    </a>
                </div>
                <div className="header-options">
                    <div>
                        <a id="perfil-button" href="../login/login.html">
                            Perfil
                        </a>
                    </div>
                    <div>
                        <IconButton href="../p_busca/p_busca.html">
                            <SearchIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        </header>
    );
}
