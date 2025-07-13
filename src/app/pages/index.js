import { Content } from "next/font/google";
import Navbar from "../components/Navbar";
import ContentCard from "../components/ContentCard";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
    </div>
  );
}

export default HomePage;