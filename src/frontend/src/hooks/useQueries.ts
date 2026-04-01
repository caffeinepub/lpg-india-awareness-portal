import { useQuery } from "@tanstack/react-query";
import type { CityPrice, NewsItem, SafetyTip, Scheme } from "../backend.d";
import { useActor } from "./useActor";

export function useLpgPrices() {
  const { actor, isFetching } = useActor();
  return useQuery<CityPrice[]>({
    queryKey: ["lpg-prices"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllCityPrices();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useNewsItems() {
  const { actor, isFetching } = useActor();
  return useQuery<NewsItem[]>({
    queryKey: ["news-items"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllNewsItems();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSafetyTips() {
  const { actor, isFetching } = useActor();
  return useQuery<SafetyTip[]>({
    queryKey: ["safety-tips"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllSafetyTips();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSchemes() {
  const { actor, isFetching } = useActor();
  return useQuery<Scheme[]>({
    queryKey: ["schemes"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllSchemes();
    },
    enabled: !!actor && !isFetching,
  });
}
