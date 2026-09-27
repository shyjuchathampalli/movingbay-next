// Shared content + types for the /relocation-planning page.
// Edit the arrays below to change copy without touching component markup.

export const AUDIENCE_EVENT = "gm:audience";
export type Audience = "Corporate or HR team" | "Employee or family" | "Pet parent" | "Partner";

export const PHONE_INTL = "918618173141";
export const PHONE_DISPLAY = "+91 8618173141";
export const EMAIL = "info@movingbay.com";

export const COUNTRIES = [
  "India",
  "United States (USA)",
  "Canada",
  "United Kingdom (UK)",
  "Germany",
  "France",
  "Netherlands",
  "Italy",
  "Spain",
  "Ireland",
  "Switzerland",
  "United Arab Emirates (UAE)",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Oman",
  "Bahrain",
  "Singapore",
  "Malaysia",
  "Thailand",
  "Indonesia",
  "Vietnam",
  "Australia",
  "New Zealand",
  "South Africa",
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/relocation-guidelines", label: "Services" },
  { href: "/relocation-planning", label: "For Business" },
  { href: "/about", label: "About" },
  { href: "/why-movingbay", label: "Why MovingBay" },
  { href: "/become-a-partner", label: "Become a Partner" },
] as const;

export const SOLUTIONS_MENU = [
  { href: "#solutions", title: "Corporate mobility", desc: "Programs for HR and mobility teams" },
  { href: "#solutions", title: "Individual and family relocation", desc: "Support for employees and families" },
  { href: "#pets", title: "Pet relocation", desc: "Taxi, domestic and international" },
  { href: "#services", title: "Immigration and documentation", desc: "Paperwork handled properly" },
] as const;

export const AUDIENCES: Array<{
  audience: Audience;
  icon: "building" | "people" | "paw";
  title: string;
  promise: string;
  points: string[];
  linkHref: string;
  linkLabel: string;
}> = [
  {
    audience: "Corporate or HR team",
    icon: "building",
    title: "Corporates and HR teams",
    promise: "Predictable, compliant relocation for your people.",
    points: [
      "Single point of contact for every move",
      "Service packages that follow your policy",
      "Clear updates, reporting and invoicing",
    ],
    linkHref: "#contact",
    linkLabel: "Explore corporate mobility",
  },
  {
    audience: "Employee or family",
    icon: "people",
    title: "Employees and families",
    promise: "A settled start in a new city or country.",
    points: [
      "Guidance before, during and after the move",
      "Household goods, transport and settling-in",
      "Support for the whole family, pets included",
    ],
    linkHref: "#contact",
    linkLabel: "Plan a family move",
  },
  {
    audience: "Pet parent",
    icon: "paw",
    title: "Pet parents",
    promise: "Your pet's journey, planned and documented.",
    points: [
      "Health checks, microchip and permits",
      "City taxi, domestic and international travel",
      "Doorstep help with paperwork",
    ],
    linkHref: "#pets",
    linkLabel: "See pet relocation",
  },
];

export const PILLARS = [
  { icon: "people", title: "People", desc: "Guidance and practical support for employees and families at every stage." },
  { icon: "paw", title: "Pets", desc: "Specialist care, documentation and transport for dogs, cats and other companions." },
  { icon: "box", title: "Possessions", desc: "Careful packing, moving and delivery of household goods." },
] as const;

export const SERVICE_PHASES: Array<{
  phase: string;
  blurb: string;
  items: Array<{ icon: string; title: string; desc: string; href: string }>;
}> = [
  {
    phase: "Before the move",
    blurb: "Plan it properly and get the paperwork right.",
    items: [
      { icon: "route", title: "Relocation consultation", desc: "Scope, timeline and budget agreed up front.", href: "#contact" },
      { icon: "doc", title: "Immigration and documentation", desc: "Forms, permits and registrations handled.", href: "#contact" },
      { icon: "steth", title: "Pet veterinary examination", desc: "Health checks so your pet is travel-ready.", href: "#pets" },
      { icon: "chip", title: "Microchip identification", desc: "Secure identification for safe travel.", href: "#pets" },
      { icon: "shield", title: "Licensing and permits for pets", desc: "All travel approvals arranged for you.", href: "#pets" },
    ],
  },
  {
    phase: "During the move",
    blurb: "Safe transport, with updates along the way.",
    items: [
      { icon: "box", title: "Household goods moving", desc: "Packing, loading and careful handling.", href: "#contact" },
      { icon: "truck", title: "Transport and logistics", desc: "Road, rail and air coordinated end to end.", href: "#contact" },
      { icon: "paw", title: "Pet taxi in your city", desc: "Trained handlers, comfortable carriers.", href: "#pets" },
      { icon: "route", title: "Domestic pet relocation", desc: "Across India by air, road and rail.", href: "#pets" },
      { icon: "plane", title: "International pet travel", desc: "Documentation and travel, start to finish.", href: "#pets" },
    ],
  },
  {
    phase: "After the move",
    blurb: "Help to feel at home, quickly.",
    items: [
      { icon: "home", title: "Home finding", desc: "Shortlists that match your brief and budget.", href: "#contact" },
      { icon: "school", title: "School finding", desc: "Options and admissions support for children.", href: "#contact" },
      { icon: "bed", title: "Temporary housing", desc: "A comfortable base while you settle.", href: "#contact" },
      { icon: "heart", title: "Settling-in support", desc: "Local orientation and everyday set-up.", href: "#contact" },
      { icon: "door", title: "Doorstep assistance", desc: "Paperwork and preparation at your home.", href: "#pets" },
    ],
  },
];

