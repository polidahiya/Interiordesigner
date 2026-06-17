"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiMenu,
  FiX,
  FiCheck,
  FiPlus,
  FiMinus,
  FiMail,
  FiPhone,
  FiMapPin,
  FiStar,
  FiShield,
  FiLayers,
  FiGrid,
  FiHome,
} from "react-icons/fi";
import {
  FaCouch,
  FaDraftingCompass,
  FaPaintRoller,
  FaRegGem,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const sectionClass = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";
export default function InteriorDesignerWebsite() {
  return (
    <main className="min-h-screen bg-[#f7f2ea] text-[#252525]">
      {" "}
      <Navbar /> <Herosection /> <Businessstrip /> <Marquestrip /> <Portfolio />{" "}
      <MaterialShowcase /> <PricingMatrix /> <Services /> <Cta />{" "}
      <CostEstimator /> <Footer />{" "}
    </main>
  );
}
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "Portfolio", "Materials", "Pricing", "Services"];
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f2ea]/85 backdrop-blur-xl">
      {" "}
      <nav className={`${sectionClass} flex h-20 items-center justify-between`}>
        {" "}
        <a href="#" className="flex items-center gap-3">
          {" "}
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#2d3035] text-[#f4a15d]">
            {" "}
            <FaDraftingCompass />{" "}
          </span>{" "}
          <span>
            {" "}
            <span className="block font-serif text-xl tracking-wide">
              {" "}
              Havenly{" "}
            </span>{" "}
            <span className="block text-[10px] uppercase tracking-[0.35em] text-black/45">
              {" "}
              Interiors{" "}
            </span>{" "}
          </span>{" "}
        </a>{" "}
        <div className="hidden items-center gap-8 md:flex">
          {" "}
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-black/60 transition hover:text-[#d87834]"
            >
              {" "}
              {link}{" "}
            </a>
          ))}{" "}
        </div>{" "}
        <a
          href="#estimate"
          className="hidden rounded-full bg-[#f28b45] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-900/10 transition hover:bg-[#dc7131] md:inline-flex"
        >
          {" "}
          Get Estimate{" "}
        </a>{" "}
        <button
          onClick={() => setOpen((p) => !p)}
          className="grid h-11 w-11 place-items-center rounded-full bg-white text-xl shadow-sm md:hidden"
          aria-label="Open menu"
        >
          {" "}
          {open ? <FiX /> : <FiMenu />}{" "}
        </button>{" "}
      </nav>{" "}
      {open && (
        <div className="border-t border-black/5 bg-[#f7f2ea] px-4 py-5 md:hidden">
          {" "}
          <div className="flex flex-col gap-4">
            {" "}
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold shadow-sm"
              >
                {" "}
                {link}{" "}
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
    <section id="home" className="overflow-hidden py-8 sm:py-12 lg:py-16">
      {" "}
      <div
        className={`${sectionClass} grid items-center gap-8 lg:grid-cols-[0.9fr_1.3fr]`}
      >
        {" "}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative z-10 rounded-[2rem] bg-[#2d3035] p-7 text-white shadow-2xl shadow-black/20 sm:p-10 lg:-mr-24"
        >
          {" "}
          <span className="mb-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#f4a15d]">
            {" "}
            Modern Interior Studio{" "}
          </span>{" "}
          <h1 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            {" "}
            Design your home with calm, warmth and character.{" "}
          </h1>{" "}
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
            {" "}
            We create thoughtful interiors for homes, apartments and boutique
            spaces using natural textures, warm palettes and functional
            layouts.{" "}
          </p>{" "}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {" "}
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f28b45] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#dc7131]"
            >
              {" "}
              Explore Projects <FiArrowRight />{" "}
            </a>{" "}
            <a
              href="#estimate"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              {" "}
              Calculate Budget{" "}
            </a>{" "}
          </div>{" "}
          <div className="mt-9 grid grid-cols-3 gap-4 border-t border-white/10 pt-7">
            {" "}
            {[
              ["12+", "Years"],
              ["340+", "Projects"],
              ["4.9", "Rating"],
            ].map(([num, text]) => (
              <div key={text}>
                {" "}
                <p className="font-serif text-2xl text-[#f4a15d]">{num}</p>{" "}
                <p className="mt-1 text-xs uppercase tracking-widest text-white/40">
                  {" "}
                  {text}{" "}
                </p>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </motion.div>{" "}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative"
        >
          {" "}
          <div className="overflow-hidden rounded-[2.4rem] bg-white p-3 shadow-2xl shadow-black/10">
            {" "}
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop"
              alt="Modern living room interior"
              className="h-[420px] w-full rounded-[2rem] object-cover sm:h-[560px]"
            />{" "}
          </div>{" "}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="absolute bottom-6 right-6 hidden max-w-xs rounded-3xl bg-white p-5 shadow-2xl shadow-black/20 sm:block"
          >
            {" "}
            <div className="flex items-center gap-3">
              {" "}
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f7f2ea] text-[#d87834]">
                {" "}
                <FaCouch />{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="font-bold">Living Room Makeover</p>{" "}
                <p className="text-sm text-black/50">
                  Completed in 21 days
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </motion.div>{" "}
        </motion.div>{" "}
      </div>{" "}
    </section>
  );
}
function Businessstrip() {
  const stats = [
    {
      icon: <FiHome />,
      title: "End-to-end interiors",
      text: "Planning, 3D design, materials and execution.",
    },
    {
      icon: <FiShield />,
      title: "Transparent costing",
      text: "Clear packages with no hidden surprises.",
    },
    {
      icon: <FiLayers />,
      title: "Premium materials",
      text: "Curated laminates, veneers, stones and fabrics.",
    },
  ];
  return (
    <section className="py-8">
      {" "}
      <div className={`${sectionClass}`}>
        {" "}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-4 rounded-[2rem] bg-white p-4 shadow-xl shadow-black/5 md:grid-cols-3"
        >
          {" "}
          {stats.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="rounded-[1.5rem] border border-black/5 bg-[#fbf8f2] p-6"
            >
              {" "}
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#2d3035] text-xl text-[#f4a15d]">
                {" "}
                {item.icon}{" "}
              </div>{" "}
              <h3 className="font-serif text-xl">{item.title}</h3>{" "}
              <p className="mt-2 text-sm leading-6 text-black/55">
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
    "Luxury Homes",
    "Modular Kitchen",
    "Wardrobes",
    "3D Design",
    "Space Planning",
    "Premium Finishes",
    "Turnkey Projects",
    "Lighting Design",
  ];
  return (
    <section className="overflow-hidden py-10">
      {" "}
      <div className="border-y border-black/10 bg-[#2d3035] py-5 text-white">
        {" "}
        <motion.div
          className="flex w-max gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {" "}
          {[...words, ...words].map((word, index) => (
            <div
              key={`${word}-${index}`}
              className="flex items-center gap-10 text-sm font-semibold uppercase tracking-[0.3em] text-white/75"
            >
              {" "}
              <span>{word}</span>{" "}
              <span className="h-2 w-2 rounded-full bg-[#f28b45]" />{" "}
            </div>
          ))}{" "}
        </motion.div>{" "}
      </div>{" "}
    </section>
  );
}
function Portfolio() {
  const projects = [
    {
      title: "Soft Minimal Apartment",
      type: "Living Room",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Warm Wooden Kitchen",
      type: "Kitchen",
      image:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Muted Luxe Bedroom",
      type: "Bedroom",
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop",
    },
  ];
  return (
    <section id="portfolio" className="py-16">
      {" "}
      <div className={sectionClass}>
        {" "}
        <SectionHeader
          eyebrow="Selected work"
          title="Spaces that feel elegant, useful and personal."
          text="A design language inspired by soft textures, muted colors and practical layouts."
        />{" "}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 grid gap-5 md:grid-cols-3"
        >
          {" "}
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              className={`group overflow-hidden rounded-[2rem] bg-white p-3 shadow-xl shadow-black/5 ${index === 0 ? "md:col-span-1" : ""}`}
            >
              {" "}
              <div className="relative overflow-hidden rounded-[1.5rem]">
                {" "}
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                />{" "}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />{" "}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  {" "}
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs backdrop-blur-md">
                    {" "}
                    {project.type}{" "}
                  </span>{" "}
                  <h3 className="mt-3 font-serif text-2xl">
                    {project.title}
                  </h3>{" "}
                </div>{" "}
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
      name: "Oak Veneer",
      text: "Warm natural grains for calm rooms.",
      img: "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=900&auto=format&fit=crop",
    },
    {
      name: "Italian Marble",
      text: "Elegant surfaces for premium areas.",
      img: "https://images.unsplash.com/photo-1618221639244-c1a8502c0eb9?q=80&w=900&auto=format&fit=crop",
    },
    {
      name: "Soft Linen",
      text: "Layered fabrics for comfort and depth.",
      img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=900&auto=format&fit=crop",
    },
    {
      name: "Matte Metal",
      text: "Clean detailing for a modern finish.",
      img: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=900&auto=format&fit=crop",
    },
  ];
  return (
    <section id="materials" className="py-16">
      {" "}
      <div className={sectionClass}>
        {" "}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          {" "}
          <SectionHeader
            eyebrow="Materials"
            title="A curated palette of textures and finishes."
            text="Choose from durable, beautiful and budget-friendly materials for every corner of your home."
          />{" "}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {" "}
            {materials.map((material) => (
              <motion.div
                key={material.name}
                variants={fadeUp}
                className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-xl shadow-black/5"
              >
                {" "}
                <img
                  src={material.img}
                  alt={material.name}
                  className="h-44 w-full rounded-[1.5rem] object-cover"
                />{" "}
                <div className="p-4">
                  {" "}
                  <h3 className="font-serif text-xl">{material.name}</h3>{" "}
                  <p className="mt-1 text-sm text-black/50">
                    {" "}
                    {material.text}{" "}
                  </p>{" "}
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
      tag: "per sq.ft",
      desc: "Best for rental homes and budget makeovers.",
      features: [
        "2D layout",
        "Laminate finish",
        "Basic hardware",
        "45-day execution",
      ],
    },
    {
      name: "Premium",
      price: "₹2,299",
      tag: "per sq.ft",
      desc: "Balanced design with better finishes and detailing.",
      features: [
        "3D design",
        "Membrane / veneer",
        "Soft-close hardware",
        "Designer lighting",
      ],
      active: true,
    },
    {
      name: "Luxe",
      price: "₹3,499",
      tag: "per sq.ft",
      desc: "Luxury material palette with complete styling.",
      features: [
        "Luxury 3D renders",
        "Acrylic / PU finish",
        "Premium accessories",
        "Decor styling",
      ],
    },
  ];
  return (
    <section id="pricing" className="py-16">
      {" "}
      <div className={sectionClass}>
        {" "}
        <SectionHeader
          eyebrow="Pricing"
          title="Simple packages for every type of home."
          text="Start small or go full luxury. Every package can be customized as per your space."
          center
        />{" "}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 grid gap-5 lg:grid-cols-3"
        >
          {" "}
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              className={`rounded-[2rem] p-7 shadow-xl shadow-black/5 ${plan.active ? "bg-[#2d3035] text-white" : "bg-white text-[#252525]"}`}
            >
              {" "}
              <div className="flex items-center justify-between">
                {" "}
                <h3 className="font-serif text-3xl">{plan.name}</h3>{" "}
                {plan.active && (
                  <span className="rounded-full bg-[#f28b45] px-3 py-1 text-xs font-bold">
                    {" "}
                    Popular{" "}
                  </span>
                )}{" "}
              </div>{" "}
              <p
                className={`mt-3 text-sm leading-6 ${plan.active ? "text-white/60" : "text-black/50"}`}
              >
                {" "}
                {plan.desc}{" "}
              </p>{" "}
              <div className="mt-8">
                {" "}
                <span className="font-serif text-5xl">{plan.price}</span>{" "}
                <span
                  className={`ml-2 text-sm ${plan.active ? "text-white/50" : "text-black/45"}`}
                >
                  {" "}
                  {plan.tag}{" "}
                </span>{" "}
              </div>{" "}
              <div className="mt-8 space-y-4">
                {" "}
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    {" "}
                    <span
                      className={`grid h-6 w-6 place-items-center rounded-full ${plan.active ? "bg-white/10 text-[#f4a15d]" : "bg-[#f7f2ea] text-[#d87834]"}`}
                    >
                      {" "}
                      <FiCheck />{" "}
                    </span>{" "}
                    <span className="text-sm">{feature}</span>{" "}
                  </div>
                ))}{" "}
              </div>{" "}
              <a
                href="#estimate"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-4 text-sm font-bold ${plan.active ? "bg-[#f28b45] text-white hover:bg-[#dc7131]" : "bg-[#f7f2ea] text-[#252525] hover:bg-[#efe3d4]"}`}
              >
                {" "}
                Choose Package{" "}
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
      icon: <FaDraftingCompass />,
      title: "Space Planning",
      text: "Functional layouts that make small and large homes feel more open.",
    },
    {
      icon: <FaPaintRoller />,
      title: "Color Consultation",
      text: "Warm, balanced palettes matched to lighting and furniture.",
    },
    {
      icon: <FiGrid />,
      title: "Modular Furniture",
      text: "Kitchens, wardrobes, TV units and storage designed to fit perfectly.",
    },
    {
      icon: <FaRegGem />,
      title: "Luxury Styling",
      text: "Art, decor, lights and accessories that complete the final look.",
    },
  ];
  return (
    <section id="services" className="py-16">
      {" "}
      <div className={sectionClass}>
        {" "}
        <div className="rounded-[2.5rem] bg-white p-5 shadow-xl shadow-black/5 lg:p-10">
          {" "}
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            {" "}
            <SectionHeader
              eyebrow="Services"
              title="From idea to installation, everything under one roof."
              text="Our team handles design, material selection, production supervision and final styling."
            />{" "}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {" "}
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  className="rounded-[1.7rem] bg-[#fbf8f2] p-6"
                >
                  {" "}
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#2d3035] text-xl text-[#f4a15d]">
                    {" "}
                    {service.icon}{" "}
                  </div>{" "}
                  <h3 className="font-serif text-xl">{service.title}</h3>{" "}
                  <p className="mt-2 text-sm leading-6 text-black/55">
                    {" "}
                    {service.text}{" "}
                  </p>{" "}
                </motion.div>
              ))}{" "}
            </motion.div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
function Cta() {
  return (
    <section className="py-16">
      {" "}
      <div className={sectionClass}>
        {" "}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-[#2d3035] p-8 text-white shadow-2xl shadow-black/20 sm:p-12"
        >
          {" "}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#f28b45]/20 blur-3xl" />{" "}
          <div className="absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />{" "}
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            {" "}
            <div>
              {" "}
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#f4a15d]">
                {" "}
                Book a consultation{" "}
              </span>{" "}
              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
                {" "}
                Ready to turn your empty room into a beautiful home?{" "}
              </h2>{" "}
            </div>{" "}
            <a
              href="#estimate"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f28b45] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#dc7131]"
            >
              {" "}
              Start Now <FiArrowRight />{" "}
            </a>{" "}
          </div>{" "}
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
  const [kitchenType, setKitchenType] = useState("l-shaped");
  const [kitchenLength, setKitchenLength] = useState(10);
  const [kitchenWidth, setKitchenWidth] = useState(8);
  const [wardrobe, setWardrobe] = useState({
    height: 7,
    width: 6,
    door: "sliding",
    finish: "premium",
    core: "hdf",
    accessories: 2,
  });
  const packageRate = { essential: 1499, premium: 2299, luxe: 3499 };
  const estimate = useMemo(() => {
    if (type === "fullhome") {
      const roomScore =
        rooms.living * 140 +
        rooms.kitchen * 120 +
        rooms.bedroom * 160 +
        rooms.bathroom * 45 +
        rooms.dining * 70;
      const bhkMultiplier = 0.75 + bhk * 0.18;
      return Math.round(roomScore * packageRate[pkg] * bhkMultiplier);
    }
    if (type === "kitchen") {
      const multiplier = {
        straight: 1,
        "l-shaped": 1.25,
        "u-shaped": 1.55,
        parallel: 1.4,
      };
      return Math.round(
        kitchenLength *
          kitchenWidth *
          packageRate[pkg] *
          multiplier[kitchenType] *
          0.55,
      );
    }
    const doorMultiplier = wardrobe.door === "sliding" ? 1.25 : 1;
    const finishMultiplier = { standard: 1, premium: 1.25, luxe: 1.6 };
    const coreMultiplier = { mdf: 1, hdf: 1.18, plywood: 1.35 };
    return Math.round(
      wardrobe.height *
        wardrobe.width *
        2200 *
        doorMultiplier *
        finishMultiplier[wardrobe.finish] *
        coreMultiplier[wardrobe.core] +
        wardrobe.accessories * 4500,
    );
  }, [
    type,
    bhk,
    pkg,
    rooms,
    kitchenType,
    kitchenLength,
    kitchenWidth,
    wardrobe,
  ]);
  const updateRoom = (key, action) => {
    setRooms((prev) => {
      const nextValue =
        action === "inc" ? prev[key] + 1 : Math.max(0, prev[key] - 1);
      return { ...prev, [key]: nextValue };
    });
  };
  return (
    <section id="estimate" className="py-16">
      {" "}
      <div className={sectionClass}>
        {" "}
        <SectionHeader
          eyebrow="Cost estimator"
          title="Calculate a quick interior budget."
          text="This gives an approximate estimate. Final costing depends on measurements, material selection and site conditions."
          center
        />{" "}
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          {" "}
          <div className="rounded-[2rem] bg-[#2d3035] p-7 text-white shadow-2xl shadow-black/20">
            {" "}
            <p className="text-sm uppercase tracking-[0.3em] text-[#f4a15d]">
              {" "}
              Estimated budget{" "}
            </p>{" "}
            <h3 className="mt-5 font-serif text-5xl">
              {" "}
              ₹{estimate.toLocaleString("en-IN")}{" "}
            </h3>{" "}
            <p className="mt-4 text-sm leading-6 text-white/55">
              {" "}
              This estimate is generated from your selected room type, package,
              measurements and accessories.{" "}
            </p>{" "}
            <div className="mt-8 rounded-[1.5rem] bg-white/8 p-5">
              {" "}
              <div className="flex items-center gap-2 text-[#f4a15d]">
                {" "}
                {[1, 2, 3, 4, 5].map((i) => (
                  <FiStar key={i} className="fill-current" />
                ))}{" "}
              </div>{" "}
              <p className="mt-3 text-sm leading-6 text-white/65">
                {" "}
                “Beautiful design process and very transparent pricing. The
                final home looked exactly like the 3D renders.”{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="rounded-[2rem] bg-white p-5 shadow-xl shadow-black/5 sm:p-7">
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
                  className={`rounded-full px-5 py-3 text-sm font-bold transition ${type === value ? "bg-[#2d3035] text-white" : "bg-[#f7f2ea] text-black/60 hover:bg-[#efe3d4]"}`}
                >
                  {" "}
                  {label}{" "}
                </button>
              ))}{" "}
            </div>{" "}
            <div className="mt-7 space-y-7">
              {" "}
              {type === "fullhome" && (
                <>
                  {" "}
                  <FieldLabel label="Select BHK" />{" "}
                  <div className="grid grid-cols-5 gap-2">
                    {" "}
                    {[1, 2, 3, 4, 5].map((value) => (
                      <button
                        key={value}
                        onClick={() => {
                          setBhk(value);
                          setRooms((prev) => ({
                            ...prev,
                            bedroom: value,
                            bathroom: Math.max(1, value),
                          }));
                        }}
                        className={`rounded-2xl px-4 py-3 text-sm font-bold ${bhk === value ? "bg-[#f28b45] text-white" : "bg-[#f7f2ea]"}`}
                      >
                        {" "}
                        {value} BHK{" "}
                      </button>
                    ))}{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <FieldLabel label="Rooms" />{" "}
                    <div className="grid gap-3 sm:grid-cols-2">
                      {" "}
                      {Object.entries(rooms).map(([key, value]) => (
                        <Counter
                          key={key}
                          label={key}
                          value={value}
                          onDec={() => updateRoom(key, "dec")}
                          onInc={() => updateRoom(key, "inc")}
                        />
                      ))}{" "}
                    </div>{" "}
                  </div>{" "}
                  <PackageSelect pkg={pkg} setPkg={setPkg} />{" "}
                </>
              )}{" "}
              {type === "kitchen" && (
                <>
                  {" "}
                  <div>
                    {" "}
                    <FieldLabel label="Kitchen layout" />{" "}
                    <div className="grid gap-2 sm:grid-cols-4">
                      {" "}
                      {["straight", "l-shaped", "u-shaped", "parallel"].map(
                        (value) => (
                          <button
                            key={value}
                            onClick={() => setKitchenType(value)}
                            className={`rounded-2xl px-4 py-3 text-sm font-bold capitalize ${kitchenType === value ? "bg-[#f28b45] text-white" : "bg-[#f7f2ea]"}`}
                          >
                            {" "}
                            {value}{" "}
                          </button>
                        ),
                      )}{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="grid gap-4 sm:grid-cols-2">
                    {" "}
                    <NumberInput
                      label="Length in ft"
                      value={kitchenLength}
                      setValue={setKitchenLength}
                    />{" "}
                    <NumberInput
                      label="Width in ft"
                      value={kitchenWidth}
                      setValue={setKitchenWidth}
                    />{" "}
                  </div>{" "}
                  <PackageSelect pkg={pkg} setPkg={setPkg} />{" "}
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
                      setValue={(value) =>
                        setWardrobe((p) => ({ ...p, height: value }))
                      }
                    />{" "}
                    <NumberInput
                      label="Width in ft"
                      value={wardrobe.width}
                      setValue={(value) =>
                        setWardrobe((p) => ({ ...p, width: value }))
                      }
                    />{" "}
                  </div>{" "}
                  <OptionGroup
                    label="Door type"
                    value={wardrobe.door}
                    options={["sliding", "swing"]}
                    onChange={(value) =>
                      setWardrobe((p) => ({ ...p, door: value }))
                    }
                  />{" "}
                  <OptionGroup
                    label="Finish"
                    value={wardrobe.finish}
                    options={["standard", "premium", "luxe"]}
                    onChange={(value) =>
                      setWardrobe((p) => ({ ...p, finish: value }))
                    }
                  />{" "}
                  <OptionGroup
                    label="Core material"
                    value={wardrobe.core}
                    options={["mdf", "hdf", "plywood"]}
                    onChange={(value) =>
                      setWardrobe((p) => ({ ...p, core: value }))
                    }
                  />{" "}
                  <Counter
                    label="Accessories"
                    value={wardrobe.accessories}
                    onDec={() =>
                      setWardrobe((p) => ({
                        ...p,
                        accessories: Math.max(0, p.accessories - 1),
                      }))
                    }
                    onInc={() =>
                      setWardrobe((p) => ({
                        ...p,
                        accessories: p.accessories + 1,
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
    <footer className="bg-[#22252a] py-14 text-white">
      {" "}
      <div className={`${sectionClass} grid gap-10 md:grid-cols-4`}>
        {" "}
        <div className="md:col-span-2">
          {" "}
          <div className="flex items-center gap-3">
            {" "}
            <span className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-[#f4a15d]">
              {" "}
              <FaDraftingCompass />{" "}
            </span>{" "}
            <div>
              {" "}
              <p className="font-serif text-2xl">Havenly Interiors</p>{" "}
              <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                {" "}
                Interior Design Studio{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <p className="mt-5 max-w-md text-sm leading-7 text-white/50">
            {" "}
            Designing modern homes with warm textures, intelligent storage and
            premium finishes.{" "}
          </p>{" "}
          <div className="mt-6 flex gap-3">
            {" "}
            {[<FaInstagram />, <FaFacebookF />, <FaLinkedinIn />].map(
              (icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white/70 transition hover:bg-[#f28b45] hover:text-white"
                >
                  {" "}
                  {icon}{" "}
                </a>
              ),
            )}{" "}
          </div>{" "}
        </div>{" "}
        <div>
          {" "}
          <h4 className="font-serif text-xl">Quick Links</h4>{" "}
          <div className="mt-5 flex flex-col gap-3 text-sm text-white/50">
            {" "}
            <a href="#portfolio">Portfolio</a>{" "}
            <a href="#materials">Materials</a> <a href="#pricing">Pricing</a>{" "}
            <a href="#estimate">Cost Estimator</a>{" "}
          </div>{" "}
        </div>{" "}
        <div>
          {" "}
          <h4 className="font-serif text-xl">Contact</h4>{" "}
          <div className="mt-5 space-y-4 text-sm text-white/50">
            {" "}
            <p className="flex items-center gap-3">
              {" "}
              <FiPhone className="text-[#f4a15d]" /> +91 98765 43210{" "}
            </p>{" "}
            <p className="flex items-center gap-3">
              {" "}
              <FiMail className="text-[#f4a15d]" /> hello@havenly.com{" "}
            </p>{" "}
            <p className="flex items-center gap-3">
              {" "}
              <FiMapPin className="text-[#f4a15d]" /> New Delhi, India{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className={`${sectionClass} mt-10 border-t border-white/10 pt-6`}>
        {" "}
        <p className="text-sm text-white/35">
          {" "}
          © {new Date().getFullYear()} Havenly Interiors. All rights
          reserved.{" "}
        </p>{" "}
      </div>{" "}
    </footer>
  );
}
function SectionHeader({ eyebrow, title, text, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      {" "}
      <span className="text-xs font-bold uppercase tracking-[0.35em] text-[#d87834]">
        {" "}
        {eyebrow}{" "}
      </span>{" "}
      <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
        {" "}
        {title}{" "}
      </h2>{" "}
      <p className="mt-4 text-sm leading-7 text-black/55 sm:text-base">
        {" "}
        {text}{" "}
      </p>{" "}
    </div>
  );
}
function FieldLabel({ label }) {
  return (
    <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-black/45">
      {" "}
      {label}{" "}
    </p>
  );
}
function Counter({ label, value, onDec, onInc }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-[#f7f2ea] p-4">
      {" "}
      <span className="capitalize font-semibold">{label}</span>{" "}
      <div className="flex items-center gap-3">
        {" "}
        <button
          onClick={onDec}
          className="grid h-8 w-8 place-items-center rounded-full bg-white text-black shadow-sm"
        >
          {" "}
          <FiMinus />{" "}
        </button>{" "}
        <span className="w-6 text-center font-bold">{value}</span>{" "}
        <button
          onClick={onInc}
          className="grid h-8 w-8 place-items-center rounded-full bg-[#2d3035] text-white"
        >
          {" "}
          <FiPlus />{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
}
function PackageSelect({ pkg, setPkg }) {
  return (
    <div>
      {" "}
      <FieldLabel label="Package" />{" "}
      <div className="grid gap-2 sm:grid-cols-3">
        {" "}
        {["essential", "premium", "luxe"].map((value) => (
          <button
            key={value}
            onClick={() => setPkg(value)}
            className={`rounded-2xl px-4 py-3 text-sm font-bold capitalize ${pkg === value ? "bg-[#f28b45] text-white" : "bg-[#f7f2ea]"}`}
          >
            {" "}
            {value}{" "}
          </button>
        ))}{" "}
      </div>{" "}
    </div>
  );
}
function NumberInput({ label, value, setValue }) {
  return (
    <label>
      {" "}
      <FieldLabel label={label} />{" "}
      <input
        type="number"
        min="1"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full rounded-2xl border border-black/10 bg-[#f7f2ea] px-4 py-4 font-bold outline-none transition focus:border-[#f28b45]"
      />{" "}
    </label>
  );
}
function OptionGroup({ label, options, value, onChange }) {
  return (
    <div>
      {" "}
      <FieldLabel label={label} />{" "}
      <div className="grid gap-2 sm:grid-cols-3">
        {" "}
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`rounded-2xl px-4 py-3 text-sm font-bold capitalize ${value === option ? "bg-[#f28b45] text-white" : "bg-[#f7f2ea]"}`}
          >
            {" "}
            {option}{" "}
          </button>
        ))}{" "}
      </div>{" "}
    </div>
  );
}
