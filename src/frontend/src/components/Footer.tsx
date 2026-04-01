import { ExternalLink, Flame } from "lucide-react";
import { SiFacebook, SiX, SiYoutube } from "react-icons/si";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "LPG Prices", href: "#prices" },
  { label: "Safety Tips", href: "#safety" },
  { label: "Latest News", href: "#news" },
  { label: "File Complaint", href: "#complaint" },
];

const schemeLinks = [
  { label: "PMUY Scheme", href: "https://pmuy.gov.in" },
  { label: "Give It Up Campaign", href: "https://petroleum.nic.in" },
  { label: "PAHAL (DBTL)", href: "https://petroleum.nic.in" },
  { label: "Ujjwala Yojana", href: "https://pmuy.gov.in" },
];

const supportLinks = [
  { label: "IVRS: 1800-233-3555", href: "tel:18002333555" },
  { label: "Emergency: 1906", href: "tel:1906" },
  { label: "PG Portal", href: "https://pgportal.gov.in" },
  { label: "Ministry of Petroleum", href: "https://petroleum.nic.in" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer style={{ backgroundColor: "oklch(var(--navy-dark))" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <Flame className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">
                  LPG Awareness India
                </div>
                <div className="text-blue-400 text-xs">Citizen Portal</div>
              </div>
            </div>
            <p className="text-blue-300 text-xs leading-relaxed mb-4">
              An independent awareness portal providing LPG price tracking,
              safety guidelines, and government scheme information for Indian
              citizens.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-blue-300 hover:text-white hover:bg-white/20 transition-colors"
              >
                <SiFacebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://x.com"
                aria-label="X (Twitter)"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-blue-300 hover:text-white hover:bg-white/20 transition-colors"
              >
                <SiX className="w-3 h-3" />
              </a>
              <a
                href="https://youtube.com"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-blue-300 hover:text-white hover:bg-white/20 transition-colors"
              >
                <SiYoutube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-blue-300 hover:text-white text-xs transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Schemes */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">
              Schemes
            </h4>
            <ul className="space-y-2">
              {schemeLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-white text-xs transition-colors flex items-center gap-1"
                  >
                    {link.label}{" "}
                    <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">
              Support
            </h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-white text-xs transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-10 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-blue-400 text-center sm:text-left">
              <p>© {year} LPG Awareness India | For Citizens, By Citizens</p>
              <p className="mt-1 text-blue-500">
                ⚠️ This is an independent awareness portal. Not affiliated with
                any government body.
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs text-blue-400">
              <a href="/terms" className="hover:text-white transition-colors">
                Terms
              </a>
              <span className="opacity-30">|</span>
              <a href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </a>
              <span className="opacity-30">|</span>
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Built with ❤️ using caffeine.ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
