"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import MockIdeas from "../data/mockIdeas";
import ContentCard from "../components/ContentCard";
import AddButton from "../components/AddButton";

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredIdeas =
    selectedCategory === "All"
      ? MockIdeas
      : MockIdeas.filter((idea) => idea.category === selectedCategory);

  return (
    <div className="bg-gray-100 min-h-screen pt-20 pb-20">
      <Navbar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {filteredIdeas.map((idea) => (
        <ContentCard key={idea.id} idea={idea} />
      ))}
      <AddButton />
    </div>
  );
}

export default HomePage;
