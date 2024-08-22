import { createContext, useState } from "react";

export const AppContext = createContext()

function AppContextDiv({children}) {

    const [user, setUser] = useState(null)

    const [recipe, setRecipe] = useState(null)


    return <AppContext.Provider value={{user, setUser, recipe, setRecipe}}>{children}</AppContext.Provider>;
}

export default AppContextDiv;
