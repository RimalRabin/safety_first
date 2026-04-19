import { useState, useEffect } from "react"
import { type Question } from "@/types"

// ---------------------------------------------------------------------------
// PLACEHOLDER DATA
// This will be replaced with a real MongoDB API call later.
// The shape of each question matches the Question type in types.ts exactly.
// When MongoDB is ready, delete the placeholderQuestions array and replace
// the useEffect body with: const data = await fetch('/api/questions').then(r => r.json())
// ---------------------------------------------------------------------------
const placeholderQuestions: Question[] = [
  {
    id: "org_screen_1",
    category: "organisational",
    type: "screening",
    text: "Have you ever done any kind of check for online risks in your business?",
    options: [
      { id: "yes",       label: "Yes" },
      { id: "sometimes", label: "Sometimes / Not sure" },
      { id: "no",        label: "No" },
    ],
    conditionalNext: {
      yes:       "org_screen_2a",
      sometimes: "org_screen_2b",
      no:        "org_screen_2b",
    },
  },
  {
    id: "org_screen_2a",
    category: "organisational",
    type: "screening",
    text: "Do you have any simple written rules or plan for what to do if something goes wrong online?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
  },
  {
    id: "org_screen_2b",
    category: "organisational",
    type: "screening",
    text: "Would it help to start with a simple list of your most important business things?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
  },
  {
    id: "people_screen_1",
    category: "people",
    type: "screening",
    text: "Do you have any staff, team members, or contractors who help with the business?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No (just me)" },
    ],
    conditionalNext: {
      yes: "people_screen_2a",
      no:  "people_screen_2b",
    },
  },
  {
    id: "people_screen_2a",
    category: "people",
    type: "screening",
    text: "Do you talk with your team about staying safe online?",
    options: [
      { id: "yes",       label: "Yes" },
      { id: "sometimes", label: "Sometimes" },
      { id: "no",        label: "No" },
    ],
  },
  {
    id: "people_screen_2b",
    category: "people",
    type: "screening",
    text: "Do you ever work with freelancers or contractors who need access to your email, files, or systems?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
  },
]

// ---------------------------------------------------------------------------
// HOOK
// ---------------------------------------------------------------------------
export const useQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([])
  const [loading,   setLoading]   = useState<boolean>(true)
  const [error,     setError]     = useState<string | null>(null)

  useEffect(() => {
    // Simulates an async API call.
    // Replace this entire block with a real fetch() when MongoDB is ready.
    const load = async () => {
      try {
        setLoading(true)
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 300))
        setQuestions(placeholderQuestions)
      } catch (err) {
        setError("Failed to load questions.")
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  return { questions, loading, error }
}