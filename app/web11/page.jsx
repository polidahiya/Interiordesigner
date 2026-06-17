"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiMenu,
  FiX,
  FiSearch,
  FiUser,
  FiPlay,
  FiCheck,
  FiPlus,
  FiMinus,
  FiPhone,
  FiMail,
  FiMapPin,
  FiInstagram,
  FiFacebook,
  FiLinkedin,
} from "react-icons/fi";
import {
  FaCouch,
  FaDraftingCompass,
  FaPaintRoller,
  FaChair,
  FaRulerCombined,
  FaRegGem,
  FaBuilding,
  FaTools,
} from "react-icons/fa";
const section = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";
const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
export default function Page() {
  return (
    <main className="min-h-screen bg-[#181818] text-white">
      {" "}
      <Navbar /> <Herosection /> <Businessstrip /> <Marquestrip /> <Portfolio />{" "}
      <MaterialShowcase /> <PricingMatrix /> <Services /> <Cta />{" "}
      <CostEstimator /> <Footer />{" "}
    </main>
  );
}
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Home", "#home"],
    ["Our Services", "#services"],
    ["Projects", "#portfolio"],
    ["Materials", "#materials"],
    ["Pricing", "#pricing"],
    ["Estimator", "#estimate"],
  ];
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#151515]/80 backdrop-blur-xl">
      {" "}
      <nav className={`${section} flex h-20 items-center justify-between`}>
        {" "}
        <a
          href="#home"
          className="font-serif text-3xl font-black text-[#d7ff00]"
        >
          {" "}
          EINTO{" "}
        </a>{" "}
        <div className="hidden items-center gap-8 lg:flex">
          {" "}
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-xs font-semibold uppercase tracking-widest text-white/70 transition hover:text-[#d7ff00]"
            >
              {" "}
              {label}{" "}
            </a>
          ))}{" "}
        </div>{" "}
        <div className="hidden items-center gap-4 lg:flex">
          {" "}
          <button className="text-xl text-white/70 hover:text-[#d7ff00]">
            {" "}
            <FiSearch />{" "}
          </button>{" "}
          <button className="text-xl text-white/70 hover:text-[#d7ff00]">
            {" "}
            <FiUser />{" "}
          </button>{" "}
          <a
            href="#estimate"
            className="rounded-full border border-[#d7ff00] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#d7ff00] transition hover:bg-[#d7ff00] hover:text-black"
          >
            {" "}
            Contact{" "}
          </a>{" "}
        </div>{" "}
        <button
          onClick={() => setOpen(!open)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-xl lg:hidden"
          aria-label="Menu"
        >
          {" "}
          {open ? <FiX /> : <FiMenu />}{" "}
        </button>{" "}
      </nav>{" "}
      {open && (
        <div className="border-t border-white/10 bg-[#151515] px-4 py-5 lg:hidden">
          {" "}
          <div className="flex flex-col gap-3">
            {" "}
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-xl bg-white/5 px-4 py-3 text-sm font-semibold uppercase tracking-widest"
              >
                {" "}
                {label}{" "}
              </a>
            ))}{" "}
          </div>{" "}
        </div>
      )}{" "}
    </header>
  );
}
function Herosection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-20">
      {" "}
      <div className="absolute inset-0">
        {" "}
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1800&auto=format&fit=crop"
          alt="Luxury interior"
          className="h-full w-full object-cover"
        />{" "}
        <div className="absolute inset-0 bg-black/65" />{" "}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-[#181818]/35 to-[#181818]" />{" "}
      </div>{" "}
      <div
        className={`${section} relative z-10 flex min-h-[calc(100vh-80px)] items-center`}
      >
        {" "}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-5xl text-center"
        >
          {" "}
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.45em] text-[#d7ff00]">
            {" "}
            Luxury Interior Design Studio{" "}
          </p>{" "}
          <h1 className="font-serif text-5xl font-black leading-tight sm:text-6xl lg:text-8xl">
            {" "}
            Interior design and decor <br className="hidden md:block" /> for
            your home{" "}
          </h1>{" "}
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-white/70 sm:text-base">
            {" "}
            We create modern, warm and functional interiors with premium
            materials, smart space planning and complete execution support.{" "}
          </p>{" "}
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {" "}
            <a
              href="#estimate"
              className="inline-flex items-center justify-center bg-[#d7ff00] px-8 py-4 text-sm font-black uppercase tracking-widest text-black transition hover:bg-white"
            >
              {" "}
              Contact Us{" "}
            </a>{" "}
            <a
              href="#portfolio"
              className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white"
            >
              {" "}
              <span className="grid h-14 w-14 place-items-center rounded-full border border-[#d7ff00] text-[#d7ff00]">
                {" "}
                <FiPlay />{" "}
              </span>{" "}
              See Our Story{" "}
            </a>{" "}
          </div>{" "}
          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-5 border-t border-white/20 pt-7 sm:grid-cols-4">
            {" "}
            {[
              ["10", "Years Experience"],
              ["1250", "Complete Project"],
              ["35", "Design Experts"],
              ["4.9", "Client Rating"],
            ].map(([num, label]) => (
              <div key={label}>
                {" "}
                <p className="font-serif text-4xl font-black">{num}</p>{" "}
                <p className="mt-1 text-[10px] uppercase tracking-widest text-white/50">
                  {" "}
                  {label}{" "}
                </p>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </motion.div>{" "}
      </div>{" "}
    </section>
  );
}
function Businessstrip() {
  const items = [
    {
      icon: <FaDraftingCompass />,
      title: "Concept Design",
      text: "Moodboards, layout planning, color palette and 3D visualization.",
    },
    {
      icon: <FaTools />,
      title: "Turnkey Execution",
      text: "From civil changes to furniture production and final installation.",
    },
    {
      icon: <FaRegGem />,
      title: "Luxury Finishes",
      text: "Premium laminates, veneers, marble, lighting and decor styling.",
    },
  ];
  return (
    <section className="bg-[#181818] py-16">
      {" "}
      <div className={section}>
        {" "}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-5 md:grid-cols-3"
        >
          {" "}
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="border border-white/10 bg-[#202020] p-8 transition hover:border-[#d7ff00]/60"
            >
              {" "}
              <div className="mb-6 text-4xl text-[#d7ff00]">
                {item.icon}
              </div>{" "}
              <h3 className="font-serif text-2xl font-bold">{item.title}</h3>{" "}
              <p className="mt-3 text-sm leading-7 text-white/55">
                {" "}
                {item.text}{" "}
              </p>{" "}
            </motion.div>
          ))}{" "}
        </motion.div>{" "}
      </div>{" "}
    </section>
  );
}
function Marquestrip() {
  const words = [
    "Interior Design",
    "Architecture Design",
    "Furniture Products",
    "Modular Kitchen",
    "Wardrobes",
    "Luxury Decor",
    "Space Planning",
    "Turnkey Projects",
  ];
  return (
    <section className="overflow-hidden border-y border-white/10 bg-[#d7ff00] py-4 text-black">
      {" "}
      <motion.div
        className="flex w-max gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {" "}
        {[...words, ...words].map((word, index) => (
          <div
            key={`${word}-${index}`}
            className="flex items-center gap-8 text-sm font-black uppercase tracking-[0.35em]"
          >
            {" "}
            <span>{word}</span>{" "}
            <span className="h-2 w-2 rounded-full bg-black" />{" "}
          </div>
        ))}{" "}
      </motion.div>{" "}
    </section>
  );
}
function Portfolio() {
  const projects = [
    {
      title: "Apartment in Stockholm",
      category: "Furniture, Living",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Luxury Villa Lounge",
      category: "Interior Design",
      image:
        "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Modern Kitchen",
      category: "Architecture",
      image:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Soft Bedroom Suite",
      category: "Decor Styling",
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop",
    },
  ];
  return (
    <section id="portfolio" className="bg-[#181818] py-24">
      {" "}
      <div className={section}>
        {" "}
        <SectionTitle
          label="Our Project"
          title="Selected work crafted with detail"
          text="Every project is designed with balance, comfort and a strong visual identity."
          center
        />{" "}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {" "}
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              className={`group relative overflow-hidden ${index === 0 ? "md:row-span-2" : ""}`}
            >
              {" "}
              <img
                src={project.image}
                alt={project.title}
                className={`w-full object-cover transition duration-700 group-hover:scale-110 ${index === 0 ? "h-[620px]" : "h-[300px]"}`}
              />{" "}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />{" "}
              <div className="absolute bottom-0 left-0 bg-black/85 p-6">
                {" "}
                <h3 className="font-serif text-2xl font-bold">
                  {" "}
                  {project.title}{" "}
                </h3>{" "}
                <p className="mt-1 text-xs uppercase tracking-widest text-[#d7ff00]">
                  {" "}
                  {project.category}{" "}
                </p>{" "}
              </div>{" "}
            </motion.article>
          ))}{" "}
        </motion.div>{" "}
      </div>{" "}
    </section>
  );
}
function MaterialShowcase() {
  const materials = [
    {
      name: "Wood Veneer",
      image:
        "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=900&auto=format&fit=crop",
    },
    {
      name: "Italian Marble",
      image:
        "https://images.unsplash.com/photo-1618221639244-c1a8502c0eb9?q=80&w=900&auto=format&fit=crop",
    },
    {
      name: "Warm Fabric",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=900&auto=format&fit=crop",
    },
    {
      name: "Matte Hardware",
      image:
        "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=900&auto=format&fit=crop",
    },
  ];
  return (
    <section id="materials" className="bg-[#202020] py-24">
      {" "}
      <div className={section}>
        {" "}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          {" "}
          <SectionTitle
            label="Material Library"
            title="Premium textures for timeless interiors"
            text="Choose finishes that feel rich, durable and easy to maintain for Indian homes."
          />{" "}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {" "}
            {materials.map((item) => (
              <motion.div
                key={item.name}
                variants={fadeUp}
                className="group border border-white/10 bg-[#181818] p-4"
              >
                {" "}
                <div className="overflow-hidden">
                  {" "}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
                  />{" "}
                </div>{" "}
                <div className="flex items-center justify-between pt-5">
                  {" "}
                  <h3 className="font-serif text-xl font-bold">
                    {item.name}
                  </h3>{" "}
                  <FiArrowRight className="text-[#d7ff00]" />{" "}
                </div>{" "}
              </motion.div>
            ))}{" "}
          </motion.div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
function PricingMatrix() {
  const plans = [
    {
      name: "Essential",
      price: "₹1,499",
      desc: "For clean and practical budget interiors.",
      features: [
        "2D layout",
        "Laminate finish",
        "Basic hardware",
        "45-day timeline",
      ],
    },
    {
      name: "Premium",
      price: "₹2,299",
      desc: "Best balance of design, durability and finish.",
      features: [
        "3D renders",
        "Membrane / veneer",
        "Soft-close hardware",
        "Designer lighting",
      ],
      active: true,
    },
    {
      name: "Luxe",
      price: "₹3,499",
      desc: "For luxury spaces with complete styling.",
      features: [
        "Luxury renders",
        "PU / acrylic finish",
        "Premium accessories",
        "Decor styling",
      ],
    },
  ];
  return (
    <section id="pricing" className="bg-[#181818] py-24">
      {" "}
      <div className={section}>
        {" "}
        <SectionTitle
          label="Pricing"
          title="Choose your interior package"
          text="Transparent starting prices. Final quote depends on measurements and materials."
          center
        />{" "}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 grid gap-6 lg:grid-cols-3"
        >
          {" "}
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              className={`border p-8 ${plan.active ? "border-[#d7ff00] bg-[#d7ff00] text-black" : "border-white/10 bg-[#202020] text-white"}`}
            >
              {" "}
              <h3 className="font-serif text-3xl font-black">
                {plan.name}
              </h3>{" "}
              <p
                className={`mt-3 text-sm leading-7 ${plan.active ? "text-black/70" : "text-white/55"}`}
              >
                {" "}
                {plan.desc}{" "}
              </p>{" "}
              <div className="mt-8">
                {" "}
                <span className="font-serif text-5xl font-black">
                  {" "}
                  {plan.price}{" "}
                </span>{" "}
                <span className="ml-2 text-sm font-semibold">/ sq.ft</span>{" "}
              </div>{" "}
              <div className="mt-8 space-y-4">
                {" "}
                {plan.features.map((feature) => (
                  <p
                    key={feature}
                    className="flex items-center gap-3 text-sm font-semibold"
                  >
                    {" "}
                    <FiCheck /> {feature}{" "}
                  </p>
                ))}{" "}
              </div>{" "}
              <a
                href="#estimate"
                className={`mt-8 inline-flex w-full items-center justify-center px-6 py-4 text-sm font-black uppercase tracking-widest ${plan.active ? "bg-black text-white" : "bg-[#d7ff00] text-black"}`}
              >
                {" "}
                Select Plan{" "}
              </a>{" "}
            </motion.div>
          ))}{" "}
        </motion.div>{" "}
      </div>{" "}
    </section>
  );
}
function Services() {
  const services = [
    {
      icon: <FaCouch />,
      title: "Interior Design",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=900&auto=format&fit=crop",
    },
    {
      icon: <FaBuilding />,
      title: "Architecture Design",
      image:
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=900&auto=format&fit=crop",
    },
    {
      icon: <FaChair />,
      title: "Furniture Products",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=900&auto=format&fit=crop",
    },
  ];
  return (
    <section id="services" className="bg-[#202020] py-24">
      {" "}
      <div className={section}>
        {" "}
        <SectionTitle
          label="Our Services"
          title="Complete design services for your home"
          text="From idea to installation, our team handles every step with care."
          center
        />{" "}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {" "}
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className="group relative h-[430px] overflow-hidden"
            >
              {" "}
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />{" "}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />{" "}
              <div className="absolute bottom-0 left-0 bg-black/90 p-6">
                {" "}
                <div className="mb-3 text-3xl text-[#d7ff00]">
                  {" "}
                  {service.icon}{" "}
                </div>{" "}
                <h3 className="font-serif text-2xl font-black">
                  {" "}
                  {service.title}{" "}
                </h3>{" "}
              </div>{" "}
            </motion.div>
          ))}{" "}
        </motion.div>{" "}
      </div>{" "}
    </section>
  );
}
function Cta() {
  return (
    <section className="relative overflow-hidden bg-[#181818] py-24">
      {" "}
      <div className="absolute inset-0 opacity-25">
        {" "}
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1800&auto=format&fit=crop"
          alt="Interior background"
          className="h-full w-full object-cover"
        />{" "}
      </div>{" "}
      <div className={`${section} relative z-10`}>
        {" "}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl border border-white/10 bg-black/70 p-8 text-center backdrop-blur-md sm:p-14"
        >
          {" "}
          <p className="text-xs font-black uppercase tracking-[0.45em] text-[#d7ff00]">
            {" "}
            Book Consultation{" "}
          </p>{" "}
          <h2 className="mt-5 font-serif text-4xl font-black leading-tight sm:text-6xl">
            {" "}
            Let’s design a home that feels premium and personal.{" "}
          </h2>{" "}
          <a
            href="#estimate"
            className="mt-8 inline-flex items-center gap-3 bg-[#d7ff00] px-8 py-4 text-sm font-black uppercase tracking-widest text-black"
          >
            {" "}
            Get Free Estimate <FiArrowRight />{" "}
          </a>{" "}
        </motion.div>{" "}
      </div>{" "}
    </section>
  );
}
function CostEstimator() {
  const [type, setType] = useState("fullhome");
  const [bhk, setBhk] = useState(2);
  const [pkg, setPkg] = useState("premium");
  const [rooms, setRooms] = useState({
    living: 1,
    kitchen: 1,
    bedroom: 2,
    bathroom: 2,
    dining: 1,
  });
  const [kitchen, setKitchen] = useState({
    layout: "l-shaped",
    length: 10,
    width: 8,
  });
  const [wardrobe, setWardrobe] = useState({
    height: 7,
    width: 6,
    door: "sliding",
    finish: "premium",
    core: "hdf",
    accessories: 2,
  });
  const packageRate = { essential: 1499, premium: 2299, luxe: 3499 };
  const total = useMemo(() => {
    if (type === "fullhome") {
      const area =
        rooms.living * 140 +
        rooms.kitchen * 120 +
        rooms.bedroom * 160 +
        rooms.bathroom * 45 +
        rooms.dining * 70;
      return Math.round(area * packageRate[pkg] * (0.75 + bhk * 0.18));
    }
    if (type === "kitchen") {
      const layoutRate = {
        straight: 1,
        "l-shaped": 1.25,
        "u-shaped": 1.55,
        parallel: 1.4,
      };
      return Math.round(
        kitchen.length *
          kitchen.width *
          packageRate[pkg] *
          layoutRate[kitchen.layout] *
          0.55,
      );
    }
    const doorRate = wardrobe.door === "sliding" ? 1.25 : 1;
    const finishRate = { standard: 1, premium: 1.25, luxe: 1.6 };
    const coreRate = { mdf: 1, hdf: 1.18, plywood: 1.35 };
    return Math.round(
      wardrobe.height *
        wardrobe.width *
        2200 *
        doorRate *
        finishRate[wardrobe.finish] *
        coreRate[wardrobe.core] +
        wardrobe.accessories * 4500,
    );
  }, [type, bhk, pkg, rooms, kitchen, wardrobe]);
  const updateRoom = (key, value) => {
    setRooms((prev) => ({ ...prev, [key]: Math.max(0, prev[key] + value) }));
  };
  return (
    <section id="estimate" className="bg-[#202020] py-24">
      {" "}
      <div className={section}>
        {" "}
        <SectionTitle
          label="Cost Estimator"
          title="Calculate your interior budget"
          text="Get an approximate budget based on room type, package and measurements."
          center
        />{" "}
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {" "}
          <div className="border border-[#d7ff00] bg-[#d7ff00] p-8 text-black">
            {" "}
            <FaRulerCombined className="text-5xl" />{" "}
            <p className="mt-8 text-xs font-black uppercase tracking-[0.35em]">
              {" "}
              Approx Estimate{" "}
            </p>{" "}
            <h3 className="mt-4 font-serif text-5xl font-black">
              {" "}
              ₹{total.toLocaleString("en-IN")}{" "}
            </h3>{" "}
            <p className="mt-5 text-sm leading-7 text-black/70">
              {" "}
              Final quote may change after site measurement, material selection,
              hardware brand and execution complexity.{" "}
            </p>{" "}
          </div>{" "}
          <div className="border border-white/10 bg-[#181818] p-6 sm:p-8">
            {" "}
            <div className="grid gap-3 sm:grid-cols-3">
              {" "}
              {[
                ["fullhome", "Full Home"],
                ["kitchen", "Kitchen"],
                ["wardrobe", "Wardrobe"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => setType(value)}
                  className={`px-5 py-3 text-sm font-black uppercase tracking-widest ${type === value ? "bg-[#d7ff00] text-black" : "bg-white/5 text-white"}`}
                >
                  {" "}
                  {label}{" "}
                </button>
              ))}{" "}
            </div>{" "}
            <div className="mt-8 space-y-8">
              {" "}
              {type === "fullhome" && (
                <>
                  {" "}
                  <OptionButtons
                    label="Select BHK"
                    value={bhk}
                    options={[1, 2, 3, 4, 5]}
                    onChange={(value) => {
                      setBhk(value);
                      setRooms((prev) => ({
                        ...prev,
                        bedroom: value,
                        bathroom: value,
                      }));
                    }}
                    suffix=" BHK"
                  />{" "}
                  <div>
                    {" "}
                    <Label>Rooms</Label>{" "}
                    <div className="grid gap-3 sm:grid-cols-2">
                      {" "}
                      {Object.entries(rooms).map(([key, value]) => (
                        <Counter
                          key={key}
                          label={key}
                          value={value}
                          minus={() => updateRoom(key, -1)}
                          plus={() => updateRoom(key, 1)}
                        />
                      ))}{" "}
                    </div>{" "}
                  </div>{" "}
                  <PackageSelect value={pkg} onChange={setPkg} />{" "}
                </>
              )}{" "}
              {type === "kitchen" && (
                <>
                  {" "}
                  <OptionButtons
                    label="Kitchen Layout"
                    value={kitchen.layout}
                    options={["straight", "l-shaped", "u-shaped", "parallel"]}
                    onChange={(value) =>
                      setKitchen((prev) => ({ ...prev, layout: value }))
                    }
                  />{" "}
                  <div className="grid gap-4 sm:grid-cols-2">
                    {" "}
                    <NumberInput
                      label="Length in ft"
                      value={kitchen.length}
                      onChange={(value) =>
                        setKitchen((prev) => ({ ...prev, length: value }))
                      }
                    />{" "}
                    <NumberInput
                      label="Width in ft"
                      value={kitchen.width}
                      onChange={(value) =>
                        setKitchen((prev) => ({ ...prev, width: value }))
                      }
                    />{" "}
                  </div>{" "}
                  <PackageSelect value={pkg} onChange={setPkg} />{" "}
                </>
              )}{" "}
              {type === "wardrobe" && (
                <>
                  {" "}
                  <div className="grid gap-4 sm:grid-cols-2">
                    {" "}
                    <NumberInput
                      label="Height in ft"
                      value={wardrobe.height}
                      onChange={(value) =>
                        setWardrobe((prev) => ({ ...prev, height: value }))
                      }
                    />{" "}
                    <NumberInput
                      label="Width in ft"
                      value={wardrobe.width}
                      onChange={(value) =>
                        setWardrobe((prev) => ({ ...prev, width: value }))
                      }
                    />{" "}
                  </div>{" "}
                  <OptionButtons
                    label="Door Type"
                    value={wardrobe.door}
                    options={["sliding", "swing"]}
                    onChange={(value) =>
                      setWardrobe((prev) => ({ ...prev, door: value }))
                    }
                  />{" "}
                  <OptionButtons
                    label="Finish"
                    value={wardrobe.finish}
                    options={["standard", "premium", "luxe"]}
                    onChange={(value) =>
                      setWardrobe((prev) => ({ ...prev, finish: value }))
                    }
                  />{" "}
                  <OptionButtons
                    label="Core Material"
                    value={wardrobe.core}
                    options={["mdf", "hdf", "plywood"]}
                    onChange={(value) =>
                      setWardrobe((prev) => ({ ...prev, core: value }))
                    }
                  />{" "}
                  <Counter
                    label="Accessories"
                    value={wardrobe.accessories}
                    minus={() =>
                      setWardrobe((prev) => ({
                        ...prev,
                        accessories: Math.max(0, prev.accessories - 1),
                      }))
                    }
                    plus={() =>
                      setWardrobe((prev) => ({
                        ...prev,
                        accessories: prev.accessories + 1,
                      }))
                    }
                  />{" "}
                </>
              )}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#151515] py-16">
      {" "}
      <div className={`${section} grid gap-10 md:grid-cols-4`}>
        {" "}
        <div className="md:col-span-2">
          {" "}
          <h2 className="font-serif text-4xl font-black text-[#d7ff00]">
            {" "}
            EINTO{" "}
          </h2>{" "}
          <p className="mt-5 max-w-md text-sm leading-7 text-white/50">
            {" "}
            Interior design and decor studio creating elegant homes, smart
            layouts and premium furniture solutions.{" "}
          </p>{" "}
          <div className="mt-7 flex gap-3">
            {" "}
            {[FiInstagram, FiFacebook, FiLinkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="grid h-11 w-11 place-items-center border border-white/10 text-white/70 transition hover:border-[#d7ff00] hover:text-[#d7ff00]"
              >
                {" "}
                <Icon />{" "}
              </a>
            ))}{" "}
          </div>{" "}
        </div>{" "}
        <div>
          {" "}
          <h3 className="font-serif text-xl font-bold">Links</h3>{" "}
          <div className="mt-5 flex flex-col gap-3 text-sm text-white/50">
            {" "}
            <a href="#services">Our Services</a>{" "}
            <a href="#portfolio">Our Project</a>{" "}
            <a href="#materials">Materials</a>{" "}
            <a href="#pricing">Pricing</a>{" "}
          </div>{" "}
        </div>{" "}
        <div>
          {" "}
          <h3 className="font-serif text-xl font-bold">Contact</h3>{" "}
          <div className="mt-5 space-y-4 text-sm text-white/50">
            {" "}
            <p className="flex items-center gap-3">
              {" "}
              <FiPhone className="text-[#d7ff00]" /> +91 98765 43210{" "}
            </p>{" "}
            <p className="flex items-center gap-3">
              {" "}
              <FiMail className="text-[#d7ff00]" /> hello@einto.com{" "}
            </p>{" "}
            <p className="flex items-center gap-3">
              {" "}
              <FiMapPin className="text-[#d7ff00]" /> New Delhi, India{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className={`${section} mt-12 border-t border-white/10 pt-6`}>
        {" "}
        <p className="text-sm text-white/35">
          {" "}
          © {new Date().getFullYear()} EINTO Interiors. All rights
          reserved.{" "}
        </p>{" "}
      </div>{" "}
    </footer>
  );
}
function SectionTitle({ label, title, text, center = false }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}
    >
      {" "}
      <p className="text-xs font-black uppercase tracking-[0.45em] text-[#d7ff00]">
        {" "}
        {label}{" "}
      </p>{" "}
      <div
        className={`mt-4 flex items-center gap-3 ${center ? "justify-center" : ""}`}
      >
        {" "}
        <span className="h-[2px] w-12 bg-white/30" />{" "}
        <span className="h-3 w-3 rounded-full bg-[#d7ff00]" />{" "}
        <span className="h-[2px] w-12 bg-white/30" />{" "}
      </div>{" "}
      <h2 className="mt-6 font-serif text-4xl font-black leading-tight sm:text-5xl">
        {" "}
        {title}{" "}
      </h2>{" "}
      <p className="mt-5 text-sm leading-7 text-white/55 sm:text-base">
        {" "}
        {text}{" "}
      </p>{" "}
    </motion.div>
  );
}
function Label({ children }) {
  return (
    <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#d7ff00]">
      {" "}
      {children}{" "}
    </p>
  );
}
function Counter({ label, value, minus, plus }) {
  return (
    <div className="flex items-center justify-between border border-white/10 bg-white/5 p-4">
      {" "}
      <span className="font-semibold capitalize">{label}</span>{" "}
      <div className="flex items-center gap-3">
        {" "}
        <button
          onClick={minus}
          className="grid h-8 w-8 place-items-center bg-white text-black"
        >
          {" "}
          <FiMinus />{" "}
        </button>{" "}
        <span className="w-7 text-center font-black">{value}</span>{" "}
        <button
          onClick={plus}
          className="grid h-8 w-8 place-items-center bg-[#d7ff00] text-black"
        >
          {" "}
          <FiPlus />{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
}
function NumberInput({ label, value, onChange }) {
  return (
    <label>
      {" "}
      <Label>{label}</Label>{" "}
      <input
        type="number"
        min="1"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full border border-white/10 bg-white/5 px-4 py-4 font-bold text-white outline-none transition focus:border-[#d7ff00]"
      />{" "}
    </label>
  );
}
function OptionButtons({ label, value, options, onChange, suffix = "" }) {
  return (
    <div>
      {" "}
      <Label>{label}</Label>{" "}
      <div className="grid gap-3 sm:grid-cols-3">
        {" "}
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`px-4 py-3 text-sm font-black uppercase tracking-widest ${value === option ? "bg-[#d7ff00] text-black" : "bg-white/5 text-white"}`}
          >
            {" "}
            {option} {suffix}{" "}
          </button>
        ))}{" "}
      </div>{" "}
    </div>
  );
}
function PackageSelect({ value, onChange }) {
  return (
    <OptionButtons
      label="Package"
      value={value}
      options={["essential", "premium", "luxe"]}
      onChange={onChange}
    />
  );
}
