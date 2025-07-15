import Image from "next/image";
import UserIcon from "../assets/foto.png";

function IdeaDetail() {
  return (
    <main className="bg-white text-black w-200 mx-auto flex flex-col items-center p-5">
      {/* Header Section */}
      <header className="w-full">
        {/* idea info*/}
        <section className="idea-info flex flex-col mb-5">
          <div className="category border border-gray-400 text-gray-400 font-extralight text-sm px-3 py-1 mb-5 w-fit text-center">
            Category
          </div>
          <h1 className="text-4xl font-extrabold w-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            ratione?
          </h1>
        </section>
        {/* User Info */}
        <section className="user-info flex items-center justify-between space-x-4 mb-5">
          <div className="flex items-center space-x-4">
            <Image
              src={UserIcon}
              alt="User Profile"
              className="rounded-full h-10 w-10 object-cover"
            />
            <div className="user-details">
              <h2 className="text-black">John Doe</h2>
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
            src={UserIcon}
            alt="Idea Image"
            className="rounded-xl h-80 object-cover"
          />
        </figure>

        <section className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            ut, molestiae fugiat dolorum eum eaque culpa doloremque incidunt
            inventore necessitatibus, labore voluptatem ipsum! Culpa vitae
            cumque consectetur cupiditate repudiandae veritatis ducimus est
            explicabo. Doloremque quae, quia laborum ad explicabo harum ea ipsa
            cum iusto? Dolor ipsum aspernatur quia maiores. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Officiis aliquam nulla
            quibusdam labore unde pariatur dolorem porro praesentium dolore
            commodi eius quos maxime recusandae nemo fuga possimus corrupti
            eaque nam, eum reprehenderit id ex neque saepe dolor. Mollitia iure,
            iste doloremque nihil officiis vero in rem illum et necessitatibus
            sint.
          </p>
        </section>
      </article>

      {/* Footer Section */}
      <footer className="like flex items-center justify-start w-full mt-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-8 h-auto mr-3"
        >
          <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
        </svg>
        <p>1.2K</p>
      </footer>
    </main>
  );
}

export default IdeaDetail;
