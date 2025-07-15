import Image from "next/image";
import UserIcon from "../assets/foto.png";

function IdeaDetail() {
  return (
    <main className="bg-white text-black w-200 mx-auto flex flex-col items-center p-5">
      <header className="w-full">
        <div className="idea-info flex flex-col mb-5">
          <div className="category border border-black font-extralight text-sm px-2 py-1 mb-2">
            Category
          </div>
          <h1 className="text-4xl font-extrabold w-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            ratione?
          </h1>
        </div>
        <div className="user-info flex items-center justify-between space-x-4 mb-5">
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
        </div>
      </header>
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
      <footer></footer>
    </main>
  );
}

export default IdeaDetail;
