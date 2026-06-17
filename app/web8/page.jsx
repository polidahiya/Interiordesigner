// app/page.jsx
"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMenu,
  FiX,
  FiStar,
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
  FiFacebook,
  FiChevronRight,
} from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const navLinks = ["Home", "About", "Services", "Blog", "Portfolio"];

export default function InteriorDesignerWebsite() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#ead7ca] text-[#17110d]">
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
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/75 px-5 py-3 shadow-[0_20px_60px_rgba(87,50,32,0.16)] backdrop-blur-xl">
        <a href="#" className="font-serif text-lg font-bold tracking-tight">
          INTHRA
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-xs font-medium text-[#5f5047] transition hover:text-[#c85f3d]"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-[#17110d] px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white md:block"
        >
          Contact Us
        </a>

        <button
          onClick={() => setOpen(true)}
          className="text-2xl md:hidden"
          aria-label="Open menu"
        >
          <FiMenu />
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-[#17110d]/60 p-4 backdrop-blur-md md:hidden"
        >
          <div className="ml-auto min-h-full max-w-sm rounded-[2rem] bg-[#fff8f2] p-6 shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              className="ml-auto flex items-center gap-2 text-sm"
            >
              Close <FiX />
            </button>

            <div className="mt-12 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="font-serif text-4xl"
                >
                  {link}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 rounded-full bg-[#c85f3d] px-6 py-4 text-center text-sm font-semibold text-white"
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}

function Herosection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-4 py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,#fff6ee_0%,transparent_36%),radial-gradient(circle_at_90%_20%,#f7c7b2_0%,transparent_34%),linear-gradient(135deg,#ead7ca,#f5e4d8,#e4c4b5)]" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative mx-auto mt-8 grid w-full max-w-7xl overflow-hidden rounded-[2rem] border-[7px] border-white bg-[#f9eee7] shadow-[0_35px_90px_rgba(100,57,37,0.26)] md:grid-cols-[1fr_1.05fr]"
      >
        <div className="relative z-10 flex min-h-[620px] flex-col justify-center px-6 py-16 md:px-16">
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs text-[#6d5c51] shadow-sm"
          >
            <span className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
              ].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Client"
                  className="h-6 w-6 rounded-full border-2 border-white object-cover"
                />
              ))}
            </span>
            Trusted by 25k+ people
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="max-w-2xl font-serif text-5xl leading-[0.96] tracking-[-0.04em] text-[#251913] md:text-7xl lg:text-8xl"
          >
            Modern Elegance Stunning Reflections
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-3 rounded-full bg-[#c85f3d] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(200,95,61,0.35)]"
            >
              Our Works
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white/20 transition group-hover:rotate-45">
                <FiArrowUpRight />
              </span>
            </a>

            <div className="hidden items-center gap-1 text-[#c85f3d] sm:flex">
              {Array.from({ length: 5 }).map((_, index) => (
                <FiStar key={index} fill="currentColor" />
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-16 max-w-sm">
            <p className="font-serif text-xl">Since 2004</p>
            <p className="mt-3 text-sm leading-6 text-[#6e5c51]">
              Designing seamless spaces with calm materials, reflective light,
              soft palettes and functional layouts for refined modern living.
            </p>
          </motion.div>
        </div>

        <div className="relative min-h-[520px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1500&auto=format&fit=crop"
            alt="Soft beige interior"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f9eee7] via-[#f9eee7]/20 to-transparent md:bg-gradient-to-r" />

          <motion.div
            variants={fadeUp}
            className="absolute bottom-8 right-8 hidden max-w-xs rounded-[1.5rem] bg-white/70 p-5 shadow-xl backdrop-blur-md md:block"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c85f3d]">
              Interior Mood
            </p>
            <p className="mt-2 text-sm leading-6 text-[#5f5047]">
              Peach tones, sculptural forms and natural daylight for peaceful
              homes.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function Businessstrip() {
  const stats = [
    ["20+", "Years Experience"],
    ["450+", "Projects Delivered"],
    ["85+", "Design Experts"],
    ["4.9", "Average Rating"],
  ];

  return (
    <section className="px-4 pb-20">
      <div className="mx-auto grid max-w-7xl gap-4 rounded-[2rem] bg-white/60 p-4 shadow-[0_20px_60px_rgba(100,57,37,0.12)] backdrop-blur md:grid-cols-4">
        {stats.map(([value, label]) => (
          <motion.div
            key={label}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-[1.5rem] bg-[#fff8f2] p-6"
          >
            <p className="font-serif text-5xl text-[#c85f3d]">{value}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#7a695e]">
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
    "Modern Homes",
    "Soft Minimalism",
    "Luxury Interiors",
    "Warm Materials",
    "Smart Layouts",
    "Elegant Reflections",
  ];

  return (
    <section className="overflow-hidden bg-[#fff4ed] py-5">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="flex w-max gap-8 whitespace-nowrap"
      >
        {[...words, ...words, ...words].map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="font-serif text-4xl text-[#c85f3d]/80 md:text-6xl"
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
      title: "Blush Dining House",
      type: "Residential",
      img: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Soft Curve Apartment",
      type: "Apartment",
      img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Pearl Reflection Villa",
      type: "Luxury Villa",
      img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section id="portfolio" className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Beautiful homes shaped by comfort, reflection and simplicity."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group overflow-hidden rounded-[2rem] bg-[#fff8f2] p-3 shadow-[0_20px_60px_rgba(100,57,37,0.14)]"
            >
              <div className="relative h-[430px] overflow-hidden rounded-[1.5rem]">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e130e]/75 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                    {project.type}
                  </p>
                  <h3 className="mt-2 font-serif text-3xl">{project.title}</h3>
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
    ["Cream Oak", "Soft wooden warmth for calm furniture compositions."],
    ["Peach Limewash", "Matte walls with airy texture and gentle depth."],
    ["Ivory Stone", "Reflective stone for elegant counters and surfaces."],
    ["Brushed Brass", "Warm metallic details for refined luxury accents."],
  ];

  return (
    <section id="materials" className="bg-[#fff4ed] px-4 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-[0_25px_80px_rgba(100,57,37,0.16)]"
        >
          <img
            src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=1200&auto=format&fit=crop"
            alt="Material interior"
            className="h-[560px] w-full rounded-[2rem] object-cover"
          />
        </motion.div>

        <div className="flex flex-col justify-center">
          <SectionHeading
            eyebrow="Material Showcase"
            title="A soft palette created for light, warmth and reflection."
          />

          <div className="mt-10 space-y-4">
            {materials.map(([name, desc]) => (
              <motion.div
                key={name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid gap-4 rounded-[1.5rem] bg-white/70 p-5 shadow-sm md:grid-cols-[180px_1fr_40px]"
              >
                <h3 className="font-serif text-3xl">{name}</h3>
                <p className="text-sm leading-6 text-[#6e5c51]">{desc}</p>
                <FiArrowUpRight className="text-2xl text-[#c85f3d]" />
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
      desc: "For compact homes and simple room refreshes.",
      features: [
        "Space planning",
        "Mood board",
        "Basic 3D view",
        "Material guide",
      ],
    },
    {
      name: "Premium",
      price: "₹2,499",
      desc: "For full design detail and custom furniture planning.",
      features: [
        "Detailed 3D renders",
        "Lighting plan",
        "Furniture design",
        "Site support",
      ],
    },
    {
      name: "Luxe",
      price: "₹3,999",
      desc: "For high-touch luxury interiors and turnkey execution.",
      features: [
        "Turnkey execution",
        "Premium materials",
        "Bespoke furniture",
        "Final styling",
      ],
    },
  ];

  return (
    <section id="pricing" className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Pricing Matrix"
          title="Clear design packages for every kind of dream home."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`rounded-[2rem] p-8 shadow-[0_20px_60px_rgba(100,57,37,0.12)] ${
                index === 1
                  ? "bg-[#c85f3d] text-white"
                  : "bg-[#fff8f2] text-[#17110d]"
              }`}
            >
              <p
                className={`text-xs uppercase tracking-[0.24em] ${
                  index === 1 ? "text-white/70" : "text-[#c85f3d]"
                }`}
              >
                {plan.name}
              </p>

              <h3 className="mt-6 font-serif text-6xl">{plan.price}</h3>
              <p className="mt-2 text-sm opacity-60">per sq.ft.</p>

              <p className="mt-6 min-h-14 text-sm leading-6 opacity-75">
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
                className={`mt-10 flex w-full items-center justify-between rounded-full px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] ${
                  index === 1
                    ? "bg-white text-[#c85f3d]"
                    : "bg-[#17110d] text-white"
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
      title: "Wardrobe Design",
      desc: "Sliding and swing wardrobes with premium finishes and accessories.",
    },
  ];

  return (
    <section id="services" className="bg-[#fff4ed] px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="Everything needed to create a polished modern interior."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group rounded-[2rem] bg-white/75 p-8 shadow-[0_20px_60px_rgba(100,57,37,0.1)] transition hover:-translate-y-2 hover:bg-white"
            >
              <div className="mb-12 grid h-16 w-16 place-items-center rounded-2xl bg-[#fae1d5] text-3xl text-[#c85f3d]">
                {service.icon}
              </div>

              <h3 className="font-serif text-3xl">{service.title}</h3>
              <p className="mt-4 text-sm leading-6 text-[#6e5c51]">
                {service.desc}
              </p>

              <button className="mt-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#c85f3d]">
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
        className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#17110d] text-white shadow-[0_30px_90px_rgba(100,57,37,0.2)] md:grid-cols-[1fr_440px]"
      >
        <div className="p-8 md:p-16">
          <p className="text-xs uppercase tracking-[0.28em] text-[#f0b49b]">
            Start Your Project
          </p>

          <h2 className="mt-6 max-w-3xl font-serif text-5xl leading-[1] md:text-7xl">
            Let’s make your home feel calm, bright and personal.
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-6 text-white/60">
            Share your room type, measurements and style preferences. We will
            help you plan the right design package and budget.
          </p>

          <a
            href="#cost-estimator"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#c85f3d] px-7 py-4 text-sm font-semibold text-white"
          >
            Estimate Cost <FiArrowUpRight />
          </a>
        </div>

        <div className="min-h-[380px]">
          <img
            src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=900&auto=format&fit=crop"
            alt="Interior CTA"
            className="h-full w-full object-cover opacity-90"
          />
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

  const [kitchenShape, setKitchenShape] = useState("L Shaped");
  const [kitchenLength, setKitchenLength] = useState(10);
  const [kitchenWidth, setKitchenWidth] = useState(8);

  const [wardrobeHeight, setWardrobeHeight] = useState(7);
  const [wardrobeWidth, setWardrobeWidth] = useState(6);
  const [wardrobeDoor, setWardrobeDoor] = useState("Sliding");
  const [wardrobeFinish, setWardrobeFinish] = useState("Laminate");

  const packageMultiplier = {
    Essential: 1,
    Premium: 1.45,
    Luxe: 2.15,
  };

  const estimate = useMemo(() => {
    let base = 0;

    if (type === "full-home") {
      base =
        rooms.living * 90000 +
        rooms.kitchen * 150000 +
        rooms.bedroom * 120000 +
        rooms.bathroom * 70000 +
        rooms.dining * 60000 +
        bhk * 75000;
    }

    if (type === "kitchen") {
      const area = Number(kitchenLength || 0) * Number(kitchenWidth || 0);

      const shapeMultiplier =
        kitchenShape === "Straight"
          ? 1
          : kitchenShape === "L Shaped"
            ? 1.15
            : kitchenShape === "Parallel"
              ? 1.25
              : 1.35;

      base = area * 4500 * shapeMultiplier;
    }

    if (type === "wardrobe") {
      const area = Number(wardrobeHeight || 0) * Number(wardrobeWidth || 0);

      const doorMultiplier = wardrobeDoor === "Sliding" ? 1.2 : 1;

      const finishMultiplier =
        wardrobeFinish === "Laminate"
          ? 1
          : wardrobeFinish === "Membrane"
            ? 1.25
            : 1.55;

      base = area * 3200 * doorMultiplier * finishMultiplier;
    }

    return Math.round(base * packageMultiplier[packageType]);
  }, [
    type,
    bhk,
    rooms,
    packageType,
    kitchenShape,
    kitchenLength,
    kitchenWidth,
    wardrobeHeight,
    wardrobeWidth,
    wardrobeDoor,
    wardrobeFinish,
  ]);

  const updateRoom = (key, amount) => {
    setRooms((prev) => ({
      ...prev,
      [key]: Math.max(0, prev[key] + amount),
    }));
  };

  return (
    <section id="cost-estimator" className="bg-[#fff4ed] px-4 py-24">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            eyebrow="Cost Estimator"
            title="Calculate your approximate interior budget."
          />

          <div className="mt-10 rounded-[2rem] bg-white p-8 shadow-[0_20px_60px_rgba(100,57,37,0.12)]">
            <p className="text-xs uppercase tracking-[0.22em] text-[#c85f3d]">
              Estimated Budget
            </p>

            <h3 className="mt-5 font-serif text-6xl text-[#17110d]">
              ₹{estimate.toLocaleString("en-IN")}
            </h3>

            <p className="mt-5 text-sm leading-6 text-[#6e5c51]">
              This is a rough planning estimate. Final pricing depends on site
              size, exact measurements, materials, hardware and execution scope.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white/75 p-5 shadow-[0_20px_60px_rgba(100,57,37,0.12)] md:p-8">
          <div className="grid gap-3 md:grid-cols-3">
            {[
              ["full-home", "Full Home"],
              ["kitchen", "Kitchen"],
              ["wardrobe", "Wardrobe"],
            ].map(([value, label]) => (
              <OptionButton
                key={value}
                active={type === value}
                onClick={() => setType(value)}
              >
                {label}
              </OptionButton>
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
                          bathroom: item,
                        }));
                      }}
                      className={`rounded-full px-3 py-3 text-sm font-semibold ${
                        bhk === item
                          ? "bg-[#c85f3d] text-white"
                          : "bg-[#fff4ed] text-[#6e5c51]"
                      }`}
                    >
                      {item}
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
            <div className="mt-8 space-y-7">
              <div>
                <Label>Kitchen Shape</Label>
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  {["L Shaped", "Straight", "U Shaped", "Parallel"].map(
                    (item) => (
                      <OptionButton
                        key={item}
                        active={kitchenShape === item}
                        onClick={() => setKitchenShape(item)}
                      >
                        {item}
                      </OptionButton>
                    ),
                  )}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Input
                  label="Length in feet"
                  value={kitchenLength}
                  onChange={(e) => setKitchenLength(e.target.value)}
                />
                <Input
                  label="Width in feet"
                  value={kitchenWidth}
                  onChange={(e) => setKitchenWidth(e.target.value)}
                />
              </div>
            </div>
          )}

          {type === "wardrobe" && (
            <div className="mt-8 space-y-7">
              <div className="grid gap-4 md:grid-cols-2">
                <Input
                  label="Height in feet"
                  value={wardrobeHeight}
                  onChange={(e) => setWardrobeHeight(e.target.value)}
                />
                <Input
                  label="Width in feet"
                  value={wardrobeWidth}
                  onChange={(e) => setWardrobeWidth(e.target.value)}
                />
              </div>

              <div>
                <Label>Door Type</Label>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {["Sliding", "Swing"].map((item) => (
                    <OptionButton
                      key={item}
                      active={wardrobeDoor === item}
                      onClick={() => setWardrobeDoor(item)}
                    >
                      {item}
                    </OptionButton>
                  ))}
                </div>
              </div>

              <div>
                <Label>Finish</Label>
                <div className="mt-3 grid gap-3 md:grid-cols-3">
                  {["Laminate", "Membrane", "Acrylic"].map((item) => (
                    <OptionButton
                      key={item}
                      active={wardrobeFinish === item}
                      onClick={() => setWardrobeFinish(item)}
                    >
                      {item}
                    </OptionButton>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="mt-8">
            <Label>Package</Label>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              {["Essential", "Premium", "Luxe"].map((item) => (
                <OptionButton
                  key={item}
                  active={packageType === item}
                  onClick={() => setPackageType(item)}
                >
                  {item}
                </OptionButton>
              ))}
            </div>
          </div>

          <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-[#17110d] px-6 py-5 text-sm font-semibold text-white">
            Book Consultation <FiArrowUpRight />
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-[#17110d] px-4 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1fr]">
        <div>
          <h2 className="font-serif text-6xl">INTHRA</h2>
          <p className="mt-5 max-w-md text-sm leading-6 text-white/55">
            A modern interior design studio creating elegant, warm and
            reflective spaces for homes, apartments and villas.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#f0b49b]">
              Contact
            </p>

            <div className="space-y-4 text-sm text-white/65">
              <p className="flex items-center gap-3">
                <FiPhone /> +91 98765 43210
              </p>
              <p className="flex items-center gap-3">
                <FiMail /> hello@inthra.design
              </p>
              <p className="flex items-center gap-3">
                <FiMapPin /> New Delhi, India
              </p>
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#f0b49b]">
              Social
            </p>

            <div className="space-y-4 text-sm text-white/65">
              <p className="flex items-center gap-3">
                <FiInstagram /> Instagram
              </p>
              <p className="flex items-center gap-3">
                <FiFacebook /> Facebook
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between border-t border-white/10 pt-6 text-xs uppercase tracking-[0.2em] text-white/35 md:flex-row">
        <p>© 2026 Inthra Interior Studio</p>
        <p>Interior Design / Furniture / Styling</p>
      </div>
    </footer>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c85f3d]">
        {eyebrow}
      </p>

      <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.05] tracking-[-0.03em] text-[#17110d] md:text-6xl">
        {title}
      </h2>
    </div>
  );
}

function Label({ children }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c85f3d]">
      {children}
    </p>
  );
}

function OptionButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-5 py-4 text-sm font-semibold transition ${
        active
          ? "bg-[#c85f3d] text-white shadow-[0_12px_30px_rgba(200,95,61,0.25)]"
          : "bg-[#fff4ed] text-[#6e5c51] hover:bg-[#fae1d5]"
      }`}
    >
      {children}
    </button>
  );
}

function Counter({ label, value, onMinus, onPlus }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-[#fff4ed] p-4">
      <span className="capitalize text-sm font-semibold text-[#6e5c51]">
        {label}
      </span>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onMinus}
          className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#c85f3d]"
        >
          <FiMinus />
        </button>

        <span className="min-w-6 text-center font-semibold">{value}</span>

        <button
          type="button"
          onClick={onPlus}
          className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#c85f3d]"
        >
          <FiPlus />
        </button>
      </div>
    </div>
  );
}

function Input({ label, value, onChange }) {
  return (
    <label className="block">
      <Label>{label}</Label>

      <input
        type="number"
        value={value}
        onChange={onChange}
        className="mt-3 w-full rounded-2xl bg-[#fff4ed] px-5 py-4 text-[#17110d] outline-none placeholder:text-[#8a766a] focus:ring-2 focus:ring-[#c85f3d]/35"
      />
    </label>
  );
}
