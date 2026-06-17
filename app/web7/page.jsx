"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMenu,
  FiX,
  FiStar,
  FiUsers,
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
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const navLinks = ["Portfolio", "Materials", "Pricing", "Services"];
export default function InteriorDesignerWebsite() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0d0d0c] text-[#f4efe7]">
      {" "}
      <Navbar /> <Herosection /> <Businessstrip /> <Marquestrip /> <Portfolio />{" "}
      <MaterialShowcase /> <PricingMatrix /> <Services /> <Cta />{" "}
      <CostEstimator /> <Footer />{" "}
    </main>
  );
}
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
      {" "}
      <nav className="mx-auto flex max-w-6xl items-center justify-between border border-[#2b2a27] bg-[#10100f]/90 px-4 py-3 text-[#f4efe7] shadow-2xl backdrop-blur-xl md:px-6">
        {" "}
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-white/70 md:hidden"
        >
          {" "}
          <FiMenu className="text-lg" /> Menu{" "}
        </button>{" "}
        <a
          href="#"
          className="font-serif text-lg font-black uppercase tracking-[0.18em]"
        >
          {" "}
          De<span className="text-[#b8894d]">Ntro</span>{" "}
        </a>{" "}
        <div className="hidden items-center gap-8 md:flex">
          {" "}
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[10px] uppercase tracking-[0.25em] text-white/55 transition hover:text-[#b8894d]"
            >
              {" "}
              {item}{" "}
            </a>
          ))}{" "}
        </div>{" "}
        <a
          href="#contact"
          className="text-[10px] uppercase tracking-[0.25em] text-white/70 transition hover:text-[#b8894d]"
        >
          {" "}
          Contact{" "}
        </a>{" "}
      </nav>{" "}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/80 p-4 backdrop-blur-md md:hidden"
        >
          {" "}
          <div className="ml-auto min-h-full max-w-sm border border-white/10 bg-[#10100f] p-6">
            {" "}
            <button
              onClick={() => setOpen(false)}
              className="ml-auto flex items-center gap-2 text-xs uppercase tracking-[0.25em]"
            >
              {" "}
              Close <FiX />{" "}
            </button>{" "}
            <div className="mt-14 flex flex-col gap-7">
              {" "}
              {navLinks.map((item) => (
                <a
                  key={item}
                  onClick={() => setOpen(false)}
                  href={`#${item.toLowerCase()}`}
                  className="font-serif text-4xl uppercase"
                >
                  {" "}
                  {item}{" "}
                </a>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </motion.div>
      )}{" "}
    </header>
  );
}
function Herosection() {
  return (
    <section className="relative min-h-screen bg-[#171716] px-4 pb-12 pt-24 md:pt-28">
      {" "}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(184,137,77,0.18),transparent_35%),linear-gradient(to_bottom,#191918,#0d0d0c)]" />{" "}
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:90px_90px]" />{" "}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-6xl border border-[#34322f] bg-[#0d0d0c] shadow-[0_35px_90px_rgba(0,0,0,0.65)]"
      >
        {" "}
        <div className="flex items-center justify-between border-b border-[#282622] px-4 py-4 text-[10px] uppercase tracking-[0.25em] text-white/45 md:px-6">
          {" "}
          <span>Menu</span> <span className="text-[#b8894d]">DeNtro</span>{" "}
          <span>Contact</span>{" "}
        </div>{" "}
        <div className="grid min-h-[720px] md:grid-cols-[1.45fr_0.55fr]">
          {" "}
          <div className="relative overflow-hidden border-r border-[#282622] p-5 md:p-8">
            {" "}
            <motion.h1
              variants={fadeUp}
              className="relative z-10 max-w-3xl font-serif text-[4.5rem] font-black uppercase leading-[0.82] tracking-[-0.08em] text-[#f7f0e8] sm:text-[7rem] md:text-[8.5rem] lg:text-[10rem]"
            >
              {" "}
              Beauty In <br /> Simplicity{" "}
            </motion.h1>{" "}
            <motion.div
              variants={fadeUp}
              className="relative z-10 mt-6 overflow-hidden rounded-t-[999px] border border-[#b8894d]/40 bg-[#171716] p-3 md:mt-10"
            >
              {" "}
              <div className="h-[250px] overflow-hidden rounded-t-[999px] md:h-[340px]">
                {" "}
                <img
                  src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1600&auto=format&fit=crop"
                  alt="Luxury living room interior"
                  className="h-full w-full object-cover"
                />{" "}
              </div>{" "}
            </motion.div>{" "}
            <motion.div
              variants={fadeUp}
              className="relative z-10 mt-8 grid gap-6 md:grid-cols-[160px_1fr]"
            >
              {" "}
              <div className="hidden overflow-hidden rounded-t-full border border-[#34322f] p-2 md:block">
                {" "}
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=700&auto=format&fit=crop"
                  alt="Interior chair detail"
                  className="h-44 w-full rounded-t-full object-cover"
                />{" "}
              </div>{" "}
              <div className="border-t border-[#34322f] pt-5">
                {" "}
                <p className="font-serif text-3xl uppercase leading-none tracking-[-0.04em] md:text-4xl">
                  {" "}
                  Interior Design Company Est. 1999{" "}
                </p>{" "}
                <p className="mt-4 max-w-xl text-sm leading-6 text-white/50">
                  {" "}
                  We create minimal, premium and deeply functional interiors for
                  modern residences, studios, villas and commercial spaces.{" "}
                </p>{" "}
              </div>{" "}
            </motion.div>{" "}
          </div>{" "}
          <aside className="grid border-t border-[#282622] md:border-t-0">
            {" "}
            <div className="border-b border-[#282622] p-6">
              {" "}
              <div className="flex -space-x-3">
                {" "}
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
                ].map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt="Happy customer"
                    className="h-10 w-10 rounded-full border-2 border-[#0d0d0c] object-cover"
                  />
                ))}{" "}
              </div>{" "}
              <p className="mt-5 font-serif text-4xl text-[#b8894d]">
                {" "}
                900.000+{" "}
              </p>{" "}
              <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/45">
                {" "}
                Happy Customers{" "}
              </p>{" "}
              <div className="mt-5 flex gap-1 text-[#b8894d]">
                {" "}
                {Array.from({ length: 5 }).map((_, index) => (
                  <FiStar key={index} />
                ))}{" "}
              </div>{" "}
            </div>{" "}
            <div className="border-b border-[#282622] p-6">
              {" "}
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                {" "}
                Design Philosophy{" "}
              </p>{" "}
              <h2 className="mt-4 font-serif text-4xl uppercase leading-none">
                {" "}
                Less Noise. <br /> More Soul.{" "}
              </h2>{" "}
              <p className="mt-5 text-sm leading-6 text-white/45">
                {" "}
                Dark tones, clean lines, soft light and warm materials guide our
                design language.{" "}
              </p>{" "}
            </div>{" "}
            <div className="flex items-end p-6">
              {" "}
              <a
                href="#cost-estimator"
                className="flex w-full items-center justify-between border border-[#34322f] px-5 py-4 text-[10px] uppercase tracking-[0.22em] text-white/70 transition hover:border-[#b8894d] hover:text-[#b8894d]"
              >
                {" "}
                Estimate Project <FiArrowUpRight />{" "}
              </a>{" "}
            </div>{" "}
          </aside>{" "}
        </div>{" "}
      </motion.div>{" "}
    </section>
  );
}
function Businessstrip() {
  const stats = [
    { icon: <FiUsers />, value: "900K+", label: "Happy customers" },
    { icon: <FiHome />, value: "1200+", label: "Homes designed" },
    { icon: <FiGrid />, value: "28+", label: "Cities covered" },
    { icon: <FiStar />, value: "4.9", label: "Average rating" },
  ];
  return (
    <section className="border-y border-[#2b2a27] bg-[#111110] px-4 py-8">
      {" "}
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden border border-[#2b2a27] bg-[#2b2a27] md:grid-cols-4">
        {" "}
        {stats.map((item) => (
          <motion.div
            key={item.label}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-[#0d0d0c] p-6"
          >
            {" "}
            <div className="mb-7 text-2xl text-[#b8894d]">{item.icon}</div>{" "}
            <p className="font-serif text-4xl uppercase">{item.value}</p>{" "}
            <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/40">
              {" "}
              {item.label}{" "}
            </p>{" "}
          </motion.div>
        ))}{" "}
      </div>{" "}
    </section>
  );
}
function Marquestrip() {
  const words = [
    "Interior Design",
    "Luxury Homes",
    "Minimal Spaces",
    "Bespoke Furniture",
    "Warm Materials",
    "Turnkey Execution",
  ];
  return (
    <section className="overflow-hidden border-y border-[#2b2a27] bg-[#b8894d] py-4 text-[#0d0d0c]">
      {" "}
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="flex w-max gap-10 whitespace-nowrap"
      >
        {" "}
        {[...words, ...words, ...words].map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="font-serif text-4xl font-black uppercase tracking-[-0.06em] md:text-7xl"
          >
            {" "}
            {word}{" "}
          </span>
        ))}{" "}
      </motion.div>{" "}
    </section>
  );
}
function Portfolio() {
  const projects = [
    {
      title: "Black Arc Villa",
      category: "Residential",
      img: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Muted Loft",
      category: "Apartment",
      img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Bronze House",
      category: "Luxury Home",
      img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
    },
  ];
  return (
    <section id="portfolio" className="bg-[#0d0d0c] px-4 py-24">
      {" "}
      <div className="mx-auto max-w-6xl">
        {" "}
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured spaces designed with balance, contrast and calm."
        />{" "}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {" "}
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border border-[#2b2a27] bg-[#111110]"
            >
              {" "}
              <div className="relative h-[430px] overflow-hidden">
                {" "}
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-110 group-hover:opacity-100"
                />{" "}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />{" "}
                <div className="absolute left-0 top-0 p-5">
                  {" "}
                  <span className="border border-white/15 bg-black/40 px-3 py-2 text-[10px] uppercase tracking-[0.25em] text-white/60">
                    {" "}
                    0{index + 1}{" "}
                  </span>{" "}
                </div>{" "}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  {" "}
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#b8894d]">
                    {" "}
                    {project.category}{" "}
                  </p>{" "}
                  <h3 className="mt-3 font-serif text-4xl uppercase leading-none">
                    {" "}
                    {project.title}{" "}
                  </h3>{" "}
                </div>{" "}
              </div>{" "}
            </motion.article>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
function MaterialShowcase() {
  const materials = [
    {
      name: "Dark Oak",
      desc: "Deep wood tones for warm and grounded interiors.",
    },
    {
      name: "Italian Marble",
      desc: "Premium stone surfaces with quiet natural movement.",
    },
    {
      name: "Bronze Metal",
      desc: "Soft metallic accents for furniture and lighting details.",
    },
    {
      name: "Textured Fabric",
      desc: "Layered upholstery for comfort, depth and softness.",
    },
  ];
  return (
    <section
      id="materials"
      className="border-y border-[#2b2a27] bg-[#111110] px-4 py-24"
    >
      {" "}
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr]">
        {" "}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-t-[280px] border border-[#34322f] p-3"
        >
          {" "}
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop"
            alt="Material showcase"
            className="h-[580px] w-full rounded-t-[260px] object-cover opacity-85"
          />{" "}
          <div className="absolute bottom-8 left-8 right-8 border border-white/10 bg-black/50 p-5 backdrop-blur">
            {" "}
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#b8894d]">
              {" "}
              Material Mood{" "}
            </p>{" "}
            <p className="mt-2 text-sm leading-6 text-white/55">
              {" "}
              Every project starts with tactile samples, lighting study and
              visual balance.{" "}
            </p>{" "}
          </div>{" "}
        </motion.div>{" "}
        <div className="flex flex-col justify-center">
          {" "}
          <SectionHeading
            eyebrow="Material Library"
            title="Strong materials. Simple forms. Lasting atmosphere."
          />{" "}
          <div className="mt-10 divide-y divide-[#2b2a27] border-y border-[#2b2a27]">
            {" "}
            {materials.map((item) => (
              <motion.div
                key={item.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid gap-4 py-6 md:grid-cols-[190px_1fr_40px]"
              >
                {" "}
                <h3 className="font-serif text-4xl uppercase leading-none">
                  {" "}
                  {item.name}{" "}
                </h3>{" "}
                <p className="max-w-md text-sm leading-6 text-white/45">
                  {" "}
                  {item.desc}{" "}
                </p>{" "}
                <FiArrowUpRight className="text-2xl text-[#b8894d]" />{" "}
              </motion.div>
            ))}{" "}
          </div>{" "}
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
      desc: "For compact homes and simple design upgrades.",
      features: [
        "Space planning",
        "Basic 3D concepts",
        "Material suggestions",
        "Furniture layout",
      ],
    },
    {
      name: "Premium",
      price: "₹2,499",
      desc: "For detailed interiors with custom furniture.",
      features: [
        "Detailed 3D renders",
        "Lighting plan",
        "Custom furniture design",
        "Site coordination",
      ],
    },
    {
      name: "Luxe",
      price: "₹3,999",
      desc: "For high-end turnkey luxury interiors.",
      features: [
        "Turnkey execution",
        "Premium materials",
        "Bespoke furniture",
        "Final styling",
      ],
    },
  ];
  return (
    <section id="pricing" className="bg-[#0d0d0c] px-4 py-24">
      {" "}
      <div className="mx-auto max-w-6xl">
        {" "}
        <SectionHeading
          eyebrow="Pricing Matrix"
          title="Choose a package based on how deeply you want us involved."
        />{" "}
        <div className="mt-12 grid gap-px overflow-hidden border border-[#2b2a27] bg-[#2b2a27] md:grid-cols-3">
          {" "}
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`p-7 ${index === 1 ? "bg-[#b8894d] text-[#0d0d0c]" : "bg-[#111110]"}`}
            >
              {" "}
              <p
                className={`text-[10px] uppercase tracking-[0.25em] ${index === 1 ? "text-black/60" : "text-[#b8894d]"}`}
              >
                {" "}
                {plan.name}{" "}
              </p>{" "}
              <h3 className="mt-8 font-serif text-6xl uppercase leading-none">
                {" "}
                {plan.price}{" "}
              </h3>{" "}
              <p
                className={`mt-2 text-xs uppercase tracking-[0.2em] ${index === 1 ? "text-black/55" : "text-white/35"}`}
              >
                {" "}
                per sq.ft.{" "}
              </p>{" "}
              <p
                className={`mt-7 min-h-14 text-sm leading-6 ${index === 1 ? "text-black/65" : "text-white/45"}`}
              >
                {" "}
                {plan.desc}{" "}
              </p>{" "}
              <div className="mt-8 space-y-4">
                {" "}
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm"
                  >
                    {" "}
                    <FiCheck /> <span>{feature}</span>{" "}
                  </div>
                ))}{" "}
              </div>{" "}
              <button
                className={`mt-10 flex w-full items-center justify-between border px-5 py-4 text-[10px] uppercase tracking-[0.25em] ${index === 1 ? "border-black/25" : "border-[#34322f] text-white/70"}`}
              >
                {" "}
                Select Package <FiArrowUpRight />{" "}
              </button>{" "}
            </motion.div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
function Services() {
  const services = [
    {
      icon: <FiHome />,
      title: "Full Home Interiors",
      desc: "Complete home planning, design, furniture, lighting, decor and execution.",
    },
    {
      icon: <FiGrid />,
      title: "Kitchen Design",
      desc: "Modular kitchens with L-shaped, straight, U-shaped and parallel layouts.",
    },
    {
      icon: <FiLayers />,
      title: "Wardrobe Design",
      desc: "Sliding and swing wardrobes with laminate, membrane and acrylic finishes.",
    },
  ];
  return (
    <section
      id="services"
      className="border-y border-[#2b2a27] bg-[#111110] px-4 py-24"
    >
      {" "}
      <div className="mx-auto max-w-6xl">
        {" "}
        <SectionHeading
          eyebrow="Services"
          title="Design services built for modern homes and premium lifestyles."
        />{" "}
        <div className="mt-12 grid gap-px overflow-hidden border border-[#2b2a27] bg-[#2b2a27] md:grid-cols-3">
          {" "}
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group bg-[#0d0d0c] p-8 transition hover:bg-[#171716]"
            >
              {" "}
              <div className="mb-16 text-5xl text-[#b8894d]">
                {" "}
                {service.icon}{" "}
              </div>{" "}
              <h3 className="font-serif text-4xl uppercase leading-none">
                {" "}
                {service.title}{" "}
              </h3>{" "}
              <p className="mt-5 text-sm leading-6 text-white/45">
                {" "}
                {service.desc}{" "}
              </p>{" "}
              <button className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/55 transition group-hover:text-[#b8894d]">
                {" "}
                Explore Service <FiChevronRight />{" "}
              </button>{" "}
            </motion.div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
function Cta() {
  return (
    <section className="bg-[#0d0d0c] px-4 py-24">
      {" "}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto grid max-w-6xl overflow-hidden border border-[#2b2a27] bg-[#b8894d] text-[#0d0d0c] md:grid-cols-[1fr_420px]"
      >
        {" "}
        <div className="p-8 md:p-12">
          {" "}
          <p className="text-[10px] uppercase tracking-[0.3em] text-black/55">
            {" "}
            Start Your Project{" "}
          </p>{" "}
          <h2 className="mt-6 max-w-3xl font-serif text-6xl uppercase leading-[0.85] tracking-[-0.07em] md:text-8xl">
            {" "}
            Ready For A Simpler, Better Space?{" "}
          </h2>{" "}
          <p className="mt-7 max-w-xl text-sm leading-6 text-black/65">
            {" "}
            Share your room type, package preference and requirements. Our team
            will help you plan the right layout, material and budget.{" "}
          </p>{" "}
          <a
            href="#cost-estimator"
            className="mt-10 inline-flex items-center gap-4 border border-black/25 px-6 py-4 text-[10px] uppercase tracking-[0.25em]"
          >
            {" "}
            Calculate Cost <FiArrowUpRight />{" "}
          </a>{" "}
        </div>{" "}
        <div className="min-h-[380px] border-l border-black/15">
          {" "}
          <img
            src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=900&auto=format&fit=crop"
            alt="Interior consultation"
            className="h-full w-full object-cover grayscale"
          />{" "}
        </div>{" "}
      </motion.div>{" "}
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
  const [wardrobeDoor, setWardrobeDoor] = useState("Sliding");
  const [wardrobeFinish, setWardrobeFinish] = useState("Laminate");
  const [wardrobeHeight, setWardrobeHeight] = useState(7);
  const [wardrobeWidth, setWardrobeWidth] = useState(6);
  const packageMultiplier = { Essential: 1, Premium: 1.45, Luxe: 2.15 };
  const estimate = useMemo(() => {
    let base = 0;
    if (type === "full-home") {
      base =
        rooms.living * 90000 +
        rooms.kitchen * 150000 +
        rooms.bedroom * 120000 +
        rooms.bathroom * 75000 +
        rooms.dining * 65000 +
        bhk * 70000;
    }
    if (type === "kitchen") {
      const area = Number(kitchenLength || 0) * Number(kitchenWidth || 0);
      const shapeExtra =
        kitchenShape === "Straight"
          ? 1
          : kitchenShape === "L Shaped"
            ? 1.15
            : kitchenShape === "Parallel"
              ? 1.25
              : 1.35;
      base = area * 4500 * shapeExtra;
    }
    if (type === "wardrobe") {
      const area = Number(wardrobeHeight || 0) * Number(wardrobeWidth || 0);
      const doorExtra = wardrobeDoor === "Sliding" ? 1.2 : 1;
      const finishExtra =
        wardrobeFinish === "Laminate"
          ? 1
          : wardrobeFinish === "Membrane"
            ? 1.25
            : 1.55;
      base = area * 3200 * doorExtra * finishExtra;
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
    wardrobeDoor,
    wardrobeFinish,
    wardrobeHeight,
    wardrobeWidth,
  ]);
  const updateRoom = (key, amount) => {
    setRooms((prev) => ({ ...prev, [key]: Math.max(0, prev[key] + amount) }));
  };
  return (
    <section id="cost-estimator" className="bg-[#111110] px-4 py-24">
      {" "}
      <div className="mx-auto grid max-w-6xl gap-px overflow-hidden border border-[#2b2a27] bg-[#2b2a27] md:grid-cols-[0.85fr_1.15fr]">
        {" "}
        <div className="bg-[#0d0d0c] p-8 md:p-10">
          {" "}
          <SectionHeading
            eyebrow="Cost Estimator"
            title="Get a quick interior budget estimate."
          />{" "}
          <div className="mt-10 border border-[#2b2a27] bg-[#151514] p-6">
            {" "}
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
              {" "}
              Approx Budget{" "}
            </p>{" "}
            <h3 className="mt-5 font-serif text-6xl uppercase leading-none text-[#b8894d]">
              {" "}
              ₹{estimate.toLocaleString("en-IN")}{" "}
            </h3>{" "}
            <p className="mt-5 text-sm leading-6 text-white/45">
              {" "}
              This is a rough estimate for planning. Final cost depends on
              actual site measurements, materials, hardware, finish and
              scope.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="bg-[#0d0d0c] p-6 md:p-8">
          {" "}
          <div className="grid gap-3 md:grid-cols-3">
            {" "}
            {[
              ["full-home", "Full Home"],
              ["kitchen", "Kitchen"],
              ["wardrobe", "Wardrobe"],
            ].map(([value, label]) => (
              <button
                key={value}
                onClick={() => setType(value)}
                className={`border px-4 py-4 text-[10px] uppercase tracking-[0.22em] transition ${type === value ? "border-[#b8894d] bg-[#b8894d] text-[#0d0d0c]" : "border-[#2b2a27] text-white/55 hover:border-[#b8894d]"}`}
              >
                {" "}
                {label}{" "}
              </button>
            ))}{" "}
          </div>{" "}
          {type === "full-home" && (
            <div className="mt-8 space-y-8">
              {" "}
              <div>
                {" "}
                <Label>BHK Type</Label>{" "}
                <div className="mt-3 grid grid-cols-5 gap-2">
                  {" "}
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
                      className={`border py-3 text-sm ${bhk === item ? "border-[#b8894d] bg-[#b8894d] text-[#0d0d0c]" : "border-[#2b2a27] text-white/55"}`}
                    >
                      {" "}
                      {item}{" "}
                    </button>
                  ))}{" "}
                </div>{" "}
              </div>{" "}
              <div>
                {" "}
                <Label>Rooms</Label>{" "}
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {" "}
                  {Object.entries(rooms).map(([key, value]) => (
                    <Counter
                      key={key}
                      label={key}
                      value={value}
                      onMinus={() => updateRoom(key, -1)}
                      onPlus={() => updateRoom(key, 1)}
                    />
                  ))}{" "}
                </div>{" "}
              </div>{" "}
            </div>
          )}{" "}
          {type === "kitchen" && (
            <div className="mt-8 space-y-7">
              {" "}
              <div>
                {" "}
                <Label>Kitchen Shape</Label>{" "}
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  {" "}
                  {["L Shaped", "Straight", "U Shaped", "Parallel"].map(
                    (item) => (
                      <button
                        key={item}
                        onClick={() => setKitchenShape(item)}
                        className={`border px-4 py-4 text-sm ${kitchenShape === item ? "border-[#b8894d] bg-[#b8894d] text-[#0d0d0c]" : "border-[#2b2a27] text-white/55"}`}
                      >
                        {" "}
                        {item}{" "}
                      </button>
                    ),
                  )}{" "}
                </div>{" "}
              </div>{" "}
              <div className="grid gap-4 md:grid-cols-2">
                {" "}
                <Input
                  label="Length in feet"
                  value={kitchenLength}
                  onChange={(e) => setKitchenLength(e.target.value)}
                />{" "}
                <Input
                  label="Width in feet"
                  value={kitchenWidth}
                  onChange={(e) => setKitchenWidth(e.target.value)}
                />{" "}
              </div>{" "}
            </div>
          )}{" "}
          {type === "wardrobe" && (
            <div className="mt-8 space-y-7">
              {" "}
              <div className="grid gap-4 md:grid-cols-2">
                {" "}
                <Input
                  label="Height in feet"
                  value={wardrobeHeight}
                  onChange={(e) => setWardrobeHeight(e.target.value)}
                />{" "}
                <Input
                  label="Width in feet"
                  value={wardrobeWidth}
                  onChange={(e) => setWardrobeWidth(e.target.value)}
                />{" "}
              </div>{" "}
              <div>
                {" "}
                <Label>Door Type</Label>{" "}
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {" "}
                  {["Sliding", "Swing"].map((item) => (
                    <button
                      key={item}
                      onClick={() => setWardrobeDoor(item)}
                      className={`border px-4 py-4 text-sm ${wardrobeDoor === item ? "border-[#b8894d] bg-[#b8894d] text-[#0d0d0c]" : "border-[#2b2a27] text-white/55"}`}
                    >
                      {" "}
                      {item}{" "}
                    </button>
                  ))}{" "}
                </div>{" "}
              </div>{" "}
              <div>
                {" "}
                <Label>Finish</Label>{" "}
                <div className="mt-3 grid gap-3 md:grid-cols-3">
                  {" "}
                  {["Laminate", "Membrane", "Acrylic"].map((item) => (
                    <button
                      key={item}
                      onClick={() => setWardrobeFinish(item)}
                      className={`border px-4 py-4 text-sm ${wardrobeFinish === item ? "border-[#b8894d] bg-[#b8894d] text-[#0d0d0c]" : "border-[#2b2a27] text-white/55"}`}
                    >
                      {" "}
                      {item}{" "}
                    </button>
                  ))}{" "}
                </div>{" "}
              </div>{" "}
            </div>
          )}{" "}
          <div className="mt-8">
            {" "}
            <Label>Package</Label>{" "}
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              {" "}
              {["Essential", "Premium", "Luxe"].map((item) => (
                <button
                  key={item}
                  onClick={() => setPackageType(item)}
                  className={`border px-4 py-4 text-[10px] uppercase tracking-[0.22em] ${packageType === item ? "border-[#b8894d] bg-[#b8894d] text-[#0d0d0c]" : "border-[#2b2a27] text-white/55"}`}
                >
                  {" "}
                  {item}{" "}
                </button>
              ))}{" "}
            </div>{" "}
          </div>{" "}
          <button className="mt-8 flex w-full items-center justify-center gap-3 bg-[#b8894d] px-6 py-5 text-[10px] uppercase tracking-[0.25em] text-[#0d0d0c]">
            {" "}
            Book Free Consultation <FiArrowUpRight />{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
function Footer() {
  return (
    <footer id="contact" className="bg-[#0d0d0c] px-4 py-14">
      {" "}
      <div className="mx-auto grid max-w-6xl gap-10 border-t border-[#2b2a27] pt-12 md:grid-cols-[1fr_1fr]">
        {" "}
        <div>
          {" "}
          <h2 className="font-serif text-6xl font-black uppercase leading-none tracking-[-0.07em]">
            {" "}
            De<span className="text-[#b8894d]">Ntro</span>{" "}
          </h2>{" "}
          <p className="mt-5 max-w-md text-sm leading-6 text-white/45">
            {" "}
            A premium interior design company creating simple, bold and
            functional spaces for modern living.{" "}
          </p>{" "}
        </div>{" "}
        <div className="grid gap-8 md:grid-cols-2">
          {" "}
          <div>
            {" "}
            <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-[#b8894d]">
              {" "}
              Contact{" "}
            </p>{" "}
            <div className="space-y-4 text-sm text-white/55">
              {" "}
              <p className="flex items-center gap-3">
                {" "}
                <FiPhone /> +91 98765 43210{" "}
              </p>{" "}
              <p className="flex items-center gap-3">
                {" "}
                <FiMail /> hello@dentro.design{" "}
              </p>{" "}
              <p className="flex items-center gap-3">
                {" "}
                <FiMapPin /> New Delhi, India{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <div>
            {" "}
            <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-[#b8894d]">
              {" "}
              Social{" "}
            </p>{" "}
            <div className="space-y-4 text-sm text-white/55">
              {" "}
              <p className="flex items-center gap-3">
                {" "}
                <FiInstagram /> Instagram{" "}
              </p>{" "}
              <p className="flex items-center gap-3">
                {" "}
                <FiFacebook /> Facebook{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="mx-auto mt-12 flex max-w-6xl flex-col justify-between border-t border-[#2b2a27] pt-6 text-[10px] uppercase tracking-[0.22em] text-white/30 md:flex-row">
        {" "}
        <p>© 2026 Dentro Design Studio</p>{" "}
        <p>Interior / Furniture / Styling</p>{" "}
      </div>{" "}
    </footer>
  );
}
function SectionHeading({ eyebrow, title }) {
  return (
    <div>
      {" "}
      <p className="text-[10px] uppercase tracking-[0.32em] text-[#b8894d]">
        {" "}
        {eyebrow}{" "}
      </p>{" "}
      <h2 className="mt-5 max-w-4xl font-serif text-5xl font-black uppercase leading-[0.88] tracking-[-0.07em] text-[#f4efe7] md:text-7xl">
        {" "}
        {title}{" "}
      </h2>{" "}
    </div>
  );
}
function Label({ children }) {
  return (
    <p className="text-[10px] uppercase tracking-[0.25em] text-[#b8894d]">
      {" "}
      {children}{" "}
    </p>
  );
}
function Counter({ label, value, onMinus, onPlus }) {
  return (
    <div className="flex items-center justify-between border border-[#2b2a27] p-4">
      {" "}
      <span className="capitalize text-sm text-white/65">{label}</span>{" "}
      <div className="flex items-center gap-4">
        {" "}
        <button
          type="button"
          onClick={onMinus}
          className="border border-[#2b2a27] p-2 text-white/55"
        >
          {" "}
          <FiMinus />{" "}
        </button>{" "}
        <span className="min-w-5 text-center">{value}</span>{" "}
        <button
          type="button"
          onClick={onPlus}
          className="border border-[#2b2a27] p-2 text-white/55"
        >
          {" "}
          <FiPlus />{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
}
function Input({ label, value, onChange }) {
  return (
    <label className="block">
      {" "}
      <Label>{label}</Label>{" "}
      <input
        type="number"
        value={value}
        onChange={onChange}
        className="mt-3 w-full border border-[#2b2a27] bg-transparent px-4 py-4 text-white outline-none placeholder:text-white/20 focus:border-[#b8894d]"
      />{" "}
    </label>
  );
}
