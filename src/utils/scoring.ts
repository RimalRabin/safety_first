import { type Question } from "@/types"

// ---------------------------------------------------------------------------
// SCORING LOGIC
// ---------------------------------------------------------------------------
// Each screening answer gets a score.
// yes = 2, sometimes = 1, no = 0
// The total score per category determines how many pool questions to show.
// Max score per category = 4 (two screening questions, max 2 each)
//
// Score 4   → low risk   → 3 pool questions
// Score 2-3 → medium risk → 5 pool questions
// Score 0-1 → high risk  → 7 pool questions
//
// Total across 4 categories will be between 12 and 28.
// The system picks the closest to 20 by adjusting per category.
// ---------------------------------------------------------------------------

export type RiskLevel = "low" | "medium" | "high"

const ANSWER_SCORES: Record<string, number> = {
  yes:       2,
  sometimes: 1,
  no:        0,
  // variants
  "yes, we do it often": 2,
  "yes, automatically":  2,
  "yes, always":         2,
  "yes, regularly":      2,
  "not always sure":     1,
  "not sure":            1,
  "no (just me)":        1,
  "no (everything is remote or home-based)": 1,
}

const POOL_COUNTS: Record<RiskLevel, number> = {
  low:    3,
  medium: 5,
  high:   7,
}

// Score a single answer
export const scoreAnswer = (answerId: string): number => {
  return ANSWER_SCORES[answerId.toLowerCase()] ?? 0
}

// Score all screening answers for one category
export const scoreScreening = (
  screeningQuestions: Question[],
  answers: Record<string, string>
): number => {
  return screeningQuestions.reduce((total, q) => {
    const answer = answers[q.id]
    return total + (answer ? scoreAnswer(answer) : 0)
  }, 0)
}

// Determine risk level from score
export const getRiskLevel = (score: number): RiskLevel => {
  if (score >= 4) return "low"
  if (score >= 2) return "medium"
  return "high"
}

// Get how many pool questions to show for a category
export const getPoolCount = (score: number): number => {
  return POOL_COUNTS[getRiskLevel(score)]
}

// Select pool questions for a category based on screening score
export const selectPoolQuestions = (
  poolQuestions: Question[],
  score: number
): Question[] => {
  const count = getPoolCount(score)
  return poolQuestions.slice(0, count)
}