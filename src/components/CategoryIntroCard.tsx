import { type CategoryIntro } from "@/types"

interface CategoryIntroCardProps {
  intro: CategoryIntro
  onStart: () => void
}

const categoryIcons: Record<string, string> = {
  organisational: "🏢",
  people:         "👥",
  physical:       "🔒",
  technological:  "💻",
}

const categoryColours: Record<string, string> = {
  organisational: "from-[#0a2540] to-[#0d3060]",
  people:         "from-[#0a2540] to-[#0a3040]",
  physical:       "from-[#0a2540] to-[#0a2560]",
  technological:  "from-[#0a2540] to-[#0d2545]",
}

export const CategoryIntroCard = ({
  intro,
  onStart,
}: CategoryIntroCardProps): JSX.Element => {
  return (
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">

      {/* Gradient header */}
      <div className={`bg-gradient-to-r ${categoryColours[intro.category]} px-8 py-8 flex flex-col items-center gap-3`}>
        <span className="text-5xl">{categoryIcons[intro.category]}</span>
        <span className="text-white font-bold text-2xl text-center capitalize">
          {intro.title}
        </span>
      </div>

      {/* Description */}
      <div className="px-8 py-8 flex flex-col gap-6">
        <p className="text-[#1e2937] text-base leading-relaxed text-center">
          {intro.description}
        </p>

        {/* Teal info box */}
        <div className="bg-[#00bfa5]/10 border border-[#00bfa5]/30 rounded-xl px-5 py-4">
          <p className="text-[#0a2540] text-sm text-center">
            We will ask you a couple of quick questions to understand your situation.
            Your answers shape the rest of the assessment.
          </p>
        </div>

        {/* Start button */}
        <button
          onClick={onStart}
          className="w-full bg-[#ff6b00] hover:bg-[#ff6b00]/90 text-white font-medium text-base py-4 rounded-xl transition-all cursor-pointer"
        >
          Let's go →
        </button>
      </div>

    </div>
  )
}