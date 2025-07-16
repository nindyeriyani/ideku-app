"use client";
import Navbar from "../components/Navbar";
import MockIdeas from "../data/mockIdeas";
import ContentCard from "../components/ContentCard";
import AddButton from "../components/AddButton";

function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen pt-20 pb-20">
      <Navbar />
      {MockIdeas.map((idea) => (
        <ContentCard key={idea.id} idea={idea} />
      ))}
      <AddButton />
    </div>
  );
}

export default HomePage;
