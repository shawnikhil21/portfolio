const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const images = {
  clouds:
    "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=2400&q=80",
  cloudsSoft:
    "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?auto=format&fit=crop&w=2400&q=80",
  skyPortrait:
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80",
  aisle:
    "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1800&q=80",
  sampling:
    "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1800&q=80",
  rural:
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1800&q=80",
  field: asset("photos/field-street.jpeg"),
  morning: asset("photos/field-team.jpeg"),
  stock:
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
  dusk: asset("photos/field-street.jpeg"),
  team: asset("photos/team-office.jpeg"),
  walk: asset("photos/field-team.jpeg"),
  lake:
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
};

export const pillars = [
  {
    id: "retail",
    label: "Retail",
    title: "Retail Merchandising",
    image: images.aisle,
    alt: "Retail merchandising in a store aisle — shelf presence and store-level visibility",
    body: "Store-level visibility, shelf presence and repeat visits, week after week.",
    quote: "Execution isn't just about being present. It's about consistency at scale.",
    extraQuote: "Jo sahi Samay pe dikhta hai wahi Bikta hai",
  },
  {
    id: "sampling",
    label: "Sampling",
    title: "Consumer Sampling",
    image: images.sampling,
    alt: "Consumer sampling table in a busy market for on-ground product trials",
    body: "Putting a product directly in front of the people who might actually buy it.",
    quote: "The right audience, location and execution can change the outcome completely.",
  },
  {
    id: "rural",
    label: "Rural",
    title: "Rural Activation",
    image: images.rural,
    alt: "Rural activation in a smaller town beyond the urban marketing playbook",
    body: "Smaller towns, different footfall patterns, different rules entirely.",
    quote: "Marketing looks very different when you take it beyond the urban playbook.",
  },
  {
    id: "field",
    label: "Field",
    title: "Field Operations",
    image: images.field,
    alt: "Field team on a market street during on-ground execution for Aisles & Shelves",
    body: "Routes, coverage, timelines and the daily gap between plan and reality.",
    quote: "A plan is only as good as what happens on the ground.",
  },
] as const;

export const work = [
  {
    n: "01",
    title: "Retail Merchandising",
    body: "Store-level visibility, shelf presence and repeat visits, week after week.",
    quote: "Execution isn't just about being present. It's about consistency at scale.",
    extraQuote: "Jo sahi Samay pe dikhta hai wahi Bikta hai",
  },
  {
    n: "02",
    title: "Consumer Sampling",
    body: "Putting a product directly in front of the people who might actually buy it.",
    quote: "The right audience, location and execution can change the outcome completely.",
  },
  {
    n: "03",
    title: "Rural Activation",
    body: "Smaller towns, different footfall patterns, different rules entirely.",
    quote: "Marketing looks very different when you take it beyond the urban playbook.",
  },
  {
    n: "04",
    title: "Field Operations",
    body: "Routes, coverage, timelines and the daily gap between plan and reality.",
    quote: "A plan is only as good as what happens on the ground.",
  },
  {
    n: "05",
    title: "Client Management",
    body: "Updates, expectations, escalations and the calls in between.",
    quote: "Good execution also means keeping people aligned, informed and confident.",
  },
  {
    n: "06",
    title: "Process & Reporting",
    body: "Turning scattered field inputs into something you can actually read.",
    quote: "If something is repeated often enough, it probably deserves a better system.",
  },
];

export const lessons = [
  {
    n: "01",
    title: "Be proactive",
    body: "Things rarely go exactly as planned. Spotting the problem early, before anyone has to ask, is most of the job.",
  },
  {
    n: "02",
    title: "Execution is a strategic skill",
    body: "A great idea means very little if it cannot survive the realities of people, locations, timelines and logistics.",
  },
  {
    n: "03",
    title: "Relationships",
    body: "Working with field teams taught me that trust, clear communication and simply showing up matter as much as the plan itself.",
  },
  {
    n: "04",
    title: "Client servicing is more than updates",
    body: "It is about understanding what matters to the client, anticipating issues and creating confidence through execution.",
  },
  {
    n: "05",
    title: "Data changes how you see the ground",
    body: "Tracking performance made me realise how much better decisions become when observations are converted into structured information.",
  },
  {
    n: "06",
    title: "Automation isn't just for tech teams",
    body: "Building a no-code reporting system showed me that even simple processes can become significantly better when you question how they are currently being done.",
  },
];

export const unexpected = [
  "I learned how much planning goes into something that looks simple from the outside.",
  "I learned that a field team can teach you things a classroom cannot.",
  "I learned that problems rarely arrive one at a time.",
  "I learned that sometimes the best solution is simply a better process.",
  "I learned to become comfortable making decisions with imperfect information.",
  "I learned that client trust is built through hundreds of small actions.",
];

export const stats = [
  { value: "1,300+", label: "retail outlets touched through execution" },
  { value: "8", label: "cities involved in one of the programs I worked on" },
  { value: "16", label: "people in a field team I helped lead" },
  { value: "3", label: "very different types of consumer and retail environments" },
];

export const questions = [
  "How do you build better experiences for consumers?",
  "How do you make execution more efficient?",
  "How do you turn field realities into better decisions?",
  "How do you balance client expectations with what is actually possible?",
  "And how do you keep learning when every project looks different?",
];
