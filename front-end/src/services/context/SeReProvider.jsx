import { createContext, useContext, useState } from "react"


const SeReContext = createContext(null)

export default function SeReProvider({ children }) {

    const [searchValue, setSearchValue] = useState();

    const contextValues = {
        searchValue,
        setSearchValue
    }

  return (
    <SeReContext.Provider value={contextValues}>
        {children}
    </SeReContext.Provider>
  )
}

export function useSearch(){
    return useContext(SeReContext);
}
