import React from "react";
import Image, { StaticImageData } from "next/image";

interface Post {
  image: string | StaticImageData;
  name: string;
  description: string;
  url: string;
}

interface CardsProps {
  post: Post;
}

function Cards({ post }: CardsProps) {
  return (
    <div className="py-10 flex flex-grow-1">
      <div className="max-w-sm  rounded overflow-hidden rounded-lg shadow-lg mt-5 bg-gray-100 hover:-translate-y-2 transition duration-200 hover:shadow-2xl">
        <Image
          className="w-full p-3 border-solid rounded h-48 object-cover "
          src={post.image}
          alt={post.name}
        />
        <div className="px-6 py-4">
          <div className="text-gray-500 text-sm flex items-center gap-2 mb-4">
            <i className="fas fa-user"></i> Travel, Lifestyle, Features |
            <i className="fas fa-comment"></i> 03 Comments
          </div>
          <div className="font-bold text-2xl mb-2 ">{post.name}</div>
          <p className="text-gray-800 text-base">{post.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <a
            href={post.url}
            className="text-color hover:text-hover font-semibold"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
