import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import './PDePerfil.css'
import initializeContainer from "./perfilcontainer";

export default function PDePerfil() {

    initializeContainer()

    return (
        <>
            <Header />
            <main id="main-perfil">
                <div>
                    <div id="perfil-foto">
                        <svg
                            width="101"
                            height="100"
                            viewBox="0 0 101 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M50.5 0C22.624 0 0 22.4 0 50C0 77.6 22.624 100 50.5 100C78.376 100 101 77.6 101 50C101 22.4 78.376 0 50.5 0ZM50.5 20C60.2465 20 68.175 27.85 68.175 37.5C68.175 47.15 60.2465 55 50.5 55C40.7535 55 32.825 47.15 32.825 37.5C32.825 27.85 40.7535 20 50.5 20ZM50.5 90C40.2485 90 28.1285 85.9 19.493 75.6C28.0275 69 38.784 65 50.5 65C62.216 65 72.9725 69 81.507 75.6C72.8715 85.9 60.7515 90 50.5 90Z"
                                fill="black"
                            />
                        </svg>
                        <h1 id="h1-username">Username</h1>
                    </div>
                    <div id="perfil-estatisticas">
                        <div>
                            <div>
                                <svg
                                    width="30"
                                    height="33"
                                    viewBox="0 0 30 33"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_15_383)">
                                        <path
                                            d="M23.5625 14.2863L24.8875 12.8287C25.8625 11.7562 25.8625 10.01 24.8875 8.9375L23.125 6.99875C22.15 5.92625 20.5625 5.92625 19.5875 6.99875L18.2625 8.45625L23.5625 14.2863ZM16.4875 10.395L5 23.045V28.875H10.3L21.7875 16.2388L16.4875 10.395ZM23.75 24.0625C23.75 27.0737 20.575 28.875 17.5 28.875C16.8125 28.875 16.25 28.2563 16.25 27.5C16.25 26.7437 16.8125 26.125 17.5 26.125C19.425 26.125 21.25 25.1213 21.25 24.0625C21.25 23.4163 20.65 22.8662 19.7125 22.4125L21.5625 20.3775C22.9 21.2437 23.75 22.3988 23.75 24.0625ZM5.725 18.3563C4.5125 17.5863 3.75 16.5825 3.75 15.125C3.75 12.65 6.1125 11.5087 8.2 10.505C9.4875 9.8725 11.25 9.02 11.25 8.25C11.25 7.68625 10.275 6.875 8.75 6.875C7.175 6.875 6.5 7.71375 6.4625 7.755C6.025 8.31875 5.2375 8.3875 4.7125 7.92C4.2 7.4525 4.1 6.61375 4.525 6.0225C4.6625 5.83 5.95 4.125 8.75 4.125C11.55 4.125 13.75 5.94 13.75 8.25C13.75 10.8212 11.3375 11.99 9.2 13.0213C8.025 13.585 6.25 14.4375 6.25 15.125C6.25 15.5513 6.7875 15.95 7.5875 16.3075L5.725 18.3563Z"
                                            fill="#DE702B"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_15_383">
                                            <rect
                                                width="30"
                                                height="33"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <h3>Receitas</h3>
                            </div>
                            <p id="p-receitas">0</p>
                        </div>
                        <div>
                            <div>
                                <svg
                                    width="22"
                                    height="20"
                                    viewBox="0 0 22 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.9998 19.2396L9.429 17.8646C3.84984 13 0.166504 9.79167 0.166504 5.85417C0.166504 2.64583 2.78817 0.125 6.12484 0.125C8.00984 0.125 9.819 0.96875 10.9998 2.30208C12.1807 0.96875 13.9898 0.125 15.8748 0.125C19.2115 0.125 21.8332 2.64583 21.8332 5.85417C21.8332 9.79167 18.1498 13 12.5707 17.875L10.9998 19.2396Z"
                                        fill="#DE702B"
                                    />
                                </svg>
                                <h3>Ameis</h3>
                            </div>
                            <p id="p-curtidas">0</p>
                        </div>
                    </div>
                </div>
                <div className="receita-box" id="suas-receitas">
                    <div>
                        <svg
                            width="30"
                            height="33"
                            viewBox="0 0 30 33"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_15_383)">
                                <path
                                    d="M23.5625 14.2863L24.8875 12.8287C25.8625 11.7562 25.8625 10.01 24.8875 8.9375L23.125 6.99875C22.15 5.92625 20.5625 5.92625 19.5875 6.99875L18.2625 8.45625L23.5625 14.2863ZM16.4875 10.395L5 23.045V28.875H10.3L21.7875 16.2388L16.4875 10.395ZM23.75 24.0625C23.75 27.0737 20.575 28.875 17.5 28.875C16.8125 28.875 16.25 28.2563 16.25 27.5C16.25 26.7437 16.8125 26.125 17.5 26.125C19.425 26.125 21.25 25.1213 21.25 24.0625C21.25 23.4163 20.65 22.8662 19.7125 22.4125L21.5625 20.3775C22.9 21.2437 23.75 22.3988 23.75 24.0625ZM5.725 18.3563C4.5125 17.5863 3.75 16.5825 3.75 15.125C3.75 12.65 6.1125 11.5087 8.2 10.505C9.4875 9.8725 11.25 9.02 11.25 8.25C11.25 7.68625 10.275 6.875 8.75 6.875C7.175 6.875 6.5 7.71375 6.4625 7.755C6.025 8.31875 5.2375 8.3875 4.7125 7.92C4.2 7.4525 4.1 6.61375 4.525 6.0225C4.6625 5.83 5.95 4.125 8.75 4.125C11.55 4.125 13.75 5.94 13.75 8.25C13.75 10.8212 11.3375 11.99 9.2 13.0213C8.025 13.585 6.25 14.4375 6.25 15.125C6.25 15.5513 6.7875 15.95 7.5875 16.3075L5.725 18.3563Z"
                                    fill="#DE702B"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_15_383">
                                    <rect width="30" height="33" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <h3>Suas Receitas</h3>
                    </div>
                    <div className="card-holder" id="suas-receitas-card"></div>
                </div>
                <div className="receita-box">
                    <div>
                        <svg
                            width="31"
                            height="31"
                            viewBox="0 0 31 31"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_15_526)">
                                <path
                                    d="M21.9585 3.875H9.04183C7.621 3.875 6.47141 5.0375 6.47141 6.45833L6.4585 27.125L15.5002 23.25L24.5418 27.125V6.45833C24.5418 5.0375 23.3793 3.875 21.9585 3.875Z"
                                    fill="#DE702B"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_15_526">
                                    <rect width="31" height="31" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <h3>Receitas Salvas</h3>
                    </div>
                    <div className="card-holder" id="card-holder"></div>
                </div>
            </main>
            <Footer />
        </>
    );
}
