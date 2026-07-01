"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FiArrowDownRight,
  FiArrowRight,
  FiCheck,
  FiChevronLeft,
  FiChevronRight,
  FiClock,
  FiGrid,
  FiHome,
  FiLayers,
  FiMail,
  FiMapPin,
  FiMenu,
  FiPhone,
  FiPlus,
  FiStar,
  FiTool,
  FiX,
} from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { PiBlueprint, PiPlant } from "react-icons/pi";

const images = {
  hero: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=88",
  about:
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=88",
  residential:
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=88",
  retail:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=88",
  office:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=88",
  kitchen:
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=88",
  bedroom:
    "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1200&q=88",
  bathroom:
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=88",
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    number: "01",
    title: "Residential interiors",
    text: "Personal, functional homes shaped around your routines, taste and long-term comfort.",
    icon: FiHome,
  },
  {
    number: "02",
    title: "Retail & hospitality",
    text: "Memorable spaces that guide movement, strengthen brand identity and improve customer experience.",
    icon: FiGrid,
  },
  {
    number: "03",
    title: "Corporate spaces",
    text: "Purposeful workplaces balancing productivity, collaboration, acoustics and brand expression.",
    icon: HiOutlineBuildingOffice2,
  },
  {
    number: "04",
    title: "Turnkey renovation",
    text: "One accountable team for civil work, electrical, plumbing, ceilings, furniture and finishing.",
    icon: FiTool,
  },
];

const projects = [
  {
    title: "Calm City Residence",
    category: "Residential",
    location: "South Delhi",
    image: images.residential,
    className: "md:col-span-7 md:row-span-2",
  },
  {
    title: "Sculpted Kitchen",
    category: "Kitchen",
    location: "Gurugram",
    image: images.kitchen,
    className: "md:col-span-5",
  },
  {
    title: "Warm Minimal Suite",
    category: "Bedroom",
    location: "Noida",
    image: images.bedroom,
    className: "md:col-span-5",
  },
  {
    title: "Modern Work Club",
    category: "Corporate",
    location: "Delhi NCR",
    image: images.office,
    className: "md:col-span-5",
  },
  {
    title: "Tactile Retail Studio",
    category: "Retail",
    location: "New Delhi",
    image: images.retail,
    className: "md:col-span-7",
  },
];

const processSteps = [
  {
    id: "01",
    title: "Discover",
    text: "We study your brief, lifestyle, site constraints, budget and priorities.",
  },
  {
    id: "02",
    title: "Design",
    text: "Layouts, materials, lighting, drawings, 3D views and specifications take shape.",
  },
  {
    id: "03",
    title: "Build",
    text: "Our team coordinates vendors, production, quality checks and site execution.",
  },
  {
    id: "04",
    title: "Handover",
    text: "A detailed final review, snag resolution and a clean, ready-to-use space.",
  },
];

const turnkeyGroups = [
  {
    title: "Civil & surfaces",
    icon: PiBlueprint,
    items: [
      "Masonry and plaster",
      "Flooring and cladding",
      "Partitions",
      "Waterproofing",
    ],
  },
  {
    title: "Services",
    icon: FiLayers,
    items: [
      "Electrical planning",
      "Plumbing and sanitary",
      "HVAC coordination",
      "Lighting systems",
    ],
  },
  {
    title: "Finishing",
    icon: PiPlant,
    items: [
      "False ceilings",
      "Paint and polish",
      "Custom furniture",
      "Soft furnishings",
    ],
  },
];

