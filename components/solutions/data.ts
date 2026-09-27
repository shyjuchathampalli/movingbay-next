// Content for the /solutions page. One entry per item in the "Solutions" nav dropdown.
// Edit this file to change copy without touching component markup.

export type ServiceIcon = "home" | "fileCheck" | "school" | "globe";

export type Service = {
  slug: string;
  icon: ServiceIcon;
  navLabel: string;
  title: string;
  summary: string;
  intro: string;
  image: string;
  imageAlt: string;
  includes: string[];
  goodFor: string[];
};

export const SERVICES: Service[] = [
  {
  slug: "household-goods-moving",
  icon: "home",
  navLabel: "Household Goods Moving",
  title: "Household Goods Moving",
  summary:
    "Careful packing, transport and delivery of household belongings, within India and internationally.",

  intro:
    "From a single room to a full household, our team packs, transports and delivers your belongings with the same care whether you are moving across the city or across the world.",

  image: "/images/solutions/mb-household-relocation.png",
  imageAlt:
    "Professional household relocation with packed belongings and moving support",

  includes: [
    "Professional packing with proper materials for fragile and bulky items",
    "Loading, transport and unloading by trained crews",
    "Insurance options to cover goods in transit",
    "Door-to-door delivery, domestic and international",
    "Unpacking and basic set-up assistance on arrival",
  ],

  goodFor: [
    "Families relocating to a new city or country",
    "Employees on a company-sponsored transfer",
    "Anyone who wants their move handled end to end, not just the transport leg",
  ],
},
  {
  slug: "frro-registration",
  icon: "fileCheck",
  navLabel: "FRRO Registration",
  title: "FRRO Registration",
  summary:
    "Registration support for foreign nationals relocating to India with the Foreigners Regional Registration Office.",

  intro:
    "Foreign nationals staying in India beyond a set period are required to register with the FRRO. We help assignees and their families prepare, file and track this registration correctly and on time.",

  image: "/images/solutions/mb-frro.png",
  imageAlt:
    "FRRO registration and immigration documentation support in India",

  includes: [
    "Document checklist and preparation for your specific visa category",
    "Application filing and appointment scheduling",
    "Guidance on visa extensions where applicable",
    "Tracking your application status until it is confirmed",
    "A single point of contact for any follow-up requests from the FRRO",
  ],

  goodFor: [
    "Foreign employees relocating to India on a work visa",
    "HR teams managing compliance for inbound assignees",
    "Families accompanying an employee on assignment",
  ],
},
  {
  slug: "home-school-search",
  icon: "school",
  navLabel: "Home & School Search",
  title: "Home & School Search",
  summary:
    "Finding the right home and the right school, matched to your brief, budget and timeline.",

  intro:
    "Settling in starts with the basics: a home that fits your household and a school that fits your children. We shortlist options, arrange visits and support you through to move-in and admission.",

  image: "/images/solutions/mb-school.png",
  imageAlt:
    "Family relocation support for finding a suitable school and settling into a new city",

  includes: [
    "Property shortlists matched to your budget and requirements",
    "Neighbourhood orientation, so you know the area before you commit",
    "School shortlisting and side-by-side comparisons",
    "Support through the admissions process and required documentation",
    "Accompanied visits to homes and schools where needed",
  ],

  goodFor: [
    "Families relocating with children",
    "Employees who need to settle quickly and confidently",
    "Anyone unfamiliar with the local property or school market",
  ],
},
  {
  slug: "immigration",
  icon: "globe",
  navLabel: "Immigration",
  title: "Immigration",
  summary:
    "Visa and immigration documentation support for individuals and corporate assignees.",

  intro:
    "Immigration paperwork is one of the most common reasons a relocation is delayed. We guide you through the requirements for your situation and keep the application on track from start to finish.",

  image: "/images/solutions/mb-immigration.png",
  imageAlt:
    "Immigration and visa documentation support for people relocating internationally",

  includes: [
    "Guidance on the right visa category for your move",
    "A clear documentation checklist prepared for your case",
    "Application preparation and submission support",
    "Status tracking and renewal reminders",
    "Coordination with FRRO registration where both are required",
  ],

  goodFor: [
    "Employees relocating to or from India on a work assignment",
    "Corporate mobility teams managing several assignees at once",
    "Families who need immigration and settling-in handled together",
  ],
},
];
