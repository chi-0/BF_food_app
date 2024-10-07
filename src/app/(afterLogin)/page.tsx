import { HomeForm } from "./_components/HomeForm";
import { Post } from "./_components/Post";

const Home = () => {
  return (
    <div className="w-full px-32 py-5 flex flex-col gap-y-5">
      <HomeForm />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Home;
