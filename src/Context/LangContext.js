import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const LangContext = createContext()

export const LangProvider = ({ children }) => {
    const localData = window.localStorage.getItem("lang")
    const [lang, setLang] = useState(localData || "uz")

    useEffect(() => {
        window.localStorage.setItem("lang", lang)
    }, [lang])

    return (
        <LangContext.Provider value={{ lang, setLang }}>
            {children}
        </LangContext.Provider>
    )
}