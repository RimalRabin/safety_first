export const SimpleQuestionnaire = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-[#0a2540] flex flex-col font-['Inter',Helvetica]">

      {/* HEADER */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-white/10">

        {/* Logo and brand name */}
        <div className="flex items-center gap-3">
          <img
            className="w-10 h-10"
            alt="Shield"
            src="/figmaAssets/shield-off.svg"
          />
          <span className="font-bold text-white text-2xl">
            _safety_first
          </span>
        </div>

        {/* Centre — version label */}
        <span className="font-bold text-white text-xl">
          Simple Version
        </span>

        {/* Exit button */}
        <button className="bg-[#ff6b00] hover:bg-[#ff6b00]/90 text-white font-medium px-5 py-2 rounded cursor-pointer">
          Exit
        </button>

      </header>

    </div>
  )
}