import React from "react";
import Image from "next/image";
import post1 from "../images/post1.png";
import post4 from "../images/post4.png";
import post2 from "../images/post2.png";
import post3 from "../images/post3.png";

function Post() {
  return (
    <>
      <div className="mb-8 bg-background p-10">
        <h3 className="text-xl font-bold border-b pb-2 mb-4">Recent Posts</h3>
        <div className="flex items-center space-x-4 mb-4">
          <Image
            src={post1}
            alt="Post 1"
            width={50}
            height={50}
            className="rounded"
          />
          <p className="text-gray-600">From life was you fish...</p>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <Image
            src={post2}
            alt="Post 1"
            width={50}
            height={50}
            className="rounded"
          />
          <p className="text-gray-600">Astroids Telescope</p>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <Image
            src={post3}
            alt="Post 1"
            width={50}
            height={50}
            className="rounded"
          />
          <p className="text-gray-600">Astronomy Or Astrology</p>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <Image
            src={post4}
            alt="Post 1"
            width={50}
            height={50}
            className="rounded"
          />
          <p className="text-gray-600">The Amazing Hubble</p>
        </div>
      </div>
    </>
  );
}

export default Post;
