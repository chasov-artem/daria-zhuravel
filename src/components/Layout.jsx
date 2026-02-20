import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-beige font-sans text-[#3E2E23]">
      {/* floating circles */}
      <span
        className="absolute top-[12%] right-[8%] z-10 w-24 h-24 rounded-full bg-softBrown/25 pointer-events-none"
        style={{ animation: 'float-1 8s ease-in-out infinite' }}
        aria-hidden
      />
      <span
        className="absolute top-[45%] left-[5%] z-10 w-16 h-16 rounded-full bg-softBrown/25 pointer-events-none"
        style={{ animation: 'float-2 10s ease-in-out infinite' }}
        aria-hidden
      />
      <span
        className="absolute top-[72%] right-[12%] z-10 w-20 h-20 rounded-full bg-softBrown/20 pointer-events-none"
        style={{ animation: 'float-3 9s ease-in-out infinite' }}
        aria-hidden
      />
      <span
        className="absolute top-[28%] left-[12%] z-10 w-12 h-12 rounded-full bg-softBrown/25 pointer-events-none"
        style={{ animation: 'float-1 11s ease-in-out infinite 1s' }}
        aria-hidden
      />
      <span
        className="absolute top-[85%] left-[15%] z-10 w-14 h-14 rounded-full bg-softBrown/25 pointer-events-none"
        style={{ animation: 'float-2 7s ease-in-out infinite 0.5s' }}
        aria-hidden
      />
      <Header />
      <main className="relative z-0">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
