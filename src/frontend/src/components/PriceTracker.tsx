import { Badge } from "@/components/ui/badge";
import { Loader2, Minus, TrendingDown, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { useLpgPrices } from "../hooks/useQueries";

export default function PriceTracker() {
  const { data: prices, isLoading, isError } = useLpgPrices();

  return (
    <section
      id="prices"
      className="py-16"
      style={{ backgroundColor: "oklch(var(--background-tint))" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <Badge className="mb-3 bg-navy/10 text-navy font-semibold uppercase tracking-wider text-xs border-0">
            Live Data
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground">
            Current LPG Prices
          </h2>
          <p className="mt-2 text-muted-foreground text-sm max-w-xl mx-auto">
            14.2 kg domestic cylinder prices across major Indian cities. Prices
            updated periodically.
          </p>
        </div>

        {isLoading && (
          <div
            data-ocid="prices.loading_state"
            className="flex justify-center py-16"
          >
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        )}

        {isError && (
          <div
            data-ocid="prices.error_state"
            className="text-center py-12 text-destructive"
          >
            <p className="font-medium">
              Failed to load prices. Please try again later.
            </p>
          </div>
        )}

        {prices && prices.length === 0 && (
          <div
            data-ocid="prices.empty_state"
            className="text-center py-12 text-muted-foreground"
          >
            <p>No price data available at the moment.</p>
          </div>
        )}

        {prices && prices.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {prices.map((item, i) => {
              const diff = item.priceChange.difference;
              const isUp = diff > 0;
              const isDown = diff < 0;
              return (
                <motion.div
                  key={item.city}
                  data-ocid={`prices.item.${i + 1}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="bg-card border border-border rounded-xl p-4 shadow-card hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between gap-1 mb-3">
                    <h3 className="font-bold text-sm text-foreground leading-tight">
                      {item.city}
                    </h3>
                    {isUp && (
                      <TrendingUp className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                    )}
                    {isDown && (
                      <TrendingDown className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    )}
                    {!isUp && !isDown && (
                      <Minus className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                    )}
                  </div>
                  <div className="text-2xl font-black text-navy">
                    ₹{item.priceINR}
                  </div>
                  <div
                    className={`text-xs font-semibold mt-1 ${
                      isUp
                        ? "text-destructive"
                        : isDown
                          ? "text-green-600"
                          : "text-muted-foreground"
                    }`}
                  >
                    {diff > 0
                      ? `+₹${diff}`
                      : diff < 0
                        ? `-₹${Math.abs(diff)}`
                        : "No change"}
                  </div>
                  <div className="text-xs text-muted-foreground mt-2 truncate">
                    {item.lastUpdated}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
