// ============================================================
// SITE CONTENT — replace these placeholders with the coach's real details.
// ============================================================
const u = (id: string, w = 1200) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const coach = {
  brand: "IRONFORGE",
  brandSuffix: "Coaching",
  name: "Kavin Perera",
  title: "IFBB Pro Coach & Physique Specialist",
  location: "Colombo, Sri Lanka · Coaching Worldwide",
  whatsapp: "94771234567", // international format, no + or spaces
  email: "coach@ironforge.lk",
  phone: "+94 77 123 4567",
  heroImage: u("1583454110551-21f2fa2afe61", 2000),
  portrait: u("1581009146145-b5ef050c2e1e", 1000),
  bio: [
    "With over 12 years under the bar and a decade of competing on national stages, I build physiques that are strong, aesthetic and sustainable.",
    "My coaching blends evidence-based training, precise nutrition and relentless accountability — so you never guess what to do next.",
  ],
  philosophy: "Discipline beats motivation. Systems beat willpower. Every rep, every meal, every check-in moves you closer.",
  stats: [
    { value: "12+", label: "Years Experience" },
    { value: "500+", label: "Clients Transformed" },
    { value: "18", label: "Titles Won" },
    { value: "25+", label: "Countries Coached" },
  ],
  qualifications: [
    "ISSA Certified Personal Trainer",
    "Precision Nutrition Level 2",
    "NASM Performance Enhancement Specialist",
    "Contest Prep & Posing Specialist",
  ],
  achievements: [
    "Mr. Sri Lanka — Men's Physique Champion (2021)",
    "South Asian Bodybuilding Championship — Gold (2022)",
    "Coached 40+ competitors to national podiums",
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
