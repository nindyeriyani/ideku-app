"use client";
import { useParams, useRouter } from "next/navigation";
import ArrowBackButton from "@/components/ArrowBackButton";
import IdeaDetail from "@/components/IdeaDetail";
import MockIdeas from "@/data/mockIdeas";

function ContentPage() {
  const { id } = useParams();
  const router = useRouter();

  const idea = MockIdeas.find((item) => item.id === Number(id));

  if (!idea) {
    return <div className="p-10 text-center text-red-500">Idea not found.</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen pt-10 pb-20">
      <div onClick={() => router.push("/")}>
        <ArrowBackButton />
      </div>
      <IdeaDetail idea={idea} />
    </div>
  );
}

export default ContentPage;
