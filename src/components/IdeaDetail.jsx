import { useState } from "react";
import Image from "next/image";

function IdeaDetail({ idea }) {
  const [likes, setLikes] = useState(idea.likes);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  };

  return (
    <main className="bg-white text-black w-200 mx-auto flex flex-col items-center p-5">
      {/* Header Section */}
      <header className="w-full">
        {/* idea info*/}
        <section className="idea-info flex flex-col mb-5">
          <div className="category border border-gray-400 text-gray-400 font-extralight text-sm px-3 py-1 mb-5 w-fit text-center">
            {idea.category}
          </div>
          <h1 className="text-4xl font-extrabold w-200">{idea.title}</h1>
        </section>
        {/* User Info */}
        <section className="user-info flex items-center justify-between space-x-4 mb-5">
          <div className="flex items-center space-x-4">
            <Image
              src={idea.image}
              alt="User Profile"
              width={40}
              height={40}
              className="rounded-full h-10 w-10 object-cover"
            />
            <div className="user-details">
              <h2 className="text-black">{idea.author}</h2>
            </div>
          </div>
          <div className="subs-btn">
            <button className="bg-[#15202b] text-white px-4 py-2 rounded-xl mt-2 cursor-pointer hover:bg-[#15202bd1] transition-colors">
              Subscribe
            </button>
          </div>
        </section>
      </header>

      {/* Content Section */}
      <article>
        <figure className="w-full mb-5">
          <Image
            src={idea.previewImage}
            width={800}
            height={450}
            alt="Idea Image"
            className="rounded-xl h-80 object-cover"
          />
        </figure>

        <section className="content">
          {idea.description
            .split("\n")
            .filter((para) => para.trim() !== "")
            .map((para, index) => (
              <p key={index} className="mb-4 text-justify text-gray-800">
                {para.trim()}
              </p>
            ))}
        </section>
      </article>

      {/* Footer Section */}
      <footer
        className="like flex items-center justify-start w-full mt-6 cursor-pointer"
        onClick={handleLike}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-8 h-8 mr-3 transition-all duration-300 ${
            liked ? "fill-red-500" : "fill-gray-300 hover:fill-red-300"
          }`}
          viewBox="0 0 512 512"
          strokeWidth="2"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
        </svg>
        <p
          className={`font-medium ${liked ? "text-red-500" : "text-gray-800"}`}
        >
          {likes}
        </p>
      </footer>
    </main>
  );
}

export default IdeaDetail;
