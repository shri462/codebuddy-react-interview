import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://codebuddy.review/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Response data of posts:", data.data);
        setPosts(data.data);
      })
      .catch((error) => {
        console.error("error get posts:", error);
      });
  }, []);

  return (
    <div className="rounded-lg bg-gray-50 p-7 text-gray-900 shadow-lg">
      <h1 className="mb-7 text-4xl font-bold">Posts</h1>
      <Link to="/" className="mb-4 flex items-center text-blue-600 hover:underline">
        <Icon icon="mdi:arrow-left" className="mr-2" />
        Back to Home
      </Link>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {posts?.map((post) => (
          <div
            key={post.id}
            className="flex flex-col justify-between rounded-lg bg-white p-4 shadow-lg"
          >
            <div>
              <img
                src={post.image}
                alt=""
                className="inset-0 h-64 w-full rounded-lg object-cover lg:h-72"
                loading="lazy"
              />
              <p className="mt-2 text-gray-700">{post.writeup}</p>
            </div>

            <div className="mt-2">
              <img
                className="h-16 w-16 rounded-full lg:h-24 lg:w-24"
                src={post.avatar}
                alt=""
                width="384"
                height="512"
              ></img>
              <div>
                <div className="text-sky-500 dark:text-sky-400">
                  {post.firstName} {post.lastName}
                </div>
                <div className="text-slate-700 dark:text-slate-500">Author</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
