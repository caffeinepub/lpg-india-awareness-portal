import { Flame, Menu, Search, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "LPG Prices", href: "#prices" },
  { label: "Subsidy", href: "#schemes" },
  { label: "Safety", href: "#safety" },
  { label: "Schemes", href: "#schemes" },
  { label: "News", href: "#news" },
  { label: "Complaint", href: "#complaint" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-navy shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <div className="text-white font-bold text-sm tracking-wide">
                LPG Awareness
              </div>
              <div className="text-blue-300 text-xs font-medium tracking-widest uppercase">
                India Portal
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.label}
                data-ocid={`nav.${link.label.toLowerCase().replace(" ", "_")}.link`}
                onClick={() => handleNav(link.href)}
                className="px-3 py-2 text-sm text-blue-100 hover:text-white hover:bg-navy-light rounded transition-colors font-medium relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent group-hover:w-4/5 transition-all duration-200 rounded-full" />
              </button>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              data-ocid="header.search_input"
              className="hidden sm:flex w-8 h-8 rounded-full bg-navy-light items-center justify-center text-blue-200 hover:text-white hover:bg-navy-light transition-colors"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              type="button"
              data-ocid="header.menu.toggle"
              className="lg:hidden w-8 h-8 flex items-center justify-center text-blue-200 hover:text-white"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-navy-dark border-t border-navy-light px-4 py-3">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-left px-3 py-2 text-sm text-blue-100 hover:text-white hover:bg-navy-light rounded transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
