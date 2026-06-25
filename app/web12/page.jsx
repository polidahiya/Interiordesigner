"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiCheck,
  FiCheckCircle,
  FiHome,
  FiInfo,
  FiInstagram,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMenu,
  FiMinus,
  FiPhone,
  FiPlus,
  FiX,
} from "react-icons/fi";
import {
  LuArmchair,
  LuBuilding2,
  LuCookingPot,
  LuHotel,
  LuLampFloor,
  LuMove3D,
  LuPanelTop,
  LuRuler,
} from "react-icons/lu";

const navLinks = [
  ["Studio", "#studio"],
  ["Portfolio", "#portfolio"],
  ["Materials", "#materials"],
  ["Packages", "#packages"],
  ["Services", "#services"],
  ["Estimator", "#estimator"],
];

const heroStats = [
  { icon: FiLayers, value: "180+", label: "Spaces transformed" },
  { icon: FiCheckCircle, value: "12 Years", label: "Design experience" },
  { icon: FiMapPin, value: "6 Cities", label: "Project presence" },
  { icon: FiCheckCircle, value: "96%", label: "Referral-led work" },
];

const businessValues = [
  {
    number: "01",
    title: "Designed around you",
    text: "Every layout begins with your routines, preferences and long-term needs.",
  },
  {
    number: "02",
    title: "Material-first thinking",
    text: "Tactile, durable finishes selected for beauty, climate and daily use.",
  },
  {
    number: "03",
    title: "One accountable team",
    text: "Concept, drawings, sourcing and site execution managed under one roof.",
  },
];

const marqueeItems = [
  { icon: LuArmchair, label: "Residential interiors" },
  { icon: LuPanelTop, label: "Turnkey execution" },
  { icon: LuRuler, label: "Space planning" },
  { icon: LuLampFloor, label: "Furniture curation" },
];

const projects = [
  {
    title: "The Cedar House",
    location: "Gurugram",
    type: "Residential",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1300&q=85",
    className: "md:col-span-7 md:row-span-2",
  },
  {
    title: "Ivory Apartment",
    location: "New Delhi",
    type: "Residential",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=85",
    className: "md:col-span-5",
  },
  {
    title: "Serein Lounge",
    location: "Jaipur",
    type: "Hospitality",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1100&q=85",
    className: "md:col-span-5",
  },
  {
    title: "The Monolith Office",
    location: "Noida",
    type: "Workspace",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1300&q=85",
    className: "md:col-span-7",
  },
  {
    title: "Terracotta Villa",
    location: "Pune",
    type: "Residential",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1100&q=85",
    className: "md:col-span-5",
  },
];

const materials = [
  {
    name: "Travertine",
    detail: "Warm, softly textured stone",
    image:
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Natural Oak",
    detail: "Quiet grain and lasting warmth",
    image:
      "https://images.unsplash.com/photo-1615800002234-05c4d488696c?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Brushed Brass",
    detail: "Aged sheen with subtle depth",
    image:
      "https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&w=800&q=85",
  },
];

const plans = [
  {
    name: "Essential",
    subtitle: "A refined foundation",
    price: "₹1,499",
    unit: "/ sq. ft.",
    description:
      "For homeowners seeking thoughtful planning and a clean, cohesive finish.",
    features: [
      "Space planning",
      "Modular kitchen and wardrobes",
      "Standard material palette",
      "Lighting layout",
      "Site coordination",
    ],
  },
  {
    name: "Signature",
    subtitle: "Our most chosen package",
    price: "₹2,399",
    unit: "/ sq. ft.",
    featured: true,
    description:
      "A richly layered home with custom details, curated furniture and premium finishes.",
    features: [
      "Everything in Essential",
      "Custom furniture design",
      "Premium finish palette",
      "Detailed ceiling and lighting",
      "Styling and decor curation",
    ],
  },
  {
    name: "Bespoke",
    subtitle: "Made without compromise",
    price: "On request",
    unit: "",
    description:
      "For highly personalised residences requiring specialist craft and full creative direction.",
    features: [
      "Everything in Signature",
      "Imported and artisanal materials",
      "One-off furniture pieces",
      "Home automation coordination",
      "White-glove project management",
    ],
  },
];

