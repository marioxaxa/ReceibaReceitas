import { createContext, useState } from "react";

export const AppContext = createContext()

function AppContextDiv({children}) {

    const [user, setUser] = useState(null)


    return <AppContext.Provider value={{user, setUser}}>{children}</AppContext.Provider>;
}

export default AppContextDiv;
