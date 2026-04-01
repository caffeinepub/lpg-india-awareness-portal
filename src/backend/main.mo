import Map "mo:core/Map";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Text "mo:core/Text";
import Time "mo:core/Time";

actor {
  type PriceChange = {
    previousPrice : Float;
    currentPrice : Float;
    difference : Float;
  };

  type CityPrice = {
    city : Text;
    priceINR : Float;
    lastUpdated : Text;
    priceChange : PriceChange;
  };

  module CityPrice {
    public func compare(cityPrice1 : CityPrice, cityPrice2 : CityPrice) : Order.Order {
      Text.compare(cityPrice1.city, cityPrice2.city);
    };
  };

  type NewsCategory = {
    #policy;
    #price;
    #safety;
    #scheme;
  };

  type NewsItem = {
    title : Text;
    summary : Text;
    date : Time.Time;
    category : NewsCategory;
  };

  module NewsItem {
    public func compareByDate(newsItem1 : NewsItem, newsItem2 : NewsItem) : Order.Order {
      Int.compare(newsItem1.date, newsItem2.date);
    };
  };

  type Scheme = {
    name : Text;
    description : Text;
    eligibility : Text;
    benefits : Text;
    link : Text;
  };

  module Scheme {
    public func compare(scheme1 : Scheme, scheme2 : Scheme) : Order.Order {
      Text.compare(scheme1.name, scheme2.name);
    };
  };

  type SafetyTip = {
    title : Text;
    description : Text;
    icon : Text;
  };

  module SafetyTip {
    public func compare(safetyTip1 : SafetyTip, safetyTip2 : SafetyTip) : Order.Order {
      Text.compare(safetyTip1.title, safetyTip2.title);
    };
  };

  let cityPrices = Map.empty<Text, CityPrice>();

  let newsItems = Map.empty<Text, NewsItem>();

  let schemes = Map.empty<Text, Scheme>();

  let safetyTips = Map.empty<Text, SafetyTip>();

  public query ({ caller }) func getAllCityPrices() : async [CityPrice] {
    cityPrices.values().toArray();
  };

  public query ({ caller }) func getAllNewsItems() : async [NewsItem] {
    newsItems.values().toArray().sort(NewsItem.compareByDate);
  };

  public query ({ caller }) func getAllSchemes() : async [Scheme] {
    schemes.values().toArray().sort();
  };

  public query ({ caller }) func getAllSafetyTips() : async [SafetyTip] {
    safetyTips.values().toArray().sort();
  };
};
