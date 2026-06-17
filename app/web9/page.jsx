// app/page.jsx
"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMenu,
  FiX,
  FiSearch,
  FiShoppingBag,
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
  FiStar,
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
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Catalog", href: "#portfolio" },
  { name: "About", href: "#materials" },
  { name: "Contacts", href: "#contact" },
];

export default function InteriorDesignerWebsite() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#d8e6ef] text-[#203344]">
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
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-[2rem] bg-[#94abc1]/70 px-5 py-4 text-white shadow-[0_18px_50px_rgba(55,82,105,0.22)] backdrop-blur-xl md:px-8">
        <a href="#home" className="text-sm font-black uppercase tracking-tight">
          HOME<span className="text-white/70">FOR</span>SOUL
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-white/75 transition hover:text-[#ffe08c]"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <a
            href="#cost-estimator"
            className="flex items-center gap-2 text-xs font-semibold text-[#203344]"
          >
            Cart
            <span className="grid h-6 w-6 place-items-center rounded-full bg-[#ffe08c] text-[11px]">
              2
            </span>
          </a>

          <button className="text-xl text-[#203344]">
            <FiSearch />
          </button>

          <button className="text-xl text-[#203344]">
            <FiMenu />
          </button>
        </div>

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
          className="fixed inset-0 z-50 bg-[#203344]/70 p-4 backdrop-blur-md md:hidden"
        >
          <div className="ml-auto min-h-full max-w-sm rounded-[2rem] bg-[#eef6fb] p-6 shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              className="ml-auto flex items-center gap-2 text-sm font-semibold text-[#203344]"
            >
              Close <FiX />
            </button>

            <div className="mt-14 flex flex-col gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-4xl font-black tracking-tight text-[#203344]"
                >
                  {link.name}
                </a>
              ))}
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
      className="relative flex min-h-screen items-center justify-center px-4 py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,#f2fbff_0%,transparent_34%),radial-gradient(circle_at_85%_20%,#b8cce0_0%,transparent_32%),linear-gradient(135deg,#d8e6ef,#c6d8e6,#e2edf4)]" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative mx-auto grid w-full max-w-7xl overflow-hidden rounded-[2.7rem] bg-[#91a9be] shadow-[0_35px_90px_rgba(61,88,112,0.35)] md:grid-cols-[1.2fr_0.95fr]"
      >
        <div className="relative min-h-[640px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop"
            alt="Blue toned interior ceramics"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#7892a9]/20" />

          <div className="absolute bottom-0 left-0 right-0 flex gap-4 p-6">
            <ProductCard
              title="Soft Blue Lounge"
              price="₹4.99L"
              className="hidden md:block"
            />
            <ProductCard title="Nordic Dining Room" price="₹7.29L" active />
            <ProductCard
              title="Small Studio Setup"
              price="₹6.89L"
              className="hidden sm:block"
            />
          </div>
        </div>

        <div className="relative flex min-h-[640px] flex-col justify-center bg-[#8fa7bd] px-8 py-16 md:px-12">
          <motion.p
            variants={fadeUp}
            className="text-xs font-bold uppercase tracking-[0.55em] text-white/80"
          >
            Collection
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-5 text-7xl font-black lowercase leading-[0.85] tracking-[0.04em] text-white md:text-8xl lg:text-9xl"
          >
            more<span className="text-[#bc6c43]">.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-md text-sm leading-7 text-white/75"
          >
            Calm blue interiors inspired by ocean light, ceramic textures,
            natural wood, softened edges and peaceful modern living.
          </motion.p>

          <motion.a
            variants={fadeUp}
            href="#portfolio"
            className="mt-10 inline-flex w-fit items-center gap-4 rounded-xl bg-[#ffe08c] px-8 py-4 text-sm font-bold text-[#203344] shadow-[0_15px_35px_rgba(255,224,140,0.35)]"
          >
            View Catalog <FiArrowUpRight />
          </motion.a>

          <motion.div
            variants={fadeUp}
            className="mt-16 grid grid-cols-3 gap-3"
          >
            {["Soft blue", "Clay wood", "Matte calm"].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white/15 p-4 text-xs font-semibold text-white backdrop-blur"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function Businessstrip() {
  const stats = [
    ["18+", "Years Experience"],
    ["680+", "Homes Designed"],
    ["45+", "Cities Served"],
    ["4.9", "Client Rating"],
  ];

  return (
    <section className="px-4 pb-20">
      <div className="mx-auto grid max-w-7xl gap-4 rounded-[2rem] bg-[#eaf4fa]/80 p-4 shadow-[0_24px_70px_rgba(61,88,112,0.16)] md:grid-cols-4">
        {stats.map(([num, label]) => (
          <motion.div
            key={label}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-[1.5rem] bg-white/75 p-6"
          >
            <p className="text-5xl font-black tracking-tight text-[#bc6c43]">
              {num}
            </p>
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.22em] text-[#5d7488]">
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
    "Ocean Calm",
    "Soft Interiors",
    "Blue Living",
    "Natural Wood",
    "Ceramic Mood",
    "Soulful Homes",
  ];

  return (
    <section className="overflow-hidden bg-[#8fa7bd] py-5 text-white">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="flex w-max gap-10 whitespace-nowrap"
      >
        {[...words, ...words, ...words].map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="text-5xl font-black uppercase tracking-tight text-white/85 md:text-7xl"
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
      title: "Sea Mist Apartment",
      type: "Apartment",
      img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Blue Clay Villa",
      type: "Luxury Villa",
      img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Nordic Soul Home",
      type: "Modern Home",
      img: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section id="portfolio" className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Soft blue spaces designed for slow, beautiful living."
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
              className="group overflow-hidden rounded-[2rem] bg-[#eef6fb] p-3 shadow-[0_20px_60px_rgba(61,88,112,0.16)]"
            >
              <div className="relative h-[430px] overflow-hidden rounded-[1.5rem]">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#203344]/85 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ffe08c]">
                    {project.type}
                  </p>
                  <h3 className="mt-3 text-3xl font-black tracking-tight">
                    {project.title}
                  </h3>
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
    [
      "Powder Blue",
      "A calm base tone for walls, furniture and visual softness.",
    ],
    ["Terracotta Clay", "Warm earthy accents inspired by handmade ceramics."],
    ["Washed Oak", "Natural wood that brings warmth into cool blue rooms."],
    ["Matte Ceramic", "Soft surfaces with tactile, handcrafted character."],
  ];

  return (
    <section id="materials" className="bg-[#eaf4fa] px-4 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="overflow-hidden rounded-[2.5rem] bg-white/70 p-4 shadow-[0_25px_80px_rgba(61,88,112,0.18)]"
        >
          <img
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200&auto=format&fit=crop"
            alt="Blue material interior"
            className="h-[560px] w-full rounded-[2rem] object-cover"
          />
        </motion.div>

        <div className="flex flex-col justify-center">
          <SectionHeading
            eyebrow="Material Showcase"
            title="A palette of water, clay, wood and quiet texture."
          />

          <div className="mt-10 space-y-4">
            {materials.map(([name, desc]) => (
              <motion.div
                key={name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid gap-4 rounded-[1.5rem] bg-white/75 p-5 shadow-sm md:grid-cols-[190px_1fr_40px]"
              >
                <h3 className="text-3xl font-black tracking-tight text-[#203344]">
                  {name}
                </h3>
                <p className="text-sm leading-6 text-[#5d7488]">{desc}</p>
                <FiArrowUpRight className="text-2xl text-[#bc6c43]" />
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
      desc: "For compact spaces and simple design upgrades.",
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
      desc: "For full-home design detail and custom furniture.",
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
      desc: "For high-touch turnkey interiors and styling.",
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
          title="Simple packages for peaceful and premium interiors."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`rounded-[2rem] p-8 shadow-[0_20px_60px_rgba(61,88,112,0.16)] ${
                index === 1
                  ? "bg-[#bc6c43] text-white"
                  : "bg-[#eef6fb] text-[#203344]"
              }`}
            >
              <p
                className={`text-xs font-bold uppercase tracking-[0.24em] ${
                  index === 1 ? "text-white/75" : "text-[#bc6c43]"
                }`}
              >
                {plan.name}
              </p>

              <h3 className="mt-6 text-6xl font-black tracking-tight">
                {plan.price}
              </h3>
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
                className={`mt-10 flex w-full items-center justify-between rounded-xl px-5 py-4 text-xs font-black uppercase tracking-[0.16em] ${
                  index === 1
                    ? "bg-white text-[#bc6c43]"
                    : "bg-[#203344] text-white"
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
      desc: "Complete design, modular work, furniture, lighting, decor and execution.",
    },
    {
      icon: <FiGrid />,
      title: "Kitchen Design",
      desc: "Straight, L-shaped, U-shaped and parallel kitchen layouts with smart storage.",
    },
    {
      icon: <FiLayers />,
      title: "Wardrobe Design",
      desc: "Sliding and swing wardrobes with premium finishes and functional accessories.",
    },
  ];

  return (
    <section id="services" className="bg-[#eaf4fa] px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="Interior services made for calm modern homes."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group rounded-[2rem] bg-white/75 p-8 shadow-[0_20px_60px_rgba(61,88,112,0.14)] transition hover:-translate-y-2 hover:bg-white"
            >
              <div className="mb-12 grid h-16 w-16 place-items-center rounded-2xl bg-[#d8e6ef] text-3xl text-[#bc6c43]">
                {service.icon}
              </div>

              <h3 className="text-3xl font-black tracking-tight text-[#203344]">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-[#5d7488]">
                {service.desc}
              </p>

              <button className="mt-8 flex items-center gap-3 text-xs font-black uppercase tracking-[0.18em] text-[#bc6c43]">
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
        className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#8fa7bd] text-white shadow-[0_30px_90px_rgba(61,88,112,0.25)] md:grid-cols-[1fr_440px]"
      >
        <div className="p-8 md:p-16">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ffe08c]">
            Start Your Project
          </p>

          <h2 className="mt-6 max-w-3xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Design a home that feels calm, useful and soulful.
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/70">
            Tell us your home type, measurements and design package. We will
            help you plan the right layout, material palette and budget.
          </p>

          <a
            href="#cost-estimator"
            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[#ffe08c] px-7 py-4 text-sm font-black text-[#203344]"
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
    <section id="cost-estimator" className="bg-[#eaf4fa] px-4 py-24">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            eyebrow="Cost Estimator"
            title="Calculate your approximate interior budget."
          />

          <div className="mt-10 rounded-[2rem] bg-white/80 p-8 shadow-[0_20px_60px_rgba(61,88,112,0.16)]">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#bc6c43]">
              Estimated Budget
            </p>

            <h3 className="mt-5 text-6xl font-black tracking-tight text-[#203344]">
              ₹{estimate.toLocaleString("en-IN")}
            </h3>

            <p className="mt-5 text-sm leading-6 text-[#5d7488]">
              This is a rough planning estimate. Final pricing depends on site
              measurements, materials, hardware, finish and execution scope.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white/75 p-5 shadow-[0_20px_60px_rgba(61,88,112,0.16)] md:p-8">
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
                      className={`rounded-xl px-3 py-3 text-sm font-black ${
                        bhk === item
                          ? "bg-[#bc6c43] text-white"
                          : "bg-[#eaf4fa] text-[#5d7488]"
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

          <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-[#203344] px-6 py-5 text-sm font-black text-white">
            Book Consultation <FiArrowUpRight />
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-[#203344] px-4 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1fr]">
        <div>
          <h2 className="text-5xl font-black tracking-tight">
            HOME<span className="text-white/60">FOR</span>SOUL
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
            A calm interior design studio creating soft blue, wood and ceramic
            inspired homes for modern soulful living.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.25em] text-[#ffe08c]">
              Contact
            </p>

            <div className="space-y-4 text-sm text-white/70">
              <p className="flex items-center gap-3">
                <FiPhone /> +91 98765 43210
              </p>
              <p className="flex items-center gap-3">
                <FiMail /> hello@homeforsoul.design
              </p>
              <p className="flex items-center gap-3">
                <FiMapPin /> New Delhi, India
              </p>
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.25em] text-[#ffe08c]">
              Social
            </p>

            <div className="space-y-4 text-sm text-white/70">
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
        <p>© 2026 Home For Soul</p>
        <p>Interior Design / Furniture / Styling</p>
      </div>
    </footer>
  );
}

function ProductCard({ title, price, active = false, className = "" }) {
  return (
    <div
      className={`rounded-xl p-5 shadow-[0_15px_40px_rgba(31,51,68,0.18)] ${
        active ? "bg-[#bc6c43] text-white" : "bg-white/90 text-[#203344]"
      } ${className}`}
    >
      <p className="text-xs font-black">{title}</p>
      <p
        className={`mt-2 text-lg font-black ${active ? "text-white" : "text-[#bc6c43]"}`}
      >
        {price}
      </p>
    </div>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div>
      <p className="text-xs font-black uppercase tracking-[0.28em] text-[#bc6c43]">
        {eyebrow}
      </p>

      <h2 className="mt-4 max-w-4xl text-4xl font-black leading-[1] tracking-tight text-[#203344] md:text-6xl">
        {title}
      </h2>
    </div>
  );
}

function Label({ children }) {
  return (
    <p className="text-xs font-black uppercase tracking-[0.22em] text-[#bc6c43]">
      {children}
    </p>
  );
}

function OptionButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl px-5 py-4 text-sm font-black transition ${
        active
          ? "bg-[#bc6c43] text-white shadow-[0_12px_30px_rgba(188,108,67,0.25)]"
          : "bg-[#eaf4fa] text-[#5d7488] hover:bg-[#d8e6ef]"
      }`}
    >
      {children}
    </button>
  );
}

function Counter({ label, value, onMinus, onPlus }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-[#eaf4fa] p-4">
      <span className="capitalize text-sm font-black text-[#5d7488]">
        {label}
      </span>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onMinus}
          className="grid h-9 w-9 place-items-center rounded-xl bg-white text-[#bc6c43]"
        >
          <FiMinus />
        </button>

        <span className="min-w-6 text-center font-black">{value}</span>

        <button
          type="button"
          onClick={onPlus}
          className="grid h-9 w-9 place-items-center rounded-xl bg-white text-[#bc6c43]"
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
        className="mt-3 w-full rounded-2xl bg-[#eaf4fa] px-5 py-4 font-bold text-[#203344] outline-none placeholder:text-[#8da2b4] focus:ring-2 focus:ring-[#bc6c43]/35"
      />
    </label>
  );
}
