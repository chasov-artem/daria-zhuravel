import { createContext } from 'react'
import en from '../locales/en.json'
import ru from '../locales/ru.json'

export const SUPPORTED_LANGUAGES = ['en', 'ru']

export const translations = {
  en,
  ru,
}

export const LanguageContext = createContext(null)
