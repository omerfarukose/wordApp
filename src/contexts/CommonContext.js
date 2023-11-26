import {createContext, useEffect, useState} from "react";

export const CommonContext = createContext();

export const CommonContextProvider = ( props ) => {

    const [selectedLanguage, setSelectedLanguage] = useState(0);

    return(
        <CommonContext.Provider
            value={{
                selectedLanguage, setSelectedLanguage
            }}>

            { props.children }

        </CommonContext.Provider>
    )
}
