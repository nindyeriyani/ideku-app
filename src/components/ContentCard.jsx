import Link from "next/link";
import Image from "next/image";
import Pict from "../assets/foto.png";

function ContentCard({ idea }) {
  return (
    <main className="bg-white shadow-md rounded-lg mt-8 text-black w-250 mx-auto p-5">
      <Link href={`/content/${idea.id}`} className="flex items-center cursor-pointer">
        <section className="left-section">
          <header>
            {/* user info */}
            <div className="user-info flex items-center space-x-4">
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

            {/* content info */}
            <div className="content-info flex justify-between items-center my-5">
              <h2 className="text-2xl font-bold w-120">{idea.title}</h2>
              <div className="category border border-black font-extralight text-sm px-2 py-1">
                {idea.category}
              </div>
            </div>
          </header>

          <section className="content mb-5">
            <p className="text-gray-700 text-base"> {idea.description.slice(0, 150)}...</p>
          </section>

          <footer className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-8 h-auto mr-3"
            >
              <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
            </svg>
            <p>{idea.likes}</p>
          </footer>
        </section>
        <aside className="right-section w-48 h-48 flex-shrink-0 rounded-xl flex items-center justify-center ml-10">
          <Image
            src={Pict}
            alt="Foto"
            className="object-cover w-full h-full rounded-lg"
          />
        </aside>
      </Link>
    </main>
  );
}

export default ContentCard;