export const WHY_ITEMS = [
  { icon: "paw", title: "Pet relocation specialists", desc: "Deep experience with the companions most mobility providers treat as an afterthought.", proof: "500+ pets relocated" },
  { icon: "headset", title: "One accountable coordinator", desc: "A single point of contact for the whole move, reachable when you need answers.", proof: "Direct line and WhatsApp support" },
  { icon: "shield", title: "Compliance first", desc: "Correct paperwork, permits and health requirements, checked before travel day.", proof: "Documentation handled at your door" },
  { icon: "clock", title: "Transparent progress", desc: "Clear timelines and regular updates, so nothing is a surprise.", proof: "Updates at every milestone" },
  { icon: "globe", title: "Local expertise, global reach", desc: "A Bangalore-based team connected to routes across five regions.", proof: "25 countries on our route list" },
  { icon: "link", title: "Scales from one family to a program", desc: "Equally at home with a single move or a steady flow of transfers.", proof: "Flexible service packages" },
] as const;

export const REGIONS = [
  { title: "India", chips: ["Domestic, 20+ cities", "Bangalore hub"] },
  { title: "Middle East", chips: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain"] },
  { title: "Europe", chips: ["United Kingdom", "Germany", "France", "Netherlands", "Italy", "Spain", "Ireland", "Switzerland"] },
  { title: "Asia-Pacific", chips: ["Singapore", "Malaysia", "Thailand", "Indonesia", "Vietnam", "Australia", "New Zealand"] },
  { title: "Americas", chips: ["United States", "Canada"] },
  { title: "Africa", chips: ["South Africa"] },
] as const;

export const NUMBERS = [
  { value: "1000+", label: "Global Relocation Projects" },
  { value: "40+", label: "Countries covered" },
  { value: "25+", label: "Years of experience" },
  { value: "65", label: "Countries on our route list" },
] as const;

export const CASE_STUDIES = [
  {
    title: "A family and two dogs, Bangalore to Frankfurt",
    challenge: "strict import rules and a fixed start date for the employee.",
    action: "health checks, microchip verification, permits and travel booking for both dogs.",
    result: "the family and their pets arrived together and on schedule.",
  },
  {
    title: "An employee transfer between Indian cities, with a cat",
    challenge: "a short notice transfer and a nervous first-time traveller.",
    action: "a calm carrier setup, a vet check and a direct route with live updates.",
    result: "the employee started work on the planned date, with the cat settled at home.",
  },
  {
    title: "A corporate group move with mixed services",
    challenge: "several employees, different destinations and one HR contact.",
    action: "one coordinator, one plan and one consolidated invoice.",
    result: "HR had a single view of every move instead of many separate threads.",
  },
] as const;

export const TESTIMONIALS = [
  { initials: "HR", quote: "A short quote from an HR or mobility manager about reliability, communication and how well their assignees were looked after.", name: "Name Surname", role: "HR Manager, Client company" },
  { initials: "EM", quote: "A short quote from a relocated employee or family about how the team supported them from the first call to settling in.", name: "Name Surname", role: "Relocated employee, City" },
  { initials: "PP", quote: "A short quote from a pet parent about how calm and well informed they felt while their pet travelled.", name: "Name Surname", role: "Pet parent, City" },
] as const;

export const INSIGHTS = [
  { icon: "doc", label: "Country guide", title: "Moving a pet to the UK: documents, timelines and common mistakes", href: "#" },
  { icon: "building", label: "For HR teams", title: "Adding pet relocation to your mobility policy", href: "#" },
  { icon: "route", label: "Checklist", title: "Relocating within India with a pet: choosing air, road or rail", href: "#" },
] as const;

export const PARTNER_TYPES = [
  { icon: "plane", label: "Airlines and cargo" },
  { icon: "vet", label: "Veterinary clinics" },
  { icon: "truck", label: "Movers and logistics" },
  { icon: "home", label: "Destination service providers" },
] as const;

export const FAQ_GENERAL = [
  { q: "What services can be included in a relocation package?", a: "Packages can combine pet relocation, household goods moving, transport, documentation support, home and school finding, temporary housing and settling-in help. We agree the scope with you before the move begins." },
  { q: "Do you work with HR teams and relocation management companies?", a: "Yes. We support HR and mobility teams directly and can work alongside relocation management companies as a delivery partner." },
  { q: "How is pricing structured?", a: "Single moves are quoted per move. For regular volumes we can discuss a program arrangement. Send us the details and we will respond with a clear proposal." },
  { q: "What updates and reporting do we receive?", a: "You get a named coordinator and updates at each milestone. HR teams also receive a consolidated view of moves in progress." },
  { q: "How do you handle compliance and data privacy?", a: "We check documentation and destination requirements before travel, and we use the personal information you share only to deliver your relocation. See our Privacy Policy for details." },
  { q: "Which countries can you support?", a: "We currently list 25 countries across five regions, plus domestic moves across India. If your route is not listed, contact us and we will confirm what is possible." },
] as const;

export const FAQ_PETS = [
  { q: "How much does pet relocation cost in Bangalore?", a: "The cost depends on the route, your pet's size and breed, the mode of travel and the paperwork needed. Share your details and we will send a clear quote." },
  { q: "Is pet relocation safe for dogs and cats?", a: "Yes, when it is planned properly. We use suitable carriers, trained handlers and a health check before travel, and we confirm airline and destination requirements in advance." },
  { q: "Do you provide pet transport within Bangalore?", a: "Yes. Our pet taxi service moves pets safely across the city with trained handlers, for vet visits, airport transfers and home moves." },
  { q: "Do you offer intercity pet relocation in India?", a: "Yes. We relocate pets across India by air, road and rail, choosing the option that suits your pet and your timeline." },
  { q: "Can you help with international pet relocation?", a: "Yes. We support the full journey, including health checks, microchip verification, permits, documentation and travel arrangements." },
  { q: "What documents are required?", a: "Requirements vary by destination but often include vaccination records, a health certificate, microchip details and import permits. We tell you exactly what your route needs." },
  { q: "How do you keep my pet comfortable?", a: "We prepare the carrier, plan rest and feeding around the journey, limit handovers and keep you updated so you always know how your pet is doing." },
  { q: "How long does it take?", a: "City and domestic moves can be arranged quickly. International moves take longer because some countries require tests and waiting periods, so start planning as early as you can." },
] as const;

export const PROCESS_STEPS = {
  corp: [
    { title: "Scope the program", desc: "We learn about your policy, volumes, routes and the people moving.", see: "A written scope and named coordinator" },
    { title: "Plan each move", desc: "Every assignee gets a plan covering documents, health checks, permits and timing.", see: "A plan and timeline per employee" },
    { title: "Move day", desc: "Pick-up, transport and travel are coordinated, with updates as they happen.", see: "Live status for HR and the employee" },
    { title: "Delivery and settling", desc: "Safe arrival, with home, school and settling-in support where needed.", see: "Confirmation at each handover" },
    { title: "Review and report", desc: "A wrap-up of each move and a summary view for your team.", see: "Consolidated report and feedback call" },
  ],
  ind: [
    { title: "Consultation", desc: "Tell us about the move, the people, the pets and the timeline.", see: "A friendly call or WhatsApp chat" },
    { title: "Plan and documents", desc: "We agree the scope and prepare health checks, permits and paperwork.", see: "A checklist of what happens and when" },
    { title: "Move day", desc: "Pick-up, transport and travel, handled by trained people.", see: "Updates from your coordinator" },
    { title: "Delivery and settling", desc: "Safe arrival, and help getting established.", see: "Confirmation once everyone is home" },
    { title: "Follow-up", desc: "A check-in after the move and a chance to share feedback.", see: "A call to make sure all is well" },
  ],
} as const;

export const SERVICE_CHECKBOXES = [
  "Pet relocation",
  "Household goods",
  "Documentation",
  "Home and school finding",
  "Settling-in",
] as const;

export const WHO_OPTIONS: Audience[] = ["Corporate or HR team", "Employee or family", "Pet parent", "Partner"];
