import { useState, useEffect } from "react"
import { type Question, type FlowItem } from "@/types"
import {
  organisationalQuestions,
  peopleQuestions,
  physicalQuestions,
  technologicalQuestions,
  categoryIntros,
} from "@/mockData/questions"
import { scoreScreening, selectPoolQuestions } from "@/utils/scoring"

const ALL_SCREENING: Record<string, Question[]> = {
  organisational: organisationalQuestions.filter(q => q.type === "screening"),
  people:         peopleQuestions.filter(q => q.type === "screening"),
  physical:       physicalQuestions.filter(q => q.type === "screening"),
  technological:  technologicalQuestions.filter(q => q.type === "screening"),
}

const ALL_POOL: Record<string, Question[]> = {
  organisational: organisationalQuestions.filter(q => q.type === "pool"),
  people:         peopleQuestions.filter(q => q.type === "pool"),
  physical:       physicalQuestions.filter(q => q.type === "pool"),
  technological:  technologicalQuestions.filter(q => q.type === "pool"),
}

const CATEGORIES = ["organisational", "people", "physical", "technological"]

// Cap total pool questions at 20, distributed proportionally
const distributePoolCounts = (
  rawCounts: Record<string, number>
): Record<string, number> => {
  const total = Object.values(rawCounts).reduce((a, b) => a + b, 0)
  if (total <= 20) return rawCounts

  const adjusted: Record<string, number> = {}
  let remaining = 20
  const cats = Object.keys(rawCounts)

  cats.forEach((cat, i) => {
    if (i === cats.length - 1) {
      adjusted[cat] = remaining
    } else {
      const proportion = rawCounts[cat] / total
      adjusted[cat] = Math.max(1, Math.round(20 * proportion))
      remaining -= adjusted[cat]
    }
  })

  return adjusted
}

export const useQuestions = (answers: Record<string, string> = {}) => {
  const [flowItems, setFlowItems] = useState<FlowItem[]>([])
  const [loading,   setLoading]   = useState<boolean>(true)
  const [error,     setError]     = useState<string | null>(null)

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 300))

        // Phase 1 — build screening flow with category intros
        const screeningFlow: FlowItem[] = []

        CATEGORIES.forEach((cat) => {
          const intro = categoryIntros.find(i => i.category === cat)
          if (intro) {
            screeningFlow.push({ kind: "intro", data: intro })
          }
          ALL_SCREENING[cat].forEach(q => {
            screeningFlow.push({ kind: "question", data: q })
          })
        })

        // Phase 2 — score screening answers and select pool questions
        const rawCounts: Record<string, number> = {}
        CATEGORIES.forEach((cat) => {
          const score = scoreScreening(ALL_SCREENING[cat], answers)
          rawCounts[cat] = score > 0
            ? selectPoolQuestions(ALL_POOL[cat], score).length
            : ALL_POOL[cat].length
        })

        const adjustedCounts = distributePoolCounts(rawCounts)

        // Mix pool questions across categories for seamless flow
        const poolFlow: FlowItem[] = []
        const maxRounds = Math.max(...Object.values(adjustedCounts))

        for (let round = 0; round < maxRounds; round++) {
          CATEGORIES.forEach((cat) => {
            const pool = ALL_POOL[cat]
            if (round < adjustedCounts[cat] && round < pool.length) {
              poolFlow.push({ kind: "question", data: pool[round] })
            }
          })
        }

        setFlowItems([...screeningFlow, ...poolFlow])
      } catch (err) {
        setError("Failed to load questions.")
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [JSON.stringify(answers)])

  return { flowItems, loading, error }
}