import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface CityPrice {
    city: string;
    lastUpdated: string;
    priceINR: number;
    priceChange: PriceChange;
}
export interface PriceChange {
    currentPrice: number;
    difference: number;
    previousPrice: number;
}
export interface SafetyTip {
    title: string;
    icon: string;
    description: string;
}
export interface Scheme {
    link: string;
    name: string;
    description: string;
    eligibility: string;
    benefits: string;
}
export interface NewsItem {
    title: string;
    date: Time;
    summary: string;
    category: NewsCategory;
}
export enum NewsCategory {
    safety = "safety",
    scheme = "scheme",
    price = "price",
    policy = "policy"
}
export interface backendInterface {
    getAllCityPrices(): Promise<Array<CityPrice>>;
    getAllNewsItems(): Promise<Array<NewsItem>>;
    getAllSafetyTips(): Promise<Array<SafetyTip>>;
    getAllSchemes(): Promise<Array<Scheme>>;
}
