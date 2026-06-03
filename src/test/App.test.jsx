import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { LanguageProvider } from '../context/LanguageContext'
import App from '../App'

function renderApp(initialRoute = '/en') {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </MemoryRouter>
  )
}

describe('App', () => {
  it('renders without crashing', () => {
    const { container } = renderApp('/en')
    expect(container).toBeInTheDocument()
  })
})
