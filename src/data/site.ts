// ============================================================
// SITE CONTENT — Radil Lokitha Manathunga, RM Personal Training
// ============================================================
const u = (id: string, w = 1200) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const coach = {
  brand: "RM",
  brandSuffix: "Personal Training",
  name: "Radil Lokitha Manathunga",
  title: "Certified Fitness & Bodybuilding Trainer",
  location: "Moragalla, Sri Lanka · Coaching Worldwide",
  whatsapp: "94771234567", // international format, no + or spaces
  email: "coach@rmpersonaltraining.lk",
  phone: "+94 77 123 4567",
  heroImage: "/src/assets/radil-hero.jpeg.asset.png",
  portrait: "/src/assets/radil-portrait.jpeg.asset.png",
  bio: [
    "I'm a certified Fitness and Bodybuilding Trainer with over 3 years of experience in fitness training, bodybuilding, and personalised workout program design — specialising in muscle building, strength training, weight loss, and personalised fitness coaching.",
    "As an award-winning bodybuilding athlete with international competition experience, I bring practical knowledge and professional training experience to help you achieve your fitness goals.",
  ],
  philosophy: "Discipline beats motivation. Systems beat willpower. Every rep, every meal, every check-in moves you closer.",
  languages: ["Sinhala", "English"],
  background: [
    "Gym Instructor — Power House Gym, Panadura (2022)",
    "Gym Instructor — Jason's Gym, Rajagiriya (2024)",
    "Bodybuilding Training — Moragalla (Current)",
  ],
  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "10+", label: "Podium Finishes" },
    { value: "5", label: "Certifications" },
    { value: "2", label: "International Medals" },
  ],
  qualifications: [
    "Certificate in Physical Fitness Trainer — Fitline Pro Fitness Academy (2025)",
    "Certificate in Fitness & Bodybuilding Instructor — Fitline Pro Fitness Academy (2025)",
    "NVQ Level 04 Physical Fitness Trainer — ICFSS (2024)",
    "Certificate in Weight Loss — Prime International Academy (2024)",
    "Certificate in Fitness & Bodybuilding Science — Prime International Academy (2024)",
  ],
  achievements: [
    "IFBB Asian Championship 2025 (UAE) — 2nd Place, Junior Men's Fit Bodybuilding U23",
    "IFBB Mr. Universe 2025 (Thailand) — 2nd Place, Junior Men's Bodybuilding U23",
    "IFBB Mr. Universe 2025 (Thailand) — 3rd Place, Men's Bodybuilding U80kg",
    "Mr. Hercules 2025 — 1st Place, 85kg Class & Junior Over 70kg",
    "CFF Bodybuilding & Fitness Championship 2024 — 1st Place, Junior Under 20",
    "Mr. Kalutara District 2022 — 2nd Place, Junior Over 70kg & Junior Title",
  ],
  socials: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
    tiktok: "https://tiktok.com/",
  },
};

export const whatsappLink = (message = "Hi Coach! I'm ready to start my transformation.") =>
  `https://wa.me/${coach.whatsapp}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#goals", label: "Goals" },
  { href: "#packages", label: "Packages" },
  { href: "#results", label: "Results" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export const goals = [
  { icon: "Flame", title: "Fat Loss", text: "Shed stubborn fat while keeping hard-earned muscle." },
  { icon: "RefreshCcw", title: "Body Transformation", text: "A complete physique overhaul, start to finish." },
  { icon: "Dumbbell", title: "Muscle Building", text: "Structured hypertrophy programs for real size." },
  { icon: "Zap", title: "Strength Development", text: "Move heavier weight with perfect technique." },
  { icon: "Sprout", title: "Beginner Fitness", text: "Build the foundations and habits that last." },
  { icon: "Trophy", title: "Bodybuilding Prep", text: "Off-season growth phases built for the stage." },
  { icon: "Medal", title: "Competition Prep", text: "Peak week, conditioning and posing to win." },
] as const;

export type Tier = "standard" | "recommended" | "premium";
export const packages: { name: string; price: string; period: string; tier: Tier; tagline: string; features: string[] }[] = [
  {
    name: "Basic", price: "15,000", period: "4 Weeks", tier: "standard", tagline: "Start strong with structure.",
    features: ["Personalized workout plan", "Nutrition guidance", "Weekly progress check-in", "Weight tracking", "WhatsApp support"],
  },
  {
    name: "Pro", price: "20,000", period: "4 Weeks", tier: "recommended", tagline: "Full coaching. Faster results.",
    features: ["Customized workout plan", "Personalized diet plan", "Weekly progress monitoring", "Workout and diet adjustments", "Exercise technique video feedback", "WhatsApp coaching support"],
  },
  {
    name: "Elite 1-to-1", price: "30,000", period: "4 Weeks", tier: "premium", tagline: "Total access. Stage-ready.",
    features: ["Fully personalized training and nutrition plan", "Weekly detailed progress assessment", "Training and diet adjustments", "Exercise technique video analysis", "Daily coaching support", "Priority WhatsApp support", "Bodybuilding contest preparation", "Posing guidance for competitors"],
  },
];

export const transformations = [
  { name: "Ravindu S.", result: "−14 kg in 16 weeks", before: u("1571019614242-c5c5dee9f50b", 700), after: u("1605296867304-46d5465a13f1", 700) },
  { name: "Nadeesha K.", result: "Body recomposition · 12 weeks", before: u("1517836357463-d25dfeac3438", 700), after: u("1594381898411-846e7d193883", 700) },
  { name: "Ashan M.", result: "+6 kg lean mass · 20 weeks", before: u("1541534741688-6078c6bfb5c5", 700), after: u("1532029837206-abbe2b7620e3", 700) },
];

export const testimonials = [
  { name: "Ravindu Silva", role: "Software Engineer · Pro Plan", text: "I'd tried everything for years. Within 4 months I was down 14 kg and stronger than ever. The weekly check-ins kept me honest.", },
  { name: "Nadeesha Kumari", role: "Teacher · Pro Plan", text: "Finally a coach who builds a diet around Sri Lankan food I actually enjoy. My energy and confidence are completely different now.", },
  { name: "Ashan Mendis", role: "Physique Competitor · Elite", text: "Placed 2nd in my first show. The posing sessions and peak-week plan were next level. Worth every rupee.", },
  { name: "Daniel R.", role: "Dubai, UAE · Basic Plan", text: "Online coaching felt as personal as in-person. Clear plans, fast replies, real results.", },
];

export const faqs = [
  { q: "How does online coaching work?", a: "After you sign up, you complete a detailed assessment. Within 48 hours you receive your training and nutrition plan in an easy app/PDF format, then we check in weekly to track progress and adjust." },
  { q: "Which package should I choose?", a: "Basic suits self-driven people who need structure. Pro is our most popular — full diet and training personalisation with video feedback. Elite is for those wanting daily support or preparing for a competition." },
  { q: "How do I pay?", a: "Payments are accepted via bank transfer, card or online payment. International clients can pay via card or Wise. Details are shared on WhatsApp after your consultation." },
  { q: "Do I need a gym?", a: "A gym gives the best results, but home-training plans can be built around the equipment you have." },
  { q: "Can I switch or upgrade my package?", a: "Yes. You can upgrade at any time and the difference is pro-rated to your current cycle." },
  { q: "How do I get started?", a: "Tap any WhatsApp button or fill in the contact form. We'll arrange a free consultation call to understand your goals." },
];
