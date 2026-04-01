import { AlertCircle, ExternalLink, Globe, Phone } from "lucide-react";
import { motion } from "motion/react";

const channels = [
  {
    icon: Phone,
    title: "IVRS Helpline",
    detail: "1800-233-3555",
    subtext: "Toll-Free · 24×7",
    action: "Call Now",
    href: "tel:18002333555",
    color: "oklch(var(--accent))",
  },
  {
    icon: Globe,
    title: "Online Portal",
    detail: "pgportal.gov.in",
    subtext: "Government Grievance Portal",
    action: "File Online",
    href: "https://pgportal.gov.in",
    color: "oklch(var(--primary))",
  },
  {
    icon: AlertCircle,
    title: "LPG Emergency",
    detail: "1906",
    subtext: "Gas Leak · Fire · Emergency",
    action: "Call 1906",
    href: "tel:1906",
    color: "oklch(var(--destructive))",
  },
];

export default function ComplaintPortal() {
  return (
    <section id="complaint" className="py-16 bg-card">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground mb-3">
            Report an Issue
          </h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto mb-10 leading-relaxed">
            Facing issues with LPG supply, overcharging, subsidy, or safety? Use
            the channels below to register your complaint with the appropriate
            government authorities. Every complaint helps improve the system.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {channels.map((channel, i) => (
              <motion.div
                key={channel.title}
                data-ocid={`complaint.item.${i + 1}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-background border border-border rounded-xl p-6 shadow-card hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${channel.color}20` }}
                >
                  <channel.icon
                    className="w-6 h-6"
                    style={{ color: channel.color }}
                  />
                </div>
                <h3 className="font-bold text-base text-foreground mb-1">
                  {channel.title}
                </h3>
                <div
                  className="text-xl font-black mb-1"
                  style={{ color: channel.color }}
                >
                  {channel.detail}
                </div>
                <p className="text-xs text-muted-foreground mb-4">
                  {channel.subtext}
                </p>
                <a
                  href={channel.href}
                  target={
                    channel.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel="noopener noreferrer"
                  data-ocid={`complaint.link.${i + 1}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: channel.color }}
                >
                  {channel.action}
                  {channel.href.startsWith("http") && (
                    <ExternalLink className="w-3 h-3" />
                  )}
                </a>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-xs text-muted-foreground">
            For distributor-specific complaints, contact your oil company:
            <span className="font-semibold text-foreground">
              {" "}
              IndianOil · HPCL · BPCL
            </span>{" "}
            via their respective mobile apps or customer care.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
