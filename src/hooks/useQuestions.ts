import { useState, useEffect, useRef, useCallback } from "react"
import { type FlowItem } from "@/types"
import {
  organisationalQuestions,
  peopleQuestions,
  physicalQuestions,
  technologicalQuestions,
  categoryIntros,
} from "@/mockData/questions"
import {
  scoreScreening,
  selectPoolQuestions,
  distributePoolCounts,
} from "@/utils/scoring"

const CATEGORIES = ["organisational", "people", "physical", "technological"] as const

const ALL_SCREENING = {
  organisational: organisationalQuestions.filter(q => q.type === "screening"),
  people:         peopleQuestions.filter(q => q.type === "screening"),
  physical:       physicalQuestions.filter(q => q.type === "screening"),
  technological:  technologicalQuestions.filter(q => q.type === "screening"),
}

const ALL_POOL = {
  organisational: organisationalQuestions.filter(q => q.type === "pool"),
  people:         peopleQuestions.filter(q => q.type === "pool"),
  physical:       physicalQuestions.filter(q => q.type === "pool"),
  technological:  technologicalQuestions.filter(q => q.type === "pool"),
}

// Build the full interleaved flow:
// intro → screening → pool per category, then results
const buildFlow = (answers: Record<string, string>): FlowItem[] => {
  const flow: FlowItem[] = []

  // Calculate pool counts first so we can distribute
  const rawCounts: Record<string, number> = {}
  CATEGORIES.forEach(cat => {
    const score      = scoreScreening(ALL_SCREENING[cat], answers)
    rawCounts[cat]   = selectPoolQuestions(ALL_POOL[cat], score).length
  })
  const adjustedCounts = distributePoolCounts(rawCounts)

  CATEGORIES.forEach(cat => {
    // Category intro card
    const intro = categoryIntros.find(i => i.category === cat)
    if (intro) flow.push({ kind: "intro", data: intro })

    // Screening questions
    ALL_SCREENING[cat].forEach(q => flow.push({ kind: "question", data: q }))

    // Pool questions for this category
    const score    = scoreScreening(ALL_SCREENING[cat], answers)
    const selected = selectPoolQuestions(ALL_POOL[cat], score)
    const count    = adjustedCounts[cat]
    selected.slice(0, count).forEach(q => flow.push({ kind: "question", data: q }))
  })

  // Results screen at the end
  flow.push({ kind: "results", data: null })

  return flow
}

export const useQuestions = (answers: Record<string, string> = {}) => {
  const [flowItems,      setFlowItems]      = useState<FlowItem[]>([])
  const [initialLoading, setInitialLoading] = useState<boolean>(true)
  const [error,          setError]          = useState<string | null>(null)
  const initialized = useRef(false)

  // Rebuild flow silently (no loading flash) when answers change
  const rebuild = useCallback((currentAnswers: Record<string, string>) => {
    setFlowItems(buildFlow(currentAnswers))
  }, [])

  // Initial load — simulate DB call with spinner
  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    const init = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 400))
        setFlowItems(buildFlow({}))
      } catch {
        setError("Failed to load questions.")
      } finally {
        setInitialLoading(false)
      }
    }
    init()
  }, [])

  // Rebuild when answers change — no loading state, instant and smooth
  useEffect(() => {
    if (!initialized.current || initialLoading) return
    rebuild(answers)
  }, [JSON.stringify(answers), initialLoading])

  return { flowItems, loading: initialLoading, error }
}