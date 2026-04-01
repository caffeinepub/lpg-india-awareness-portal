import { Badge } from "@/components/ui/badge";
import { Calendar, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { NewsCategory } from "../backend.d";
import { useNewsItems } from "../hooks/useQueries";

const categoryColors: Record<NewsCategory, string> = {
  [NewsCategory.price]: "bg-orange-100 text-orange-700 border-orange-200",
  [NewsCategory.safety]: "bg-red-100 text-red-700 border-red-200",
  [NewsCategory.scheme]: "bg-blue-100 text-blue-700 border-blue-200",
  [NewsCategory.policy]: "bg-purple-100 text-purple-700 border-purple-200",
};

const categoryLabels: Record<NewsCategory, string> = {
  [NewsCategory.price]: "Price",
  [NewsCategory.safety]: "Safety",
  [NewsCategory.scheme]: "Scheme",
  [NewsCategory.policy]: "Policy",
};

function formatDate(ts: bigint): string {
  const ms = Number(ts) / 1_000_000;
  return new Date(ms).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function NewsFeed() {
  const { data: news, isLoading, isError } = useNewsItems();

  return (
    <section
      id="news"
      className="py-16"
      style={{ backgroundColor: "oklch(var(--background-tint))" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground">
            Latest News Feed
          </h2>
          <p className="mt-2 text-muted-foreground text-sm max-w-xl mx-auto">
            Stay updated with the latest developments in LPG pricing, policies,
            and safety.
          </p>
        </div>

        {isLoading && (
          <div
            data-ocid="news.loading_state"
            className="flex justify-center py-16"
          >
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        )}

        {isError && (
          <div
            data-ocid="news.error_state"
            className="text-center py-12 text-destructive"
          >
            <p className="font-medium">
              Failed to load news. Please try again later.
            </p>
          </div>
        )}

        {news && news.length === 0 && (
          <div
            data-ocid="news.empty_state"
            className="text-center py-12 text-muted-foreground"
          >
            <p>No news articles available at the moment.</p>
          </div>
        )}

        {news && news.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {news.slice(0, 8).map((item, i) => (
              <motion.div
                key={item.title}
                data-ocid={`news.item.${i + 1}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-card border border-border rounded-xl overflow-hidden shadow-card hover:shadow-md transition-all hover:-translate-y-1 flex flex-col"
              >
                <div
                  className="h-1.5"
                  style={{ backgroundColor: "oklch(var(--navy))" }}
                />
                <div className="p-5 flex flex-col flex-1">
                  <Badge
                    variant="outline"
                    className={`w-fit text-xs font-semibold mb-3 ${categoryColors[item.category]}`}
                  >
                    {categoryLabels[item.category]}
                  </Badge>
                  <h3 className="font-bold text-sm text-foreground leading-snug mb-2 line-clamp-3">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                    {item.summary}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(item.date)}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
