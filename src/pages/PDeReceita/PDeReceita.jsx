import { Container } from "@mui/material";
import Footer from "../../components/footer/Footer";
import Header from "../../components/Header/Header";
import "./PDeReceita.css";
import { AppContext } from "../../context/AppContextDiv";
import React, { useEffect } from "react";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import app from "../../services/firebaseapp";

export default function PDeReceita() {
    const { recipe } = React.useContext(AppContext);

    useEffect(() => {
        async function changeImage() {
            const storage = getStorage(app);

            const pathReference = ref(storage, 'perunatalino.jpg');

            const url = await getDownloadURL(pathReference);
            
            document.querySelector("#img-semana").src = url;
        }
        
        changeImage()
      
    }, [])
    

    return (
        <>
            <main>
                <section  >
                    <h1 id="receita-nome">{recipe.nome}</h1>
                    <article>
                        <img
                            id="receita-img"
                            src={recipe.imageUrl}
                            alt=""
                        />

                        <div id="food-type">
                            <div>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11 10.175V7C11 6.71667 10.9043 6.479 10.713 6.287C10.521 6.09567 10.2833 6 10 6C9.71667 6 9.47933 6.09567 9.288 6.287C9.096 6.479 9 6.71667 9 7V10C9 10.3333 9.05833 10.6417 9.175 10.925C9.29167 11.2083 9.46667 11.4667 9.7 11.7L11.825 13.825C12.025 14.025 12.2627 14.125 12.538 14.125C12.8127 14.125 13.05 14.025 13.25 13.825C13.4333 13.625 13.525 13.3877 13.525 13.113C13.525 12.8377 13.4333 12.6083 13.25 12.425L11 10.175ZM10 2C9.71667 2 9.47933 2.09567 9.288 2.287C9.096 2.479 9 2.71667 9 3C9 3.28333 9.096 3.521 9.288 3.713C9.47933 3.90433 9.71667 4 10 4C10.2833 4 10.521 3.90433 10.713 3.713C10.9043 3.521 11 3.28333 11 3C11 2.71667 10.9043 2.479 10.713 2.287C10.521 2.09567 10.2833 2 10 2ZM18 10C18 9.71667 17.904 9.479 17.712 9.287C17.5207 9.09567 17.2833 9 17 9C16.7167 9 16.4793 9.09567 16.288 9.287C16.096 9.479 16 9.71667 16 10C16 10.2833 16.096 10.5207 16.288 10.712C16.4793 10.904 16.7167 11 17 11C17.2833 11 17.5207 10.904 17.712 10.712C17.904 10.5207 18 10.2833 18 10ZM10 16C9.71667 16 9.47933 16.096 9.288 16.288C9.096 16.4793 9 16.7167 9 17C9 17.2833 9.096 17.5207 9.288 17.712C9.47933 17.904 9.71667 18 10 18C10.2833 18 10.521 17.904 10.713 17.712C10.9043 17.5207 11 17.2833 11 17C11 16.7167 10.9043 16.4793 10.713 16.288C10.521 16.096 10.2833 16 10 16ZM4 10C4 9.71667 3.90433 9.479 3.713 9.287C3.521 9.09567 3.28333 9 3 9C2.71667 9 2.479 9.09567 2.287 9.287C2.09567 9.479 2 9.71667 2 10C2 10.2833 2.09567 10.5207 2.287 10.712C2.479 10.904 2.71667 11 3 11C3.28333 11 3.521 10.904 3.713 10.712C3.90433 10.5207 4 10.2833 4 10ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20Z"
                                        fill="black"
                                    />
                                </svg>
                                <p id="receita-tempo">{recipe.tempo}</p>
                            </div>
                            <div>
                                <svg
                                    width="25"
                                    height="25"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                    <rect
                                        width="25"
                                        height="25"
                                        fill="url(#pattern0_15_31)"
                                    />
                                    <defs>
                                        <pattern
                                            id="pattern0_15_31"
                                            patternContentUnits="objectBoundingBox"
                                            width="1"
                                            height="1"
                                        >
                                            <use
                                                xlinkHref="#image0_15_31"
                                                transform="scale(0.0104167)"
                                            />
                                        </pattern>
                                        <image
                                            id="image0_15_31"
                                            width="96"
                                            height="96"
                                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFgUlEQVR4nO2d22tcVRTGfyo6TYoOjU0fKjZeEK13bKU+iBeoKaJtxXrpu4i1wVJpQf8EH7TWXoSg9EEQRBFtfQhWH72M4KWtGEtx0hpsEWxiIiIWbbdsWSNDcJKZnLX3WefM/mC9JDN71vrWOevsvdfa60BCQkJCQkJCQkJCQoItLAHWAFuAvcDHwBGgDkwCZ0Qm5W/+fx/JZ58BBoH+vI0oEnqB9cArQuY5wGWUczLWTmAd0JO3kdZwPnAnMAxMKxA+l/wBvA2sBS6gi7EA2AyMRSC9lfiw9bTo0lVhZjtwKkfiZ4rXZZvoVmr42/64AcJdC/kJeJQS4grgAwMEuzZlPzBASfCQTBNdwWQaeJwCoyLTSVdwGRZbCoVLgc8NkOeU5FOgj4JgqSx8XMlkFFiGcVwHjBsgywWScbHRJC4DThggyUWYqg5YjPmjBshxkeSYbBSaQKVkD1zXpnxmZXa0xwAZLifZlTf5jxggweUsG/LcXpjKqPxZAwRmlV/zeihn3dv5EbgeqBkgMascyGN/J2tSZKWMVS3JQ9zv9EZBr8J8//kZY1YD3Qk+xI0ATwA3A4uAhcCV8vzarxgGx2KlO7dnVPTnFomPqrIT3hGi58JKxRzFswTGAoVM1quzjF9VcIKfGDzYoV39Sk44GXptsFlBSV/1QCAnjAM3ztO225XC0SYCVi9oJNBvauO3qvNwwmlgeUYbDygl+s8jAO5VUM7Jph1tOuGLDmp/Og07IReWdxMA+5SUa+cO6NQJb6KDq5RsfB1l+FnLb0rK+eo0FJ3wtxCngYVKNk5pT0nXKynmpG4TRSeMKNpZVbRTIyT+B83keqt1QDvkfB941nGrop07FPVSz/E+Nw8dNkq4mTmWJ00LTyraeEhLqSVKVcrN8jtwiwL5TrJxWjioaKNfUyzWUGqNMvkNOS4VFFnIdxKaNHB1gO3x+zQU2xLIAU5yq7OtC3yd5l9zjKFVpfBuAPuGNBTbG9ABDjja4k6Y68p3slq+RMHGdYFs262g279HflxkJ2xsk3yN8HNDwIMhHyrox7cRHOCanBCT/OWSmQtl02EFHaPW849HJN8vLicC2+M3LzPjdEQHuAjkXwO8FUnfXzQccKaA5F8ss6NFkmy5TXIZI5ErMf4siwO+FDLbhZVEv4oDJgpGviUnqISgEwUk34oTxoo0DXXK5FtwwuGiLMRcoKlm6LqjKAuxPYbJr3b42VoRq6dDbsa5DGGnQehXHRygix2OhixvRzsF8hvfteqE1SigP0BCJmvYqQUaQ1POaiaLjhi98t0MsXQnfI0idhaAfGfMCS+iiBAJi1rAkGEhHD2AInoUjiOFvvKdoTthOsRZgX0FIt/l7ITXCIB7lJQbjBwaah2Eo0ElG+8iUHl6XUE5H8pWRY7LtTacsEopzP4Qqjxd64BGwwl3RH4ozhaOVig2lXqKgKjIMZxQTqgGXiD9nxM0yT8VowPjNkVCppqcEGuzrNkJmuR72UoE9CpXSkzJwy/mTmVNflNzal2P2ZX3/ohkuYKI6nmAWAfaXEnkPXLAgDSqcF0uk3n2klsbYavaGRZv+8PkjF0GiHA5ycsYQEX6arouk0+AizCCqpRguC6R7yw2cu2mtpXLMIpuaNx6LcaxtKThaBS4nIKgT/pquhI9cPsoGC4EXijBOmHY0mxnvkeBivoCh8coCQYKtnf0vuWZTtatizxfW+Xa2FJWLSexiF7pLnjSAOHNc/ut3faWvYq8RK2e8xW/yUoX9DyxQnoSxTgS67Ngb0jlcrDqhaKiRzJLO6TfjsaRUj/GN8BLEt+76rWFWbFYWr4MSeOLg+KYupzebLzOdkL+dkiOBe2W76zW6tmTkJCQkJCQkJCQkJCAEv4Bt0c9ZD6+j2YAAAAASUVORK5CYII="
                                        />
                                    </defs>
                                </svg>
                                <p id="receita-tipo">{recipe.tipo}</p>
                            </div>
                            <div>
                                <svg
                                    width="23"
                                    height="23"
                                    viewBox="0 0 23 23"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                    <rect
                                        width="23"
                                        height="23"
                                        fill="url(#pattern0_15_19)"
                                    />
                                    <defs>
                                        <pattern
                                            id="pattern0_15_19"
                                            patternContentUnits="objectBoundingBox"
                                            width="1"
                                            height="1"
                                        >
                                            <use
                                                xlinkHref="#image0_15_19"
                                                transform="scale(0.0104167)"
                                            />
                                        </pattern>
                                        <image
                                            id="image0_15_19"
                                            width="96"
                                            height="96"
                                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEMElEQVR4nO2cTYsdRRSGn0lINgl+YRJxlTjqJhuTiIJGYtyIK+MkjqAgiMQ/EAU1oCYiqCOIuNaFjgFdxbWJg6ARv3bBmfFzowuNKE5EM0IsKTgXZpJ7u6vura6uvnkfOJue29XnPafrVHVV94AQQgghhBBCCCGEEEIIIUQ5TAC7gKPAHLAA/GU2b8eOADvbdnQcAz8NLAIu0HxyDti5YgQmgc8iAn+hfQpsUwaGYzfwywjB79lvwF1KQhx7gX8TBL9ny8AeJSGMbcCvCYO/sidcryRUMzFiza+zUxqYq3mgweD3bL96weC7fzFDAvwzg+jDzRmC37MdysDFPJ8xAc8pARczlzEBJ7uegPU2YB67YE1mwY5N229iWMyYgIUC9A6Nn0V8HyDyO2Aqot2ljAlYKkBvNGuBV4YQOwOs6WAC1jasN5phnOnZS4WVoPkC9EaxP4HofTXX+LCgQTiH3mDWW30b1aEfagaqIxkT8EwBeltZHri/4jo7MybgpgL0BnMsoUOzNUsRCxmC/3UheoP5JuP8+0CGBNxXkN4gljJO/yZsG7Gp4H8csBydU28QZxM69GfA9bY2uCEzWaDerPPz0C65x7YRU13Xt3VHwXqzDUpvR1z39oSb8ns7oHcg0wkd8oNs7P7wqRFr/tYO6W30weRbYN0Q15+wJ9P5yKnmVEf19mUqgUP3JvBjh22mnLSEnDWbt2PP1jxkdU3vKmZGcOZFusdMaXr9EuvLQ64MNrI82zDF6t1n9S2kBibvhi1QpN51ttA026cWz9ron2wAKoBLTa8QQgjB1cCdwEGbl78PfGmviZwBzpmdsWP+b8fttwdtUc+3IQK51mYbr1kw/0vwROosOW8BjwHb9Yr6arbb8kLMWs+o9qMl2X8GdUmyBTgMnM4Y9EF22nzZTEe4BngIeBW4JfLc64A3rW67wsz79MYQX1XearF40G6sRvB3x+O2Nn/eHPaDXSiXA68n3uVyDdmylafLIvQdt3N9bD4BDgGbSMAu2yFa7rPZHNpl7wF+LiCwLtJ+Au4O1Li5z16y71HvDPvl/o3AexWzkNB3H59e0WO6aOeBJwO1Dlo59TF8F7ghpJE1VmqqavS5wFr3QgEBdInMf71Tx5aaEvuPlaaBS9VXBL4g+0GAM48UEDSX2B4O0H0ioJ0TNiau4irgi0BHDgXcCX8UEDCX2H4PGPeeCGzrc+DKlR8ifBThyG01ThwuIFiuIXuqRvvuiLbmLPY8GumEn8tX8VUBgXINma8SVUxGtudLdfS/BthQ48Q4lh9n5rVVsTGyPf8eLH9HnlSHG3OrI6YtH/tWHXAdtNT6W3fAdcyUAJQA9YAKVIJQCWq9TjuNAe0HymkQbj9YTrOg8bM6ottr2wHXMVMCUALUAypQCaJjJUgIIYQQQgghhBBCCCGEEIw1/wM0UiIvl4A7TAAAAABJRU5ErkJggg=="
                                        />
                                    </defs>
                                </svg>
                                <p id="receita-porcoes">{recipe.porcoes}</p>
                            </div>
                        </div>

                        <div id="ingredientes-div">
                            <h1>Ingredientes</h1>
                            <ul id="receita-ingredientes">
                                {recipe.ingredientes
                                    .replaceAll("\n", "")
                                    .split(",")
                                    .map((ingrediente, index) => {
                                        return (
                                            <li key={index}>{ingrediente}</li>
                                        );
                                    })}
                            </ul>
                        </div>
                        <div id="preparo-div">
                            <h1>Preparo</h1>
                            <p id="receita-preparo">{recipe.preparo}</p>
                        </div>
                        <sub id="receita-autor">autor:{recipe.autor}</sub>
                    </article>
                    <div id="comments-div">
                        <div>
                            <div>
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 28 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                    <rect
                                        width="28"
                                        height="28"
                                        fill="url(#pattern0_15_38)"
                                    />
                                    <defs>
                                        <pattern
                                            id="pattern0_15_38"
                                            patternContentUnits="objectBoundingBox"
                                            width="1"
                                            height="1"
                                        >
                                            <use
                                                xlinkHref="#image0_15_38"
                                                transform="scale(0.0104167)"
                                            />
                                        </pattern>
                                        <image
                                            id="image0_15_38"
                                            width="96"
                                            height="96"
                                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB80lEQVR4nO2cO04DQRAFXwCchAgO6JSEBAlj5LsQwA1IMXcgBmM+BhqtZESAHOAd+/XsVEmdT091v4l2JQAAAAAAAAAAgPUcS7qQNJM0lxSN13x1F2NJR9scnANJU0kfCZqOpLVcDef+Ni7/JkGDUUldSdorKWCaoKmorM5KZj6xo38LeJd0WELAJME0RaV1WkLAfYJGotK6LSHgKUEjUWk9lBDgbiIqrmcECAHuKQw2wH8RQQT9XkJ2YuhvQHYCAV4QMCABi2wHai2CFtkOhIANQIDYgF0y+AhqqRYIEAJarhc2QAhwT2GwAf6LCCLIfxlhKN4AIeDPVGQnhr4B2YmC9ZrtQAjYAASIDdglRJAZBJhBgJnBC2ip3hAgBLinMNgA/0UEEeS/jDAUb4AQYJ/CYAPa/lS1N6UPtWsCAQjoBRsgIqgPRBAR1A8iSERQH4ighiNoWXsDUXkhQAiwT2GwAf6LiJoj6DFBI9GygFmCRqLS6n522JtxgkaiZQHd73j5baV8AjouE0xTtCyg+xfydYKGolUBPxImq5fd3VhUUp/aAt2bcC7pjn+KyiKgNUZZIqhlRpkiqFVGCKhPAhtgloAAswQEmCUgwCwBAWYJX7s4AGitBASYJSDALAEBZgkIMEtAgFkCAsycuA8AAABKyzeWgeN9n/Y6fAAAAABJRU5ErkJggg=="
                                        />
                                    </defs>
                                </svg>
                                <h3>Comentários</h3>
                            </div>
                            <div>
                                <div id="salvar-div">
                                    <svg
                                        width="21"
                                        height="20"
                                        viewBox="0 0 21 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_15_56)">
                                            <path
                                                d="M21 5.33333H19.25V7H17.5V5.33333H15.75V3.66667H17.5V2H19.25V3.66667H21V5.33333ZM19.25 17L13.125 14.5L7 17V3.66667C7 2.75 7.7875 2 8.75 2H14.875C14.3238 2.7 14 3.55833 14 4.5C14 6.8 15.96 8.66667 18.375 8.66667C18.6725 8.66667 18.97 8.64167 19.25 8.58333V17Z"
                                                fill="#DE702B"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_15_56">
                                                <rect
                                                    width="21"
                                                    height="20"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <h4>Salvar receita</h4>
                                </div>
                                <div id="amei-div">
                                    <svg
                                        width="17"
                                        height="17"
                                        viewBox="0 0 17 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_15_75)">
                                            <path
                                                d="M11.6875 2.125C10.455 2.125 9.27208 2.69875 8.5 3.60542C7.72791 2.69875 6.545 2.125 5.3125 2.125C3.13083 2.125 1.41666 3.83917 1.41666 6.02083C1.41666 8.69833 3.825 10.88 7.47291 14.195L8.5 15.1229L9.52708 14.1879C13.175 10.88 15.5833 8.69833 15.5833 6.02083C15.5833 3.83917 13.8692 2.125 11.6875 2.125ZM8.57083 13.1396L8.5 13.2104L8.42916 13.1396C5.0575 10.0867 2.83333 8.06792 2.83333 6.02083C2.83333 4.60417 3.89583 3.54167 5.3125 3.54167C6.40333 3.54167 7.46583 4.24292 7.84125 5.21333H9.16583C9.53416 4.24292 10.5967 3.54167 11.6875 3.54167C13.1042 3.54167 14.1667 4.60417 14.1667 6.02083C14.1667 8.06792 11.9425 10.0867 8.57083 13.1396Z"
                                                fill="#DE702B"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_15_75">
                                                <rect
                                                    width="17"
                                                    height="17"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <h4>Amei</h4>
                                </div>
                            </div>
                        </div>
                        <div id="comment-container">
                            <input
                                id="comment-input"
                                type="text"
                                name=""
                                placeholder="Adicione um comentário"
                            />
                            <button
                                id="comment-submit"
                                className="btn btn-primary"
                            >
                                Enviar
                            </button>
                        </div>
                        <div id="comentarios-list"></div>
                    </div>
                </section>

                <aside>
                    <a href="../p_receita/p_receita.html" id="a-semana">
                        <h1>Receita da semana</h1>
                        <sub>Por: Felipinho</sub>
                        <div id="semana-img-div">
                            <img src="" alt="" id="img-semana" />
                        </div>

                        <h2>Peru natalino</h2>
                        <p>
                            Celebre as festividades natalinas com uma suculenta
                            e apetitosa receita de peru de Natal, ideal para uma
                            ceia farta com até 20 pessoas. Esta receita clássica
                            de Natal é uma oportunidade de saborear um prato
                            tradicional e incrivelmente saboroso.
                        </p>
                    </a>
                </aside>
            </main>
        </>
    );
}