const services = [
  {
    icon: LuMove3D,
    title: "Interior architecture",
    text: "Spatial planning, circulation, partitions, ceilings and technical detailing.",
  },
  {
    icon: LuCookingPot,
    title: "Kitchens & wardrobes",
    text: "Ergonomic modular systems tailored to routines, storage and finishes.",
  },
  {
    icon: LuArmchair,
    title: "Furniture design",
    text: "Custom pieces with considered proportions, materials and craftsmanship.",
  },
  {
    icon: LuLampFloor,
    title: "Lighting & styling",
    text: "Layered lighting, art, textiles and objects that complete the atmosphere.",
  },
  {
    icon: LuHotel,
    title: "Hospitality design",
    text: "Experience-led interiors for cafés, salons, boutique stays and lounges.",
  },
  {
    icon: LuBuilding2,
    title: "Turnkey execution",
    text: "Procurement, vendor coordination, site supervision and final installation.",
  },
];

const packages = {
  essential: {
    label: "Essential",
    rate: 1499,
    description: "Practical planning with a refined standard palette.",
  },
  signature: {
    label: "Signature",
    rate: 2399,
    description: "Premium finishes, custom details and styling support.",
  },
  bespoke: {
    label: "Bespoke",
    rate: 3499,
    description: "Highly tailored design with specialist materials and craft.",
  },
};

const scopes = {
  "Full home": 1,
  "Living + dining": 0.28,
  Kitchen: 0.22,
  Bedrooms: 0.38,
};

