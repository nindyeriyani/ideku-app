'use client';
import Navbar from "../components/Navbar";
import ContentCard from "../components/ContentCard";
import AddButton from "../components/AddButton";

function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen pt-20 pb-20">
      <Navbar />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <AddButton />
    </div>
  );
}

export default HomePage;