import { useMemo, useState } from 'react'
import { LanguageContext, SUPPORTED_LANGUAGES, translations } from './languageStore'

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')

  const value = useMemo(() => {
    const dictionary = translations[language] ?? translations.en

    return {
      language,
      setLanguage,
      supportedLanguages: SUPPORTED_LANGUAGES,
      t: (key) => dictionary[key] ?? key,
    }
  }, [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
