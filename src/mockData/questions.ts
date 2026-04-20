import { type Question, type CategoryIntro } from "@/types"

// ─────────────────────────────────────────────────────────────────────────────
// ORGANISATIONAL
// ─────────────────────────────────────────────────────────────────────────────
export const organisationalQuestions: Question[] = [
  // screening
  {
    id: "org_screen_1",
    category: "organisational",
    type: "screening",
    text: "Has your business ever experienced an online security problem — like a scam email, unauthorised access, or lost data?",
    options: [
      { id: "yes",      label: "Yes, it has happened" },
      { id: "not_sure", label: "Not that I know of" },
      { id: "no",       label: "No" },
    ],
    conditionalNext: {
      yes:      "org_screen_2a",
      not_sure: "org_screen_2b",
      no:       "org_screen_2b",
    },
  },
  {
    id: "org_screen_2a",
    category: "organisational",
    type: "screening",
    text: "After that incident, did you do anything differently to stop it happening again?",
    options: [
      { id: "yes",      label: "Yes, we made changes" },
      { id: "not_sure", label: "Some things, not sure if enough" },
      { id: "no",       label: "No, not really" },
    ],
  },
  {
    id: "org_screen_2b",
    category: "organisational",
    type: "screening",
    text: "Do you have any kind of plan for what you would do if something went wrong online tomorrow?",
    options: [
      { id: "yes",      label: "Yes, I have a plan" },
      { id: "not_sure", label: "Roughly, but nothing written down" },
      { id: "no",       label: "No plan at all" },
    ],
  },

  // pool — priority order: first 3 = low risk, first 5 = medium, all 7 = high
  {
    id: "org_pool_1",
    category: "organisational",
    type: "pool",
    text: "Do you know what your most important business data is and where it is stored?",
    options: [
      { id: "yes",      label: "Yes, I know exactly" },
      { id: "not_sure", label: "Roughly" },
      { id: "no",       label: "No, not really" },
    ],
  },
  {
    id: "org_pool_2",
    category: "organisational",
    type: "pool",
    text: "Do you have any kind of written plan for what to do if you get hacked or lose access to your systems?",
    options: [
      { id: "yes", label: "Yes, written down" },
      { id: "no",  label: "No" },
    ],
  },
  {
    id: "org_pool_3",
    category: "organisational",
    type: "pool",
    text: "Does your business handle personal information about customers or staff (like names, addresses, or payment details)?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
    conditionalNext: { yes: "org_pool_3b" },
  },
  {
    id: "org_pool_3b",
    category: "organisational",
    type: "pool",
    text: "Do you know your obligations under the New Zealand Privacy Act 2020 for keeping that information safe?",
    options: [
      { id: "yes",      label: "Yes, I understand my obligations" },
      { id: "not_sure", label: "Roughly" },
      { id: "no",       label: "No, not sure" },
    ],
  },
  {
    id: "org_pool_4",
    category: "organisational",
    type: "pool",
    text: "Do you review who has access to your business systems and accounts at least once a year?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
  },
  {
    id: "org_pool_5",
    category: "organisational",
    type: "pool",
    text: "Do you have cyber liability insurance, or do you know whether your current business insurance covers online incidents?",
    options: [
      { id: "yes",      label: "Yes, covered" },
      { id: "not_sure", label: "Not sure" },
      { id: "no",       label: "No" },
    ],
  },
  {
    id: "org_pool_6",
    category: "organisational",
    type: "pool",
    text: "Have you told anyone who helps with your business what to do if they think something has gone wrong online?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
  },
  {
    id: "org_pool_7",
    category: "organisational",
    type: "pool",
    text: "Do you check that the online services you pay for (like accounting software or payment providers) have their own security measures in place?",
    options: [
      { id: "yes",       label: "Yes" },
      { id: "sometimes", label: "Sometimes" },
      { id: "no",        label: "No" },
    ],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// PEOPLE
// ─────────────────────────────────────────────────────────────────────────────
export const peopleQuestions: Question[] = [
  // screening
  {
    id: "people_screen_1",
    category: "people",
    type: "screening",
    text: "Do you have anyone else — staff, contractors, or family — who uses your business systems or accounts?",
    options: [
      { id: "yes",    label: "Yes, staff or contractors" },
      { id: "family", label: "Just family or occasional help" },
      { id: "no",     label: "No, just me" },
    ],
    conditionalNext: {
      yes:    "people_screen_2a",
      family: "people_screen_2a",
      no:     "people_screen_2b",
    },
  },
  {
    id: "people_screen_2a",
    category: "people",
    type: "screening",
    text: "When someone stops working with you, do you remove their access to your accounts and systems straight away?",
    options: [
      { id: "yes",      label: "Yes, straight away" },
      { id: "not_sure", label: "We get to it eventually" },
      { id: "no",       label: "No process for this" },
    ],
  },
  {
    id: "people_screen_2b",
    category: "people",
    type: "screening",
    text: "Do you use shared passwords with anyone for business accounts?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
  },

  // pool
  {
    id: "people_pool_1",
    category: "people",
    type: "pool",
    text: "Do you remove access to business accounts and systems immediately when someone stops working with you?",
    options: [
      { id: "yes",      label: "Yes, immediately" },
      { id: "not_sure", label: "Eventually, but not straight away" },
      { id: "no",       label: "No process for this" },
    ],
  },
  {
    id: "people_pool_2",
    category: "people",
    type: "pool",
    text: "Does anyone else know your business account passwords?",
    options: [
      { id: "several", label: "Yes, several people" },
      { id: "few",     label: "One or two trusted people" },
      { id: "no",      label: "No" },
    ],
  },
  {
    id: "people_pool_3",
    category: "people",
    type: "pool",
    text: "Have you talked with anyone who helps in your business about how to spot a scam email or suspicious message?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
  },
  {
    id: "people_pool_4",
    category: "people",
    type: "pool",
    text: "Do new people who help with your business get told what information they can and cannot share?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
  },
  {
    id: "people_pool_5",
    category: "people",
    type: "pool",
    text: "Do people who help with your business use their own login details rather than sharing yours?",
    options: [
      { id: "yes",    label: "Yes, everyone has their own" },
      { id: "shared", label: "We share logins" },
      { id: "no",     label: "Not applicable" },
    ],
  },
  {
    id: "people_pool_6",
    category: "people",
    type: "pool",
    text: "If a contractor or freelancer finishes working with you, could they still access any of your business systems?",
    options: [
      { id: "no",       label: "No, we remove access immediately" },
      { id: "possibly", label: "Possibly" },
      { id: "yes",      label: "Yes, probably" },
    ],
  },
  {
    id: "people_pool_7",
    category: "people",
    type: "pool",
    text: "Has anyone who works with your business ever signed anything about keeping your information confidential?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no",  label: "No" },
    ],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// PHYSICAL
// ─────────────────────────────────────────────────────────────────────────────
export const physicalQuestions: Question[] = [
  // screening
  {
    id: "physical_screen_1",
    category: "physical",
    type: "screening",
    text: "Where do you mainly do your business work?",
    options: [
      { id: "office", label: "Office or fixed location" },
      { id: "home",   label: "From home" },
      { id: "mixed",  label: "Mixed or on the go" },
    ],
    conditionalNext: {
      office: "physical_screen_2a",
      home:   "physical_screen_2b",
      mixed:  "physical_screen_2b",
    },
  },
  {
    id: "physical_screen_2a",
    category: "physical",
    type: "screening",
    text: "Do you lock your office and secure devices when you leave at the end of the day?",
    options: [
      { id: "yes",       label: "Yes, always" },
      { id: "sometimes", label: "Sometimes" },
      { id: "no",        label: "No" },
    ],
  },
  {
    id: "physical_screen_2b",
    category: "physical",
    type: "screening",
    text: "Do you use a VPN or secure connection when working outside your home network?",
    options: [
      { id: "yes",      label: "Yes" },
      { id: "not_sure", label: "Not sure what a VPN is" },
      { id: "no",       label: "No" },
    ],
  },

  // pool
  {
    id: "physical_pool_1",
    category: "physical",
    type: "pool",
    text: "Do you use a password or PIN to lock your computer, phone, and any other device you use for work?",
    options: [
      { id: "all",  label: "Yes, all of them" },
      { id: "some", label: "Some of them" },
      { id: "no",   label: "No" },
    ],
  },
  {
    id: "physical_pool_2",
    category: "physical",
    type: "pool",
    text: "Do you back up your important business files somewhere separate from your main computer (like a cloud service or external drive)?",
    options: [
      { id: "yes",       label: "Yes, regularly" },
      { id: "sometimes", label: "Sometimes" },
      { id: "no",        label: "No" },
    ],
  },
  {
    id: "physical_pool_3",
    category: "physical",
    type: "pool",
    text: "If your laptop or phone was stolen tomorrow, would you be able to recover your business data?",
    options: [
      { id: "yes",      label: "Yes, everything is backed up" },
      { id: "probably", label: "Probably most of it" },
      { id: "no",       label: "No, I would lose most things" },
    ],
  },
  {
    id: "physical_pool_4",
    category: "physical",
    type: "pool",
    text: "Do you encrypt your laptop or the drive where you store business data?",
    options: [
      { id: "yes",      label: "Yes" },
      { id: "not_sure", label: "Not sure how to do this" },
      { id: "no",       label: "No" },
    ],
  },
  {
    id: "physical_pool_5",
    category: "physical",
    type: "pool",
    text: "When you get rid of an old computer, phone, or USB drive, do you make sure the data is completely wiped first?",
    options: [
      { id: "yes",   label: "Yes, always" },
      { id: "no",    label: "No" },
      { id: "trash", label: "I just throw it away" },
    ],
  },
  {
    id: "physical_pool_6",
    category: "physical",
    type: "pool",
    text: "Do you lock away or secure any physical documents that contain customer details, financial information, or passwords?",
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
    text: "If you work from a cafe, library, or other public place, do you take any precautions to protect your screen or connection?",
    options: [
      { id: "yes",       label: "Yes, always" },
      { id: "sometimes", label: "Sometimes" },
      { id: "no",        label: "No" },
    ],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// TECHNOLOGICAL
// ─────────────────────────────────────────────────────────────────────────────
export const technologicalQuestions: Question[] = [
  // screening
  {
    id: "tech_screen_1",
    category: "technological",
    type: "screening",
    text: "Do you use cloud services or online accounts for your business (like Gmail, Microsoft 365, Xero, Shopify, or similar)?",
    options: [
      { id: "yes",  label: "Yes, several" },
      { id: "few",  label: "Just one or two" },
      { id: "no",   label: "No" },
    ],
    conditionalNext: {
      yes: "tech_screen_2a",
      few: "tech_screen_2a",
      no:  "tech_screen_2b",
    },
  },
  {
    id: "tech_screen_2a",
    category: "technological",
    type: "screening",
    text: "Do any of those accounts use two-factor authentication — a code sent to your phone when you log in?",
    options: [
      { id: "all",  label: "Yes, all of them" },
      { id: "some", label: "Some of them" },
      { id: "no",   label: "No" },
    ],
  },
  {
    id: "tech_screen_2b",
    category: "technological",
    type: "screening",
    text: "Where do you store your important business files and data?",
    options: [
      { id: "cloud",    label: "Cloud (Google Drive, Dropbox, OneDrive etc.)" },
      { id: "computer", label: "On my computer only" },
      { id: "usb",      label: "USB or external drive" },
    ],
  },

  // pool
  {
    id: "tech_pool_1",
    category: "technological",
    type: "pool",
    text: "Do your important business accounts (email, banking, accounting) use two-factor authentication?",
    options: [
      { id: "all",  label: "Yes, all of them" },
      { id: "some", label: "Some of them" },
      { id: "no",   label: "No" },
    ],
  },
  {
    id: "tech_pool_2",
    category: "technological",
    type: "pool",
    text: "Do you use a different password for each important business account, or do you reuse the same password?",
    options: [
      { id: "different", label: "Different passwords for each" },
      { id: "some",      label: "I reuse some" },
      { id: "same",      label: "Same password for most" },
    ],
  },
  {
    id: "tech_pool_3",
    category: "technological",
    type: "pool",
    text: "Are your devices set to automatically install security updates, or do you update them regularly yourself?",
    options: [
      { id: "auto",   label: "Yes, automatic updates" },
      { id: "manual", label: "I do it manually" },
      { id: "no",     label: "No, rarely updated" },
    ],
  },
  {
    id: "tech_pool_4",
    category: "technological",
    type: "pool",
    text: "Do you have antivirus or security software installed on your business computers?",
    options: [
      { id: "yes",      label: "Yes" },
      { id: "not_sure", label: "Not sure" },
      { id: "no",       label: "No" },
    ],
  },
  {
    id: "tech_pool_5",
    category: "technological",
    type: "pool",
    text: "If your email account was hacked right now, what damage could the attacker do to your business?",
    options: [
      { id: "major",   label: "Major damage — everything goes through email" },
      { id: "some",    label: "Some damage — a few things connected" },
      { id: "limited", label: "Limited — email is not critical" },
    ],
  },
  {
    id: "tech_pool_6",
    category: "technological",
    type: "pool",
    text: "Do you know how to tell if an email, text, or phone call is a scam targeting your business?",
    options: [
      { id: "yes",      label: "Yes, confident I can spot them" },
      { id: "not_sure", label: "Sometimes unsure" },
      { id: "no",       label: "No" },
    ],
  },
  {
    id: "tech_pool_7",
    category: "technological",
    type: "pool",
    text: "Do you have a way to access your business systems and data if your main device broke or was stolen today?",
    options: [
      { id: "yes",      label: "Yes, everything is backed up and accessible" },
      { id: "partial",  label: "Partially" },
      { id: "no",       label: "No, I would lose access to most things" },
    ],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// CATEGORY INTROS
// ─────────────────────────────────────────────────────────────────────────────
export const categoryIntros: CategoryIntro[] = [
  {
    category: "organisational",
    title:    "Organisational Controls",
    description:
      "This section looks at how your business plans for and manages online risks — things like whether you have a basic plan if something goes wrong and how you handle your key business information.",
  },
  {
    category: "people",
    title:    "People Controls",
    description:
      "This section looks at your team and the people connected to your business — things like whether your staff know how to stay safe online and how you manage access when people leave.",
  },
  {
    category: "physical",
    title:    "Physical Controls",
    description:
      "This section looks at your physical workspace and devices — things like whether important equipment is secured and what happens if a device is lost or stolen.",
  },
  {
    category: "technological",
    title:    "Technological Controls",
    description:
      "This section looks at the tools and systems you use in your business — things like whether your accounts are protected and whether your data is backed up and recoverable.",
  },
]