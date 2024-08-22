import { IconButton } from "@mui/material";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";

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
                        <a>
                            <NavLink to={"/enviarreceita"}>
                                Envie sua receita
                            </NavLink>
                        </a>
                    </div>
                    <div>
                        <a>
                            <NavLink to={"/sobre"}> Sobre nós </NavLink>
                        </a>
                    </div>
                </div>
                <div id="header-logo">
                    <a href="">
                        <NavLink to={"/"}>
                            <img
                                src="../../public/imagens/Comida_caseira_Logo_laranja__3_-removebg-preview 2.png"
                                alt="Logo do Receiba"
                            />
                        </NavLink>
                    </a>
                </div>
                <div className="header-options">
                    <div>
                        <a id="perfil-button">
                            <NavLink to={"/login"}>Perfil</NavLink>
                        </a>
                    </div>
                    <div>
                        <NavLink to={"/buscar"}>
                            <IconButton color="info" >
                                <SearchIcon />
                            </IconButton>
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
}
