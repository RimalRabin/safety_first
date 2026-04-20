import { type Question } from "@/types"

// ---------------------------------------------------------------------------
// MOCK QUESTIONS — ALL 4 CATEGORIES
// Simulates exactly what MongoDB will return.
// Screening questions use conditionalNext for branching.
// Pool questions are what users answer after screening.
// Delete this file and replace useQuestions.ts fetch() when backend is ready.
// ---------------------------------------------------------------------------

export const organisationalQuestions: Question[] = [
  // ── SCREENING ─────────────────────────────────────────────────────────────
  {
    id: "org_screen_1",
    category: "organisational",
    type: "screening",
    text: "Have you ever done any kind of check for online risks in your business? (For example, a quick self-check or asking someone for advice.)",
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
    text: "Do you have any simple written rules or plan for what to do if something goes wrong online (like a hack or losing files)?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
  },
  {
    id: "org_screen_2b",
    category: "organisational",
    type: "screening",
    text: "Would it help to start with a simple list of your most important business things (like customer data, website, or computers)?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
  },

  // ── POOL ──────────────────────────────────────────────────────────────────
  {
    id: "org_pool_1",
    category: "organisational",
    type: "pool",
    text: "Do you keep a simple list of your most important business things (like customer data, website, or laptops)?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
    conditionalNext: { yes: "org_pool_2" },
  },
  {
    id: "org_pool_2",
    category: "organisational",
    type: "pool",
    text: "Do you review that list once a year to make sure nothing important is missing?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
  },
  {
    id: "org_pool_3",
    category: "organisational",
    type: "pool",
    text: "Have you ever written down what you would do if something went wrong online (like a hack or losing files)?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
    conditionalNext: { yes: "org_pool_4" },
  },
  {
    id: "org_pool_4",
    category: "organisational",
    type: "pool",
    text: "Have you ever practised or tested that plan?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
  },
  {
    id: "org_pool_5",
    category: "organisational",
    type: "pool",
    text: "Do you check your online suppliers (like Xero or Google) have good security rules?",
    options: [
      { id: "yes",       label: "Yes" },
      { id: "sometimes", label: "Sometimes" },
      { id: "no",        label: "No" },
    ],
    conditionalNext: { yes: "org_pool_6", sometimes: "org_pool_6" },
  },
  {
    id: "org_pool_6",
    category: "organisational",
    type: "pool",
    text: "Do you check them once a year to see if anything changed?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
  },
  {
    id: "org_pool_7",
    category: "organisational",
    type: "pool",
    text: "Have you or anyone checked your business for online risks in the last year?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
    conditionalNext: { no: "org_pool_8" },
  },
  {
    id: "org_pool_8",
    category: "organisational",
    type: "pool",
    text: "Would you like a simple checklist to do this yourself?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
  },
]

export const peopleQuestions: Question[] = [
  // ── SCREENING ─────────────────────────────────────────────────────────────
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
    text: "Do you talk with your team about staying safe online (like avoiding scams or protecting customer info)?",
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

  // ── POOL ──────────────────────────────────────────────────────────────────
  {
    id: "people_pool_1",
    category: "people",
    type: "pool",
    text: "Do you talk with your team about staying safe online (like avoiding scams)?",
    options: [
      { id: "yes",       label: "Yes, we do it often" },
      { id: "sometimes", label: "Sometimes" },
      { id: "no",        label: "No" },
    ],
    conditionalNext: { yes: "people_pool_2", sometimes: "people_pool_2" },
  },
  {
    id: "people_pool_2",
    category: "people",
    type: "pool",
    text: "Do you ever do any quick training or share tips with your team?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
  },
  {
    id: "people_pool_3",
    category: "people",
    type: "pool",
    text: "Do new team members get told about keeping customer info safe?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
  },
  {
    id: "people_pool_4",
    category: "people",
    type: "pool",
    text: "Do you check references or do basic background checks before hiring?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
  },
  {
    id: "people_pool_5",
    category: "people",
    type: "pool",
    text: "Do your team contracts mention keeping information private?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
    conditionalNext: { yes: "people_pool_6" },
  },
  {
    id: "people_pool_6",
    category: "people",
    type: "pool",
    text: "Do you remind people about those confidentiality rules every year?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
  },
  {
    id: "people_pool_7",
    category: "people",
    type: "pool",
    text: "Do ex-team members know they still cannot share old business info?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
  },
  {
    id: "people_pool_8",
    category: "people",
    type: "pool",
    text: "Do you have an easy way for the team to report weird emails or problems?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
    conditionalNext: { yes: "people_pool_9" },
  },
  {
    id: "people_pool_9",
    category: "people",
    type: "pool",
    text: "Do you check those reports and reply quickly?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
  },
]

