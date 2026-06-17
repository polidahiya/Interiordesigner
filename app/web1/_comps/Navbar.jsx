import { GlassElement } from "../../Glasseffect/Glasselement";
import Wrapper from "./_navbar/Wrapper";

function Navbar() {
  return (
    <Wrapper>
      <nav className="max-w-7xl w-full px-2 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="bg-[#2A2A2A] text-[#F5F1EB] rounded-full px-5 py-2 text-xs font-medium tracking-wide shadow-sm">
            Home
          </span>
          <div className="hidden md:flex items-center gap-8">
            {["Projects", "About", "Pricing"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs font-medium text-black/60 hover:text-[#2A2A2A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#2A2A2A] hover:after:w-full after:transition-all after:duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          {/* Social Avatars */}
          <div className="hidden sm:flex items-center gap-2">
            <div className="flex -space-x-2.5">
              {["🧑‍🎨", "👩‍💼", "🧑"].map((emoji, idx) => (
                <GlassElement
                  height={32}
                  width={32}
                  radius={32}
                  key={idx}
                  className="rounded-full  flex items-center justify-center text-xs shadow-sm"
                >
                  {emoji}
                </GlassElement>
              ))}
            </div>
            <span className="text-[11px] font-medium text-black/50 tracking-tight pl-1">
              +240 spaces curated
            </span>
          </div>

          <button className="bg-[#2A2A2A] hover:bg-[#8B7355] text-[#F5F1EB] text-xs font-semibold tracking-wider px-5 py-2.5 rounded-full shadow-sm transition-all duration-300 transform active:scale-95">
            ✉ CONTACT US
          </button>
        </div>
      </nav>
    </Wrapper>
  );
}

export default Navbar;
