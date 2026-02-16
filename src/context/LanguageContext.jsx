import { useMemo, useState } from 'react'
import { LanguageContext, SUPPORTED_LANGUAGES, translations } from './languageStore'

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')

  const value = useMemo(() => {
    const dictionary = translations[language] ?? translations.en
    const changeLanguage = (nextLanguage) => {
      if (SUPPORTED_LANGUAGES.includes(nextLanguage)) {
        setLanguage(nextLanguage)
      }
    }

    const resolvePath = (target, path) =>
      path.split('.').reduce((result, part) => {
        if (result && typeof result === 'object') {
          return result[part]
        }

        return undefined
      }, target)

    return {
      language,
      setLanguage: changeLanguage,
      changeLanguage,
      supportedLanguages: SUPPORTED_LANGUAGES,
      t: (key) => resolvePath(dictionary, key) ?? key,
    }
  }, [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