const testimonials = [
  {
    quote:
      "The process was transparent from layouts and 3D views to the final BOQ. The team respected our budget and delivered a home that feels completely ours.",
    name: "Rajiv Malhotra",
    project: "Apartment renovation, Delhi",
  },
  {
    quote:
      "A professional and friendly team with a very good eye for detail. Coordination was smooth and the workmanship exceeded our expectations.",
    name: "Moni Ali",
    project: "Residential interiors, Gurugram",
  },
  {
    quote:
      "They converted a difficult commercial shell into an efficient, polished space. Timelines, communication and finishing were handled very well.",
    name: "Jai Singh",
    project: "Commercial interior, Noida",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const viewport = { once: true, amount: 0.2 };

function SectionLabel({ children, light = false }) {
  return (
    <div
      className={`mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] ${
        light ? "text-stone-300" : "text-[#9a7240]"
      }`}
    >
      <span className={`h-px w-8 ${light ? "bg-stone-500" : "bg-[#b9925e]"}`} />
      {children}
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-stone-200/80 bg-[#f7f5f0]/90 py-3 shadow-sm backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#home" className="group flex items-center gap-3">
          <span
            className={`grid h-11 w-11 place-items-center rounded-full border text-lg font-semibold transition-colors ${
              scrolled
                ? "border-stone-300 text-stone-900"
                : "border-white/40 text-white"
            }`}
          >
            4L
          </span>
          <span className="leading-tight">
            <span
              className={`block font-display text-xl font-semibold tracking-wide transition-colors ${
                scrolled ? "text-stone-950" : "text-white"
              }`}
            >
              4 Lotus
            </span>
            <span
              className={`block text-[9px] font-semibold uppercase tracking-[0.28em] transition-colors ${
                scrolled ? "text-stone-500" : "text-white/65"
              }`}
            >
              Interior Studio
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-xs font-semibold uppercase tracking-[0.16em] transition-colors hover:text-[#b9925e] ${
                scrolled ? "text-stone-700" : "text-white/80"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className={`hidden items-center gap-2 rounded-full px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] transition-all sm:flex ${
              scrolled
                ? "bg-stone-900 text-white hover:bg-[#9a7240]"
                : "bg-white text-stone-950 hover:bg-[#d4b483]"
            }`}
          >
            Start a project <FiArrowDownRight />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
            className={`grid h-11 w-11 place-items-center rounded-full border lg:hidden ${
              scrolled
                ? "border-stone-300 text-stone-900"
                : "border-white/40 text-white"
            }`}
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 overflow-hidden border-t border-stone-200 bg-[#f7f5f0] lg:hidden"
          >
            <nav className="flex flex-col px-5 py-4 sm:px-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-stone-200 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-stone-800 last:border-0"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[760px] overflow-hidden bg-stone-950 lg:min-h-screen"
    >
      <motion.img
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        src={images.hero}
        alt="Elegant contemporary living room interior"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/55 to-stone-950/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-stone-950/20" />

      <div className="relative mx-auto flex min-h-[760px] max-w-[1440px] items-end px-5 pb-12 pt-36 sm:px-8 lg:min-h-screen lg:px-12 lg:pb-16">
        <div className="grid w-full items-end gap-12 lg:grid-cols-[1fr_330px]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-white/70"
            >
              <span className="h-px w-10 bg-[#d4b483]" />
              Architecture · Interiors · Renovation
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.35,
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-5xl font-display text-[clamp(3.7rem,8vw,8.8rem)] font-medium leading-[0.78] tracking-[-0.055em] text-white"
            >
              Spaces with
              <span className="block pl-[10vw] italic text-[#d4b483]">
                soul & purpose.
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.75 }}
              className="mt-10 flex flex-col gap-7 border-t border-white/20 pt-7 sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="max-w-xl text-sm leading-7 text-white/72 sm:text-base">
                We design and build expressive residential, retail and corporate
                interiors across Delhi NCR—from first sketch to final handover.
              </p>
              <a
                href="#projects"
                className="group flex shrink-0 items-center gap-4 text-xs font-bold uppercase tracking-[0.18em] text-white"
              >
                Explore projects
                <span className="grid h-12 w-12 place-items-center rounded-full border border-white/35 transition-all group-hover:border-[#d4b483] group-hover:bg-[#d4b483] group-hover:text-stone-950">
                  <FiArrowRight />
                </span>
              </a>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.75 }}
            className="hidden border-l border-white/25 pl-8 text-white lg:block"
          >
            <div className="grid grid-cols-2 gap-x-6 gap-y-8">
              {[
                ["15+", "Years of practice"],
                ["250+", "Spaces delivered"],
                ["04", "Design disciplines"],
                ["NCR", "Delhi · Gurugram · Noida"],
              ].map(([value, label]) => (
                <div key={label}>
                  <div className="font-display text-4xl text-[#d4b483]">
                    {value}
                  </div>
                  <div className="mt-2 text-[10px] uppercase leading-5 tracking-[0.16em] text-white/55">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 hidden w-[36vw] max-w-[540px] border-l border-t border-white/20 bg-white/10 p-5 backdrop-blur-xl xl:block">
        <div className="flex items-center justify-between text-white">
          <div>
            <div className="text-[10px] uppercase tracking-[0.23em] text-white/55">
              Featured
            </div>
            <div className="mt-1 font-display text-2xl">
              Turnkey Interior Design
            </div>
          </div>
          <FiArrowDownRight size={24} className="text-[#d4b483]" />
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = [
    "Residential",
    "Retail",
    "Corporate",
    "Hospitality",
    "Renovation",
    "Furniture",
  ];
  return (
    <div className="overflow-hidden border-b border-stone-300 bg-[#ece7dd] py-5">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="flex w-max items-center whitespace-nowrap"
      >
        {[...words, ...words].map((word, index) => (
          <div key={`${word}-${index}`} className="flex items-center">
            <span className="px-8 font-display text-2xl italic text-stone-700 sm:px-12 sm:text-3xl">
              {word}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#b9925e]" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2px]">
            <motion.img
              whileHover={{ scale: 1.035 }}
              transition={{ duration: 0.7 }}
              src={images.about}
              alt="Interior design material and furniture details"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-7 -right-1 w-[70%] border border-stone-200 bg-[#f7f5f0] p-5 shadow-soft sm:-right-8 sm:p-7">
            <div className="flex items-center gap-4">
              <div className="font-display text-5xl text-[#9a7240]">15</div>
              <div className="text-xs font-semibold uppercase leading-5 tracking-[0.16em] text-stone-600">
                Years transforming ideas into spaces
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="lg:pl-14"
        >
          <SectionLabel>About the studio</SectionLabel>
          <h2 className="max-w-3xl font-display text-5xl font-medium leading-[0.96] tracking-[-0.035em] text-stone-950 sm:text-6xl lg:text-7xl">
            Good design should feel
            <span className="italic text-[#9a7240]"> inevitable.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-8 text-stone-600">
            4 Lotus Interior is a Delhi-based design and turnkey execution
            studio led by interior architect Rashid. We create considered
            environments where planning, materials, craft and everyday life come
            together.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600">
            Our integrated team manages architecture, interior design,
            renovation, furniture and on-site execution—giving clients one clear
            process and one accountable partner.
          </p>

          <div className="mt-10 grid gap-5 border-t border-stone-300 pt-7 sm:grid-cols-3">
            {[
              "Clarity in planning",
              "Honesty in costing",
              "Care in execution",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-sm font-semibold text-stone-800"
              >
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#b9925e] text-white">
                  <FiCheck size={12} />
                </span>
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section
      id="services"
      className="bg-stone-950 px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <SectionLabel light>What we do</SectionLabel>
            <h2 className="font-display text-5xl font-medium leading-[0.95] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              One studio.
              <span className="block italic text-[#d4b483]">Every layer.</span>
            </h2>
          </motion.div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            transition={{ delay: 0.12 }}
            className="max-w-2xl text-base leading-8 text-stone-400 lg:justify-self-end"
          >
            From spatial strategy to custom furniture and site finishing, we
            coordinate every discipline needed to deliver a complete interior.
          </motion.p>
        </div>

        <div className="mt-16 border-t border-white/15">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                transition={{ delay: index * 0.06 }}
                className="group grid gap-5 border-b border-white/15 py-8 transition-colors hover:bg-white/[0.025] sm:grid-cols-[72px_72px_1fr_50px] sm:items-center lg:py-10"
              >
                <span className="text-xs tracking-[0.22em] text-stone-500">
                  {service.number}
                </span>
                <span className="grid h-12 w-12 place-items-center rounded-full border border-white/20 text-[#d4b483] transition-all group-hover:border-[#d4b483] group-hover:bg-[#d4b483] group-hover:text-stone-950">
                  <Icon size={21} />
                </span>
                <div className="grid gap-3 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
                  <h3 className="font-display text-3xl sm:text-4xl">
                    {service.title}
                  </h3>
                  <p className="max-w-xl text-sm leading-7 text-stone-400">
                    {service.text}
                  </p>
                </div>
                <FiArrowDownRight
                  size={24}
                  className="hidden text-stone-600 transition-all group-hover:rotate-[-45deg] group-hover:text-[#d4b483] sm:block"
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1320px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="flex flex-col gap-7 border-b border-stone-300 pb-10 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <SectionLabel>Selected work</SectionLabel>
            <h2 className="font-display text-5xl font-medium leading-none tracking-[-0.04em] sm:text-7xl">
              Spaces that tell
              <span className="italic text-[#9a7240]"> a story.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-stone-600">
            A selection of residential, workplace, retail and hospitality
            environments across Delhi NCR.
          </p>
        </motion.div>

        <div className="mt-10 grid auto-rows-[300px] gap-4 md:grid-cols-12 md:auto-rows-[260px]">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              transition={{ delay: index * 0.08 }}
              className={`group relative overflow-hidden bg-stone-200 ${project.className}`}
            >
              <motion.img
                whileHover={{ scale: 1.045 }}
                transition={{ duration: 0.65 }}
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white sm:p-8">
                <div>
                  <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#e5c89e]">
                    {project.category} · {project.location}
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl">
                    {project.title}
                  </h3>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/50 bg-white/10 backdrop-blur transition-all group-hover:rotate-[-45deg] group-hover:bg-white group-hover:text-stone-950">
                  <FiArrowDownRight />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section
      id="process"
      className="border-y border-stone-300 bg-[#ece7dd] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <SectionLabel>How we work</SectionLabel>
            <h2 className="font-display text-5xl font-medium leading-[0.95] tracking-[-0.035em] sm:text-6xl">
              A clear path from
              <span className="block italic text-[#9a7240]">
                brief to build.
              </span>
            </h2>
            <p className="mt-7 max-w-md text-sm leading-7 text-stone-600">
              Thoughtful design needs disciplined execution. Our process keeps
              decisions, budgets and responsibilities visible at every stage.
            </p>
          </motion.div>

          <div className="border-t border-stone-400/60">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                transition={{ delay: index * 0.07 }}
                className="group grid gap-4 border-b border-stone-400/60 py-7 sm:grid-cols-[58px_0.7fr_1.3fr_36px] sm:items-center"
              >
                <span className="text-xs tracking-[0.2em] text-[#9a7240]">
                  {step.id}
                </span>
                <h3 className="font-display text-3xl text-stone-950">
                  {step.title}
                </h3>
                <p className="text-sm leading-7 text-stone-600">{step.text}</p>
                <FiPlus className="text-stone-500 transition-transform group-hover:rotate-90" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Turnkey() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1320px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="relative overflow-hidden bg-stone-900 px-6 py-10 text-white sm:px-10 lg:px-16 lg:py-16"
        >
          <img
            src={images.bathroom}
            alt="Premium bathroom renovation"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-stone-950/40" />
          <div className="relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionLabel light>Turnkey execution</SectionLabel>
              <h2 className="font-display text-5xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-6xl">
                Built with one
                <span className="block italic text-[#d4b483]">
                  accountable team.
                </span>
              </h2>
              <p className="mt-7 max-w-lg text-sm leading-7 text-stone-300">
                We coordinate technical services, material procurement, custom
                production and site workmanship under one schedule and quality
                system.
              </p>
              <a
                href="#contact"
                className="mt-9 inline-flex items-center gap-3 border-b border-[#d4b483] pb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#e5c89e]"
              >
                Discuss your site <FiArrowRight />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {turnkeyGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <div
                    key={group.title}
                    className="border border-white/15 bg-white/[0.045] p-5 backdrop-blur-sm"
                  >
                    <Icon size={27} className="text-[#d4b483]" />
                    <h3 className="mt-5 font-display text-2xl">
                      {group.title}
                    </h3>
                    <ul className="mt-5 space-y-3">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-xs leading-5 text-stone-400"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#d4b483]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);
  const next = () => setActive((value) => (value + 1) % testimonials.length);
  const previous = () =>
    setActive(
      (value) => (value - 1 + testimonials.length) % testimonials.length,
    );

  return (
    <section className="overflow-hidden bg-[#d4b483] px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1180px]">
        <div className="flex items-center justify-between gap-6">
          <SectionLabel>Client stories</SectionLabel>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-stone-800/25 transition-colors hover:bg-stone-950 hover:text-white"
            >
              <FiChevronLeft />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-stone-800/25 transition-colors hover:bg-stone-950 hover:text-white"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[130px_1fr]">
          <div className="flex gap-1 pt-3 text-stone-900">
            {Array.from({ length: 5 }).map((_, index) => (
              <FiStar key={index} fill="currentColor" />
            ))}
          </div>
          <div className="min-h-[290px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.45 }}
              >
                <blockquote className="font-display text-4xl font-medium leading-[1.08] tracking-[-0.025em] text-stone-950 sm:text-5xl lg:text-6xl">
                  “{testimonials[active].quote}”
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <span className="h-px w-9 bg-stone-900" />
                  <div>
                    <div className="text-sm font-bold text-stone-950">
                      {testimonials[active].name}
                    </div>
                    <div className="mt-1 text-xs text-stone-700">
                      {testimonials[active].project}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="bg-stone-950 px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <SectionLabel light>Start a conversation</SectionLabel>
            <h2 className="font-display text-5xl font-medium leading-[0.92] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
              Let’s shape your
              <span className="block italic text-[#d4b483]">next space.</span>
            </h2>
            <p className="mt-8 max-w-lg text-sm leading-7 text-stone-400">
              Tell us about the site, your requirements and the kind of
              experience you want to create. We will help define the right next
              step.
            </p>

            <div className="mt-10 space-y-5 border-t border-white/15 pt-8">
              <a
                href="tel:+919810698082"
                className="flex items-center gap-4 text-sm text-stone-300 hover:text-white"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-[#d4b483]">
                  <FiPhone />
                </span>
                +91 98106 98082
              </a>
              <a
                href="mailto:info@4lotus.co"
                className="flex items-center gap-4 text-sm text-stone-300 hover:text-white"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-[#d4b483]">
                  <FiMail />
                </span>
                info@4lotus.co
              </a>
              <div className="flex items-start gap-4 text-sm leading-6 text-stone-300">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 text-[#d4b483]">
                  <FiMapPin />
                </span>
                Main Palam Dwarka Road, South West Delhi, New Delhi 110045
              </div>
            </div>
          </motion.div>

          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            transition={{ delay: 0.12 }}
            onSubmit={(event) => event.preventDefault()}
            className="grid gap-7 border border-white/15 bg-white/[0.035] p-6 sm:p-9"
          >
            <div className="grid gap-7 sm:grid-cols-2">
              <label className="grid gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-stone-400">
                Your name
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="border-b border-white/20 bg-transparent py-3 text-sm font-normal normal-case tracking-normal text-white outline-none transition-colors placeholder:text-stone-600 focus:border-[#d4b483]"
                />
              </label>
              <label className="grid gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-stone-400">
                Phone number
                <input
                  type="tel"
                  placeholder="+91"
                  className="border-b border-white/20 bg-transparent py-3 text-sm font-normal normal-case tracking-normal text-white outline-none transition-colors placeholder:text-stone-600 focus:border-[#d4b483]"
                />
              </label>
            </div>
            <div className="grid gap-7 sm:grid-cols-2">
              <label className="grid gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-stone-400">
                Email address
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="border-b border-white/20 bg-transparent py-3 text-sm font-normal normal-case tracking-normal text-white outline-none transition-colors placeholder:text-stone-600 focus:border-[#d4b483]"
                />
              </label>
              <label className="grid gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-stone-400">
                Project type
                <select className="border-b border-white/20 bg-transparent py-3 text-sm font-normal normal-case tracking-normal text-stone-300 outline-none focus:border-[#d4b483]">
                  <option className="bg-stone-900">Residential interior</option>
                  <option className="bg-stone-900">Commercial interior</option>
                  <option className="bg-stone-900">Kitchen / bathroom</option>
                  <option className="bg-stone-900">Turnkey renovation</option>
                </select>
              </label>
            </div>
            <label className="grid gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-stone-400">
              Tell us about the project
              <textarea
                rows="4"
                placeholder="Location, approximate area, budget and preferred timeline..."
                className="resize-none border-b border-white/20 bg-transparent py-3 text-sm font-normal normal-case leading-6 tracking-normal text-white outline-none transition-colors placeholder:text-stone-600 focus:border-[#d4b483]"
              />
            </label>
            <button
              type="submit"
              className="mt-2 flex items-center justify-between bg-[#d4b483] px-6 py-5 text-xs font-bold uppercase tracking-[0.18em] text-stone-950 transition-colors hover:bg-white"
            >
              Send project enquiry <FiArrowRight size={18} />
            </button>
            <div className="flex items-center gap-2 text-[11px] text-stone-500">
              <FiClock /> Mon–Sat · 10:00 AM–6:00 PM
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-stone-950 px-5 py-8 text-stone-400 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-stone-700 font-display text-white">
            4L
          </span>
          <span className="text-xs uppercase tracking-[0.2em]">
            4 Lotus Interior
          </span>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.13em]">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-white">
              {item.label}
            </a>
          ))}
        </div>
        <div className="text-[11px]">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Projects />
      <Process />
      <Turnkey />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
