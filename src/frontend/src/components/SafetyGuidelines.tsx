import { AlertTriangle, CheckCircle2, Loader2, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useSafetyTips } from "../hooks/useQueries";

export default function SafetyGuidelines() {
  const { data: tips, isLoading, isError } = useSafetyTips();

  return (
    <section
      id="safety"
      className="py-16"
      style={{ backgroundColor: "oklch(var(--background-tint))" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground">
            LPG Safety Guidelines
          </h2>
          <p className="mt-2 text-muted-foreground text-sm max-w-xl mx-auto">
            Essential safety practices to prevent accidents and ensure safe LPG
            usage at home.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left — checklist */}
          <div>
            {isLoading && (
              <div
                data-ocid="safety.loading_state"
                className="flex justify-center py-12"
              >
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            )}

            {isError && (
              <div
                data-ocid="safety.error_state"
                className="text-center py-12 text-destructive"
              >
                <p className="font-medium">Failed to load safety tips.</p>
              </div>
            )}

            {tips && tips.length === 0 && (
              <div
                data-ocid="safety.empty_state"
                className="text-center py-12 text-muted-foreground"
              >
                <p>No safety tips available at the moment.</p>
              </div>
            )}

            {tips && tips.length > 0 && (
              <div className="space-y-4">
                {tips.map((tip, i) => (
                  <motion.div
                    key={tip.title}
                    data-ocid={`safety.item.${i + 1}`}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.06 }}
                    className="flex gap-4 bg-card border border-border rounded-xl p-4 shadow-card"
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-lg"
                      style={{ backgroundColor: "oklch(var(--navy) / 0.08)" }}
                    >
                      {tip.icon || (
                        <CheckCircle2
                          className="w-5 h-5"
                          style={{ color: "oklch(var(--navy))" }}
                        />
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-foreground mb-0.5">
                        {tip.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {tip.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Right — emergency card */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden shadow-lg border border-border"
          >
            {/* Header strip */}
            <div
              className="px-6 py-4 text-white"
              style={{ backgroundColor: "oklch(var(--navy))" }}
            >
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-accent" />
                <h3 className="font-black text-base uppercase tracking-wide">
                  Emergency Contacts
                </h3>
              </div>
            </div>

            <div className="bg-card p-6 space-y-5">
              {/* Main emergency number */}
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5 text-center">
                <div className="text-xs font-bold uppercase tracking-widest text-destructive mb-1">
                  LPG Gas Emergency
                </div>
                <div className="text-5xl font-black text-destructive">1906</div>
                <div className="text-xs text-muted-foreground mt-1">
                  24 × 7 Toll-Free Helpline
                </div>
              </div>

              <div className="space-y-3">
                {[
                  {
                    label: "IVRS Helpline",
                    number: "1800-233-3555",
                    note: "Toll Free",
                  },
                  {
                    label: "PGPORTAL Grievance",
                    number: "pgportal.gov.in",
                    note: "Online",
                    isLink: true,
                  },
                  {
                    label: "Petroleum Ministry",
                    number: "011-23380458",
                    note: "Office Hours",
                  },
                ].map((contact) => (
                  <div
                    key={contact.label}
                    className="flex items-center justify-between py-3 border-b border-border last:border-0"
                  >
                    <div>
                      <div className="text-xs font-bold text-foreground">
                        {contact.label}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {contact.note}
                      </div>
                    </div>
                    <div
                      className="flex items-center gap-1 text-sm font-black"
                      style={{ color: "oklch(var(--primary))" }}
                    >
                      <Phone className="w-3.5 h-3.5" />
                      {contact.isLink ? (
                        <a
                          href={`https://${contact.number}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {contact.number}
                        </a>
                      ) : (
                        contact.number
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-xs text-yellow-800 leading-relaxed font-medium">
                  🚨 <strong>In case of gas leak:</strong> Do NOT operate any
                  electrical switches. Open all windows and doors. Evacuate
                  immediately. Call 1906 from outside.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
