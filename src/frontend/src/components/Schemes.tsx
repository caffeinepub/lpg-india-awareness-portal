import { Badge } from "@/components/ui/badge";
import { CheckCircle, ExternalLink, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { useSchemes } from "../hooks/useQueries";

export default function Schemes() {
  const { data: schemes, isLoading, isError } = useSchemes();

  return (
    <section id="schemes" className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Badge className="mb-3 bg-navy/10 text-navy font-semibold uppercase tracking-wider text-xs border-0">
            Government Initiatives
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground">
            Government Schemes
          </h2>
          <p className="mt-2 text-muted-foreground text-sm max-w-xl mx-auto">
            Explore welfare schemes and subsidies offered by the Government of
            India for LPG consumers.
          </p>
        </div>

        {isLoading && (
          <div
            data-ocid="schemes.loading_state"
            className="flex justify-center py-16"
          >
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        )}

        {isError && (
          <div
            data-ocid="schemes.error_state"
            className="text-center py-12 text-destructive"
          >
            <p className="font-medium">
              Failed to load schemes. Please try again later.
            </p>
          </div>
        )}

        {schemes && schemes.length === 0 && (
          <div
            data-ocid="schemes.empty_state"
            className="text-center py-12 text-muted-foreground"
          >
            <p>No schemes available at the moment.</p>
          </div>
        )}

        {schemes && schemes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schemes.map((scheme, i) => (
              <motion.div
                key={scheme.name}
                data-ocid={`schemes.item.${i + 1}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-background border border-border rounded-xl p-6 shadow-card hover:shadow-md transition-all hover:-translate-y-1 flex flex-col"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-white font-bold text-sm"
                  style={{ backgroundColor: "oklch(var(--navy))" }}
                >
                  {String.fromCodePoint(0x1f3db)}
                </div>
                <h3 className="font-bold text-base text-foreground mb-2">
                  {scheme.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {scheme.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-foreground uppercase tracking-wide">
                        Eligibility:{" "}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {scheme.eligibility}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-foreground uppercase tracking-wide">
                        Benefits:{" "}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {scheme.benefits}
                      </span>
                    </div>
                  </div>
                </div>

                {scheme.link && (
                  <a
                    href={scheme.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid={`schemes.link.${i + 1}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide transition-colors mt-auto"
                    style={{ color: "oklch(var(--primary))" }}
                  >
                    Visit Official Site <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
