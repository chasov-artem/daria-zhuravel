import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-beige font-sans text-[#3E2E23]">
      {/* floating circles */}
      <span
        className="absolute top-[12%] right-[8%] z-0 w-24 h-24 rounded-full bg-softBrown/25 pointer-events-none"
        style={{ animation: "float-1 8s ease-in-out infinite" }}
        aria-hidden
      />
      <span
        className="absolute top-[45%] left-[5%] z-0 w-16 h-16 rounded-full bg-softBrown/25 pointer-events-none"
        style={{ animation: "float-2 10s ease-in-out infinite" }}
        aria-hidden
      />
      {/* white circles */}
      <span
        className="absolute top-[8%] left-[20%] z-0 w-10 h-10 rounded-full bg-white/55 pointer-events-none"
        style={{ animation: "float-1 9s ease-in-out infinite 0.3s" }}
        aria-hidden
      />
      <span
        className="absolute top-[35%] right-[20%] z-0 w-14 h-14 rounded-full bg-white/50 pointer-events-none"
        style={{ animation: "float-2 11s ease-in-out infinite" }}
        aria-hidden
      />
      <span
        className="absolute top-[60%] left-[8%] z-0 w-8 h-8 rounded-full bg-white/50 pointer-events-none"
        style={{ animation: "float-3 7s ease-in-out infinite 0.5s" }}
        aria-hidden
      />
      <span
        className="absolute top-[18%] right-[35%] z-0 w-12 h-12 rounded-full bg-white/55 pointer-events-none"
        style={{ animation: "float-1 10s ease-in-out infinite 1s" }}
        aria-hidden
      />
      <span
        className="absolute top-[78%] right-[5%] z-0 w-16 h-16 rounded-full bg-white/50 pointer-events-none"
        style={{ animation: "float-2 8s ease-in-out infinite 0.2s" }}
        aria-hidden
      />
      <span
        className="absolute top-[42%] left-[25%] z-0 w-6 h-6 rounded-full bg-white/60 pointer-events-none"
        style={{ animation: "float-3 6s ease-in-out infinite" }}
        aria-hidden
      />
      <span
        className="absolute top-[92%] left-[35%] z-0 w-11 h-11 rounded-full bg-white/50 pointer-events-none"
        style={{ animation: "float-1 9s ease-in-out infinite 0.7s" }}
        aria-hidden
      />
      <span
        className="absolute top-[5%] right-[15%] z-0 w-9 h-9 rounded-full bg-white/55 pointer-events-none"
        style={{ animation: "float-2 8s ease-in-out infinite 0.4s" }}
        aria-hidden
      />
      <span
        className="absolute top-[50%] left-[15%] z-0 w-13 h-13 rounded-full bg-white/50 pointer-events-none"
        style={{ animation: "float-1 10s ease-in-out infinite" }}
        aria-hidden
      />
      <span
        className="absolute top-[25%] right-[8%] z-0 w-7 h-7 rounded-full bg-white/55 pointer-events-none"
        style={{ animation: "float-3 7s ease-in-out infinite 0.8s" }}
        aria-hidden
      />
      <span
        className="absolute top-[68%] left-[22%] z-0 w-15 h-15 rounded-full bg-white/50 pointer-events-none"
        style={{ animation: "float-2 9s ease-in-out infinite 0.3s" }}
        aria-hidden
      />
      <span
        className="absolute top-[15%] left-[8%] z-0 w-11 h-11 rounded-full bg-white/55 pointer-events-none"
        style={{ animation: "float-3 8s ease-in-out infinite" }}
        aria-hidden
      />
      <span
        className="absolute top-[88%] right-[22%] z-0 w-8 h-8 rounded-full bg-white/50 pointer-events-none"
        style={{ animation: "float-1 7s ease-in-out infinite 0.5s" }}
        aria-hidden
      />
      <Header />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