function SectionHeading({ eyebrow, title, text, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d6aa6d]">
        {eyebrow}
      </p>
      <h2 className="font-serif text-4xl leading-[0.98] text-[#f7f2eb] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {text ? (
        <p
          className={`mt-6 text-sm leading-7 text-[#aaa39a] sm:text-base ${
            center ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0b0b]/80 py-4 backdrop-blur-xl">
      <div className="mx-auto flex w-[min(1180px,calc(100%-2rem))] items-center justify-between">
        <a href="#top">
          <span className="block text-[10px] uppercase tracking-[0.35em] text-[#d6aa6d]">
            The design house
          </span>
          <span className="font-serif text-2xl tracking-[0.2em] text-white">
            LUMORA
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-xs font-medium text-white/70 transition hover:text-[#f2d19f]"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-2 bg-[#d6aa6d] px-5 py-3 text-xs font-semibold text-black transition hover:bg-[#efc88f] lg:flex"
        >
          Book consultation
          <FiArrowUpRight />
        </a>

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
          className="grid size-11 place-items-center border border-white/15 text-xl text-white lg:hidden"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-[#0b0b0b] lg:hidden"
          >
            <nav className="mx-auto flex w-[min(1180px,calc(100%-2rem))] flex-col py-6">
              {navLinks.map(([label, href], index) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className="border-b border-white/10 py-4 font-serif text-2xl text-white/90"
                >
                  {label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="top" className="relative min-h-190 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2200&q=90"
        alt="Luxury contemporary living room"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,.97)_0%,rgba(5,5,5,.78)_42%,rgba(5,5,5,.18)_75%,rgba(5,5,5,.52)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.38),transparent_30%,rgba(0,0,0,.72))]" />

      <div className="relative z-10 mx-auto flex min-h-190 w-[min(1180px,calc(100%-2rem))] flex-col justify-end pt-36">
        <div className="mb-16 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#e1b87b]"
          >
            <span className="h-px w-10 bg-[#d6aa6d]" />
            Bespoke interiors · India
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.08 }}
            className="font-serif text-6xl leading-[0.88] tracking-[-0.03em] text-white sm:text-7xl lg:text-[104px]"
          >
            Where spaces
            <br />
            <span className="italic text-[#e4bd82]">become stories.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22 }}
            className="mt-7 max-w-xl text-sm leading-7 text-white/65 sm:text-base"
          >
            We shape calm, character-rich homes through thoughtful planning,
            natural materials and details designed around the way you live.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#portfolio"
              className="flex items-center justify-center gap-3 bg-[#d6aa6d] px-6 py-4 text-sm font-semibold text-black transition hover:bg-[#efc88f]"
            >
              Explore our work
              <FiArrowUpRight />
            </a>
            <a
              href="#estimator"
              className="flex items-center justify-center gap-3 border border-white/20 bg-black/20 px-6 py-4 text-sm font-medium text-white backdrop-blur-sm transition hover:border-[#d6aa6d]/70 hover:text-[#f0ca92]"
            >
              Estimate your project
              <FiArrowDown />
            </a>
          </motion.div>
        </div>

        <div className="grid border-t border-white/15 bg-black/30 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4">
          {heroStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.46 + index * 0.08 }}
                className="flex items-center gap-4 border-b border-white/10 px-5 py-6 sm:border-r lg:border-b-0"
              >
                <div className="grid size-11 shrink-0 place-items-center rounded-full border border-[#d6aa6d]/30 text-[#d6aa6d]">
                  <Icon className="text-xl" />
                </div>
                <div>
                  <p className="font-serif text-2xl text-white">{stat.value}</p>
                  <p className="mt-0.5 text-[11px] text-white/50">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BusinessStrip() {
  return (
    <section
      id="studio"
      className="border-b border-white/10 bg-[#0e0e0e] py-20"
    >
      <div className="mx-auto w-[min(1180px,calc(100%-2rem))]">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1.9fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d6aa6d]">
                The Lumora approach
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-none text-white sm:text-5xl">
                Quiet luxury,
                <br />
                confidently lived.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
              Our spaces feel elevated without feeling staged. We balance
              architectural clarity with warm layers, refined craftsmanship and
              practical decisions that make everyday living effortless.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid border-y border-white/10 md:grid-cols-3">
          {businessValues.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.08}>
              <article className="min-h-full border-b border-white/10 px-1 py-8 md:border-b-0 md:border-r md:px-7 first:md:pl-0 last:md:border-r-0 last:md:pr-0">
                <span className="text-xs text-[#d6aa6d]">{value.number}</span>
                <h3 className="mt-5 font-serif text-3xl text-white">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/50">
                  {value.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MarqueeStrip() {
  const repeated = [...marqueeItems, ...marqueeItems];

  return (
    <div className="overflow-hidden border-b border-[#d6aa6d]/20 bg-[#d6aa6d] py-4 text-black">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="flex w-max items-center"
      >
        {repeated.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.label}-${index}`}
              className="flex min-w-72.5 items-center justify-center gap-4 px-8"
            >
              <Icon className="text-2xl" />
              <span className="text-xs font-bold uppercase tracking-[0.22em]">
                {item.label}
              </span>
              <span className="ml-4 size-1.5 rounded-full bg-black/60" />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#0b0b0b] py-24 sm:py-32">
      <div className="mx-auto w-[min(1180px,calc(100%-2rem))]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Selected portfolio"
            title="Spaces with a distinct point of view."
            text="A selection of residences, hospitality spaces and workplaces shaped through material restraint, soft contrasts and enduring detail."
          />
          <a
            href="#contact"
            className="flex w-fit items-center gap-2 border-b border-[#d6aa6d]/55 pb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#e6bd82]"
          >
            Start a project
            <FiArrowUpRight />
          </a>
        </div>

        <div className="mt-14 grid auto-rows-[280px] grid-cols-1 gap-4 md:grid-cols-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.75, delay: index * 0.05 }}
              className={`group relative overflow-hidden ${project.className}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#dbb579]">
                    {project.type} · {project.location}
                  </p>
                  <h3 className="mt-2 font-serif text-3xl text-white">
                    {project.title}
                  </h3>
                </div>
                <div className="grid size-11 translate-y-3 place-items-center border border-white/25 bg-black/20 text-white opacity-0 backdrop-blur transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <FiArrowUpRight />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MaterialShowcase() {
  return (
    <section
      id="materials"
      className="border-y border-white/10 bg-[#11100f] py-24 sm:py-32"
    >
      <div className="mx-auto w-[min(1180px,calc(100%-2rem))]">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Material library"
              title="A palette you can feel."
              text="We build depth through honest materials, softened edges and finishes that develop character over time."
            />
            <blockquote className="mt-12 border-l border-[#d6aa6d] pl-6">
              <p className="font-serif text-2xl italic leading-9 text-white/85">
                “Luxury is not excess. It is the confidence to let a few
                beautiful things breathe.”
              </p>
              <footer className="mt-4 text-xs uppercase tracking-[0.2em] text-white/35">
                Studio philosophy
              </footer>
            </blockquote>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3">
            {materials.map((material, index) => (
              <Reveal key={material.name} delay={index * 0.08}>
                <article className="group">
                  <div className="relative aspect-3/4 overflow-hidden">
                    <img
                      src={material.image}
                      alt={material.name}
                      className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                    <span className="absolute left-4 top-4 text-[10px] font-semibold tracking-[0.25em] text-white/60">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-3xl text-white">
                    {material.name}
                  </h3>
                  <p className="mt-1 text-xs text-white/40">
                    {material.detail}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingMatrix() {
  return (
    <section id="packages" className="bg-[#0b0b0b] py-24 sm:py-32">
      <div className="mx-auto w-[min(1180px,calc(100%-2rem))]">
        <SectionHeading
          eyebrow="Design packages"
          title="A clear path from idea to installation."
          text="Choose a starting point. Every proposal is then tailored to your home, scope, material preferences and execution requirements."
          center
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.72, delay: index * 0.08 }}
              whileHover={{ y: -7 }}
              className={`relative flex min-h-[560px] flex-col p-7 sm:p-9 ${
                plan.featured
                  ? "border border-[#d6aa6d]/70 bg-[linear-gradient(160deg,rgba(214,170,109,.16),rgba(255,255,255,.025))]"
                  : "border border-white/10 bg-white/[0.03]"
              }`}
            >
              {plan.featured ? (
                <span className="absolute right-5 top-5 bg-[#d6aa6d] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-black">
                  Recommended
                </span>
              ) : null}

              <p className="text-xs uppercase tracking-[0.24em] text-[#d6aa6d]">
                {plan.subtitle}
              </p>
              <h3 className="mt-5 font-serif text-4xl text-white">
                {plan.name}
              </h3>

              <div className="mt-8 border-y border-white/10 py-6">
                <span className="font-serif text-4xl text-white">
                  {plan.price}
                </span>
                <span className="ml-2 text-xs text-white/40">{plan.unit}</span>
              </div>

              <p className="mt-6 text-sm leading-7 text-white/50">
                {plan.description}
              </p>

              <ul className="mt-7 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-white/75"
                  >
                    <FiCheck className="mt-0.5 shrink-0 text-[#d6aa6d]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-auto flex items-center justify-center gap-2 px-5 py-4 text-sm font-semibold transition ${
                  plan.featured
                    ? "bg-[#d6aa6d] text-black hover:bg-[#efc88f]"
                    : "border border-white/15 text-white hover:border-[#d6aa6d]/60 hover:text-[#e7bd82]"
                }`}
              >
                Discuss this package
                <FiArrowUpRight />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section
      id="services"
      className="border-y border-white/10 bg-[#11100f] py-24 sm:py-32"
    >
      <div className="mx-auto w-[min(1180px,calc(100%-2rem))]">
        <SectionHeading
          eyebrow="Capabilities"
          title="One studio. Every layer considered."
          text="From the first measured drawing to the final object placed on a console, our team manages the details that make a space feel complete."
        />

        <div className="mt-14 grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={(index % 3) * 0.06}>
                <article className="group min-h-[270px] border-b border-r border-white/10 p-7 transition duration-500 hover:bg-white/[0.035] sm:p-9">
                  <div className="grid size-12 place-items-center border border-[#d6aa6d]/30 text-2xl text-[#d6aa6d] transition group-hover:bg-[#d6aa6d] group-hover:text-black">
                    <Icon />
                  </div>
                  <h3 className="mt-8 font-serif text-3xl text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/45">
                    {service.text}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <img
        src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=2200&q=88"
        alt="Elegant contemporary dining and living interior"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 mx-auto w-[min(1180px,calc(100%-2rem))]">
        <Reveal>
          <div className="mx-auto max-w-4xl border border-white/15 bg-black/30 px-6 py-16 text-center backdrop-blur-md sm:px-12 sm:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d6aa6d]">
              Begin your project
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-[0.96] text-white sm:text-7xl">
              Let&apos;s create a home
              <br />
              that feels unmistakably yours.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              Share your floor plan, location and vision. Our studio will
              respond with the right next step for your project.
            </p>
            <a
              href="mailto:hello@lumorainteriors.com"
              className="mx-auto mt-9 flex w-fit items-center gap-3 bg-[#d6aa6d] px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#efc88f]"
            >
              Schedule a consultation
              <FiArrowUpRight />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CostEstimator() {
  const [area, setArea] = useState(1400);
  const [packageKey, setPackageKey] = useState("signature");
  const [scope, setScope] = useState("Full home");
  const [bedrooms, setBedrooms] = useState(3);

  const estimate = useMemo(() => {
    const base = area * packages[packageKey].rate * scopes[scope];
    const roomFactor =
      scope === "Full home" || scope === "Bedrooms"
        ? 1 + Math.max(0, bedrooms - 2) * 0.055
        : 1;

    return Math.round((base * roomFactor) / 50000) * 50000;
  }, [area, bedrooms, packageKey, scope]);

  const formattedEstimate = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(estimate);

  return (
    <section id="estimator" className="bg-[#0b0b0b] py-24 sm:py-32">
      <div className="mx-auto w-[min(1180px,calc(100%-2rem))]">
        <SectionHeading
          eyebrow="Quick cost estimator"
          title="Plan with a clearer starting point."
          text="Adjust the size, scope and finish level to view an indicative interior investment range."
          center
        />

        <div className="mx-auto mt-14 grid max-w-6xl overflow-hidden border border-white/10 lg:grid-cols-[1.35fr_.65fr]">
          <div className="bg-[#11100f] p-6 sm:p-10">
            <div className="grid gap-8">
              <div>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                      Carpet area
                    </label>
                    <p className="mt-2 font-serif text-3xl text-white">
                      {area.toLocaleString("en-IN")} sq. ft.
                    </p>
                  </div>
                  <FiHome className="text-2xl text-[#d6aa6d]" />
                </div>
                <input
                  aria-label="Carpet area"
                  type="range"
                  min="500"
                  max="5000"
                  step="50"
                  value={area}
                  onChange={(event) => setArea(Number(event.target.value))}
                  className="mt-6 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-[#d6aa6d]"
                />
                <div className="mt-3 flex justify-between text-[10px] text-white/30">
                  <span>500 sq. ft.</span>
                  <span>5,000 sq. ft.</span>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  Project scope
                </label>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {Object.keys(scopes).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setScope(item)}
                      className={`flex items-center justify-between border px-4 py-4 text-left text-sm transition ${
                        scope === item
                          ? "border-[#d6aa6d] bg-[#d6aa6d]/10 text-[#edc58c]"
                          : "border-white/10 text-white/55 hover:border-white/25"
                      }`}
                    >
                      {item}
                      {scope === item ? <FiCheck /> : null}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  Bedrooms
                </label>
                <div className="flex items-center border border-white/10">
                  <button
                    type="button"
                    aria-label="Reduce bedrooms"
                    onClick={() =>
                      setBedrooms((value) => Math.max(1, value - 1))
                    }
                    className="grid size-10 place-items-center text-white/55 transition hover:bg-white/5 hover:text-white"
                  >
                    <FiMinus />
                  </button>
                  <span className="grid h-10 min-w-12 place-items-center border-x border-white/10 font-serif text-xl">
                    {bedrooms}
                  </span>
                  <button
                    type="button"
                    aria-label="Increase bedrooms"
                    onClick={() =>
                      setBedrooms((value) => Math.min(8, value + 1))
                    }
                    className="grid size-10 place-items-center text-white/55 transition hover:bg-white/5 hover:text-white"
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  Finish package
                </label>
                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  {Object.keys(packages).map((key) => {
                    const item = packages[key];
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setPackageKey(key)}
                        className={`border p-4 text-left transition ${
                          packageKey === key
                            ? "border-[#d6aa6d] bg-[#d6aa6d]/10"
                            : "border-white/10 hover:border-white/25"
                        }`}
                      >
                        <span
                          className={`font-serif text-2xl ${
                            packageKey === key ? "text-[#edc58c]" : "text-white"
                          }`}
                        >
                          {item.label}
                        </span>
                        <span className="mt-3 block text-xs leading-5 text-white/35">
                          {item.description}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <motion.aside
            key={`${estimate}-${packageKey}-${scope}`}
            initial={{ opacity: 0.75 }}
            animate={{ opacity: 1 }}
            className="flex flex-col justify-between bg-[linear-gradient(145deg,#d6aa6d,#9a6530)] p-7 text-black sm:p-10"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-black/60">
                Indicative investment
              </p>
              <p className="mt-6 font-serif text-5xl leading-none sm:text-6xl">
                {formattedEstimate}
              </p>
              <p className="mt-3 text-sm text-black/65">approximately</p>

              <div className="mt-8 border-y border-black/15 py-6">
                <dl className="space-y-4 text-sm">
                  <div className="flex justify-between gap-6">
                    <dt className="text-black/55">Area</dt>
                    <dd className="font-semibold">
                      {area.toLocaleString("en-IN")} sq. ft.
                    </dd>
                  </div>
                  <div className="flex justify-between gap-6">
                    <dt className="text-black/55">Scope</dt>
                    <dd className="text-right font-semibold">{scope}</dd>
                  </div>
                  <div className="flex justify-between gap-6">
                    <dt className="text-black/55">Package</dt>
                    <dd className="font-semibold">
                      {packages[packageKey].label}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-6 flex gap-3 text-xs leading-5 text-black/60">
                <FiInfo className="mt-0.5 shrink-0" />
                This is a planning estimate, not a final quotation. Civil work,
                appliances and site-specific requirements may be additional.
              </div>
            </div>

            <a
              href="mailto:hello@lumorainteriors.com?subject=Interior project consultation"
              className="mt-10 flex items-center justify-center gap-2 bg-black px-5 py-4 text-sm font-semibold text-white transition hover:bg-black/85"
            >
              Get a detailed proposal
              <FiArrowUpRight />
            </a>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080808] pt-20">
      <div className="mx-auto w-[min(1180px,calc(100%-2rem))]">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_.7fr_.8fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.34em] text-[#d6aa6d]">
              The design house
            </p>
            <h2 className="mt-3 font-serif text-5xl tracking-[0.08em] text-white">
              LUMORA
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/45">
              Interior architecture and turnkey execution for homes, boutique
              hospitality and thoughtful workspaces.
            </p>
            <div className="mt-7 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="grid size-11 place-items-center border border-white/10 text-white/50 transition hover:border-[#d6aa6d]/50 hover:text-[#d6aa6d]"
              >
                <FiInstagram />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="grid size-11 place-items-center border border-white/10 text-white/50 transition hover:border-[#d6aa6d]/50 hover:text-[#d6aa6d]"
              >
                <FiLinkedin />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
              Explore
            </h3>
            <nav className="mt-6 flex flex-col gap-4">
              {navLinks.slice(0, 5).map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="w-fit text-sm text-white/45 transition hover:text-[#d6aa6d]"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
              Contact
            </h3>
            <div className="mt-6 space-y-5 text-sm text-white/45">
              <a
                href="mailto:hello@lumorainteriors.com"
                className="flex items-start gap-3 transition hover:text-white"
              >
                <FiMail className="mt-0.5 shrink-0 text-[#d6aa6d]" />
                hello@lumorainteriors.com
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-start gap-3 transition hover:text-white"
              >
                <FiPhone className="mt-0.5 shrink-0 text-[#d6aa6d]" />
                +91 98765 43210
              </a>
              <p className="flex items-start gap-3">
                <FiMapPin className="mt-0.5 shrink-0 text-[#d6aa6d]" />
                New Delhi · Gurugram · Pune
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 py-6 text-[11px] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Lumora Interiors. All rights reserved.</p>
          <p>Architecture · Interiors · Execution</p>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main className="overflow-x-hidden bg-[#0b0b0b] text-[#f5f0e8]">
      <Navbar />
      <HeroSection />
      <BusinessStrip />
      <MarqueeStrip />
      <Portfolio />
      <MaterialShowcase />
      <PricingMatrix />
      <Services />
      <Cta />
      <CostEstimator />
      <Footer />
    </main>
  );
}
