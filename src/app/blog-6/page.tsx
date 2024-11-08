// components/Blog.js
import Image from "next/image";
import blg6 from "../images/blg6.png";
import Header from "../components/Header";
import Bottom from "../components/Blg-cards";
import Search from "../components/Search";
import Catogary from "../components/Catogary";
import Post from "../components/Post";
import Tag from "../components/Tag";
import News from "../components/News";
import Pre from "../components/Pre";
import Comment from "../components/Comment";

const Blog = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
              <Image
                src={blg6}
                alt="Blog 1"
                layout="responsive"
                width={100}
                height={50}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h5 className="text-xl font-bold mb-2">
                Ready To Go Home After The Sunset View?
                </h5>
                <div className="text-gray-500 text-sm flex items-center gap-2 mb-4">
                  <i className="fas fa-user"></i> Travel, Lifestyle |
                  <i className="fas fa-comment"></i> 03 Comments
                </div>
                <p className="text-gray-600 mb-4">
                There is something magical about watching the sun dip below the horizon, painting the sky with vibrant hues of orange and pink. Its a moment of peace and reflection, often leaving you feeling rejuvenated and connected with nature.
                </p>
                <blockquote className="bg-gray-100 p-4 italic border-l-4 border-green-500 text-gray-600 mb-4">
                Before heading home, take a few minutes to sit in stillness and absorb the colors around you. Let the beauty of the sunset calm your mind and inspire a sense of gratitude. This short pause can elevate your mood and create a sense of fulfillment, making the journey home feel even more peaceful.
                </blockquote>
                <p className="text-gray-600 mb-4">As you leave the sunset behind, carry the tranquility with you. A few moments of mindful appreciation can make all the difference in how you transition into your evening.</p>
              </div>
            </div>
            <Bottom />
          </div>

          <div className="lg:w-1/3">
            <Search />
            <Catogary />
            <Post />
            <Tag />
            <News />
          </div>
        </div>
        <Pre/>
      </div>
      <Comment/>
    </div>
  );
};

export default Blog;
