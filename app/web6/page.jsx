// app/page.jsx
"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMenu,
  FiX,
  FiHome,
  FiGrid,
  FiLayers,
  FiCheck,
  FiPlus,
  FiMinus,
  FiPhone,
  FiMail,
  FiMapPin,
  FiInstagram,
  FiChevronRight,
} from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const navLinks = ["About Us", "Portfolio", "Services", "Journal"];

export default function InteriorDesignerPage() {
  return (
    <main className="min-h-screen bg-[#d8d0c4] text-[#201a16]">
      <Navbar />
      <Herosection />
      <Businessstrip />
      <Marquestrip />
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

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between border border-white/25 bg-[#1c1713]/70 px-4 py-3 text-white shadow-2xl backdrop-blur-xl">
        <a href="#" className="font-serif text-lg tracking-[0.22em]">
          SOLUNES
        </a>

        <div className="hidden items-center gap-10 text-[11px] uppercase tracking-[0.22em] md:flex">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
              className="text-white/70 transition hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden border-l border-white/20 pl-8 text-[11px] uppercase tracking-[0.22em] text-white md:block"
        >
          Contact
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="text-2xl md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl border border-white/20 bg-[#1c1713] p-5 text-white shadow-2xl md:hidden">
          <div className="flex flex-col gap-4 text-sm uppercase tracking-[0.18em]">
            {navLinks.map((item) => (
              <a key={item} href="#" onClick={() => setOpen(false)}>
                {item}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Herosection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-28">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#eee6da_0%,#c9bfb1_45%,#8b7d6d_100%)]" />
        <div className="absolute left-0 top-0 h-full w-full opacity-25 [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:80px_80px]" />
        <h1 className="absolute left-1/2 top-12 -translate-x-1/2 font-serif text-[18vw] uppercase leading-none tracking-[0.08em] text-white/10">
          Solunes
        </h1>
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative mx-auto grid w-full max-w-7xl overflow-hidden border border-white/30 bg-[#2b231d]/70 shadow-[0_40px_90px_rgba(0,0,0,0.35)] backdrop-blur-sm md:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="relative min-h-[620px] overflow-hidden p-6 md:p-10">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1600&auto=format&fit=crop"
              alt="Luxury neutral interior"
              className="h-full w-full object-cover opacity-55"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1c1713]/90 via-[#1c1713]/50 to-transparent" />
          </div>

          <div className="relative z-10 flex h-full flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/25 pb-4 text-[10px] uppercase tracking-[0.22em] text-white">
              <span>Interior Studio</span>
              <span>Since 2018</span>
            </div>

            <div className="max-w-3xl">
              <motion.p
                variants={fadeUp}
                className="mb-5 text-xs uppercase tracking-[0.35em] text-white/70"
              >
                Spaces with soul
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="font-serif text-5xl uppercase leading-[0.95] text-white md:text-7xl lg:text-8xl"
              >
                Material.
                <br />
                <span className="ml-10 italic normal-case tracking-tight md:ml-24">
                  Meaning.
                </span>
                <br />
                <span className="ml-24 md:ml-48">Mood.</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-8 max-w-sm text-sm leading-6 text-white/75"
              >
                We design calm, intentional interiors with warm textures,
                sculptural furniture and timeless material palettes.
              </motion.p>

              <motion.a
                variants={fadeUp}
                href="#cost-estimator"
                className="mt-8 inline-flex items-center gap-4 border-t border-white/50 pt-3 text-xs uppercase tracking-[0.25em] text-white"
              >
                Get in touch <FiArrowUpRight />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="hidden border-l border-white/20 p-8 text-white md:block">
          <div className="flex h-full flex-col justify-between">
            <div className="ml-auto h-40 w-40 rounded-full border border-white/30" />

            <div className="space-y-6">
              <div className="border border-white/20 p-5">
                <p className="text-4xl font-serif">120+</p>
                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/60">
                  Completed interiors
                </p>
              </div>

              <div className="border border-white/20 p-5">
                <p className="text-4xl font-serif">18</p>
                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/60">
                  Cities served
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Businessstrip() {
  const stats = [
    ["10+", "Years Experience"],
    ["120+", "Projects Delivered"],
    ["35+", "Design Partners"],
    ["4.9", "Client Rating"],
  ];

  return (
    <section className="border-y border-[#2b231d]/15 bg-[#ece5da] px-4 py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map(([num, label]) => (
          <motion.div
            key={label}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="border-l border-[#2b231d]/20 px-5"
          >
            <p className="font-serif text-4xl">{num}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[#6d6258]">
              {label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Marquestrip() {
  const words = [
    "Warm Minimalism",
    "Material Driven",
    "Luxury Homes",
    "Bespoke Furniture",
    "Soft Neutrals",
    "Turnkey Interiors",
  ];

  return (
    <section className="overflow-hidden bg-[#211b16] py-5 text-[#e7dfd4]">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex w-max gap-10 whitespace-nowrap"
      >
        {[...words, ...words, ...words].map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="font-serif text-3xl uppercase tracking-[0.12em] opacity-80 md:text-5xl"
          >
            {word}
          </span>
        ))}
      </motion.div>
    </section>
  );
}

function Portfolio() {
  const projects = [
    {
      title: "The Clay Residence",
      type: "Private Villa",
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Aurum Apartment",
      type: "Luxury Apartment",
      img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Muted House",
      type: "Modern Home",
      img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section id="portfolio" className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Interiors shaped through light, proportion and quiet luxury."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.map((item, index) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group overflow-hidden bg-[#ede6dc]"
            >
              <div className="relative h-[430px] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#19130f]/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/60">
                    {item.type}
                  </p>
                  <h3 className="mt-2 font-serif text-3xl">{item.title}</h3>
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
  const materials = [
    ["Travertine", "Soft veining with architectural calm."],
    ["Oak Wood", "Warm grain for timeless furniture."],
    ["Limewash", "Matte walls with natural texture."],
    ["Bronze", "Muted metallic accents and details."],
  ];

  return (
    <section className="bg-[#ede7dc] px-4 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative min-h-[520px] overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop"
            alt="Material interior"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1b1511]/25" />
        </motion.div>

        <div className="flex flex-col justify-center">
          <SectionHeading
            eyebrow="Material Library"
            title="A tactile palette for homes that feel collected, not decorated."
          />

          <div className="mt-10 divide-y divide-[#2b231d]/20 border-y border-[#2b231d]/20">
            {materials.map(([name, desc]) => (
              <motion.div
                key={name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid gap-4 py-6 md:grid-cols-[180px_1fr_40px]"
              >
                <h3 className="font-serif text-3xl">{name}</h3>
                <p className="max-w-md text-sm leading-6 text-[#6f6257]">
                  {desc}
                </p>
                <FiArrowUpRight className="text-2xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingMatrix() {
  const plans = [
    {
      name: "Essential",
      price: "₹1,499",
      desc: "Clean functional interiors for compact homes.",
      features: [
        "Space planning",
        "Basic 3D views",
        "Material board",
        "Vendor guidance",
      ],
    },
    {
      name: "Premium",
      price: "₹2,499",
      desc: "Detailed design with custom furniture direction.",
      features: [
        "Detailed 3D renders",
        "Furniture design",
        "Lighting plan",
        "Site coordination",
      ],
    },
    {
      name: "Luxe",
      price: "₹3,999",
      desc: "High-touch turnkey design for premium homes.",
      features: [
        "Turnkey execution",
        "Luxury materials",
        "Bespoke furniture",
        "Styling support",
      ],
    },
  ];

  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Pricing"
          title="Transparent design packages for every level of detail."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`border p-8 ${
                index === 1
                  ? "border-[#241c16] bg-[#241c16] text-white"
                  : "border-[#2b231d]/20 bg-[#e8dfd3]"
              }`}
            >
              <p className="text-xs uppercase tracking-[0.25em] opacity-60">
                {plan.name}
              </p>
              <h3 className="mt-6 font-serif text-5xl">{plan.price}</h3>
              <p className="mt-2 text-sm opacity-60">per sq.ft.</p>
              <p className="mt-6 min-h-12 text-sm leading-6 opacity-75">
                {plan.desc}
              </p>

              <div className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm"
                  >
                    <FiCheck />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`mt-10 flex w-full items-center justify-between border px-5 py-4 text-xs uppercase tracking-[0.2em] ${
                  index === 1
                    ? "border-white/30 text-white"
                    : "border-[#2b231d]/30"
                }`}
              >
                Select Plan <FiArrowUpRight />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: <FiHome />,
      title: "Full Home Interiors",
      desc: "Complete home design, modular work, furniture, lighting and styling.",
    },
    {
      icon: <FiGrid />,
      title: "Kitchen Design",
      desc: "L-shaped, U-shaped, straight and parallel kitchens with smart storage.",
    },
    {
      icon: <FiLayers />,
      title: "Wardrobes",
      desc: "Sliding, swing and custom wardrobe systems with premium finishes.",
    },
  ];

  return (
    <section id="services" className="bg-[#211b16] px-4 py-24 text-[#eee6da]">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="From concept to final styling, every layer is considered."
          light
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="border border-white/15 p-8 transition hover:bg-white/5"
            >
              <div className="mb-10 text-4xl">{service.icon}</div>
              <h3 className="font-serif text-3xl">{service.title}</h3>
              <p className="mt-5 text-sm leading-6 text-white/60">
                {service.desc}
              </p>
              <button className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.22em]">
                Explore <FiChevronRight />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="px-4 py-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto max-w-7xl overflow-hidden bg-[#2b231d] text-white"
      >
        <div className="grid md:grid-cols-[1fr_420px]">
          <div className="p-8 md:p-16">
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">
              Start your project
            </p>
            <h2 className="mt-6 max-w-3xl font-serif text-5xl leading-none md:text-7xl">
              Let’s design a space that feels deeply personal.
            </h2>
            <a
              href="#cost-estimator"
              className="mt-10 inline-flex items-center gap-4 border border-white/25 px-6 py-4 text-xs uppercase tracking-[0.25em]"
            >
              Estimate Cost <FiArrowUpRight />
            </a>
          </div>

          <div className="min-h-[360px]">
            <img
              src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=900&auto=format&fit=crop"
              alt="Interior consultation"
              className="h-full w-full object-cover opacity-80"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function CostEstimator() {
  const [type, setType] = useState("full-home");
  const [bhk, setBhk] = useState(2);
  const [packageType, setPackageType] = useState("Premium");
  const [rooms, setRooms] = useState({
    living: 1,
    kitchen: 1,
    bedroom: 2,
    bathroom: 2,
    dining: 1,
  });

  const packageMultiplier = {
    Essential: 1,
    Premium: 1.45,
    Luxe: 2.1,
  };

  const estimate = useMemo(() => {
    const roomTotal =
      rooms.living * 90000 +
      rooms.kitchen * 140000 +
      rooms.bedroom * 120000 +
      rooms.bathroom * 70000 +
      rooms.dining * 60000;

    const base =
      type === "full-home"
        ? roomTotal + bhk * 80000
        : type === "kitchen"
          ? 180000
          : 120000;

    return Math.round(base * packageMultiplier[packageType]);
  }, [type, bhk, rooms, packageType]);

  const updateRoom = (key, value) => {
    setRooms((prev) => ({
      ...prev,
      [key]: Math.max(0, prev[key] + value),
    }));
  };

  return (
    <section id="cost-estimator" className="bg-[#eee6da] px-4 py-24">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Cost Estimator"
            title="Get a quick idea of your interior budget."
          />

          <div className="mt-10 border border-[#2b231d]/20 bg-[#dfd5c8] p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-[#6d6258]">
              Estimated Budget
            </p>
            <h3 className="mt-4 font-serif text-6xl">
              ₹{estimate.toLocaleString("en-IN")}
            </h3>
            <p className="mt-4 text-sm leading-6 text-[#6d6258]">
              This is a rough estimate. Final pricing depends on site size,
              material selection, finishes and execution scope.
            </p>
          </div>
        </div>

        <div className="border border-[#2b231d]/20 bg-[#e6ded2] p-6 md:p-8">
          <div className="grid gap-3 md:grid-cols-3">
            {[
              ["full-home", "Full Home"],
              ["kitchen", "Kitchen"],
              ["wardrobe", "Wardrobe"],
            ].map(([value, label]) => (
              <button
                key={value}
                onClick={() => setType(value)}
                className={`border px-4 py-4 text-xs uppercase tracking-[0.2em] ${
                  type === value
                    ? "border-[#2b231d] bg-[#2b231d] text-white"
                    : "border-[#2b231d]/20"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {type === "full-home" && (
            <div className="mt-8 space-y-8">
              <div>
                <Label>BHK Type</Label>
                <div className="mt-3 grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        setBhk(item);
                        setRooms((prev) => ({
                          ...prev,
                          bedroom: item,
                          bathroom: Math.max(item, 1),
                        }));
                      }}
                      className={`border py-3 ${
                        bhk === item
                          ? "border-[#2b231d] bg-[#2b231d] text-white"
                          : "border-[#2b231d]/20"
                      }`}
                    >
                      {item} BHK
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label>Rooms</Label>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {Object.entries(rooms).map(([key, value]) => (
                    <Counter
                      key={key}
                      label={key}
                      value={value}
                      onMinus={() => updateRoom(key, -1)}
                      onPlus={() => updateRoom(key, 1)}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {type === "kitchen" && (
            <div className="mt-8 space-y-6">
              <Label>Kitchen Shape</Label>
              <div className="grid gap-3 md:grid-cols-2">
                {["L Shaped", "Straight", "U Shaped", "Parallel"].map(
                  (item) => (
                    <button
                      key={item}
                      className="border border-[#2b231d]/20 px-4 py-4 text-left text-sm"
                    >
                      {item}
                    </button>
                  ),
                )}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Input label="Length in feet" placeholder="Example: 12" />
                <Input label="Width in feet" placeholder="Example: 8" />
              </div>
            </div>
          )}

          {type === "wardrobe" && (
            <div className="mt-8 space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <Input label="Height in feet" placeholder="Example: 7" />
                <Input label="Width in feet" placeholder="Example: 6" />
              </div>

              <div>
                <Label>Door Type</Label>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {["Sliding", "Swing"].map((item) => (
                    <button
                      key={item}
                      className="border border-[#2b231d]/20 px-4 py-4 text-sm"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label>Finish</Label>
                <div className="mt-3 grid gap-3 md:grid-cols-3">
                  {["Laminate", "Membrane", "Acrylic"].map((item) => (
                    <button
                      key={item}
                      className="border border-[#2b231d]/20 px-4 py-4 text-sm"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="mt-8">
            <Label>Package</Label>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              {["Essential", "Premium", "Luxe"].map((item) => (
                <button
                  key={item}
                  onClick={() => setPackageType(item)}
                  className={`border px-4 py-4 text-xs uppercase tracking-[0.2em] ${
                    packageType === item
                      ? "border-[#2b231d] bg-[#2b231d] text-white"
                      : "border-[#2b231d]/20"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button className="mt-8 flex w-full items-center justify-center gap-3 bg-[#2b231d] px-6 py-5 text-xs uppercase tracking-[0.25em] text-white">
            Book Consultation <FiArrowUpRight />
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-[#1d1712] px-4 py-14 text-[#eee6da]">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1fr]">
        <div>
          <h2 className="font-serif text-5xl uppercase tracking-[0.12em]">
            SOLUNES
          </h2>
          <p className="mt-5 max-w-md text-sm leading-6 text-white/55">
            A luxury interior design studio creating warm, layered and
            meaningful homes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/40">
              Contact
            </p>
            <div className="space-y-3 text-sm text-white/70">
              <p className="flex items-center gap-3">
                <FiPhone /> +91 98765 43210
              </p>
              <p className="flex items-center gap-3">
                <FiMail /> hello@solunes.studio
              </p>
              <p className="flex items-center gap-3">
                <FiMapPin /> New Delhi, India
              </p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/40">
              Social
            </p>
            <a className="flex items-center gap-3 text-sm text-white/70">
              <FiInstagram /> Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between border-t border-white/10 pt-6 text-xs uppercase tracking-[0.2em] text-white/35 md:flex-row">
        <p>© 2026 Solunes Studio</p>
        <p>Interior Design / Architecture / Styling</p>
      </div>
    </footer>
  );
}

function SectionHeading({ eyebrow, title, light = false }) {
  return (
    <div>
      <p
        className={`text-xs uppercase tracking-[0.35em] ${
          light ? "text-white/45" : "text-[#6d6258]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-5 max-w-4xl font-serif text-4xl leading-tight md:text-6xl ${
          light ? "text-[#eee6da]" : "text-[#201a16]"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

function Label({ children }) {
  return (
    <p className="text-xs uppercase tracking-[0.25em] text-[#6d6258]">
      {children}
    </p>
  );
}

function Counter({ label, value, onMinus, onPlus }) {
  return (
    <div className="flex items-center justify-between border border-[#2b231d]/20 p-4">
      <span className="capitalize">{label}</span>
      <div className="flex items-center gap-4">
        <button onClick={onMinus} className="border border-[#2b231d]/20 p-2">
          <FiMinus />
        </button>
        <span>{value}</span>
        <button onClick={onPlus} className="border border-[#2b231d]/20 p-2">
          <FiPlus />
        </button>
      </div>
    </div>
  );
}

function Input({ label, placeholder }) {
  return (
    <label className="block">
      <Label>{label}</Label>
      <input
        placeholder={placeholder}
        className="mt-3 w-full border border-[#2b231d]/20 bg-transparent px-4 py-4 outline-none placeholder:text-[#6d6258]/50"
      />
    </label>
  );
}
