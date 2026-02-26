function AppCanvas({ children }) {
  return (
    <div className="relative min-h-screen w-full max-w-[1920px] mx-auto">
      {/* Рухомі кружечки */}
      <div className="pointer-events-none absolute inset-0">
        <span className="canvas-circle canvas-circle-1" aria-hidden="true" />
        <span className="canvas-circle canvas-circle-2" aria-hidden="true" />
        <span className="canvas-circle canvas-circle-3" aria-hidden="true" />
        <span className="canvas-circle canvas-circle-4" aria-hidden="true" />
        <span className="canvas-circle canvas-circle-5" aria-hidden="true" />
        <span className="canvas-circle canvas-circle-6" aria-hidden="true" />
        <span className="canvas-circle canvas-circle-7" aria-hidden="true" />
        <span className="canvas-circle canvas-circle-8" aria-hidden="true" />
        <span className="canvas-circle canvas-circle-9" aria-hidden="true" />
        <span className="canvas-circle canvas-circle-10" aria-hidden="true" />
        <span className="canvas-circle canvas-circle-11" aria-hidden="true" />
        <span className="canvas-circle canvas-circle-12" aria-hidden="true" />
        <span className="canvas-circle canvas-circle-13" aria-hidden="true" />
        <span className="canvas-circle canvas-circle-14" aria-hidden="true" />
        <span className="canvas-circle canvas-circle-15" aria-hidden="true" />
        <span className="canvas-circle canvas-circle-16" aria-hidden="true" />
        <span className="canvas-circle canvas-circle-17" aria-hidden="true" />
        <span className="canvas-circle canvas-circle-18" aria-hidden="true" />
        <span className="canvas-circle canvas-circle-19" aria-hidden="true" />
        <span className="canvas-circle canvas-circle-20" aria-hidden="true" />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export default AppCanvas
