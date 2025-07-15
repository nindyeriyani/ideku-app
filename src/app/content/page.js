"use client";
import { useRouter } from "next/navigation";
import ArrowBackButton from "@/components/ArrowBackButton";
import IdeaDetail from "@/components/IdeaDetail";

function ContentPage() {
  const router = useRouter();
  return (
    <div className="bg-gray-100 min-h-screen pt-10 pb-20">
      <div onClick={() => router.push("/")}>
        <ArrowBackButton />
      </div>
      <IdeaDetail />
    </div>
  );
}

export default ContentPage;
