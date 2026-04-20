import { useState, useMemo } from "react"
import { useQuestions }        from "@/hooks/useQuestions"
import { Header }              from "@/components/Header"
import { StepDots }            from "@/components/StepDots"
import { QuestionCard }        from "@/components/QuestionCard"
import { Navigation }          from "@/components/Navigation"
import { CategoryIntroCard }   from "@/components/CategoryIntroCard"

export const SimpleQuestionnaire = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [answers, setAnswers]           = useState<Record<string, string>>({})

  const { flowItems, loading, error } = useQuestions(answers)

  const currentItem = flowItems[currentIndex]

  // Pool questions only — for progress tracking
  const poolItems = useMemo(
    () => flowItems.filter(item => item.kind === "question" && item.data.type === "pool"),
    [flowItems]
  )

  const poolItemsBefore = useMemo(
    () => flowItems.slice(0, currentIndex).filter(
      item => item.kind === "question" && item.data.type === "pool"
    ),
    [flowItems, currentIndex]
  )

  const isScreeningPhase = currentItem?.kind === "question"
    ? currentItem.data.type === "screening"
    : currentItem?.kind === "intro"
    ? true
    : false

  const totalPoolQuestions  = poolItems.length
  const currentPoolQuestion = poolItemsBefore.length + 1
  const progressPercent     = totalPoolQuestions > 0
    ? Math.round((poolItemsBefore.length / totalPoolQuestions) * 100)
    : 0

  const selectedAnswer = currentItem?.kind === "question"
    ? answers[currentItem.data.id] ?? ""
    : ""

  // ── handlers ──────────────────────────────────────────────────────────────
  const handleSelectAnswer = (answerId: string) => {
    if (currentItem?.kind !== "question") return
    setAnswers((prev) => ({ ...prev, [currentItem.data.id]: answerId }))
  }

  const handleNext = () => {
    if (currentItem?.kind === "intro") {
      setCurrentIndex((prev) => prev + 1)
      return
    }

    if (currentItem?.kind !== "question" || !selectedAnswer) return

    const nextId = currentItem.data.conditionalNext?.[selectedAnswer]

    if (nextId) {
      const nextIndex = flowItems.findIndex(
        item => item.kind === "question" && item.data.id === nextId
      )
      if (nextIndex !== -1) {
        setCurrentIndex(nextIndex)
        return
      }
    }

    if (currentIndex < flowItems.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  // ── loading ───────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a2540] flex items-center justify-center">
        <span className="text-white/70 text-lg">Loading questions...</span>
      </div>
    )
  }

  if (error || !currentItem) {
    return (
      <div className="min-h-screen bg-[#0a2540] flex items-center justify-center">
        <span className="text-red-400 text-lg">{error ?? "Something went wrong."}</span>
      </div>
    )
  }

  // ── render ────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#0a2540] flex flex-col font-['Inter',Helvetica]">

      <Header
        currentIndex={isScreeningPhase ? 0 : currentPoolQuestion - 1}
        totalQuestions={isScreeningPhase ? 0 : totalPoolQuestions}
        progressPercent={isScreeningPhase ? 0 : progressPercent}
        isScreening={isScreeningPhase}
      />

      {/* Only show step dots during pool phase */}
      {!isScreeningPhase && (
        <StepDots
          totalQuestions={totalPoolQuestions}
          currentIndex={currentPoolQuestion - 1}
          answeredIds={Object.keys(answers)}
          questionIds={poolItems.map(
            item => item.kind === "question" ? item.data.id : ""
          )}
          onDotClick={() => {}}
        />
      )}

      <main className="flex-1 flex items-start justify-center px-6 py-8">
        <div className="w-full max-w-2xl flex flex-col">

          {currentItem.kind === "intro" ? (
            <CategoryIntroCard
              intro={currentItem.data}
              onStart={handleNext}
            />
          ) : (
            <>
              <QuestionCard
                question={currentItem.data}
                selectedAnswer={selectedAnswer}
                onSelectAnswer={handleSelectAnswer}
              />
              <Navigation
                currentIndex={currentIndex}
                totalQuestions={flowItems.length}
                selectedAnswer={selectedAnswer}
                onBack={handleBack}
                onNext={handleNext}
              />
            </>
          )}

        </div>
      </main>

    </div>
  )
}