import { type Question } from "@/types"

export type RiskLevel = "low" | "medium" | "high"

// Positive answers score 2, partial 1, negative 0
const SCORE_MAP: Record<string, number> = {
  yes: 2, all: 2, auto: 2, different: 2,
  yes_straight_away: 2, no: 2,  // "no" on negative questions
  not_sure: 1, some: 1, few: 1, sometimes: 1,
  family: 1, partial: 1, manual: 1, probably: 1,
  home: 1, mixed: 1, cloud: 1,
  // negative answers
  no_process: 0, shared: 0, same: 0, major: 0,
  trash: 0, several: 0,
}

// Answers that indicate risk (lower score)
const RISK_ANSWERS = new Set([
  "no", "not_sure", "not sure", "no plan at all",
  "no process for this", "we share logins",
  "same", "never", "trash", "major", "possibly",
])

export const scoreAnswer = (answerId: string): number => {
  const lower = answerId.toLowerCase().replace(/[^a-z_]/g, "")
  if (RISK_ANSWERS.has(lower)) return 0
  return SCORE_MAP[lower] ?? 1
}

export const scoreScreening = (
  screeningQuestions: Question[],
  answers: Record<string, string>
): number => {
  return screeningQuestions.reduce((total, q) => {
    const answer = answers[q.id]
    return total + (answer ? scoreAnswer(answer) : 0)
  }, 0)
}

export const getRiskLevel = (score: number): RiskLevel => {
  if (score >= 4) return "low"
  if (score >= 2) return "medium"
  return "high"
}

export const getPoolCount = (score: number): number => {
  const level = getRiskLevel(score)
  return level === "low" ? 3 : level === "medium" ? 5 : 7
}

export const selectPoolQuestions = (
  poolQuestions: Question[],
  score: number
): Question[] => {
  return poolQuestions.slice(0, getPoolCount(score))
}

// Cap total pool questions at 20, distribute proportionally
export const distributePoolCounts = (
  rawCounts: Record<string, number>
): Record<string, number> => {
  const total = Object.values(rawCounts).reduce((a, b) => a + b, 0)
  if (total <= 20) return rawCounts

  const cats      = Object.keys(rawCounts)
  const adjusted: Record<string, number> = {}
  let remaining   = 20

  cats.forEach((cat, i) => {
    if (i === cats.length - 1) {
      adjusted[cat] = Math.max(1, remaining)
    } else {
      const proportion = rawCounts[cat] / total
      adjusted[cat]    = Math.max(1, Math.round(20 * proportion))
      remaining       -= adjusted[cat]
    }
  })

  return adjusted
}