import { motion } from "motion/react";

const issues = [
  {
    icon: "📈",
    title: "Rising Prices",
    description:
      "LPG cylinder prices have surged significantly over recent years, burdening millions of Indian households especially in rural areas. The 14.2 kg domestic cylinder has seen repeated hikes affecting family budgets.",
  },
  {
    icon: "✂️",
    title: "Subsidy Cuts",
    description:
      "Government subsidies on LPG have been progressively reduced or discontinued for large segments of the population under the PAHAL and DBTL schemes. Many beneficiaries report delays or non-credit of subsidy amounts.",
  },
  {
    icon: "⚠️",
    title: "Safety Risks",
    description:
      "Improper handling, substandard equipment, and lack of awareness lead to thousands of LPG-related accidents annually in India. Regular cylinder checks and certified equipment usage are critical.",
  },
  {
    icon: "🔍",
    title: "Availability Issues",
    description:
      "In remote and semi-urban areas, LPG availability remains inconsistent. Delays in cylinder refills, black-market overpricing, and distribution inefficiencies continue to affect consumers.",
  },
];

export default function KeyIssues() {
  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground">
            Key Areas of Concern
          </h2>
          <p className="mt-2 text-muted-foreground text-sm max-w-xl mx-auto">
            Critical LPG issues affecting Indian citizens that need immediate
            attention and awareness.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {issues.map((issue, i) => (
            <motion.div
              key={issue.title}
              data-ocid={`issues.item.${i + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-background border border-border rounded-xl p-6 shadow-card hover:shadow-md transition-all hover:-translate-y-1 group"
            >
              <div className="text-4xl mb-4">{issue.icon}</div>
              <h3 className="font-bold text-base text-foreground mb-2">
                {issue.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {issue.description}
              </p>
              <button
                type="button"
                data-ocid={`issues.learn_more.button.${i + 1}`}
                className="text-xs font-bold uppercase tracking-wide transition-colors"
                style={{ color: "oklch(var(--accent))" }}
              >
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
