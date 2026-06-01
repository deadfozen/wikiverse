"use client"
import React, {createContext, useContext} from "react"
export type Language = 'ru' | 'en' | 'kz'
interface I18nContextType {
    language: Language
    setLanguage: (lang: Language) => void
}
const I18nContext = createContext<I18nContextType | undefined>(undefined)
export function I18nProvider({children}: {children: React.ReactNode}) {
    return(
        <I18nContext.Provider value={{language: 'ru', setLanguage: () => {}}}>
            {children}
        </I18nContext.Provider>
    )
}
export const useTranslation = () => {
    const context = useContext(I18nContext)
    if (!context) {
        throw new Error("useTranslation must be used within an I18nProvider")
    }
    return context
}