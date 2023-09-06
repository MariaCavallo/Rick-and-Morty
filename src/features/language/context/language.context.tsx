import { createContext, FC, useState, useMemo, useContext, ReactNode } from "react";
import { Languages } from "..";
import enTranslations from "../../../data/i18n.en";
import esTranslations from "../../../data/i18n.es";
import ptTranslations from "../../../data/i18n.pt";

export interface LanguageState {
    language: Languages;
    setLanguage: (language: Languages) => void;
    t: (key: string) => string;
}

export interface LanguageContextProps {
    children: ReactNode
}

const initialState = {
    language: 'ENGLISH' as Languages
} as LanguageState;

const LanguageContext = createContext<LanguageState | undefined>(undefined);

export const LanguageProvider: FC<LanguageContextProps> = ({ children }) => {
    const [language, setLanguage] = useState<Languages>(initialState.language);

    const value = useMemo(
        () => ({
            language,
            setLanguage,
            t: (key: string) => {
                if (language === 'SPANISH') {
                    return esTranslations[key];
                } else if (language === 'ENGLISH') {
                    return enTranslations[key];
                } else if (language === 'PORTUGUESE') {
                    return ptTranslations[key];
                }
                return key;
            }
        }),
        [language]
    );

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>);
};

export const useLanguage = (): LanguageState => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};