export const physicalQuestions: Question[] = [
  // ── SCREENING ─────────────────────────────────────────────────────────────
  {
    id: "physical_screen_1",
    category: "physical",
    type: "screening",
    text: "Do you have an office or physical space with computers or equipment?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No (everything is remote or home-based)" },
    ],
    conditionalNext: {
      yes: "physical_screen_2a",
      no:  "physical_screen_2b",
    },
  },
  {
    id: "physical_screen_2a",
    category: "physical",
    type: "screening",
    text: "Do you have a habit of locking up important papers, laptops, or devices when you are not using them?",
    options: [
      { id: "yes",       label: "Yes" },
      { id: "sometimes", label: "Sometimes" },
      { id: "no",        label: "No" },
    ],
  },
  {
    id: "physical_screen_2b",
    category: "physical",
    type: "screening",
    text: "Do you have any basic rules for working securely from home or on the go (like using a secure connection)?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
  },

  // ── POOL ──────────────────────────────────────────────────────────────────
  {
    id: "physical_pool_1",
    category: "physical",
    type: "pool",
    text: "Do you lock up important papers, laptops, or USBs when you are not using them?",
    options: [
      { id: "yes",       label: "Yes, always" },
      { id: "sometimes", label: "Sometimes" },
      { id: "no",        label: "No" },
    ],
  },
  {
    id: "physical_pool_2",
    category: "physical",
    type: "pool",
    text: "Do you use a screen lock or password on your computer and phone?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
  },
  {
    id: "physical_pool_3",
    category: "physical",
    type: "pool",
    text: "Do you have a secure place to store physical documents with sensitive information?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
  },
  {
    id: "physical_pool_4",
    category: "physical",
    type: "pool",
    text: "Do you shred or securely destroy documents before throwing them away?",
    options: [
      { id: "yes",       label: "Yes" },
      { id: "sometimes", label: "Sometimes" },
      { id: "no",        label: "No" },
    ],
  },
  {
    id: "physical_pool_5",
    category: "physical",
    type: "pool",
    text: "Do you control who can enter areas where important equipment or data is stored?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
  },
  {
    id: "physical_pool_6",
    category: "physical",
    type: "pool",
    text: "Do visitors to your office sign in or get supervised while on site?",
    options: [
      { id: "yes",       label: "Yes" },
      { id: "sometimes", label: "Sometimes" },
      { id: "no",        label: "No" },
    ],
  },
  {
    id: "physical_pool_7",
    category: "physical",
    type: "pool",
    text: "Do you have a process for securely wiping or disposing of old computers and devices?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
  },
  {
    id: "physical_pool_8",
    category: "physical",
    type: "pool",
    text: "Do you have a plan for what to do if a device is lost or stolen?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
  },
]

export const technologicalQuestions: Question[] = [
  // ── SCREENING ─────────────────────────────────────────────────────────────
  {
    id: "tech_screen_1",
    category: "technological",
    type: "screening",
    text: "Do you use any online tools or services for your business (like email, cloud storage, website, online payments, or accounting software)?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
    conditionalNext: {
      yes: "tech_screen_2a",
      no:  "tech_screen_2b",
    },
  },
  {
    id: "tech_screen_2a",
    category: "technological",
    type: "screening",
    text: "Do you use extra login protection on your important accounts, like a code sent to your phone?",
    options: [
      { id: "yes",       label: "Yes" },
      { id: "sometimes", label: "Sometimes" },
      { id: "no",        label: "No" },
    ],
  },
  {
    id: "tech_screen_2b",
    category: "technological",
    type: "screening",
    text: "Do you back up your important business files or data regularly?",
    options: [
      { id: "yes",       label: "Yes" },
      { id: "sometimes", label: "Sometimes" },
      { id: "no",        label: "No" },
    ],
  },

  // ── POOL ──────────────────────────────────────────────────────────────────
  {
    id: "tech_pool_1",
    category: "technological",
    type: "pool",
    text: "Do you use two-factor authentication (2FA) on your important accounts like email and banking?",
    options: [
      { id: "yes",       label: "Yes" },
      { id: "sometimes", label: "Sometimes" },
      { id: "no",        label: "No" },
    ],
  },
  {
    id: "tech_pool_2",
    category: "technological",
    type: "pool",
    text: "Do you use strong unique passwords for each of your business accounts?",
    options: [
      { id: "yes",       label: "Yes" },
      { id: "sometimes", label: "Sometimes" },
      { id: "no",        label: "No" },
    ],
  },
  {
    id: "tech_pool_3",
    category: "technological",
    type: "pool",
    text: "Do you keep your computer, phone, and software up to date with the latest updates?",
    options: [
      { id: "yes",       label: "Yes, automatically" },
      { id: "sometimes", label: "Sometimes" },
      { id: "no",        label: "No" },
    ],
  },
  {
    id: "tech_pool_4",
    category: "technological",
    type: "pool",
    text: "Do you have antivirus or security software installed on your business computers?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
  },
  {
    id: "tech_pool_5",
    category: "technological",
    type: "pool",
    text: "Do you back up your important business files regularly?",
    options: [
      { id: "yes",       label: "Yes, automatically" },
      { id: "sometimes", label: "Sometimes manually" },
      { id: "no",        label: "No" },
    ],
  },
  {
    id: "tech_pool_6",
    category: "technological",
    type: "pool",
    text: "Have you ever tested your backups to make sure you can actually restore from them?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
  },
  {
    id: "tech_pool_7",
    category: "technological",
    type: "pool",
    text: "Do you use a secure Wi-Fi connection for business work (not public Wi-Fi without protection)?",
    options: [
      { id: "yes",       label: "Yes" },
      { id: "sometimes", label: "Sometimes" },
      { id: "no",        label: "No" },
    ],
  },
  {
    id: "tech_pool_8",
    category: "technological",
    type: "pool",
    text: "Do you limit who has access to your business accounts and systems?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
  },
]
import { type CategoryIntro } from "@/types"

export const categoryIntros: CategoryIntro[] = [
  {
    category: "organisational",
    title:    "Organisational Controls",
    description:
      "This section looks at how your business plans for and manages online risks. Things like whether you have a basic plan if something goes wrong, and how you handle your key business information.",
  },
  {
    category: "people",
    title:    "People Controls",
    description:
      "This section looks at your team and the people connected to your business. Things like whether your staff know how to stay safe online and how you handle access when people leave.",
  },
  {
    category: "physical",
    title:    "Physical Controls",
    description:
      "This section looks at your physical workspace and devices. Things like whether important equipment and documents are kept secure and what happens if a device is lost or stolen.",
  },
  {
    category: "technological",
    title:    "Technological Controls",
    description:
      "This section looks at the tools and systems you use in your business. Things like whether your accounts are protected and whether your data is backed up and recoverable.",
  },
]