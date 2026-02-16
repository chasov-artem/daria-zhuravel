import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-beige font-sans text-[#3E2E23]">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
