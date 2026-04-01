import ComplaintPortal from "./components/ComplaintPortal";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import KeyIssues from "./components/KeyIssues";
import NewsFeed from "./components/NewsFeed";
import PriceTracker from "./components/PriceTracker";
import SafetyGuidelines from "./components/SafetyGuidelines";
import Schemes from "./components/Schemes";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <PriceTracker />
        <KeyIssues />
        <NewsFeed />
        <Schemes />
        <SafetyGuidelines />
        <ComplaintPortal />
      </main>
      <Footer />
    </div>
  );
}
