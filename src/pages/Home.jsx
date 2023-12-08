import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="rounded-lg bg-gray-50 p-7 text-gray-900 shadow-lg">
      <h1 className="mb-4 flex items-center text-4xl font-bold">
        <Icon icon="mdi:home" className="mr-2" />
        Home
      </h1>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Link
          to="/set-one"
          className="rounded-md border-none bg-blue-500 p-4 text-center text-white"
        >
          Set 1 Solution
        </Link>
        <Link
          to="/set-two"
          className="rounded-md border-none bg-blue-500 p-4 text-center text-white"
        >
          Set 2 Solution
        </Link>
        <Link
          to="/set-three"
          className="rounded-md border-none bg-blue-500 p-4 text-center text-white"
        >
          Set 3 Solution
        </Link>
      </div>
    </div>
  );
};

export default Home;
